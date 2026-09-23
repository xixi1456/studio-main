# FEVER · RoboMaster 宣讲会官网

一支学生机器人技术团队的官网 / 宣讲会落地页。基于 Next.js 13（App Router）+ Tailwind CSS 3 + Framer Motion。

宣讲会现场用投影访问时，首页按讲解顺序一页讲完整个故事：

```
HERO（slogan + 战队核心数据）
  ↓ 01 RoboMaster 是什么
  ↓ 02 战队介绍
  ↓ 03 五大组别（机械 / 视觉 / 电控 / 硬件 / 运营）
  ↓ 04 新人培养路径
  ↓ 05 报名信息（二维码 + 问卷 + 时间 + 联系人）
```

独立页面：`/projects`（六台机器人）、`/projects/[slug]`（项目拆解）、`/team`、`/join`。

## 快速开始

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # 产出静态页面，部署前必跑
```

## 换届 / 日常维护：只改数据

所有文案都在 `src/data/`，组件里不写死内容。

| 文件 | 内容 |
| --- | --- |
| `src/data/site.js` | 队名、口号、联系方式、社交链接、**招新二维码**、导航 |
| `src/data/projects.js` | 六台机器人：卡片信息 + 详情页的九段拆解 |
| `src/data/techStack.js` | RoboMaster 赛事说明、旧项目页仍使用的工程流程数据 |
| `src/data/team.js` | 战队成立 / 隶属 / 规模 / 指导老师 / 资源 / 历史成绩 |
| `src/data/recruitment.js` | 五大组别（做什么 / 需要什么 / 零基础）、培养路径 |

### 上线前必须替换的四样东西

1. **队名**：`src/data/site.js` 里的 `name` / `nameCn` / `fullName`，以及 `src/components/Logo.jsx` 里的 `FEVER` 文字。
2. **招新二维码**：已替换为真实 QQ 群二维码（`public/images/join/qrcode.png`，图片四周内置白色静默区）。换码时直接覆盖这个文件即可，不用改代码；缺图时会自动回退到 `qrcode-placeholder.svg` 占位图。
3. **联系方式**：`site.js` 的 `contact.email` / `contact.location` 和 `social` 链接（现在都是占位地址）。
4. **项目文案与时间线**：`projects.js` / `techStack.js` 里的 `journey` 是按模板先写好的，请按实际情况核对，**没有的成绩不要写**。

## 图片

机器人图片放在 `public/images/robots/`，命名与项目 `slug` 对应（透明底 PNG，440×440）：

```
hero.png  infantry.png  engineer.png  sentry.png  aerial.png  dart.png
```

`RobotStage` 组件会给图片自动加聚光光晕、同心环和地面阴影，所以**不需要**给图片加白底或圆角。
换图时保持透明底 + 正方形效果最好。

其余目录按用途扩展：`public/images/join/`（二维码）、`public/images/workshop/`（调试 / 装配 / 比赛照片）、`public/images/team/`（成员照片）、`public/images/logo/`。

## 设计约定

- 深色底 `#0A0A0A`（`ink`），主色只有**一个**：信号橙红 `#FF4D2E`（`accent`）。不要再加第二个强调色。
- 字体：Mona Sans（`src/fonts/`），标题用 `font-display`（宽度 125 变体）。
- 圆角统一 `rounded-3xl` / `rounded-4xl`；卡片边框一律 `border-white/10`，hover 提升到 `white/25`。
- 动效原则：只做「进入、滚动、hover」，不做满屏粒子 / 3D / 无限滚动——宣讲会现场的电脑和投影仪可能很弱。
- 已适配 `prefers-reduced-motion`，响应式覆盖手机 / 平板 / 笔记本 / 16:9 投影。

## 目录结构

```
src/
├── app/                 # 路由（App Router）
│   ├── page.jsx         # 首页（宣讲会主页面）
│   ├── projects/        # 项目列表 + [slug] 详情
│   ├── team/  join/     # 团队 / 招新
│   └── layout.jsx       # 全局元信息与布局
├── components/          # 页面区块组件（Hero / About / TechStack / Projects / ...）
├── data/                # 全部文案与数据 ← 换届改这里
└── config/site.js       # SEO / 社交分享
```

## 这一版刻意不做的事

后台、登录、数据库、CMS、在线报名、复杂 3D、WebGL —— 宣讲会需要的是一个**漂亮、稳定、断网也能开**的展示站。
