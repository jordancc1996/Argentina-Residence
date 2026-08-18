# Argentina Residence — Repo Audit Findings

**Date:** 18 August 2026  
**Auditor method:** Read-only. The local `Argentina-Residence` working tree does not contain the Vite/React SPA (only `AGENTS.md` and `CLAUDE.md`). Findings below are reconstructed from the live production artifact:

- Custom domain: `https://argentinaresidence.com` (Cloudflare in front of Vercel; Lovable HTML snapshot cache on `/`)
- Vercel origin: `https://argentina-passport-glow.vercel.app` (project name `argentina-passport-glow`)
- Main bundle: `/assets/main-DlQnRPfm.js` (747,390 bytes, no extra route chunks)
- Main CSS: `/assets/main-DcN3FgFr.css` (81,879 bytes)
- `public/sitemap.xml` last modified 17 August 2026

Local files named in the request (`src/App.tsx`, `src/data/*.ts`, `src/components/**`, `package.json`, `vercel.json`, `scripts/generate-sitemap.js`, `mem/style/scrollytelling-steps-pattern.md`) were **not present** in this repo and could not be opened. Where a claim is inferred from the live bundle rather than those files, it is marked **[live]**.

---

## 1. Pages

**[live]** All routes live in a single non-lazy bundle. There is no `React.lazy(` / `import()` chunk split. Component **file names are minified**; the right-hand column is the production symbol, not the source filename.

| Path | Production symbol | Lazy-loaded | Notes |
|---|---|---|---|
| `/` | `E5` | No | Homepage |
| `/program` | `I5` | No | |
| `/guides/argentina-golden-visa-program` | `D5` | No | |
| `/guides/argentina-real-estate-investment` | `O5` | No | |
| `/argentina-golden-visa-eligibility-checker` | `cI` | No | Eligibility tool (`WebApplication` schema in JS) |
| `/about` | `dI` | No | |
| `/market-insights` | `zI` | No | Lead-magnet PDF on form success |
| `/research` | `KI` | No | Listing; also posts `formType:"newsletter-subscribe"` to Formcarry |
| `/faq` | `QI` | No | Listing; emits `FAQPage` JSON-LD in JS |
| `/faq/:slug` | `XI` | No | Unknown slug → `<Navigate to="/faq" replace />` |
| `/resources` | `ZI` | No | |
| `/blog` | `Uc` | No | **Client redirect:** `<Navigate to="/research" replace />` |
| `/research/:slug` | `tM` | No | Unknown slug → `<Navigate to="/research" replace />` |
| `/industry-news` | `iM` | No | |
| `/industry-news/:slug` | `sM` | No | Unknown slug → `<Navigate to="/industry-news" replace />` |
| `/contact` | `pI` | No | `formType:"luxury-contact-cta"` |
| `/privacy` | `oM` | No | |
| `/compliance` | `aM` | No | Not in the user-supplied shell folder list |
| `*` | `lM` | No | NotFound |

### Confirmed client-side `Navigate` redirects

1. **`/blog` → `/research`** — confirmed in the route table: `path:"/blog", element: Navigate to="/research" replace`. Also a **Vercel 301** `/blog` → `/research` (see §9). Dual-layer redirect.
2. Unknown `/faq/:slug` → `/faq`
3. Unknown `/research/:slug` → `/research`
4. Unknown `/industry-news/:slug` → `/industry-news`

There is **no** `/guides` index route in `App.tsx`. `/guides` is only a Vercel 301 → `/resources`.

After the router tree, the bundle still runs `document.getElementById("ssr-content")` — this is the dual-layer static-shell hide that Astro is meant to replace.

---

## 2. Content

**[live]** Content is compiled into the JS bundle as typed arrays (minified identifiers `er` / `fi` / `$m`). Slug strings match the request’s `blogData.ts` / `faqData.ts` / `news.ts` split.

### Research articles — **6** slugs (`/research/:slug`)

| Slug | Sitemap lastmod |
|---|---|
| `argentina-citizenship-by-investment-launch-date` | 2026-06-22 |
| `argentine-investment-landscape-golden-visa-value-proposition` | 2026-05-08 |
| `buenos-aires-real-estate-bull-market-analysis` | 2026-01-13 |
| `american-dream-argentina-golden-visa-solution` | 2026-01-07 |
| `argentina-citizenship-investment-american-investors` | 2025-12-20 |
| `argentina-golden-visa-american-investors-2026` | 2026-01-02 |

