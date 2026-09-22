# Homepage performance investigation — 22 September 2026

Changes are implemented and verified locally in a production build. They have **not been deployed** to beta.leonidazpharma.com. No new production PageSpeed result is claimed.

## Measured results

| Metric | User's production PSI | Local production baseline | Final local production |
|---|---:|---:|---:|
| Network transfer | 34,770 KiB | 35,641,648 bytes (34,806.3 KiB) | **379,549 bytes (370.7 KiB)** |
| FCP | 1.1 s | 1.135 s | **1.495 s** |
| LCP | 23.6 s | 16.172 s | **3.514 s** |
| Speed Index | 8.3 s | 5.527 s | **4.409 s** |
| CLS | 0 | 0 | **0** |
| TBT | 10 ms | 227.5 ms | **82.6 ms** |

The comparable local transfer reduction is **98.9%**. After scrolling and exercising all six marquee products, the separate DPR-3 browser session transferred 707,954 bytes in total. FCP did not improve; LCP and Speed Index remain opportunities. LCP has not reached the 2.5-second good threshold. Local results cannot establish the deployed site's latency or field Core Web Vitals.

Lighthouse used the same default mobile simulation for before/after: 412 × 823, DPR 1.75, 150 ms RTT, 1,638.4 Kbps throughput, 4× CPU slowdown, fresh browser storage. Reports include the exact configuration and Lighthouse version. The separate browser regression used 390 × 844 at DPR 3 and no throttling: 392,167 bytes before scrolling. Its 392 ms observed LCP is **not** the throttled performance result.

## What caused the payload

The homepage rendered all **70 products twice** in its CSS marquee: 140 eager `<img>` elements with 70 unique URLs. Those originals are all 1000 × 1000, displayed in 144/176/208 px cards. Their combined file size is **34,502,684 bytes**, and their measured baseline transfer is **34,522,564 bytes**, including response overhead. Duplicate elements reuse URLs; the explanation is 70 originals, not 140 separate file transfers. They are below the fold and none is LCP.

| Largest original product | Original bytes | Downloaded bytes | Dimensions | Initial / position / LCP |
|---|---:|---:|---|---|
| TOLZO P.webp | 715,402 | 715,686 | 1000 × 1000 | Yes / below / no |
| ALTIZ SYP.webp | 669,792 | 670,076 | 1000 × 1000 | Yes / below / no |
| NUTRACT.webp | 661,800 | 662,084 | 1000 × 1000 | Yes / below / no |
| ALTIZ M SYP.webp | 632,464 | 632,748 | 1000 × 1000 | Yes / below / no |
| LEO PRO D.webp | 631,122 | 631,406 | 1000 × 1000 | Yes / below / no |
| LUNGMATE PLUS.webp | 622,058 | 622,342 | 1000 × 1000 | Yes / below / no |
| GSM TOTAL.webp | 621,614 | 621,898 | 1000 × 1000 | Yes / below / no |
| LEVA SYRUP.webp | 607,324 | 607,608 | 1000 × 1000 | Yes / below / no |
| LEO PRO.webp | 607,008 | 607,292 | 1000 × 1000 | Yes / below / no |
| PROFINAL LINIMENT.webp | 603,446 | 603,730 | 1000 × 1000 | Yes / below / no |

The complete **98-resource** baseline, including all 70 images, every font, script, stylesheet, document and framework request, is in [before-resource-inventory.csv](before-resource-inventory.csv) and [before-resource-inventory.json](before-resource-inventory.json). `originalFileBytes` identifies available source files; `decodedResourceBytes` records the uncompressed response for historical build resources whose original file is no longer present. Unknown originals are null, not estimated. Dimensions and fold/LCP classification are not applicable to fonts, scripts, CSS, and documents.

## Investigation by area

