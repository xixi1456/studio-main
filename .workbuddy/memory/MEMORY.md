# studio-main 项目长期约定

RoboMaster 宣讲会官网（Next.js 13 App Router + Tailwind 3 + Framer Motion）。
改造前是开源商业模板 "Abdullah Agency"，改造方案见仓库根目录 `RoboMaster_宣讲会官网_Abdullah_Agency改造方案.md`。

## 硬约定

1. **换届/改内容只改 `src/data/`**：`site.js` / `projects.js` / `techStack.js` / `team.js` / `recruitment.js`。组件里不写死文案，这是这个项目最重要的约定。
   - 换赛季只改 `site.js` 的 `event`（首屏胶囊「RoboMaster · 2027 赛季宣讲会」）
2. **客户端组件不要直接 `import` 数据模块**：由服务端页面裁剪出需要的字段、以 props 传入。否则整份数据（含九段长文案）会被打进客户端包。
3. **唯一主色**：`accent #FF4D2E`，底色 `ink #0A0A0A`。**不要**再引入第二个强调色。
4. **边框统一 `border-white/10`**，卡片圆角 `rounded-3xl`（大区块 `rounded-4xl`）。
5. **机器人图必须是透明底 PNG**，放 `public/images/robots/`（ASCII 文件名），一律经 `RobotStage` 组件渲染（自动加光晕/同心环/地面阴影）。**不要**给机器人图加白底方框。
   - 图片几乎占满画布（440×440，alpha bbox 约占 90%），要往图上放标注必须先量 bbox。
6. **动效克制**：只允许淡入/位移/stagger/hover/SVG 自绘。不要粒子、3D、WebGL、无限滚动、鼠标跟随——宣讲会现场的电脑、投影、网络都不稳定。
7. **`FadeIn` 的 `viewport.margin` 保持 `"0px"`**，不要改成负值；首屏元素用 `onMount`。
8. **`npm run build` 必须零错误零警告**，改完要跑一次。

## 组件速查

| 用途 | 组件 |
| --- | --- |
| 统一区块标题（编号+eyebrow+中英标题） | `SectionHeading` |
| 子页面开头（h1 + 引言） | `PageIntro` |
| 机器人展示（光晕+同心环+阴影） | `RobotStage` |
| 滚动/挂载淡入，支持 stagger | `FadeIn` / `FadeInStagger`（`onMount` / `delay`） |
| 按钮（primary/secondary/ghost） | `Button` |
| 标签 | `TagList` / `TagListItem`（`accent` 变体） |
| 二维码（含 onError 兜底占位图） | `QrCode` |
| 工程蓝图网格底纹 | `GridBackdrop` |
| 首屏（SVG HUD 动效 + 队徽水印） | `Hero`（客户端组件，收 `robotCount` / `robot` props） |

## 首屏的 SVG 动效（`Hero.jsx` 内）

全部用 framer-motion 的 `pathLength`（自绘）与 `rotate`（自转），没有引入任何动画库或 Lottie：

- 队徽 Mark 水印：六边形自绘 2.4s → 三角弹性弹出 → 整组 160s 自转（右上角，`text-white/[0.065]`）
- HUD 仪表：72 格刻度环逐格自绘、虚线环 + 两段强调弧自绘后 90s 自转、雷达针 7s 自转、十字准线逐段自绘、四角取景括弧逐角自绘、地面阴影
- 工程标注 2 条：圆点落在机器人部件上 → 引线自绘 → 两行中英标签淡入
- 网格横向扫描线：11s 循环

**改这些时的注意**
- 水印里若要用主色，必须写 `fill="#FF4D2E" fillOpacity="0.1"`；**`className="fill-accent"` 是不透明的**，外层 `text-white/xx` 管不到它。
- 标注文字位置受限于图片留白，改动前先量 alpha bbox（见当日日志里的 canvas 量法）。
- 尊重 `useReducedMotion()`：所有自转/扫描在 reduce 状态下停掉，只保留静态图形。


## 路由

`/` 完整 Landing · `/projects` · `/projects/[slug]`（六台：hero/infantry/engineer/sentry/aerial/dart，九段式拆解）· `/team` · `/join` · `not-found`

## 维护纪律（踩过的坑）

- **同一个文件不要在同一个批次里发多个 Edit**：会互相覆盖，静默回滚。逐个发，每次用 Grep 复核落盘。
- **负的 `viewport.margin` 会让首屏内容停在 `opacity:0`**——静态截图看不出来，必须用浏览器审计（见下）。
- **本机 bash 是极简 PortableGit**：没有 `ls` / `mkdir` / `head` / `tail` / `dirname` / `find`。文件操作走 `python -c`，检索走 Grep/Glob 工具。
- **`run_in_background` 起的 `next start` 会被回收**。验证脚本要自己 spawn 服务、验证完自己 kill。

## 验证工具（在 `D:/干活/_tools/`，不在仓库内）

```bash
node run-audit.js        # spawn 服务 → 12 个「视口×路由」组合审计 → kill
node shot-seg.js <url> <前缀> [宽] [高]   # 分段截图（可读的单屏图）
node shot-all.js         # 全站整页截图
```
判据：**首屏隐藏元素=0、errors=0、h1Top ≥ navH**。

## 上线前必须替换（占位内容）

1. 队名 `FEVER` → `src/data/site.js` + `src/components/Logo.jsx`（两处）
2. 招新二维码 → `public/images/join/qrcode.png`，并把 `site.js` 的 `join.qrImage` 指过去
3. `site.js` 的 `contact.email` / `location` / `social`（现为 `join@example.com` 等占位）
4. `projects.js` 的比赛相关内容与 `techStack.js` 的 `journey` 年份——**不得虚构成绩**