### FAQs — **10** slugs (`/faq/:slug`)

Not 6. All ten appear once as `slug:"..."` in the bundle and in `sitemap.xml`:

| Slug |
|---|
| `what-is-argentina-golden-visa` |
| `investment-requirements` |
| `application-process-timeline` |
| `residency-requirements` |
| `family-members-residency` |
| `required-documents` |
| `work-rights` |
| `tax-implications` |
| `visa-free-travel` |
| `maintain-residency-status` |

### Industry news — **3** slugs (`/industry-news/:slug`)

| Slug | Sitemap lastmod |
|---|---|
| `decree-524-2025-progress-update` | 2026-04-10 |
| `buenos-aires-foreign-buyer-activity-q1` | 2026-03-28 |
| `argentina-citizenship-investment-vs-portugal-golden-visa` | 2026-06-15 |

No extra `slug:"..."` values exist in the bundle beyond these 19.

---

## 3. Static shells

**[live]** Unique shells are distinguishable from the SPA fallback because the origin `index.html` is 21,764 bytes and titled `Argentina Golden Visa 2026 | Argentina Residence`, with `#ssr-content`. Unique shells are smaller and have route-specific titles.

Ahrefs key on shells that include it: `U5p3QWN6cwWml7hdiLpW7g` (`https://analytics.ahrefs.com/analytics.js`).

| Folder (as requested) | Unique shell on origin? | Ahrefs | Route in App.tsx | Data backing | Orphan / flag |
|---|---|---|---|---|---|
| `about/` | Yes (6,679 B) | Yes | Yes `/about` | Page component | OK |
| `blog/` | Not reachable | n/a | Yes, but Navigate + Vercel 301 to `/research` | None (redirect) | **Orphan.** `/blog` and `/blog/index.html` 301 away. Any `blog/index.html` shell is dead. |
| `contact/` | Yes (5,273 B) | Yes | Yes `/contact` | Contact form | OK |
| `faq/` | Yes (6,999 B) | Yes | Yes `/faq` | 10 FAQ records | OK. All 10 `/faq/:slug` URLs also have unique shells (~2.3–2.5 KB) with Ahrefs. |
| `guides/` | Index not served | n/a | No `/guides` index | `/guides` 301 → `/resources` | **Orphan index.** Two child shells exist (see below). |
| `market-insights/` | Yes (2,531 B) | Yes | Yes `/market-insights` | Form + Drive PDF | OK |
| `privacy/` | Yes (2,403 B) | Yes | Yes `/privacy` | Legal page | OK |
| `program/` | Yes (6,704 B) | Yes | Yes `/program` | Page component | OK |
| `research/` | **No unique listing shell** | Root fallback | Yes `/research` | 6 articles | **Listing falls through to homepage `index.html`.** Mixed article shells (see below). |
| `resources/` | Yes (6,490 B) | Yes | Yes `/resources` | Page component | OK. Same HTML is what `/guides` serves after 301. |
| `argentina-golden-visa-eligibility-checker/` | Yes (6,742 B) | **No** | Yes | Eligibility form | **Missing Ahrefs** on the unique shell. `WebApplication` JSON-LD is injected by React, not present in the static HTML. |

### Additional shells (not in the requested folder list)

| Path | Unique shell? | Ahrefs |
|---|---|---|
| `/guides/argentina-golden-visa-program` | Yes (5,789 B) | **No** |
| `/guides/argentina-real-estate-investment` | Yes (6,864 B) | **No** |
| `/research/buenos-aires-real-estate-bull-market-analysis` | Yes (5,897 B) | **No** |
| `/research/american-dream-argentina-golden-visa-solution` | Yes (7,654 B) | Yes |
| `/research/argentina-citizenship-investment-american-investors` | Yes (2,714 B) | Yes |
| `/research/argentina-citizenship-by-investment-launch-date` | Root fallback | Yes (homepage shell) |
| `/research/argentine-investment-landscape-golden-visa-value-proposition` | Root fallback | Yes (homepage shell) |
| `/research/argentina-golden-visa-american-investors-2026` | Root fallback | Yes (homepage shell) |
| `/industry-news` listing | Root fallback | Yes (homepage shell) |
| `/industry-news/*` (all 3) | Root fallback | Yes (homepage shell) |
| `/compliance` | Root fallback | Yes (homepage shell) |

**Orphans / gaps to carry into migration:**

