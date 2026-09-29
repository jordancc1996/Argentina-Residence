import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { parseHTML } from "linkedom";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const SITE = "https://argentinaresidence.com";

const sections = [
  {
    heading: "Program",
    paths: [
      "/program",
      "/guides/argentina-golden-visa-program",
      "/research/argentina-citizenship-by-investment-status",
      "/research/argentina-citizenship-by-investment-launch-date",
      "/faq/what-is-argentina-golden-visa",
      "/faq/argentina-citizenship-investment-requirements",
    ],
  },
  {
    heading: "Practical Questions",
    paths: [
      "/faq/argentina-citizenship-investment-family",
      "/faq/argentina-residency-physical-presence",
      "/faq/argentina-citizenship-investment-documents",
      "/faq/argentina-residency-work-rights",
      "/faq/argentina-residency-tax-implications",
      "/faq/argentina-visa-free-travel",
      "/faq/maintain-argentina-residency",
      "/faq/argentina-citizenship-investment-application-timeline",
    ],
  },
  {
    heading: "Investment and Real Estate",
    paths: [
      "/research/argentine-investment-landscape-golden-visa-value-proposition",
      "/guides/argentina-real-estate-investment",
      "/guides/argentina-citizenship-investment-business-sale",
      "/guides/argentina-citizenship-investment-due-diligence",
      "/research/buenos-aires-real-estate-bull-market-analysis",
    ],
  },
  {
    heading: "Comparisons",
    paths: [
      "/guides/argentina-citizenship-investment-vs-greece-golden-visa",
      "/guides/argentina-citizenship-investment-vs-panama",
      "/guides/argentina-citizenship-investment-vs-paraguay",
      "/guides/argentina-citizenship-investment-vs-turkey",
      "/guides/argentina-cbi-vs-caribbean-citizenship",
      "/industry-news/argentina-citizenship-investment-vs-portugal-golden-visa",
    ],
  },
  {
    heading: "Research and Regulatory Updates",
    paths: [
      "/industry-news/decree-524-2025-progress-update",
      "/industry-news/buenos-aires-foreign-buyer-activity-q1",
      "/research/american-dream-argentina-golden-visa-solution",
      "/research/argentina-citizenship-investment-american-investors",
      "/research/argentina-golden-visa-american-investors-2026",
      "/guides/argentina-citizenship-investment-us-visa-backlog",
    ],
  },
  {
    heading: "Optional",
    paths: [
      "/",
      "/about",
      "/contact",
      "/resources",
      "/compliance",
      "/market-insights",
      "/faq",
      "/research",
      "/industry-news",
      "/argentina-golden-visa-eligibility-checker",
    ],
  },
];

function fail(message) {
  console.error(`DRIFT: ${message}`);
  process.exitCode = 1;
}

function normalize(value) {
  return value.replace(/\s+/g, " ").trim();
}

