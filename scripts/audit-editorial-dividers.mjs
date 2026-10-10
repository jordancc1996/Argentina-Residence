/**
 * Measures rendered editorial dividers. A divider counts only when its
 * computed width, color, and scroll-linked transform are checked in Chrome.
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9334;
const ORIGIN = process.env.AUDIT_ORIGIN || "http://127.0.0.1:4323";
const OUT = path.join(os.tmpdir(), "editorial-divider-audit");
fs.mkdirSync(OUT, { recursive: true });

const KEY_PAGES = [
  "/",
  "/guides/argentina-citizenship-investment-vs-paraguay",
  "/research/argentina-citizenship-by-investment-launch-date",
  "/industry-news/decree-524-2025-progress-update",
  "/faq/argentina-citizenship-investment-requirements",
];

const routes = fs
  .readdirSync("dist", { recursive: true })
  .filter((file) => String(file).endsWith("index.html") || String(file) === "404.html")
  .map((file) => {
    const rel = String(file).replaceAll("\\", "/");
    if (rel === "404.html") return "/404";
    if (rel === "index.html") return "/";
    return `/${rel.slice(0, -"/index.html".length)}`;
  })
  .filter((route) => route !== "/404");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForChrome() {
  for (let i = 0; i < 40; i += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (response.ok) return;
    } catch {
      await sleep(150);
    }
  }
  throw new Error("Chrome debugging port did not open");
}

class Page {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener("message", (event) => {
      const message = JSON.parse(event.data);
      if (!message.id || !this.pending.has(message.id)) return;
      const waiter = this.pending.get(message.id);
      this.pending.delete(message.id);
      if (message.error) waiter.reject(new Error(JSON.stringify(message.error)));
      else waiter.resolve(message.result);
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression) {
    const result = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (result.exceptionDetails) {
      throw new Error(result.exceptionDetails.text || "evaluate failed");
    }
    return result.result.value;
  }

  waitFor(method) {
    return new Promise((resolve) => {
      const handler = (event) => {
        const message = JSON.parse(event.data);
        if (message.method !== method) return;
        this.ws.removeEventListener("message", handler);
        resolve(message.params);
      };
      this.ws.addEventListener("message", handler);
    });
  }

  async open(url) {
    const loaded = this.waitFor("Page.loadEventFired");
    await this.send("Page.navigate", { url });
    await loaded;
    await this.evaluate(`new Promise((resolve) => {
      const start = Date.now();
      const tick = () => {
        if (document.documentElement.classList.contains("editorial-motion") || Date.now() - start > 2500) resolve();
        else setTimeout(tick, 50);
      };
      tick();
    })`);
  }
}

const MEASURE = `(() => {
  const clientW = document.documentElement.clientWidth;
  const nodes = [...document.querySelectorAll("[data-editorial-line]")].filter((el) => {
    const style = getComputedStyle(el);
    return style.display !== "none" && el.getClientRects().length > 0;
  });
  const lines = nodes.map((el, index) => {
    const before = getComputedStyle(el, "::before");
    const bar = el.querySelector(".editorial-line-bar");
    const usesBefore = before.content !== "none" && before.content !== "normal";
    const painted = usesBefore ? before : getComputedStyle(bar || el);
    const rect = (bar || el).getBoundingClientRect();
    const width = parseFloat(painted.width);
    return {
      index,
      tag: el.tagName,
      text: (el.tagName === "H2" ? el.textContent : "").trim().slice(0, 90),
      className: el.className && el.className.toString ? el.className.toString().slice(0, 80) : "",
      width: Math.round(width),
      height: parseFloat(painted.height),
      color: painted.backgroundColor,
      transform: painted.transform,
      progress: el.style.getPropertyValue("--line-progress"),
      top: Math.round(rect.top),
    };
  });
  return {
    url: location.pathname,
    clientW,
    overflow: document.documentElement.scrollWidth > clientW + 1,
    motion: document.documentElement.classList.contains("editorial-motion"),
    lines,
  };
})()`;

const PLACE = `(async (index, ratio) => {
  const nodes = [...document.querySelectorAll("[data-editorial-line]")].filter((el) => {
    const style = getComputedStyle(el);
    return style.display !== "none" && el.getClientRects().length > 0;
  });
  const el = nodes[index];
  if (!el) return null;
  const top = el.getBoundingClientRect().top + scrollY;
  const y = top - innerHeight * ratio;
  document.scrollingElement.scrollTo({ top: Math.max(0, y), behavior: "instant" });
  window.dispatchEvent(new Event("scroll"));
  await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
  const before = getComputedStyle(el, "::before");
  const bar = el.querySelector(".editorial-line-bar");
  const usesBefore = before.content !== "none" && before.content !== "normal";
  const painted = usesBefore ? before : getComputedStyle(bar || el);
  const rect = (bar || el).getBoundingClientRect();
  return {
    progress: el.style.getPropertyValue("--line-progress"),
    transform: painted.transform,
    ratio: +(rect.top / innerHeight).toFixed(3),
    width: Math.round(usesBefore ? parseFloat(before.width) : rect.width),
  };
})`;

function scaleOf(transform) {
  if (!transform || transform === "none") return 1;
  if (!transform.startsWith("matrix(")) return null;
  return Number(transform.slice(7).split(",")[0]);
}

function isBlue(color) {
  return color === "rgb(21, 76, 126)";
}

async function main() {
  const profile = fs.mkdtempSync(path.join(os.tmpdir(), "divider-audit-"));
  const chrome = spawn(CHROME, [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "--disable-gpu",
    "--no-first-run",
    "about:blank",
  ], { stdio: "ignore" });

  await waitForChrome();
  const tabs = await fetch(`http://127.0.0.1:${PORT}/json/list`).then((response) => response.json());
  const tab = tabs.find((item) => item.type === "page");
  const page = new Page(new WebSocket(tab.webSocketDebuggerUrl));
  await new Promise((resolve) => page.ws.addEventListener("open", resolve, { once: true }));
  await page.send("Page.enable");
  await page.send("Runtime.enable");
  await page.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });

  const summary = [];
  const failures = [];

  for (const route of routes) {
    await page.open(`${ORIGIN}${route}`);
    const measured = await page.evaluate(MEASURE);
    const narrow = measured.lines.filter((line) => Math.abs(line.width - measured.clientW) > 2);
    const wrongColor = measured.lines.filter((line) => !isBlue(line.color) || Math.abs(line.height - 1) > 0.2);
    const row = {
      route,
      final: measured.url,
      lines: measured.lines.length,
      overflow: measured.overflow,
      motion: measured.motion,
      narrow: narrow.map((line) => ({ text: line.text, className: line.className, width: line.width, clientW: measured.clientW })),
      color: wrongColor.map((line) => ({ text: line.text, color: line.color, height: line.height })),
    };

    const target = measured.lines.find((line) => line.tag === "H2") || measured.lines.at(-1);
    if (target) {
      const samples = {};
      for (const ratio of [0.95, 0.72, 0.4, 0.95]) {
        const key = ratio === 0.95 && samples.below ? "reversed" : ratio === 0.95 ? "below" : ratio === 0.72 ? "mid" : "done";
        samples[key] = await page.evaluate(`${PLACE}(${target.index}, ${ratio})`);
      }
      row.scroll = {
        text: target.text || target.className,
        below: samples.below?.progress,
        mid: samples.mid?.progress,
        done: samples.done?.progress,
        reversed: samples.reversed?.progress,
        midScale: scaleOf(samples.mid?.transform),
        doneScale: scaleOf(samples.done?.transform),
        reversedScale: scaleOf(samples.reversed?.transform),
      };
      const below = Number(samples.below?.progress);
      const mid = Number(samples.mid?.progress);
      const done = Number(samples.done?.progress);
      const reversed = Number(samples.reversed?.progress);
      const animates = below < 0.08 && mid > 0.2 && mid < 0.9 && done > 0.98 && reversed < 0.08;
      row.animates = animates;
      if (!animates) failures.push({ route, reason: "scroll", scroll: row.scroll });
    } else {
      row.animates = null;
    }

    if (measured.overflow) failures.push({ route, reason: "overflow" });
    if (narrow.length) failures.push({ route, reason: "narrow", narrow: row.narrow });
    if (wrongColor.length) failures.push({ route, reason: "color", color: row.color });
    summary.push(row);
    process.stdout.write(`${route} lines=${row.lines} animates=${row.animates} overflow=${row.overflow}\\n`);
  }

  await page.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  const widths = {};
  for (const route of KEY_PAGES) {
    widths[route] = {};
    for (const width of [390, 768, 1024, 1440]) {
      await page.send("Emulation.setDeviceMetricsOverride", {
        width,
        height: width < 768 ? 844 : 900,
        deviceScaleFactor: 1,
        mobile: width < 1024,
      });
      await page.open(`${ORIGIN}${route}?w=${width}`);
      const measured = await page.evaluate(MEASURE);
      const bad = measured.lines.filter((line) => Math.abs(line.width - measured.clientW) > 2 || measured.overflow);
      widths[route][width] = {
        clientW: measured.clientW,
        lines: measured.lines.length,
        overflow: measured.overflow,
        bad: bad.map((line) => ({ text: line.text, width: line.width })),
      };
    }
  }

  await page.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await page.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await page.open(`${ORIGIN}/guides/argentina-citizenship-investment-vs-paraguay?reduced=1`);
  const reduced = await page.evaluate(MEASURE);
  const reducedLine = reduced.lines.find((line) => /How Much Do You Need/.test(line.text)) || reduced.lines.find((line) => line.tag === "H2");

  await page.send("Emulation.setEmulatedMedia", { features: [] });
  await page.open(`${ORIGIN}/guides/argentina-citizenship-investment-vs-paraguay`);
  const paraguay = await page.evaluate(MEASURE);
  const paraguayLine = paraguay.lines.find((line) => /How Much Do You Need/.test(line.text));
  const shots = {};
  if (paraguayLine) {
    for (const [name, ratio] of [["before", 0.95], ["mid", 0.72], ["full", 0.4]]) {
      await page.evaluate(`${PLACE}(${paraguayLine.index}, ${ratio})`);
      const shot = await page.send("Page.captureScreenshot", { format: "png" });
      const file = path.join(OUT, `paraguay-${name}.png`);
      fs.writeFileSync(file, Buffer.from(shot.data, "base64"));
      shots[name] = file;
    }
  }

  const sticky = await page.evaluate(`(() => {
    const scroller = document.querySelector(".overflow-x-auto");
    if (!scroller) return { found: false };
    scroller.scrollLeft = 120;
    const cell = scroller.querySelector(".sticky");
    if (!cell) return { found: false };
    const cellLeft = cell.getBoundingClientRect().left;
    const scrollerLeft = scroller.getBoundingClientRect().left;
    return { found: true, delta: Math.round(cellLeft - scrollerLeft) };
  })()`);

  const report = {
    routes: summary.length,
    dividers: summary.reduce((sum, row) => sum + row.lines, 0),
    failures,
    reduced: {
      motion: reduced.motion,
      width: reducedLine?.width,
      clientW: reduced.clientW,
      transform: reducedLine?.transform,
      color: reducedLine?.color,
    },
    widths,
    shots,
    sticky,
    paraguay: summary.find((row) => row.route.includes("paraguay")),
  };
  fs.writeFileSync(path.join(OUT, "report.json"), JSON.stringify(report, null, 2));
  console.log(JSON.stringify({
    routes: report.routes,
    dividers: report.dividers,
    failureCount: failures.length,
    failures: failures.slice(0, 12),
    reduced: report.reduced,
    sticky,
    paraguay: report.paraguay,
    widths,
    shots,
  }, null, 2));

  chrome.kill();
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