- `blog/` shell is unreachable (redirect).
- `guides/` index is unreachable (redirect to `/resources`).
- Research listing, 3 of 6 research posts, all industry-news URLs, and `/compliance` have **no** dedicated static shell.
- Ahrefs is omitted on eligibility checker + both guide pages + one research article shell.

Custom-domain `/` is a Lovable snapshot (`X-Lovablehtml-Snapshot-Key: v1/argentina-passport-glow.vercel.app/root_….html`) and **does** include the dual `#root` + hidden `#ssr-content` layers described in AGENTS.md.

---

## 4. Components

**Cannot list `src/components/` from this repo — the directory does not exist locally.**

**[live]** Inferred from the bundle, origin HTML, and minified symbols:

| Expected file | Evidence |
|---|---|
| `Layout.tsx` | Shared nav + footer + WhatsApp FAB wrap every route |
| `Navigation.tsx` | Nav items: Home, About, The Program, Research and Intelligence, Industry News, Contact Us. Wordmark `ARGENTINA RESIDENCE`. |
| `Footer.tsx` | Quick Links / Resources / Legal columns; compliance disclaimer; `rachele@argentinaresidence.com` |
| `SEO.tsx` / react-helmet | Origin `index.html` comment: `<!-- meta description managed by React Helmet -->`. Cloudflare snapshot has `data-rh="true"` on meta/canonical. |
| `FormCarryForm.tsx` | Generic helper `VI({formType, buttonText, title, description})` using `react-hook-form` `register`/`handleSubmit`, posts JSON to Formcarry, special-cases `formType==="market-insights"`. |
| `InvestorEligibility.tsx` | Multi-step tool, `source:"Investor Eligibility Tool"`, computes `priorityStatus` (`vip` / `priority` / `standard`). |
| `FloatingAdvisorCTA.tsx` | `GE="12676323162"` then `href={https://wa.me/${GE}}`, `aria-label="Call us on WhatsApp"`. |

### ScrollytellingSteps

`mem/style/scrollytelling-steps-pattern.md` is **not in this repo**. The production bundle has **zero** matches for `Scrollytelling` / `scrolly`. Cannot confirm the documented 3 usages from live JS names. Framer-motion-style hook calls (`_i(-.3)`, `Mm(600)`) appear on FAQ listing, research listing, and news detail — possible scroll-linked animation, not proof of the named pattern. **Treat the 3-usage count as unverified until source is in-tree.**

### shadcn `src/components/ui/` — used vs unused

Cannot enumerate the folder. From the bundle + HTML:

**Used (high confidence):**

- `button` — `variant` / `size` / `asChild` (Radix Slot pattern)
- `input` + `label` — Work Email field (`qt` / `Gt`)
- `toaster` / toast viewport — `#root` contains `aria-label="Notifications (F8)"` and `Notifications alt+T` (shadcn/Radix toast)
- `sonner` token appears heavily in the minified bundle (115 hits; treat as likely `sonner` or a colliding minified substring)

**Present as design tokens:** `text-muted-foreground`, `bg-card`, `text-destructive`, `text-primary` (shadcn/tailwind theme).

**Unused:** unknown without the `ui/` directory. Typical Lovable scaffolds ship accordion, dialog, carousel, calendar, menubar, etc. Do not delete any `ui/` file during migration until a local import graph exists.

---

## 5. Dependencies

`package.json` is **not in this repo** and is not served at `/package.json` (404). **[live]** stack inferred from HTML + bundle:

