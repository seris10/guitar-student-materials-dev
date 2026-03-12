import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const REQUIRED_PAGES = [
  "index.html",
  "login.html",
  "practice-log.html",
  "song-bank.html",
  "settings.html",
  "skill.html",
  "teacher.html",
  "tuner.html",
];
const SKIP_DIRS = new Set([".git", ".github", "node_modules", "worker", "tests", "monitoring"]);
const TARGET_EXTENSIONS = new Set([".html", ".js", ".css"]);
const FORBIDDEN_PATTERNS = [
  { pattern: /constellation-react\.html/g, reason: "leftover Star Map draft link" },
  { pattern: /data-page="star-map"/g, reason: "leftover Star Map nav marker" },
  { pattern: /\bcodex\b/gi, reason: "unexpected codex branding" },
];

async function walkFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolute = path.join(dir, entry.name);
    const relative = path.relative(ROOT, absolute);

    if (entry.isDirectory()) {
      if (SKIP_DIRS.has(entry.name)) continue;
      files.push(...(await walkFiles(absolute)));
      continue;
    }

    if (TARGET_EXTENSIONS.has(path.extname(entry.name))) {
      files.push(relative);
    }
  }

  return files;
}

async function main() {
  const failures = [];

  for (const page of REQUIRED_PAGES) {
    const absolute = path.join(ROOT, page);
    const body = await readFile(absolute, "utf8");
    if (!body.includes("<title>")) {
      failures.push(`${page}: missing <title> tag`);
    }
    if (!body.includes("</html>")) {
      failures.push(`${page}: missing closing </html> tag`);
    }
  }

  const candidateFiles = await walkFiles(ROOT);
  for (const relative of candidateFiles) {
    const absolute = path.join(ROOT, relative);
    const body = await readFile(absolute, "utf8");

    for (const rule of FORBIDDEN_PATTERNS) {
      if (rule.pattern.test(body)) {
        failures.push(`${relative}: ${rule.reason}`);
      }
      rule.pattern.lastIndex = 0;
    }
  }

  if (failures.length) {
    console.error("Smoke checks failed:");
    for (const failure of failures) {
      console.error(`- ${failure}`);
    }
    process.exit(1);
  }

  console.log(`Smoke checks passed (${candidateFiles.length} files scanned).`);
}

main().catch((error) => {
  console.error("Smoke checks crashed:", error);
  process.exit(1);
});
