import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import { chromium } from '../.audit-tools/node_modules/playwright/index.mjs';

// Uses the same local Playwright installation as audit-homepage.mjs.
const baseURL = process.argv[2] || 'http://localhost:3100';
const output = 'performance/page-images';
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
const results = [];
try {
  for (const width of [390, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
    for (const route of ['/', '/about', '/products']) {
      const page = await context.newPage();
      const errors = [];
      const reads = [];
      const images = [];
      page.on('pageerror', error => errors.push(error.message));
      page.on('response', response => {
        if (response.request().resourceType() !== 'image') return;
        reads.push(response.body().then(body => images.push({
          url: response.url(), status: response.status(), bytes: body.length,
        })).catch(error => errors.push(error.message)));
      });
      await page.goto(`${baseURL}${route}`, { waitUntil: 'networkidle' });
      await Promise.all(reads);
      const initialImages = images.length;
      const initialBytes = images.reduce((sum, image) => sum + image.bytes, 0);
      if (route === '/products') assert(initialImages < 71, 'The whole catalogue should not load immediately');
      // Pause the continuous marquee so moving cards can be inspected reliably.
      await page.locator('.animate-marquee').evaluateAll(elements => elements.forEach(el =>
        el.getAnimations().forEach(animation => animation.pause())));
      // Check every image after bringing it into view, including the last row.
      for (const img of await page.locator('img').all()) {
        await img.evaluate(el => el.scrollIntoView({ block: 'center', inline: 'center', behavior: 'instant' }));
        await page.waitForFunction(el => el.complete && el.naturalWidth > 0, await img.elementHandle());
      }
      if (route === '/products') {
        await page.getByRole('button', { name: 'ADOL FORTE' }).click();
        await page.locator('.fixed.inset-0 img').evaluate(el => el.decode());
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('.fixed.inset-0 img').count(), 0);
      }
      await Promise.all(reads);
      const broken = await page.locator('img').evaluateAll(elements => elements
        .filter(el => !el.complete || el.naturalWidth === 0).map(el => el.src));
      assert.deepEqual(broken, [], 'Every image must decode');
      assert.deepEqual(errors, [], 'No runtime or image response errors');
      assert(images.every(image => image.status === 200), 'Every image response must succeed');
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.evaluate(() => scrollTo(0, 0));
      await page.screenshot({ path: `${output}/${width}-${route.slice(1) || 'home'}.png`, fullPage: true });
      const result = { width, route, initialImages, initialBytes, totalImages: images.length, broken, errors };
      results.push(result);
      console.log(JSON.stringify(result));
      await page.close();
    }
    await context.close();
  }
} finally {
  await fs.writeFile(`${output}/results.json`, JSON.stringify(results, null, 2));
  await browser.close();
}
