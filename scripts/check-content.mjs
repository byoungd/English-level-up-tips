#!/usr/bin/env node
// 内容校验脚本（零依赖，仅用 Node 内置模块）。
// 把 MAINTENANCE.md 里的人工检查清单落地为可自动执行的校验：
//   1. 所有 Markdown 内的相对链接与图片路径真实存在；
//   2. Docsify 的 `#/...` hash 路由解析到真实文件；
//   3. 三个 SUMMARY.md 指向的文件都存在，且中文两份（根 / docs）条目一致；
//   4. 复刻 MAINTENANCE.md 的陈旧字符串扫描（旧日期 / 旧域名 / WIP 等）。
// 任意一项失败即以非 0 退出码结束，并打印「文件:行 问题」清单。
//
// 用法：node scripts/check-content.mjs

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, relative, extname } from "node:path";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(ROOT, "docs");

const errors = [];
const addError = (file, line, msg) =>
  errors.push({ file: relative(ROOT, file), line, msg });

const IGNORE_DIRS = new Set([".git", "node_modules", ".github"]);

/** 递归收集指定扩展名的文件。 */
function walk(dir, exts, out = []) {
  for (const name of readdirSync(dir)) {
    if (IGNORE_DIRS.has(name)) continue;
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, exts, out);
    else if (exts.includes(extname(name))) out.push(p);
  }
  return out;
}

const isExternal = (t) => /^(https?:|mailto:|tel:|data:|\/\/)/i.test(t);

/** 把 Docsify 的 `/threads/...` 路由解析为 docs 下的真实文件路径。 */
function routeToFile(route) {
  let r = route.replace(/^\//, "");
  if (r === "") return join(DOCS, "README.md");
  const p = join(DOCS, decodeURIComponent(r));
  if (r.endsWith("/")) return join(p, "README.md");
  if (!extname(p)) return p + ".md";
  return p;
}

/**
 * 把一个链接目标解析为应当存在的本地文件；返回 null 表示无需校验
 * （外部链接、页内锚点、空目标）。
 */
function resolveTarget(file, rawTarget) {
  let t = rawTarget.trim();
  if (!t) return null;
  // 去掉 Markdown 链接里的可选 title： [x](path "title")
  t = t.replace(/\s+["'].*$/, "").trim();
  if (!t || isExternal(t)) return null;
  if (t.startsWith("#/")) return routeToFile(t.slice(1));
  if (t.startsWith("#")) return null; // 页内锚点，不校验
  const pathPart = t.split("#")[0].split("?")[0];
  if (!pathPart) return null;
  try {
    return resolve(dirname(file), decodeURIComponent(pathPart));
  } catch {
    return resolve(dirname(file), pathPart);
  }
}

const MD_LINK_RE = /!?\[[^\]]*\]\(([^)]+)\)/g; // [text](t) 与 ![alt](t)
const HREF_RE = /href\s*=\s*["']([^"']+)["']/gi; // <a href="...">

/** 逐文件提取链接，跳过围栏代码块，校验本地目标是否存在。 */
function checkLinksInFile(file) {
  const text = readFileSync(file, "utf8");
  const lines = text.split("\n");
  let inFence = false;
  lines.forEach((line, i) => {
    const fenceMatch = line.match(/^\s*(```|~~~)/);
    if (fenceMatch) {
      inFence = !inFence;
      return;
    }
    if (inFence) return;

    const targets = [];
    let m;
    MD_LINK_RE.lastIndex = 0;
    while ((m = MD_LINK_RE.exec(line))) targets.push(m[1]);
    HREF_RE.lastIndex = 0;
    while ((m = HREF_RE.exec(line))) targets.push(m[1]);

    for (const raw of targets) {
      const resolved = resolveTarget(file, raw);
      if (resolved && !existsSync(resolved)) {
        addError(file, i + 1, `链接目标不存在: ${raw} -> ${relative(ROOT, resolved)}`);
      }
    }
  });
}

/** 提取一个 SUMMARY 文件里引用的内容文件（.md），归一化为 repo 根相对路径。 */
function summaryTargets(file, prefix) {
  const text = readFileSync(file, "utf8");
  const set = new Set();
  let m;
  MD_LINK_RE.lastIndex = 0;
  while ((m = MD_LINK_RE.exec(text))) {
    const t = m[1].split("#")[0].split("?")[0].trim();
    if (!t || isExternal(t) || t.startsWith("#")) continue;
    if (extname(t) !== ".md") continue;
    // prefix 用于把 docs/SUMMARY 的相对路径补成 repo 根视角，便于与根 SUMMARY 对比
    const norm = t.startsWith("docs/") ? t : prefix + t;
    set.add(norm);
  }
  return set;
}

/** 校验根 SUMMARY 与 docs/SUMMARY 引用的中文内容文件集合一致。 */
function checkSummaryConsistency() {
  const rootSummary = join(ROOT, "SUMMARY.md");
  const docsSummary = join(DOCS, "SUMMARY.md");
  if (!existsSync(rootSummary) || !existsSync(docsSummary)) return;
  const rootSet = summaryTargets(rootSummary, "docs/");
  const docsSet = summaryTargets(docsSummary, "docs/");
  for (const t of rootSet)
    if (!docsSet.has(t))
      addError(rootSummary, 0, `条目存在于根 SUMMARY 但缺失于 docs/SUMMARY: ${t}`);
  for (const t of docsSet)
    if (!rootSet.has(t))
      addError(docsSummary, 0, `条目存在于 docs/SUMMARY 但缺失于根 SUMMARY: ${t}`);
}

/** 复刻 MAINTENANCE.md 的陈旧字符串扫描。 */
const STALE_PATTERNS = [
  "2026-03-20",
  "Learning with AI (2026 Edition)",
  "利用 AI 学习（2026 版）",
  "WIP",
  "2025 Note",
  "byoungd.github.io/English-level-up-tips",
];

function checkStaleStrings() {
  const targets = [
    join(ROOT, "README.md"),
    join(ROOT, "SUMMARY.md"),
    ...walk(DOCS, [".md", ".html"]),
  ].filter(existsSync);
  for (const file of targets) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      for (const pat of STALE_PATTERNS) {
        if (line.includes(pat)) {
          addError(file, i + 1, `命中陈旧字符串: "${pat}"`);
        }
      }
    });
  }
}

// ---- 执行 ----
const mdFiles = walk(ROOT, [".md"]);
for (const f of mdFiles) checkLinksInFile(f);
checkSummaryConsistency();
checkStaleStrings();

if (errors.length === 0) {
  console.log(`✓ 内容校验通过：扫描 ${mdFiles.length} 个 Markdown 文件，未发现问题。`);
  process.exit(0);
}

console.error(`✗ 发现 ${errors.length} 个问题：\n`);
for (const e of errors) {
  const loc = e.line ? `${e.file}:${e.line}` : e.file;
  console.error(`  ${loc}  ${e.msg}`);
}
process.exit(1);