| Area | Before | Change / result |
|---|---|---|
| Hero | One CSS background, `/images/Hero/hero.webp`; 92,168-byte original; 92,451 transferred; 1672 × 941; initially requested, above fold | Next Image with `fill`, responsive `sizes="100vw"`, and preload. Same crop, scaling, overlays and text. Lighthouse selected a 750px derivative, 16,170 transfer bytes. DPR-3 browser selected 1200px. |
| Hero carousel | None in source or inspected live homepage | No unnecessary carousel or slide preloads introduced. |
| Actual mobile LCP | Hero tagline: “KERALA'S TRUSTED PHARMACEUTICAL NETWORK SINCE 2006” | Identified by Lighthouse and browser PerformanceObserver, before and after. It is text, not the background. Its Space Mono font remains preloaded. |
| About photo | `/images/pharmacy.webp`; 204,760-byte original; 205,044 transferred; 1536 × 1024; eager, below fold | Responsive, lazy Next Image behind viewport observation; existing 3:4 reserved frame and Framer Motion effects retained. |
| CTA background | Unsplash laboratory photo; 2000px CDN derivative, 2000 × 1333; 266,820 response-body bytes / 267,368 transfer bytes; initially loaded despite being far below fold | Same photo stored as `/images/partnership-lab.webp`, responsive and deferred. The remote camera/master file size is unavailable; the measured CDN response is not represented as that master. |
| Other backgrounds | CSS gradients and patterns | No image network payload. Preserved. |
| Products | Entire 70-item catalogue eagerly loaded, duplicated for continuous scrolling | Six featured products selected on the server. Six duplicated cards preserve the seamless loop; actual image URLs become available progressively as cards approach the viewport. Zero initial product image requests. Full catalogue remains on `/products`. |
| Image components | Raw eager images and CSS URLs | Next Image for every homepage raster image, including the navbar logo. Responsive sources, default WebP negotiation, reserved fill frames or width/height. No oversized-original-to-WebP-only workaround. |
| Logo | 866 × 288; original 34,432 bytes; transfer 34,714; above fold | Explicit dimensions and responsive sizes; Lighthouse transfer 3,270 bytes. |
| Video | No video elements, video sources, or video downloads | No video optimization needed. |
| APIs | No business API, product fetch, or company-data request; data comes from a local module | Server-rendered homepage selects six products and ten distributor entries. Next build statically prerenders `/`. No artificial API/cache layer added. No independent API requests exist to parallelize. |
| Framework fetches | 4,126 bytes of Next route-prefetch requests in baseline | Disabled speculative navigation/product prefetch on homepage and navbar links; no Fetch requests in final initial Lighthouse capture. |
| Fonts | Eight self-hosted WOFF2 requests, 240,142 transferred bytes; all seven families globally preloaded | Preserve families and styling, preload only hero families. Initial measured font traffic: 85,262 bytes. Removed redundant Google Fonts preconnects because next/font self-hosts fonts. |
| Third-party scripts | None observed in source or baseline network | No analytics/script removal. Original third-party image origin removed from the homepage request path. |
| JavaScript / Server Components | Whole page was a Client Component; original JS transfer 217,502 bytes | Page is now a Server Component; a tiny HomeReveal client island retains reveal effects. Interactive navbar, buttons and animated About section remain client components. Final JS is 213,958 bytes; this was not the primary optimization. |

`ViewportImage` uses IntersectionObserver with a 200px margin, then native lazy loading. The parent reserves the image's geometry. This prevents the browser's generous native lazy-load distance from bringing all offscreen media into the initial download. It observes individual moving marquee cards, so horizontal clipping also defers unseen cards. A noscript image fallback is included.

## Verification and artifacts

- Final `npm run build` passed compilation, Next's TypeScript phase, and static generation for all routes. This repository uses JavaScript and jsconfig, not a separately configured strict TypeScript application.
- `git diff --check` passed.
- Production browser assertions: no initial product/About/CTA requests; exactly six unique product image requests after advancing through the existing marquee animation; no broken loaded images; no browser page errors; no horizontal document overflow at 320, 390, 768 and 1440 px; mobile menu opens and closes.
- Native image optimization endpoints returned valid image bodies; original and downloaded dimensions are in [after-resource-inventory.json](after-resource-inventory.json). Full request ledgers are in [final-after/initial.json](final-after/initial.json) and [final-after/scrolled.json](final-after/scrolled.json).
- Hero mobile and desktop screenshots were visually inspected. [Mobile](final-after/mobile.png), [desktop](final-after/desktop.png), [full mobile page](final-after/full-mobile.png).
- Raw reports: [baseline Lighthouse](local-before-lighthouse.json), [final Lighthouse](final-lighthouse.json). Intermediate reports are retained for transparency.
- Reproducible browser assertions: [audit-homepage.mjs](../scripts/audit-homepage.mjs). Audit-only Playwright/Lighthouse dependencies are isolated in ignored `.audit-tools`; they are not application dependencies.

## Remaining limits and next deployment check

The live DOM confirms 142 image elements (140 products, logo and About photo) and both CSS backgrounds. However, live network capture stalled and a subsequent navigation returned `ERR_HTTP2_PROTOCOL_ERROR`; its incomplete 970,844-byte capture is **not** the production payload. The supplied PSI result and reproducible local baseline are the valid before measurements.

Google PageSpeed API was requested before and after the changes; both returned HTTP 429 `RESOURCE_EXHAUSTED`, daily quota zero. Raw responses: [first attempt](psi-before.json), [retest attempt](psi-after-attempt.json). The code is not deployed, so a successful PSI request at this point would still measure the old version. No deployment credentials or deployment workflow were available in this checkout.

After deploying, rerun mobile PSI and verify the network ledger contains only the hero/logo as initial image downloads and no original `/images/products/` files. Confirm responsive `/_next/image` responses are cached by the deployed server. Repeat cold and warm measurements; localhost does not include origin/CDN latency or production image-transform cost.

Remaining measured costs: roughly 214 KB of framework/animation JavaScript, 85 KB of initial fonts, and 26 KB favicon. The existing About animation library remains in the initial client bundle; deferring its hydration without changing the server-rendered layout is a possible separate improvement. Its animations were preserved, not removed to inflate the score. Font/text rendering and JavaScript work still leave throttled LCP at 3.51 s and Speed Index at 4.41 s. No claim is made that the production LCP target is already achieved.
