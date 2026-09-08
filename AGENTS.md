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

Every new article added to `src/content/articles/`, `src/content/guides/`,
`src/content/industryNews/`, or `src/content/faqs/` MUST pass the 5-location
keyword check before being committed.

### The 5-Location Keyword Rule

PRIMARY TARGET KEYWORD must appear in ALL FIVE locations:

1. TITLE

   * Must start with the keyword
   * Use format: "[Keyword] - [Angle]"
   * No em dashes
   * Do not include the site name

2. META TITLE

   * Use the same title as above
   * Append: " | Argentina Residence"

3. META DESCRIPTION

   * Primary keyword must appear within the first 5-7 words
   * Target length: 150-160 characters (not a hard requirement, per the
     documented homepage exception)
   * Include at least one specific number, date, or dollar amount when
     factually appropriate
   * No em dashes

4. URL / SLUG

   * Slug should clearly reflect the primary target keyword
   * NEVER change an existing slug without explicit human approval
   * For existing articles, preserve the current slug unless specifically
     instructed otherwise

5. FIRST SENTENCE OF INTRO / OPENING

   * Primary keyword must appear within the first 10 words
   * Sentence must be specific and informative
   * No em dashes
   * Do not begin with generic framing

### Workflow for Every New Article

STEP 1: Identify the primary target keyword.

Before writing or modifying the article, show the keyword to the human.

STEP 2: Run the 5-location keyword check.

Always show this exact type of table before implementation:

Keyword: [Primary Target Keyword]

| Location         | Status |
| ---------------- | ------ |
| Title            | ✓ / ✗  |
| Meta Title       | ✓ / ✗  |
| Meta Description | ✓ / ✗  |
| URL / Slug       | ✓ / ✗  |
| First Sentence   | ✓ / ✗  |

STEP 3: Fix every ✗.

Do not proceed with publishing or committing until every required location
passes.

STEP 4: Human approval.

Show the proposed SEO fields and keyword check to the human before
committing the article.

STEP 5: Write the file and commit.

NEVER commit a new article when any location still has a ✗.

### Rules for Existing Articles

Existing articles must also be checked against the 5-location keyword rule
when they are being SEO-optimized.

However:

* Do not automatically change an existing URL or slug
* Treat the existing slug as protected
* Flag a poor slug to the human
* Recommend a better slug if appropriate
* Only change the slug after explicit human approval
* Do not create a redirect unless explicitly instructed

For an existing article, it is acceptable for the slug check to be reported
as:

"PROTECTED EXISTING SLUG"

instead of changing it automatically.

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

Always flag and correct the following before publishing:

* Meta description copied from a different article
* First sentence begins with context instead of the primary keyword
* Title buries the primary keyword near the end
* Meta description is under 140 characters
* Meta description is over 165 characters
* Em dashes appear in the title, meta title, meta description, or first sentence
* First sentence begins with:

  * "This article will..."
  * "In this guide..."
  * "In this article..."
  * "This guide explains..."
* Keyword stuffing
* Awkward exact-match keyword placement that damages readability
* SEO copy that talks about "the keyword" inside the published article
* Site name duplicated inside the article title
* Unapproved changes to an existing slug
* vscode-file:// URIs in any link

### High-Buyer-Intent SEO Rule

When the article is intended to target a high-buyer-intent keyword:

1. Identify the specific problem, decision, or transaction the searcher is
   trying to complete.
2. Prefer a keyword that combines:

   * the product, service, program, or solution
   * with the buyer's specific problem, audience, location, deadline, cost,
     comparison, or decision
3. Do not choose a broad informational keyword when a more specific
   high-intent keyword accurately matches the article.
4. Do not force a keyword onto an article if the existing content does not
   satisfy that search intent.
5. For existing articles, first determine whether the new keyword is:

   * a strong fit
   * a partial fit requiring targeted edits
   * or a poor fit requiring a separate article
6. Do not rewrite an entire article when title, metadata, introduction,
   headings, and targeted sections are sufficient.
7. Check for keyword cannibalization before repositioning an existing article.
8. Preserve the intended search intent of other existing pages.

### Final Pre-Commit Check

Before any content article is committed, verify:

* Primary keyword identified
* Title passes
* Meta title passes
* Meta description passes
* Slug passes or is explicitly marked as a protected existing slug
* First sentence passes
* No em dashes in SEO fields
* Meta description length is valid
* No generic AI-style opening
* No keyword stuffing
* No accidental cannibalization
* Existing slugs were not changed without approval
* Article search intent still matches the primary keyword

If any required item fails, stop and show the issue to the human instead of
committing.

## Known Issues Being Preserved

- The "Work Email" field validation is a generic email regex, not a business-email restriction. This is intentional for the current migration pass. Do not "fix" it without explicit instruction.
- The Eligibility Checker's Formcarry submission does not check response.ok on the fetch call. It only catches network-level failures, so a non-throwing error response from Formcarry still shows the user a success/completion screen. This is a pre-existing behavior on the live site, preserved intentionally during migration, not a bug introduced here.
- ConsultationCTA's "Prefer to Reach Out Directly?" block is missing a WhatsApp contact option — the user will provide a number to add later. See the TODO comment in ConsultationCTA.tsx.
- Pre-existing launch-window inconsistency: `/guides/argentina-golden-visa-program` (GoldenVisaProgramContent) states expected launch Q2 2026. `/research/argentina-citizenship-by-investment-launch-date` states a targeted Q4 2026 entrance and hedges that the cancelled tender may challenge that window. Resolve in a future editorial pass. Do not treat either quarter as a due-diligence deadline.

### Placeholder images (Investor Guides)

Replace these temporary heroes when a real photo is provided. Do not treat the current files as final art.

- `/guides/argentina-citizenship-investment-due-diligence` uses `src/assets/hero-buenos-aires-night.jpg` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-business-sale` uses `src/assets/hero-buenos-aires-night.jpg` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-cbi-vs-caribbean-citizenship` uses `src/assets/hero-buenos-aires-night.jpg` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-greece-golden-visa` uses `src/assets/hero-buenos-aires-night.jpg` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-turkey` uses `src/assets/hero-buenos-aires-night.jpg` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-paraguay` uses `src/assets/hero-buenos-aires-night.jpg` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
- `/guides/argentina-citizenship-investment-vs-panama` uses `src/assets/hero-buenos-aires-night.jpg` as a temporary hero. See the PLACEHOLDER IMAGE comment in `src/pages/guides/[slug].astro`.