function loadProgramStatus() {
  const filePath = path.join(root, "src", "data", "programStatus.ts");
  const source = fs.readFileSync(filePath, "utf8");
  if (/new Date\s*\(|Date\.now\s*\(|mtime|build time|git time/i.test(source)) {
    fail("statusLastVerified must stay a fixed human-set date");
  }
  const pick = (key) => {
    const match = source.match(new RegExp(`${key}:\\s*(?:\\n\\s*)?"([^"]*)"`));
    if (!match) fail(`programStatus.${key} is missing`);
    return match ? match[1] : "";
  };
  const bool = (key) => {
    const match = source.match(new RegExp(`${key}:\\s*(true|false)`));
    if (!match) fail(`programStatus.${key} is missing`);
    return match ? match[1] === "true" : false;
  };
  const status = {
    governmentApplicationsOpen: bool("governmentApplicationsOpen"),
    applicationStatusLabel: pick("applicationStatusLabel"),
    waitlistAvailable: bool("waitlistAvailable"),
    waitlistOperator: pick("waitlistOperator"),
    waitlistDisclaimer: pick("waitlistDisclaimer"),
    programTerm: pick("programTerm"),
    programTermDefinition: pick("programTermDefinition"),
    statusPagePath: pick("statusPagePath"),
    statusLastVerified: pick("statusLastVerified"),
  };
  if (!/^\d{4}-\d{2}-\d{2}$/.test(status.statusLastVerified)) {
    fail("statusLastVerified is not a fixed ISO date");
  }
  if (status.statusLastVerified !== "2026-09-28") {
    fail(`statusLastVerified is ${status.statusLastVerified}, expected 2026-09-28`);
  }
  return status;
}

function sitemapPaths() {
  const file = path.join(dist, "sitemap-0.xml");
  const xml = fs.readFileSync(file, "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => {
    const url = new URL(match[1]);
    return url.pathname.replace(/\/$/, "") || "/";
  });
}

function htmlFileFor(pathname) {
  if (pathname === "/") return path.join(dist, "index.html");
  const rel = pathname.replace(/^\//, "");
  const nested = path.join(dist, rel, "index.html");
  const flat = path.join(dist, `${rel}.html`);
  if (fs.existsSync(nested)) return nested;
  if (fs.existsSync(flat)) return flat;
  throw new Error(`Missing HTML for ${pathname}`);
}

function markdownPublicPath(pathname) {
  if (pathname === "/") return "/markdown/index.md";
  return `/markdown${pathname}.md`;
}

function contentType(pathname) {
  if (pathname.startsWith("/faq/") && pathname !== "/faq") return "faq";
  if (pathname.startsWith("/research/") && pathname !== "/research") return "research";
  if (pathname.startsWith("/guides/")) return "guide";
  if (pathname.startsWith("/industry-news/") && pathname !== "/industry-news") return "industry-news";
  return "page";
}

function setupDom() {
  const { document, DOMParser } = parseHTML("<!doctype html><html><body></body></html>");
  globalThis.document = document;
  globalThis.DOMParser = DOMParser;
  globalThis.Node = document.defaultView.Node;
  globalThis.HTMLElement = document.defaultView.HTMLElement;
}

function readableText(node) {
  const bits = [];
  for (const child of node.childNodes ?? []) {
    if (child.nodeType === 3) bits.push(child.textContent);
    else if (child.nodeType === 1) bits.push(readableText(child));
  }
  return bits.join(" ").replace(/\s+/g, " ").trim();
}

function createTurndown() {
  const turndown = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "*",
  });
  turndown.use(gfm);
  turndown.addRule("descriptionList", {
    filter: "dl",
    replacement(content) {
      return `\n\n${content.trim()}\n\n`;
    },
  });
  turndown.addRule("descriptionTerm", {
    filter: "dt",
    replacement(content, node) {
      if (node.querySelector("h1, h2, h3, h4")) return `\n\n${content.trim()}\n\n`;
      return `\n\n**${content.trim()}** `;
    },
  });
  turndown.addRule("blockAnchor", {
    filter(node) {
      return node.nodeName === "A" && Boolean(node.querySelector("img, div, p, h1, h2, h3, h4"));
    },
    replacement(content, node) {
      const href = node.getAttribute("href") || "";
      const heading = node.querySelector("h1, h2, h3, h4");
      const label = (heading?.textContent?.trim() ? heading.textContent : readableText(node) || "Related page")
        .replace(/\s+/g, " ")
        .trim();
      return `\n\n${content.trim()}\n\n[${label}](${href})\n\n`;
    },
  });
  turndown.addRule("descriptionValue", {
    filter: "dd",
    replacement(content) {
      return `${content.trim()}\n\n`;
    },
  });
  return turndown;
}

function htmlToMarkdown(html, turndown) {
  const { document } = parseHTML(html);
  const region = document.querySelector("[data-md-content]");
  if (!region) return null;
  region.querySelectorAll("[data-md-exclude]").forEach((node) => node.remove());
  region.querySelectorAll("button").forEach((button) => {
    if (button.closest("a")) {
      const parent = button.parentNode;
      while (button.firstChild) parent.insertBefore(button.firstChild, button);
      button.remove();
    } else {
      button.remove();
    }
  });
  region
    .querySelectorAll('script, style, noscript, svg, form, input, select, textarea, nav, label, [aria-hidden="true"]')
    .forEach((node) => node.remove());
  region.querySelectorAll("a").forEach((anchor) => {
    if (!anchor.textContent.trim() && !anchor.querySelector("img")) anchor.remove();
  });
  let markdown = turndown.turndown(region.innerHTML);
  markdown = markdown.replace(/\)\[/g, ")\n\n[");
  markdown = markdown.replace(/[ \t]+\n/g, "\n").replace(/\n{3,}/g, "\n\n").trim();
  return `${markdown}\n`;
}

function pageMeta(html) {
  const { document } = parseHTML(html);
  const title = document.querySelector("title")?.textContent?.trim() ?? "";
  const description = document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ?? "";
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href")?.trim() ?? "";
  const robots = document.querySelector('meta[name="robots"]')?.getAttribute("content") ?? "";
  const alternate = document.querySelector('link[rel="alternate"][type="text/markdown"]')?.getAttribute("href") ?? "";
  let published;
  let modified;
  document.querySelectorAll('script[type="application/ld+json"]').forEach((script) => {
    try {
      const data = JSON.parse(script.textContent ?? "");
      const nodes = Array.isArray(data) ? data : [data];
      for (const node of nodes) {
        if (!published && typeof node.datePublished === "string") published = node.datePublished.slice(0, 10);
        if (!modified && typeof node.dateModified === "string") modified = node.dateModified.slice(0, 10);
      }
    } catch {
      // Ignore unrelated JSON-LD.
    }
  });
  const text = normalize(document.body?.textContent ?? "");
  return { title, description, canonical, robots, alternate, published, modified, text };
}