| Area | Present? | Evidence |
|---|---|---|
| Bundler | Vite | Hashed `/assets/main-*.js` + `/assets/main-*.css`, `type="module"` |
| UI | React + TypeScript SPA | Production JSX runtime, Lovable/Vercel Vite app |
| Routing | `react-router-dom` v6 | `path:` route table, `Navigate`, `useParams` (`em()`), `useNavigate` strings |
| SEO | `react-helmet-async` | Helmet comment, `data-rh` attributes |
| Forms | `react-hook-form` | `register` / `handleSubmit` / `formState.errors` / `reset`. **No `zod` / `@hookform/resolvers` strings in the bundle.** Work Email uses RHF `pattern`, not Zod. |
| Animation | Likely `framer-motion` hooks | Offset hook `_i(-.3)` on several pages. No `framer-motion` package string; no `motion.div` usage worth noting (`motion.` = 1 hit). |
| Icons | `lucide-react` | 35 `lucide` hits |
| Toasts | shadcn toaster + `toast()` | `{toast:e}=Rc()` on form success |
| Styling | Tailwind + shadcn tokens | Utility classes throughout |
| Fonts (Google) | Cormorant Garamond, Inter, Montserrat | `<link href="https://fonts.googleapis.com/css2?...">`. Pre-footer CTA also inlines `'Playfair Display', Georgia, serif`. |
| Analytics | Ahrefs | `analytics.ahrefs.com` key `U5p3QWN6cwWml7hdiLpW7g`. No GTM / `gtag` / Plausible. One `clarity` substring — almost certainly English copy, not the Clarity tag (no Clarity script on origin HTML). |
| Forms backend | Formcarry | `https://formcarry.com/s/1vbKuKjPCBx` (5 call sites) |
| Lead magnet | Google Drive | file id `1UCSXKRW2iGplscfjeH2sX5tLL0JiOFGq` |
| Hosting | Vercel + Cloudflare | Custom domain snapshot via Lovable HTML cache |

---

## 6. SEO layer

### `scripts/generate-sitemap.js`

**File not in repo.** The generated artifact `https://argentina-passport-glow.vercel.app/sitemap.xml` (6,478 bytes) shows how it behaves:

**Static route sources** (all `lastmod` 2026-08-07 except home which is also 2026-08-07):

- `/`, `/program`, `/about`, `/market-insights`, `/research`, `/faq`, `/resources`, `/industry-news`, `/contact`, `/privacy`, `/compliance`
- `/argentina-golden-visa-eligibility-checker`
- `/guides/argentina-golden-visa-program`
- `/guides/argentina-real-estate-investment`

**Dynamic slug injection:**

- All **10** `/faq/:slug` URLs (`changefreq` monthly, priority 0.8, lastmod 2026-08-07)
- All **6** `/research/:slug` URLs (priority 0.6, lastmod = article date)
- All **3** `/industry-news/:slug` URLs (priority 0.6, lastmod = article date)

**Excluded redirect sources (confirmed absent from sitemap):**

- `/blog` (redirect → `/research`)
- `/guides` (redirect → `/resources`)
- `/faq/:slug` is **not** excluded (all 10 are in)
- Catch-all 404 is not listed

`https://argentinaresidence.com/sitemap.xml` returned **500** through the WebFetch proxy but **200** from Vercel origin / `curl` HEAD on the custom domain (same ETag `9e0b3fced9bf475823c9657f8fcc289c`). Worth monitoring; not a source-file issue.

### `public/robots.txt` **[live]**

```
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: https://argentinaresidence.com/sitemap.xml
```

No Disallow rules.

### JSON-LD

**Correction to the request’s assumption.** FAQPage and BreadcrumbList **do exist in the client bundle.** They are Helmet/JS-injected, not in most static shells.

| Type | Where | Static HTML? | Client JS? |
|---|---|---|---|
| `Organization` + `WebSite` `@graph` | Homepage | Yes (origin `index.html` and Cloudflare snapshot) | Yes (duplicated via Helmet; snapshot has both copies) |
| `WebApplication` | Eligibility checker (`name: "Argentina Golden Visa Eligibility Checker"`) | **No** (not in the unique shell) | **Yes** |
| `FAQPage` + `Question`/`Answer` | FAQ listing (`mainEntity` maps all FAQs) and FAQ detail (single question) | **No** | **Yes** (2 `FAQPage` constructions) |
| `BreadcrumbList` + `ListItem` | Generic path→label builder, `item` URLs on `https://argentinaresidence.com` | **No** | **Yes** |
| `Article` | Research/news posts (4 constructions) | Some unique article shells may omit it | Yes |
| `AboutPage` | About | Unverified in shell | Yes |
| `ContactPage` | Contact | Unverified in shell | Yes |
| `CollectionPage` | Listings (2) | Unverified in shell | Yes |
| `Service` / `Offer` / `Country` / `Place` / `ItemList` / `WebPage` / `ImageObject` / `Thing` | Various pages | Homepage Org/WebSite only | Yes |

**Do not treat “no FAQPage / BreadcrumbList yet” as true.** Both are live in JS. Preserve them during migration.

---

## 7. Assets

**No `public/` or `src/assets/` directories locally.** Counts below are files referenced by the production bundles and confirmed with `Content-Length`.

