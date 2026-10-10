/**
 * Scroll-linked reveal for major editorial rules.
 * The line is a scaleX transform, so the layout box stays full width.
 * Paint always reads the lines currently in the document.
 * Without this module, or with reduced motion, the CSS line stays complete.
 */

const REVEAL_START = 0.9;
const REVEAL_END = 0.55;

const lines = new Set<HTMLElement>();
const headingWatch = new Set<HTMLElement>();
let domObserver: MutationObserver | null = null;
let listening = false;
let frame = 0;
let rebindFrame = 0;
let users = 0;

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const progressFor = (top: number, viewportHeight: number) => {
  const start = viewportHeight * REVEAL_START;
  const end = viewportHeight * REVEAL_END;
  if (top >= start) return 0;
  if (top <= end) return 1;
  return (start - top) / (start - end);
};

const PROSE_LINE = [
  ".editorial-sections > h2:not(:first-of-type)",
  ".editorial-sections > astro-slot > h2:not(:first-of-type)",
  ".editorial-rule",
].join(", ");

const markArticleLines = () => {
  document.querySelectorAll<HTMLElement>(PROSE_LINE).forEach((line) => {
    if (!line.isConnected || line.closest(".not-prose")) return;
    if (!line.hasAttribute("data-editorial-line")) line.setAttribute("data-editorial-line", "");
  });
};

const visibleLines = () =>
  [...document.querySelectorAll<HTMLElement>("[data-editorial-line]")].filter(
    (line) => line.isConnected && getComputedStyle(line).display !== "none",
  );

const sectionHeading = (section: HTMLElement) => {
  const heading = section.querySelector("h2");
  if (!heading) return null;
  if (heading.closest(".editorial-prose, .editorial-sections, form")) return null;
  return heading;
};

const pendingHeadings = () => {
  const found: HTMLElement[] = [];
  document.querySelectorAll<HTMLElement>("[data-editorial-heading]").forEach((item) => {
    found.push(item);
  });
  document.querySelectorAll<HTMLElement>(".editorial-section").forEach((section) => {
    const heading = sectionHeading(section);
    if (heading && !found.includes(heading)) found.push(heading);
  });
  return found.filter((item) => !item.classList.contains("editorial-heading-in"));
};

const paint = () => {
  const viewportHeight = window.innerHeight;
  lines.forEach((line) => {
    if (!line.isConnected) return;
    const next = progressFor(line.getBoundingClientRect().top, viewportHeight).toFixed(3);
    if (line.style.getPropertyValue("--line-progress") !== next) {
      line.style.setProperty("--line-progress", next);
    }
  });
  headingWatch.forEach((item) => {
    if (!item.isConnected) {
      headingWatch.delete(item);
      return;
    }
    const rect = item.getBoundingClientRect();
    const alreadyVisible = rect.top < viewportHeight * 0.82 && rect.bottom > 0 && rect.top < viewportHeight * 0.2;
    if (alreadyVisible) {
      headingWatch.delete(item);
      return;
    }
    if (rect.top < viewportHeight * 0.88 && rect.bottom > 0) {
      item.classList.add("editorial-heading-in");
      headingWatch.delete(item);
    }
  });
};

const schedule = () => {
  if (frame) return;
  frame = window.requestAnimationFrame(() => {
    frame = 0;
    paint();
  });
};

const onScroll = () => schedule();

const startListening = () => {
  if (listening) return;
  listening = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
};

const stopListening = () => {
  if (!listening) return;
  listening = false;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
};

const sameNodes = (current: Set<HTMLElement>, next: HTMLElement[]) =>
  current.size === next.length && next.every((node) => current.has(node));

const rebind = () => {
  if (users === 0 || reducedMotion()) return;

  markArticleLines();
  const nextLines = visibleLines();
  if (!sameNodes(lines, nextLines)) {
    lines.clear();
    nextLines.forEach((line) => lines.add(line));
  }

  const nextHeadings = pendingHeadings().filter((item) => {
    const rect = item.getBoundingClientRect();
    return !(rect.top < window.innerHeight * 0.82 && rect.bottom > 0);
  });
  if (!sameNodes(headingWatch, nextHeadings)) {
    headingWatch.clear();
    nextHeadings.forEach((item) => headingWatch.add(item));
  }

  if (lines.size > 0 || headingWatch.size > 0) {
    document.documentElement.classList.add("editorial-motion");
    startListening();
  }
  paint();
};

const scheduleRebind = () => {
  if (rebindFrame) return;
  rebindFrame = window.requestAnimationFrame(() => {
    rebindFrame = 0;
    rebind();
  });
};

const stop = () => {
  domObserver?.disconnect();
  domObserver = null;
  lines.forEach((line) => line.style.removeProperty("--line-progress"));
  lines.clear();
  headingWatch.clear();
  stopListening();
  document.documentElement.classList.remove("editorial-motion");
};

export const bindEditorialSection = (section: HTMLElement) => {
  if (reducedMotion() || !section.isConnected) return () => {};

  users += 1;
  if (!domObserver) {
    domObserver = new MutationObserver(scheduleRebind);
    domObserver.observe(document.body, { childList: true, subtree: true });
  }
  rebind();
  scheduleRebind();

  return () => {
    users = Math.max(0, users - 1);
    if (users === 0) stop();
  };
};
