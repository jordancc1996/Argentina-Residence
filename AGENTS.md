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