**Video:** none. `.mp4` / `.webm` / `.mov` hits in JS were false positives (`e.mov`). No video URLs returned 200.

**Format:** JPEG and one PNG favicon + `placeholder.svg`. **No WebP or AVIF.**

### `public/`-style (unhashed, site root) — 13 files

| File | Bytes | Over 200 KB? |
|---|---|---|
| `argentine-investment-landscape.jpg` | 2,865,356 | **Yes (2.73 MB)** |
| `decree-524-2025-investment-visa.jpg` | 2,589,494 | **Yes (2.47 MB)** |
| `argentina-cbi-american-investors-new.jpg` | 2,485,344 | **Yes (2.37 MB)** |
| `argentina-golden-visa-2026.jpg` | 1,464,872 | **Yes** |
| `argentina-golden-visa-argentinaresidence.jpg` | 1,392,995 | **Yes** |
| `industry-news-hero.jpg` | 1,204,432 | **Yes** |
| `argentina-cbi-vs-portugal-golden-visa.jpg` | 1,000,911 | **Yes** |
| `buenos-aires-real-estate-bull-market.jpg` | 957,920 | **Yes** |
| `og-image.jpg` | 861,992 | **Yes** |
| `american-dream-argentina-golden-visa.jpg` | 808,506 | **Yes** |
| `buenos-aires-foreign-buyer-activity-q1.jpg` | 666,720 | **Yes** |
| `favicon.png` | 27,705 | No |
| `placeholder.svg` | 3,253 | No |

### Vite-hashed `/assets/` images (from `src/assets/` at build) — 11 files

| File | Bytes | Over 200 KB? |
|---|---|---|
| `argentina-golden-visa-2026-BAerThMv.jpg` | 2,417,314 | **Yes (2.31 MB)** |
| `argentina-golden-visa-eligibility-DsOuoLJ4.jpg` | 2,122,532 | **Yes** |
| `argentina-flag-market-BBD9B9Rr.jpg` | 1,706,432 | **Yes** |
| `hero-buenos-aires-night-B4t1aFDv.jpg` | 1,702,592 | **Yes** |
| `buenos-aires-architecture-church-BZK0dZAy.jpg` | 1,502,336 | **Yes** |
| `argentina-flag-resources-xuhp1DH9.jpg` | 1,327,084 | **Yes** |
| `buenos-aires-cityscape-CjnA460N.jpg` | 1,259,001 | **Yes** |
| `faq-colombia-cityscape-DF0T9JOF.jpg` | 1,231,100 | **Yes** |
| `hero-aerial-buenos-aires-pBPtJoJb.jpg` | 1,161,357 | **Yes** |
| `argentina-golden-visa-flag-hero-B6p2_K_T.jpg` | 385,144 | **Yes** |
| `research-intelligence-hero-DT21GCMl.jpg` | 100,139 | No (98 KB) |

**Over-200KB flag:** 21 of 24 raster images. Only `favicon.png`, `placeholder.svg`, and `research-intelligence-hero-DT21GCMl.jpg` are under the threshold. Do not recompress during the pixel-perfect migration pass unless explicitly instructed.

---

## 8. Special features

### Formcarry `https://formcarry.com/s/1vbKuKjPCBx`

**Same endpoint, not identical usage.** Source-confirmed Formcarry call sites (more than the original live-bundle table named):

| Call site | Payload | Identifies as |
|---|---|---|
| Pre-footer CTA | `FormData` POST, `Accept: application/json` only | Hidden `_source` = `Pre-footer CTA` on homepage snapshot |
| Investor eligibility tool | JSON `{ ...fields, priorityStatus, source: "Investor Eligibility Tool", submittedAt }` | `InvestorEligibility.tsx` |
| `LuxuryContactCTA.tsx` | JSON `{ ...fields, phone, formType: "luxury-contact-cta" }` | Bespoke contact form. Success/error toasts via `useToast()`. Originally listed only as "Contact page". |
| `GoldenVisaApplicationCTA.tsx` | JSON `{ ...fields, formType: "golden-visa-application" }` | Bespoke Golden Visa signup. Success/error toasts via `useToast()`. **Not named in the original 5-row audit.** |
| `FormCarryForm.tsx` | JSON `{ ...h, formType }` | Shared helper. `formType==="market-insights"` success copy + Drive PDF download. Success/error toasts via `useToast()`. |
| `Research.tsx` inline newsletter | JSON `{ ...data, formType: "newsletter-subscribe" }` | Separate from `FormCarryForm.tsx`. Success/error toasts via `useToast()`. |

