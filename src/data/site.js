/**
 * 站点基础信息。
 * 换届 / 改名 / 换联系方式，只改这个文件。
 */
export const site = {
  /** 英文战队名，用于导航栏、Logo 与首屏封面 */
  name: "FEVER",
  /** 中文名 */
  nameCn: "机器人创新工作室",
  /** 完整称呼，用于 Footer / 版权 */
  fullName: "机器人创新工作室-FEVER战队",
  /** 归属（学校 / 学院 / 单位），没有可留空 */
  affiliation: "校团委直属",
  /** 一句话定位，出现在导航下方和 SEO */
  tagline: "BUILD ROBOTS. BUILD YOURSELF.",
  /** Hero 副标题 */
  intro: "从代码到机器人，把想法真正做出来。",

  /**
   * 首屏「开场定调」。
   * slogan 一行一个元素，按顺序堆叠；换标语只改这里。
   */
  hero: {
    /** 顶部胶囊：换赛季只改这一行 */
    badge: "RoboMaster 2027 赛季宣讲会",
    /** 主标语（英文大字，海报主体） */
    slogan: ["BUILD ROBOTS.", "BUILD YOURSELF."],
    /** 副标语：一句中文定调 */
    sloganCn: "把想法做成真的机器人。",
    /** 首屏说明段 */
    lead: "我们做的不是课程作业，而是一台真的会被开上赛场的机器人——结构、电路、代码、调试，全部由队员自己完成。",
    /** 开场封面层的滚动提示 */
    scrollHint: "向下滚动",
  },
  description:
    "一支真正在做机器人的学生技术团队。机械、视觉、电控、硬件、运营五个方向一起把想法做成整机，并带着它去打 RoboMaster。",
  /** 关键词（SEO） */
  keywords: [
    "RoboMaster",
    "机器人",
    "嵌入式",
    "STM32",
    "电控",
    "机械设计",
    "计算机视觉",
    "学生技术团队",
    "招新",
  ],

  /** 招新 / 加入入口 */
  join: {
    /** 主 CTA 文案 */
    cta: "加入我们",
    /**
     * 二维码图片：真实招新群二维码（QQ 群）。
     * 图片四周已内置白色静默区，直接替换 public/images/join/qrcode.png 即可换码，不用改代码。
     * 想退回占位图：把下面这行改成 "/images/join/qrcode-placeholder.svg"。
     */
    qrImage: "/images/join/qrcode.png",
    /** 占位图（自绘，不会被误扫）：仅作缺图兜底 / 未定二维码时使用 */
    qrImagePlaceholder: "/images/join/qrcode-placeholder.svg",
    qrTitle: "扫码加入招新群",
    qrNote: "QQ / 微信招新群 · 宣讲会现场同步答疑",
    /** 招新口号 */
    slogan: "不用等准备好，来了再学。",
    /** 报名问卷链接（问卷星）：Button 会自动新窗口打开外链 */
    formUrl: "https://v.wjx.cn/vm/Qsw1FME.aspx#",
    deadline: "待定报名截止时间",
    interview: "面试时间与地点待定",
  },

  /** 首页统计。没有确认的信息保留为待补充，避免宣讲现场误导。 */
  stats: [
    { label: "成立年份", value: "2025" },
    { label: "赛事获奖", value: "2026赛季山东站十六强" },
  ],

  /** 联系方式：对外统一走招新二维码，不留邮箱 */
  contact: {
    name: "扫码联系招新群",
    /** 工作室位置 */
    location: "具体位置见宣讲会通知",
  },

  /**
   * 社交平台，只用真实存在的链接。
   * 填链接时去掉 ?spm_id_from=... 这类平台追踪参数，保持干净。
   */
  social: [
    { label: "GitHub", href: "https://github.com/", type: "github" },
    {
      label: "Bilibili",
      href: "https://www.bilibili.com/video/BV1x9en64EnM/?spm_id_from=333.1387.homepage.video_card.click&vd_source=fe99f8ec3cf2f05076d6bc6c0e47ce44",
      type: "bilibili",
    },
    { label: "公众号", href: "#", type: "wechat" },
  ],
};

/** 导航：宣讲会现场讲解顺序与页面结构一致 */
export const navigation = [
  { label: "首页", href: "/" },
  { label: "RoboMaster", href: "#robomaster" },
  { label: "战队介绍", href: "#team" },
  { label: "五大组别", href: "#groups" },
  { label: "培养路径", href: "#training" },
  { label: "报名信息", href: "#join" },
];
