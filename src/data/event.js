/**
 * RoboMaster 赛事数据。
 *
 * 只放公开可查的赛事事实，不写战队自己的成绩——
 * 成绩统一放 team.js，避免同一件事在两个文件里各写一遍。
 *
 * 兵种部分不在这里重复维护：直接复用 projects.js，
 * 用 slug 关联，保证「赛事里的兵种」和「我们做的机器人」永远是同一份数据。
 */
export const event = {
  links: {
    robomaster: "https://www.bilibili.com/video/BV1xGwezFEUN/?spm_id_from=333.1387.homepage.video_card.click&vd_source=fe99f8ec3cf2f05076d6bc6c0e47ce44%20%20%E8%B5%9B%E4%BA%8B%E5%85%A5%E5%9D%91%E6%8C%87%E5%8D%97%20https%3A%2F%2Fwww.bilibili.com%2Fvideo%2FBV1aN8n6sEUU%2F%3Fspm_id_from%3D333.337.search-card.all.click&vd_source=fe99f8ec3cf2f05076d6bc6c0e47ce44%20%20%20RMUC%E7%B2%BE%E5%BD%A9%E7%9E%AC%E9%97%B4%20https%3A%2F%2Fwww.douyin.com%2Fuser%2FMS4wLjABAAAAyq7qbZtnj809OT2KZy0hUPwJdfnr4CM_xGojVyyO1R0%3Fmodal_id%3D7628155641181343018%20%20%20RMUL%E6%AF%94%E8%B5%9B%E9%87%87%E8%AE%BF%20https%3A%2F%2Fwww.bilibili.com%2Fvideo%2FBV1x9en64EnM%2F%3Fspm_id_from%3D333.1387.homepage.video_card.click&vd_source=fe99f8ec3cf2f05076d6bc6c0e47ce44%20%20%E6%88%98%E9%98%9F%E5%AE%A3%E4%BC%A0%E8%A7%86%E9%A2%91",
    rmuc: "https://www.bilibili.com/video/BV1aN8n6sEUU/?spm_id_from=333.337.search-card.all.click&vd_source=fe99f8ec3cf2f05076d6bc6c0e47ce44",
    rmul: "https://www.douyin.com/user/MS4wLjABAAAAyq7qbZtnj809OT2KZy0hUPwJdfnr4CM_xGojVyyO1R0?modal_id=7628155641181343018",
    recognition: "https://www3.xzmu.edu.cn/jwc/getcontent?id=101858&url=show#1",
  },
  title: "RoboMaster 是什么？",
  titleEn: "BUILD. DRIVE. COMPETE.",
  lead: "RoboMaster 机甲大师赛由大疆创新发起并承办。参赛队伍要自主研发多种功能的机器人，在标准场地里进行团队战术对抗——从结构、电路、代码到战术，全部由学生自己完成。",

  /** 比赛形式：先讲清「怎么打」 */
  format: {
    title: "比赛怎么打",
    desc: "对战双方各自研发一支机器人编队，在同一块标准场地内协同作战。",
    points: [
      { label: "对阵", value: "红蓝双方，多兵种团队对抗" },
      { label: "手段", value: "操作手遥控 + 机器人自主决策，发射弹丸攻防" },
      { label: "胜负", value: "比赛结束时基地剩余血量高的一方获胜" },
    ],
  },

  /** 两个系列赛：超级对抗赛是顶级赛事，高校联盟赛是分站赛 */
  series: [
    {
      key: "rmuc",
      href: "#",
      code: "RMUC",
      name: "机甲大师超级对抗赛RMUC",
      nameEn: "RoboMaster University Championship",
      tag: "顶级赛事 · 7 v 7",
      desc: "高校系列赛里的顶级赛事。七台机器人同场协同，步兵、英雄、工程、哨兵、空中机器人、飞镖系统和雷达各司其职。参赛名额要先通过技术评审，是对一支队伍整体工程能力要求最高的舞台。",
      points: [
        "7 v 7 团队协同，七个兵种分工明确",
        "需通过技术评审才能取得区域赛名额",
        "区域赛优胜者进入复活赛与全国总决赛",
      ],
      schedule: "区域赛 5–6 月 · 复活赛与全国总决赛 7–8 月",
    },
    {
      key: "rmul",
      href: "#",
      code: "RMUL",
      name: "机甲大师高校联盟赛RMUL",
      nameEn: "RoboMaster University League",
      tag: "分站赛 · 三个赛项",
      desc: "按城市设站的分站赛，门槛比超级对抗赛友好得多：规则难度、机器人数量和所需的人力、资金都更低，适合新队伍打出第一场比赛，积累实战经验和赛事积分，再向超级对抗赛晋级。",
      points: [
        "分站举办，可就近参赛",
        "含 1 v 1 步兵对抗赛、工程挑战赛、3 v 3 对抗赛三个赛项",
        "表现优异可积累积分，向超级对抗赛晋级",
      ],
      schedule: "各城市分站举办 · 具体站点以官方公布为准",
    },
  ],

  /** 兵种区：兵种图取自 projects.js */
  robotsSection: {
    title: "兵种分类",
    /** 有实拍图、可以点进详情页的兵种（对应 projects 的 slug） */
    interactiveSlugs: ["hero", "infantry", "engineer", "sentry", "aerial", "dart"],
    /** 暂时没有实拍图的兵种，只做文字说明，不给空图位 */
    extra: [
      {
        name: "雷达",
        nameEn: "Radar",
        role: "信息中枢",
        desc: "2026 赛季起升级为队伍的信息收集与决策中枢，也是首个能够反制空中机器人的兵种。",
      },
    ],
  },

  /** 赛事地位：按官方口径写，不写网上流传的「XX 项」数字 */
  recognition: {
    href: "https://www3.xzmu.edu.cn/jwc/getcontent?id=101858&url=show#1",
    title: "赛事地位",
    desc: "RoboMaster 属于全国大学生机器人大赛，由共青团中央、全国学联、深圳市人民政府联合主办，已列入中国高等教育学会《全国普通高校大学生竞赛分析报告》竞赛目录。",
  },
};