function visibleText(html) {
  const { document } = parseHTML(html);
  const region = document.querySelector("[data-md-content]") ?? document.body;
  return normalize(region?.textContent ?? "");
}

const programStatus = loadProgramStatus();
if (process.exitCode) process.exit(process.exitCode);

const paths = sitemapPaths();
if (paths.length !== 41) fail(`sitemap has ${paths.length} URLs, expected 41`);
for (const pathname of paths) {
  if (pathname.includes("/markdown") || pathname.endsWith(".md") || pathname === "/llms.txt" || pathname === "/content-index.json") {
    fail(`sitemap includes non-canonical URL ${pathname}`);
  }
}

const assigned = new Set(sections.flatMap((section) => section.paths));
for (const pathname of paths) {
  if (!assigned.has(pathname)) fail(`llms.txt has no section for ${pathname}`);
}
for (const pathname of assigned) {
  if (!paths.includes(pathname)) fail(`llms section lists ${pathname}, which is not in the sitemap`);
}

setupDom();
const turndown = createTurndown();
const records = [];
const byPath = new Map();

for (const pathname of paths) {
  const htmlPath = htmlFileFor(pathname);
  const html = fs.readFileSync(htmlPath, "utf8");
  const meta = pageMeta(html);
  const markdown = htmlToMarkdown(html, turndown);
  if (!markdown) fail(`missing data-md-content on ${pathname}`);
  if (meta.robots.toLowerCase().includes("noindex")) fail(`accidental noindex on ${pathname}`);
  const markdownPath = markdownPublicPath(pathname);
  if (meta.alternate !== markdownPath) {
    fail(`${pathname} alternate is "${meta.alternate}", expected ${markdownPath}`);
  }
  const outFile = path.join(dist, markdownPath.replace(/^\//, ""));
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, markdown);
  const record = {
    title: meta.title,
    canonical_url: meta.canonical,
    markdown_url: `${SITE}${markdownPath}`,
    content_type: contentType(pathname),
    description: meta.description,
  };
  if (meta.published && /^\d{4}-\d{2}-\d{2}$/.test(meta.published)) record.published_date = meta.published;
  if (meta.modified && /^\d{4}-\d{2}-\d{2}$/.test(meta.modified)) record.modified_date = meta.modified;
  records.push(record);
  byPath.set(pathname, { ...meta, markdown, text: visibleText(html) });
}

records.sort((a, b) => a.canonical_url.localeCompare(b.canonical_url));
fs.writeFileSync(path.join(dist, "content-index.json"), `${JSON.stringify(records, null, 2)}\n`);

const lines = ["# Argentina Residence", ""];
lines.push(
  `> ${programStatus.programTermDefinition} ${programStatus.applicationStatusLabel} ${programStatus.waitlistDisclaimer} Status last verified: ${programStatus.statusLastVerified}.`,
);
lines.push("");
let primaryLinks = 0;
let optionalLinks = 0;
for (const section of sections) {
  lines.push(`## ${section.heading}`, "");
  for (const pathname of section.paths) {
    const page = byPath.get(pathname);
    const note = page.description ? `: ${page.description.replace(/\s+/g, " ").trim()}` : "";
    lines.push(`- [${page.title}](${page.canonical})${note}`);
    if (section.heading === "Optional") optionalLinks += 1;
    else primaryLinks += 1;
  }
  lines.push("");
}
const llms = `${lines.join("\n").trim()}\n`;
fs.writeFileSync(path.join(dist, "llms.txt"), llms);

const vercelPath = path.join(root, "vercel.json");
const vercel = JSON.parse(fs.readFileSync(vercelPath, "utf8"));
vercel.headers = [
  ...paths.map((pathname) => ({
    source: markdownPublicPath(pathname),
    headers: [
      { key: "Content-Type", value: "text/markdown; charset=utf-8" },
      { key: "Link", value: `<${byPath.get(pathname).canonical}>; rel="canonical"` },
    ],
  })),
  {
    source: "/llms.txt",
    headers: [{ key: "Content-Type", value: "text/plain; charset=utf-8" }],
  },
  {
    source: "/content-index.json",
    headers: [{ key: "Content-Type", value: "application/json; charset=utf-8" }],
  },
];
fs.writeFileSync(vercelPath, `${JSON.stringify(vercel, null, 2)}\n`);

const statusPage = byPath.get(programStatus.statusPagePath);
if (!statusPage || !statusPage.text.includes(normalize(programStatus.applicationStatusLabel))) {
  fail("applicationStatusLabel does not match the status page");
}
const definitionPage = byPath.get("/faq/what-is-argentina-golden-visa");
if (!definitionPage || !definitionPage.text.includes(normalize(programStatus.programTermDefinition))) {
  fail("programTermDefinition does not match the definition FAQ");
}
for (const pathname of ["/", "/program"]) {
  const page = byPath.get(pathname);
  if (!page || !page.text.includes(normalize(programStatus.waitlistDisclaimer))) {
    fail(`waitlist disclaimer is missing from ${pathname}`);
  }
}
if (programStatus.governmentApplicationsOpen !== false) {
  fail("governmentApplicationsOpen is not false");
}

const definitionMarkdown = byPath.get("/faq/what-is-argentina-golden-visa")?.markdown ?? "";
if (!definitionMarkdown.includes("not an open residency visa")) {
  fail("definition markdown dropped the residency-visa qualifier");
}
if (!llms.includes(programStatus.programTermDefinition) || !llms.includes(programStatus.applicationStatusLabel) || !llms.includes(programStatus.waitlistDisclaimer)) {
  fail("llms.txt does not carry the shared status fields");
}
if (llms.includes("/markdown/")) fail("llms.txt links to markdown URLs");
if (llms.includes("https://argentinaresidence.com/market-insights)") && !llms.includes("## Optional")) {
  fail("market-insights is not optional");
}
const marketLine = llms.split("\n").find((line) => line.includes("/market-insights"));
const optionalIndex = llms.indexOf("## Optional");
if (marketLine && llms.indexOf(marketLine) < optionalIndex) {
  fail("market-insights is listed before Optional");
}

for (const line of llms.split("\n")) {
  const match = line.match(/^- \[([^\]]+)\]\((https:\/\/[^)]+)\): (.+)$/);
  if (!match) continue;
  const page = [...byPath.values()].find((item) => item.canonical === match[2]);
  if (!page) fail(`llms.txt links to unknown URL ${match[2]}`);
  else if (page.title !== match[1]) fail(`llms title drifted for ${match[2]}`);
  else if (page.description !== match[3]) fail(`llms note drifted for ${match[2]}`);
}

