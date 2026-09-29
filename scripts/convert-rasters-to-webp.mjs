import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const QUALITY = 84;
const MAX_EDGE = 2560;
const SKIP_DIR_PARTS = new Set([
  "node_modules",
  "dist",
  ".git",
  "comparison-wired-review",
  "photo-placeholder-review",
  "table-preview-review",
]);

function shouldSkip(filePath) {
  const parts = filePath.split(path.sep);
  return parts.some((part) => SKIP_DIR_PARTS.has(part));
}

function collectSources(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (shouldSkip(full)) continue;
    if (entry.isDirectory()) {
      collectSources(full, acc);
      continue;
    }
    if (/\.(jpe?g)$/i.test(entry.name)) {
      acc.push(full);
    } else if (/\.png$/i.test(entry.name)) {
      if (
        full.includes(`${path.sep}public${path.sep}`) ||
        full.includes(`${path.sep}src${path.sep}assets${path.sep}`)
      ) {
        acc.push(full);
      }
    }
  }
  return acc;
}

const sources = collectSources(ROOT);
const report = [];

for (const src of sources) {
  const dest = src.replace(/\.(jpe?g|png)$/i, ".webp");
  const input = sharp(src);
  const meta = await input.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  const longest = Math.max(width, height);
  let pipeline = sharp(src);
  if (longest > MAX_EDGE) {
    pipeline = pipeline.resize({
      width: width >= height ? MAX_EDGE : undefined,
      height: height > width ? MAX_EDGE : undefined,
      fit: "inside",
      withoutEnlargement: true,
    });
  }
  await pipeline.webp({ quality: QUALITY, effort: 6 }).toFile(dest);
  const srcStat = fs.statSync(src);
  const destStat = fs.statSync(dest);
  report.push({
    src: path.relative(ROOT, src),
    dest: path.relative(ROOT, dest),
    width,
    height,
    srcBytes: srcStat.size,
    destBytes: destStat.size,
  });
}

console.log(JSON.stringify(report, null, 2));
console.error(`Converted ${report.length} images`);
