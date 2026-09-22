import fs from 'node:fs/promises';
import sharp from 'sharp';
import { chromium } from '../.audit-tools/node_modules/playwright/index.mjs';

const [url = 'http://localhost:3100', label = 'before'] = process.argv.slice(2);
const output = `performance/${label}`;
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3, isMobile: true, hasTouch: true });
const page = await context.newPage();
const cdp = await context.newCDPSession(page);
await cdp.send('Network.enable');
await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
const requests = new Map();
const errors = [];
const imageMetadata = new Map();
const imageReads = [];
page.on('response', response => {
  if (response.request().resourceType() === 'image') {
    imageReads.push(response.body().then(async body => {
      const m = await sharp(body).metadata();
      imageMetadata.set(response.url(), { downloadedImageWidth: m.width, downloadedImageHeight: m.height, imageBodyBytes: body.length });
    }).catch(() => {}));
  }
});
page.on('pageerror', e => errors.push(e.message));
cdp.on('Network.responseReceived', ({ requestId, type, response }) => requests.set(requestId, { url: response.url, type, status: response.status, mimeType: response.mimeType, responseHeadersBytes: response.encodedDataLength, originalContentLength: response.headers['Content-Length'] || response.headers['content-length'] || null }));
cdp.on('Network.loadingFinished', ({ requestId, encodedDataLength }) => { if (requests.has(requestId)) requests.get(requestId).downloadedBytes = encodedDataLength; });
await page.addInitScript(() => {
  window.auditLcp = [];
  new PerformanceObserver(list => list.getEntries().forEach(e => window.auditLcp.push({ startTime: e.startTime, size: e.size, url: e.url, element: e.element?.outerHTML.slice(0, 1000) }))).observe({ type: 'largest-contentful-paint', buffered: true });
});
await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForLoadState('networkidle', {timeout:60000}).catch(() => errors.push('Network did not become idle within 60 seconds')); 
await page.screenshot({ path: `${output}/mobile.png` });
const dom = await page.evaluate(() => ({
  lcp: window.auditLcp, paints: performance.getEntriesByType('paint').map(e => ({name:e.name,startTime:e.startTime})),
  overflow: document.documentElement.scrollWidth > innerWidth,
  images: [...document.images].map(i => { const r=i.getBoundingClientRect(); return {url:i.currentSrc || i.src,alt:i.alt,width:i.naturalWidth,height:i.naturalHeight,renderedWidth:r.width,renderedHeight:r.height,top:r.top,aboveFold:r.top<innerHeight && r.bottom>0,loading:i.loading,complete:i.complete,broken:i.complete && !i.naturalWidth}; }),
  backgrounds: [...document.querySelectorAll('*')].flatMap(e => { const b=getComputedStyle(e).backgroundImage;const r=e.getBoundingClientRect(); return b.includes('url(')?[{background:b,top:r.top,aboveFold:r.top<innerHeight&&r.bottom>0}]:[]; }),
  videos: [...document.querySelectorAll('video')].map(v=>({src:v.currentSrc,poster:v.poster,preload:v.preload}))
}));
const initial = [...requests.values()];
await Promise.all(imageReads);
for (const row of initial) {
  Object.assign(row, imageMetadata.get(row.url));
  const u = new URL(row.url); const path = u.pathname === '/_next/image' ? u.searchParams.get('url') : decodeURIComponent(u.pathname);
  if (path?.startsWith('/images/')) {
    try { const f=`public${path}`; const stat=await fs.stat(f);const m=await sharp(f).metadata(); Object.assign(row,{originalFileBytes:stat.size,originalWidth:m.width,originalHeight:m.height}); } catch {}
  }
}
await fs.writeFile(`${output}/initial.json`, JSON.stringify({ url, measuredAt:new Date().toISOString(), totalDownloadedBytes:initial.reduce((s,r)=>s+(r.downloadedBytes||0),0), errors, ...dom, resources:initial.sort((a,b)=>(b.downloadedBytes||0)-(a.downloadedBytes||0)) },null,2));
console.log(JSON.stringify({label,totalDownloadedBytes:initial.reduce((s,r)=>s+(r.downloadedBytes||0),0),requests:initial.length,lcp:dom.lcp.at(-1),errors}));
for (let y=0;y<await page.evaluate(()=>document.body.scrollHeight);y+=650) { await page.evaluate(y=>scrollTo(0,y),y); await page.waitForTimeout(160); }
await page.waitForTimeout(2500);
await page.locator('.animate-marquee').evaluate(el => el.parentElement.scrollIntoView({behavior:'instant',block:'center'}));
// Seek the existing animation to check all six featured products without
// changing production behavior or waiting for the full 130-second loop.
for (const fraction of [0, 0.25, 0.5, 0.75]) {
  await page.locator('.animate-marquee').evaluate((el, fraction) => {
    const animation = el.getAnimations()[0];
    animation.pause();
    animation.currentTime = 130000 * fraction;
  }, fraction);
  await page.waitForTimeout(500);
}
await page.waitForLoadState('networkidle');
await Promise.all(imageReads);
for (const row of requests.values()) Object.assign(row, imageMetadata.get(row.url));
await page.screenshot({path:`${output}/full-mobile.png`,fullPage:true});
const scrolled = await page.evaluate(()=>({brokenImages:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src),overflow:document.documentElement.scrollWidth>innerWidth}));
if (label.includes('after') || label.includes('final')) {
  const initialImages = initial.filter(r => r.type === 'Image');
  if (initialImages.some(r => /products|pharmacy|partnership-lab/.test(r.url))) throw new Error('Below-fold media loaded initially');
  const products = new Set([...requests.values()].filter(r => r.type === 'Image' && r.url.includes('products')).map(r => new URL(r.url).searchParams.get('url')));
  if (products.size !== 6) throw new Error(`Expected six featured products, found ${products.size}`);
  if (scrolled.brokenImages.length || scrolled.overflow || errors.length) throw new Error('Mobile verification failed');
}
await fs.writeFile(`${output}/scrolled.json`,JSON.stringify({...scrolled,errors,resources:[...requests.values()]},null,2));
await page.getByRole('button', {name:'Toggle menu'}).click();
if (!await page.locator('div.fixed.inset-0').getByRole('link', {name:'Products',exact:true}).isVisible()) throw new Error('Mobile menu did not open');
await page.getByRole('button', {name:'Toggle menu'}).click();
for (const width of [320, 768]) {
  await page.setViewportSize({width,height:844});
  if (await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error(`Overflow at ${width}px`);
}
await page.setViewportSize({width:1440,height:900});
await page.goto(url,{waitUntil:'networkidle',timeout:180000});
await page.screenshot({path:`${output}/desktop.png`});
if (await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth)) throw new Error('Desktop overflow');
await browser.close();