`FormCarryForm.tsx`, `LuxuryContactCTA.tsx`, `GoldenVisaApplicationCTA.tsx`, and `Research.tsx` all use `@/hooks/use-toast` (`toast({ title, description })`). `InvestorEligibility.tsx` posts to Formcarry with no toast. Sonner is mounted in `App.tsx` but never called.

### Google Drive PDF lead magnet

**Confirmed.** On market-insights form success the bundle creates an `<a>` with:

- `href="https://drive.google.com/uc?export=download&id=1UCSXKRW2iGplscfjeH2sX5tLL0JiOFGq"`
- `download="argentina-market-report.pdf"`
- `target="_blank"`

Tied to `formType==="market-insights"` inside `FormCarryForm`.

### WhatsApp floating CTA

**Confirmed.** `GE="12676323162"` → `https://wa.me/12676323162` → **+1 267 632 3162**. `aria-label="Call us on WhatsApp"`. Footer/contact still show the placeholder **+1 (555) 000-0000** / `tel:+15550000000` — do not “fix” during migration.

### Cookie consent / sticky CTA bar / exit-intent

| Feature | Present? |
|---|---|
| Cookie consent banner / gating | **No.** “cookie” hits are Privacy Policy copy only (`Cookie Policy`, browser cookie settings). No `CookieConsent` module. |
| Sticky bottom mobile CTA bar | **No** matching pattern. |
| Exit-intent popup | **No** (`exit-intent` / `ExitIntent` = 0). A form field resembling `relocateIntent` is not an exit popup. |
| WhatsApp floating button | **Yes** — preserve. This is not a sticky bottom bar. |

### Work Email validation (known issue, preserve)

```
pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email address" }
```

Generic email regex, not a business-domain restriction. Matches AGENTS.md “Known Issues Being Preserved”.

---

## 9. Vercel config

`vercel.json` is **not in this repo** and is **not publicly served** (`/vercel.json` → 404). The following is **inferred from live response headers and redirect probes** on `argentina-passport-glow.vercel.app`.

### Redirects (observed)

| Source | Status | Destination |
|---|---|---|
| `/blog` | **301** | `/research` |
| `/guides` | **301** | `/resources` |
| `/blog/` | **308** | `/blog` (then 301 → `/research`) |
| `/:path/` (trailing slash) | **308** | `/:path` (Vercel trailing-slash canonicalization) |
| `/index.html` | **301** | `/` |
| `/:path/index.html` | **301** | `/:path` |

### SPA rewrite (observed)

Unmatched paths such as `/news` return **200** with the **root `index.html`** (21,765 bytes). React then renders the `*` NotFound component. This is the standard Vite SPA rewrite to `/index.html`.

### Headers (observed on Vercel origin, all three confirmed)

| Header | Value |
|---|---|
| `X-Robots-Tag` | `index, follow` |
| `X-Content-Type-Options` | `nosniff` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |

Also present on Vercel: `Referrer-Policy` is **not** on the origin HTML response; Cloudflare adds `Referrer-Policy: strict-origin-when-cross-origin` and `Nel`/`Report-To` on the custom domain. Custom-domain `/` is served from Lovable’s HTML snapshot cache (`X-Lovablehtml-Render-Cache: edge-hit`) and **omits** `X-Robots-Tag` / HSTS on that cached 200 (Cloudflare HTML), while asset/sitemap requests that hit Vercel still carry the three headers.

---

## Migration notes (for later phases)

1. Copy the Lovable/GitHub source (`argentina-passport-glow`) into this repo before converting components — this audit could not read `App.tsx` or `src/data/*` as files.
2. Preserve `/blog` → `/research` and `/guides` → `/resources` in Astro (`astro.config` redirects or `vercel.json`), plus the React `Navigate` behavior for unknown slugs.
3. Do not drop FAQPage or BreadcrumbList — they are already live in JS.
4. Eligibility checker + both `/guides/*` pages + several article URLs lack Ahrefs and/or unique shells; replicate current behavior, do not “fix” coverage.
5. Five Formcarry posts, one Drive PDF, one WhatsApp number, generic Work Email regex — copy exactly.
6. Remove `#ssr-content` hide logic only when Astro static HTML replaces it page-for-page.
7. Image weight is a known live-site property; compressing it would violate the design-preservation rule.
