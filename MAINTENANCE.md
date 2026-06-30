# 内容维护清单

这份清单用于维护《人生进阶指南》的内容结构和发布质量。

## 导航同步

- 根目录 `SUMMARY.md` 用于仓库首页视角，链接应以 `docs/` 开头。
- `docs/SUMMARY.md` 用于中文 Docsify 站点，链接应相对 `docs/`。
- `docs/en/SUMMARY.md` 用于英文 Docsify 站点，英文缺失的中文章节可使用 `#/threads/...` 指向中文主站。
- 新增公开章节时，同步检查首页入口、对应 SUMMARY 和上下篇链接。

## 链接与路径

- 本地 Markdown 链接应优先使用相对路径或 Docsify hash 路径。
- 项目自身 GitHub 仓库链接使用 `https://github.com/byoungd/up`。
- GitHub Pages 链接使用 `https://byoungd.github.io/up/#/`。
- 保留明确指向外部项目或历史资料的链接，例如知乎、GitBook、其他仓库和历史 issue。

## 内容更新

- AI 工具、模型能力、政策、价格、考试规则等易变信息必须标注资料日期。
- 涉及 AI 产品能力时，优先引用官方帮助页、产品博客或一手资料。
- 历史叙事和个人复盘不做无必要重写，只修明显错字、断链和结构问题。
- 章节标题层级保持连续：单个页面以 `#` 开始，主要小节用 `##`。

## 双语同步

- 中文是主线版本，英文保留核心入口和重点章节。
- 英文页面若不是完整翻译，应在开头标注中文来源或主入口。
- 更新英语学习、AI 学习、首页路径时，同步检查中英文 README 和 SUMMARY。

## 发布前检查

```bash
git status -sb
git diff --check
rg -n "2026-03-20|Learning with AI \\(2026 Edition\\)|利用 AI 学习（2026 版）|WIP|2025 Note|byoungd.github.io/English-level-up-tips" README.md SUMMARY.md docs -g '*.md' -g '*.html'
```

如需检查本地 Markdown 链接，可运行一个只读脚本扫描相对链接是否存在；遇到 URL 编码路径时记得先做 `decodeURI`。
