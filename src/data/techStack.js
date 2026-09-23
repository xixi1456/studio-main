/**
 * 技术方向（我们做什么）。
 * 原则：不写成「课程介绍」，每一项都对应真实做过的东西。
 *
 * 注意：RoboMaster 赛事相关内容已迁到 event.js，
 * 这里只留「五个技术方向」这一件事，避免同一份内容两处维护。
 */
export const techStack = {
  eyebrow: "FIELD OF WORK",
  title: "我们做什么",
  lead: "五个方向拼出一台完整的机器人。没有哪个人只写代码，也没有哪个人只拧螺丝——所有人都要对自己的东西在整机上跑起来负责。",
  items: [
    {
      index: "01",
      key: "mechanical",
      name: "机械",
      nameEn: "Mechanical",
      summary: "把算法和代码最终变成真实的机械结构。",
      skills: [
        "结构设计",
        "CAD",
        "3D 打印",
        "机构设计",
        "公差与配合",
        "加工与装配",
      ],
      responsibility: "负责整机的结构方案、传动与机构，对强度、重量和可维护性负责。",
    },
    {
      index: "02",
      key: "electrical",
      name: "电控",
      nameEn: "Electrical",
      summary: "连接每一个模块，让整台机器人可靠运行。",
      skills: ["PCB 设计", "供电与电源管理", "电机驱动", "CAN 总线", "传感器", "线路与走线"],
      responsibility: "负责电路方案、配电与线束，处理干扰、掉电和可靠性问题。",
    },
    {
      index: "03",
      key: "embedded",
      name: "嵌入式",
      nameEn: "Embedded",
      summary: "让机器人真正「活起来」的底层软件。",
      skills: [
        "STM32",
        "ESP32",
        "CAN",
        "UART / SPI / I2C",
        "FreeRTOS",
        "电机控制",
        "传感器驱动",
        "在线调试",
      ],
      responsibility: "负责主控程序、通信协议与实时控制，是硬件和上层算法之间的桥。",
    },
    {
      index: "04",
      key: "vision",
      name: "视觉",
      nameEn: "Vision",
      summary: "让机器人拥有眼睛，能看见并认出目标。",
      skills: ["相机选型与标定", "目标检测", "目标跟踪", "装甲板识别", "弹道解算", "光照与鲁棒性"],
      responsibility: "负责感知链路，输出稳定可信的目标位姿，让自瞄打得准。",
    },
    {
      index: "05",
      key: "algorithm",
      name: "算法",
      nameEn: "Algorithm",
      summary: "让机器人不仅能动，而且能感知和决策。",
      skills: ["PID 与串级控制", "滤波与状态估计", "路径规划", "行为决策", "数据分析"],
      responsibility: "负责控制与决策策略，把整机行为调到稳定、可复现。",
    },
  ],
};