const samples = ["/", "/program", "/faq/what-is-argentina-golden-visa", "/research/argentina-citizenship-by-investment-status"];
for (const pathname of samples) {
  const page = byPath.get(pathname);
  const record = records.find((item) => item.canonical_url === page.canonical);
  if (!record) fail(`content index missing ${pathname}`);
  else if (record.title !== page.title) fail(`content index title drifted for ${pathname}`);
  else if (record.description !== page.description) fail(`content index description drifted for ${pathname}`);
  else if (record.markdown_url !== `${SITE}${markdownPublicPath(pathname)}`) fail(`content index markdown URL drifted for ${pathname}`);
}

const home = byPath.get("/");
if (home?.title !== "Argentina Golden Visa | Join the Waitlist | Argentina Residence") {
  fail(`homepage title is "${home?.title}"`);
}

const faqSource = fs.readFileSync(path.join(root, "src", "data", "pageFaqs.ts"), "utf8");
const paraguayFaq = faqSource.slice(
  faqSource.indexOf('"/guides/argentina-citizenship-investment-vs-paraguay"'),
  faqSource.indexOf('"/guides/argentina-citizenship-investment-vs-panama"'),
);
if (paraguayFaq.includes("USD 70,000") || paraguayFaq.includes("USD 150,000") || paraguayFaq.includes("USD 200,000")) {
  fail("Paraguay FAQ still contains the removed dollar amounts");
}

const mdCount = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith(".md")) mdCount.push(full);
  }
}
walk(path.join(dist, "markdown"));
if (mdCount.length !== 41) fail(`generated ${mdCount.length} markdown files, expected 41`);

const sitemapAfter = fs.readFileSync(path.join(dist, "sitemap-0.xml"), "utf8");
if (sitemapAfter.includes("/markdown/") || sitemapAfter.includes("llms.txt") || sitemapAfter.includes("content-index.json")) {
  fail("sitemap gained machine-readable URLs");
}

if (process.exitCode) {
  console.error("Machine-readable generation failed drift checks.");
  process.exit(process.exitCode);
}

console.log(`Generated ${mdCount.length} markdown files, llms.txt (${primaryLinks} primary, ${optionalLinks} optional), content-index.json.`);
