# CRITICAL DESIGN PRESERVATION RULE

This migration must produce a pixel-perfect copy of the live site at
https://argentinaresidence.com. Every component must look identical. Do NOT:
- Change any colors, fonts, font weights, spacing, or padding
- Change any animations or transitions
- Simplify any copy or headlines
- Change the tone of any text
- Remove any sections from any page
- Reorder any sections

The ONLY things that change are:
- React Router → Astro file-based routing
- react-helmet-async → Astro native <head>
- Hardcoded JSX/TS-array content (blogData.ts, faqData.ts, news.ts) → Markdown files
- Client-side rendering → Static HTML
- The dual-layer static-shell + hidden #ssr-content prerender workaround → removed (Astro replaces it)

Noted exception: the homepage title and meta description were deliberately
changed per explicit approval. This is a documented exception, not a
violation of the pixel-perfect rule.

If in doubt, copy the existing component exactly and wrap it as a React island
with client:load.

## Content Publishing Rules

Every new article MUST pass the 5-location keyword check before committing:

1. TITLE: starts with keyword, format "[Keyword] - [Angle]"
   No em dashes. No site name in this field.
2. META TITLE: same as title + " | Argentina Residence"
3. META DESCRIPTION: keyword in first 5-7 words, 150-160 chars as a
   target (not a hard requirement, per the homepage exception),
   one specific number/date/dollar amount, no em dashes
4. URL/SLUG: reflects the keyword (never change existing slugs
   without explicit approval)
5. FIRST SENTENCE: keyword in first 10 words, specific,
   no em dashes, not "This article will..." or "In this guide..."

### Cannibalization Check (Required Before Every New Article)

Before creating any new article, check for overlap with existing articles
(currently 6 in blogData.ts, served at /research/:slug) on:
- Same primary keyword or close variant
- Same target audience segment
- Same main topic/argument

If overlap score is high, either differentiate the angle clearly or fold
the content into the existing article. Never publish a new URL targeting a
keyword already owned by an existing page.

After publishing, update docs/knowledge/cannibalization-guard.md with the
new slug and its owned topics.

### Red Flags to Catch Automatically

- Description copy-pasted from a different article (wrong topic)
- First sentence starting with context not keyword
- Title burying keyword at the end
- Description under 140 or over 165 characters
- Em dashes in any SEO field
- First sentence starting with "This article will..."
- vscode-file:// URIs in any link

## Known Issues Being Preserved

- The "Work Email" field validation is a generic email regex, not a business-email restriction. This is intentional for the current migration pass. Do not "fix" it without explicit instruction.
- The Eligibility Checker's Formcarry submission does not check response.ok on the fetch call. It only catches network-level failures, so a non-throwing error response from Formcarry still shows the user a success/completion screen. This is a pre-existing behavior on the live site, preserved intentionally during migration, not a bug introduced here.
- ConsultationCTA's "Prefer to Reach Out Directly?" block is missing a WhatsApp contact option — the user will provide a number to add later. See the TODO comment in ConsultationCTA.tsx.
- Pre-existing launch-window inconsistency: `/guides/argentina-golden-visa-program` (GoldenVisaProgramContent) states expected launch Q2 2026. `/research/argentina-citizenship-by-investment-launch-date` states a targeted Q4 2026 entrance and hedges that the cancelled tender may challenge that window. Resolve in a future editorial pass. Do not treat either quarter as a due-diligence deadline.

### Placeholder images (Investor Guides)

Replace these temporary heroes when a real photo is provided. Do not treat the current files as final art.

- `/guides/argentina-citizenship-investment-due-diligence` uses `src/assets/hero-buenos-aires-night.webp` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-business-sale` uses `src/assets/hero-buenos-aires-night.webp` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-cbi-vs-caribbean-citizenship` uses `src/assets/hero-buenos-aires-night.webp` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-greece-golden-visa` uses `src/assets/hero-buenos-aires-night.webp` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-turkey` uses `src/assets/hero-buenos-aires-night.webp` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-paraguay` uses `src/assets/hero-buenos-aires-night.webp` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-panama` uses `src/assets/hero-buenos-aires-night.webp` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.

## IMAGE OPTIMIZATION STANDARD

All new raster images added to this website should use **WebP by default**.

Whenever a JPG, JPEG, or PNG image is provided for website use:

1. Convert the image to WebP before using it on a production page.
2. Use approximately **82–85 WebP quality** by default.
3. Preserve the original aspect ratio.
4. Never upscale an image.
5. Resize unnecessarily large source images to an appropriate web resolution.
6. Preserve transparency where required.
7. Maintain strong visual quality.
8. Use a concise, descriptive, SEO-friendly filename.
9. Use concise and accurate alt text.
10. Do not keyword-stuff filenames or alt text.
11. Maintain responsive image behavior.
12. Do not use lazy loading.
13. Do not add `loading="lazy"`.
14. Do not introduce JavaScript or framework-based lazy loading.
15. Optimize file size without creating noticeable visual degradation.
16. Reference the WebP version from the website rather than the original JPG, JPEG, or PNG.
17. Keep SVG assets as SVG when SVG is the appropriate format.
18. Do not change the surrounding page structure when adding or optimizing an image.

Apply these standards to all future:

* Pages
* Articles
* Guides
* Landing pages
* Research pages
* Components
* Hero images
* CTA images
* Comparison pages
* Blog content
* Other website content

WebP should be the default raster image format for this website unless there is a specific technical reason another format is more appropriate.
