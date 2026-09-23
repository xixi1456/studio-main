exports.id = 839;
exports.ids = [839];
exports.modules = {

/***/ 5917:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4282, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6505, 23))

/***/ }),

/***/ 2581:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8616))

/***/ }),

/***/ 5477:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4280))

/***/ }),

/***/ 6444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);



const variants = {
    primary: "bg-accent text-ink hover:bg-accent-soft focus-visible:outline-accent",
    secondary: "border border-white/15 text-white hover:border-white/40 hover:bg-white/5 focus-visible:outline-white/40",
    ghost: "text-neutral-300 hover:text-white focus-visible:outline-white/40"
};
const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-sm sm:text-base"
};
const Button = ({ href, variant = "primary", size = "md", className, children, ...props })=>{
    const cls = (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", variants[variant], sizes[size], className);
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": "true",
                className: "transition-transform duration-200 group-hover/btn:translate-x-0.5",
                children: "→"
            })
        ]
    });
    if (href) {
        const isExternal = href.startsWith("http");
        if (isExternal) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: href,
                target: "_blank",
                rel: "noreferrer",
                className: cls,
                ...props,
                children: inner
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            className: cls,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: cls,
        ...props,
        children: inner
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 6664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(566);


const Container = ({ as: Component = "div", className, innerClassName, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("mx-auto w-full max-w-2xl lg:max-w-none", innerClassName),
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 8616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FadeInStagger: () => (/* binding */ FadeInStagger),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1498);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3234);
/* __next_internal_client_entry_do_not_use__ FadeInStagger,default auto */ 


const FadeInStaggerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
/**
 * 滚动触发边距。
 *
 * 刻意用 0：不把「进入视口」的判定线往上抬。
 * 曾经用过 -200px / -120px / -40px，都会让「顶部刚好压在折叠线上」的元素
 * 一直停在 opacity:0，必须多滚一点才出现——矮屏（1366×768）上尤其明显，
 * 而这类缺陷在静态截图里完全看不出来。
 * 现在只要元素有任意一部分进入视口就会触发，从根上杜绝「首屏内容不显示」。
 * 首屏内的元素另外用 onMount 让动画随加载播放，双保险。
 */ const viewport = {
    once: true,
    margin: "0px"
};
const FadeIn = ({ onMount = false, delay = 0, transition, ...props })=>{
    const shouldReduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__/* .useReducedMotion */ .J)();
    const isInStaggerGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FadeInStaggerContext);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
        variants: {
            hidden: {
                opacity: 0,
                y: shouldReduceMotion ? 0 : 24
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        transition: transition ?? {
            duration: 0.5,
            delay
        },
        ...isInStaggerGroup && !onMount ? {} : onMount ? {
            initial: "hidden",
            animate: "visible"
        } : {
            initial: "hidden",
            whileInView: "visible",
            viewport
        },
        ...props
    });
};
const FadeInStagger = ({ faster = false, onMount = false, ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(FadeInStaggerContext.Provider, {
        value: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .motion */ .E.div, {
            initial: "hidden",
            ...onMount ? {
                animate: "visible"
            } : {
                whileInView: "visible",
                viewport
            },
            transition: {
                staggerChildren: faster ? 0.12 : 0.2
            },
            ...props
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FadeIn);


/***/ }),

/***/ 4280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_RootLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(6664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/data/site.js
/**
 * 站点基础信息。
 * 换届 / 改名 / 换联系方式，只改这个文件。
 */ const site = {
    /** 英文战队名，用于导航栏、Logo 与首屏封面 */ name: "FEVER",
    /** 中文名 */ nameCn: "机器人创新工作室",
    /** 完整称呼，用于 Footer / 版权 */ fullName: "机器人创新工作室-FEVER战队",
    /** 归属（学校 / 学院 / 单位），没有可留空 */ affiliation: "校团委直属",
    /** 一句话定位，出现在导航下方和 SEO */ tagline: "BUILD ROBOTS. BUILD YOURSELF.",
    /** Hero 副标题 */ intro: "从代码到机器人，把想法真正做出来。",
    /**
   * 首屏「开场定调」。
   * slogan 一行一个元素，按顺序堆叠；换标语只改这里。
   */ hero: {
        /** 顶部胶囊：换赛季只改这一行 */ badge: "RoboMaster 2027 赛季宣讲会",
        /** 主标语（英文大字，海报主体） */ slogan: [
            "BUILD ROBOTS.",
            "BUILD YOURSELF."
        ],
        /** 副标语：一句中文定调 */ sloganCn: "把想法做成真的机器人。",
        /** 首屏说明段 */ lead: "我们做的不是课程作业，而是一台真的会被开上赛场的机器人——结构、电路、代码、调试，全部由队员自己完成。",
        /** 开场封面层的滚动提示 */ scrollHint: "向下滚动"
    },
    description: "一支真正在做机器人的学生技术团队。机械、视觉、电控、硬件、运营五个方向一起把想法做成整机，并带着它去打 RoboMaster。",
    /** 关键词（SEO） */ keywords: [
        "RoboMaster",
        "机器人",
        "嵌入式",
        "STM32",
        "电控",
        "机械设计",
        "计算机视觉",
        "学生技术团队",
        "招新"
    ],
    /** 招新 / 加入入口 */ join: {
        /** 主 CTA 文案 */ cta: "加入我们",
        /**
     * 二维码图片：真实招新群二维码（QQ 群）。
     * 图片四周已内置白色静默区，直接替换 public/images/join/qrcode.png 即可换码，不用改代码。
     * 想退回占位图：把下面这行改成 "/images/join/qrcode-placeholder.svg"。
     */ qrImage: "/images/join/qrcode.png",
        /** 占位图（自绘，不会被误扫）：仅作缺图兜底 / 未定二维码时使用 */ qrImagePlaceholder: "/images/join/qrcode-placeholder.svg",
        qrTitle: "扫码加入招新群",
        qrNote: "QQ / 微信招新群 \xb7 宣讲会现场同步答疑",
        /** 招新口号 */ slogan: "不用等准备好，来了再学。",
        /** 报名问卷链接（问卷星）：Button 会自动新窗口打开外链 */ formUrl: "https://v.wjx.cn/vm/Qsw1FME.aspx#",
        deadline: "待定报名截止时间",
        interview: "面试时间与地点待定"
    },
    /** 首页统计。没有确认的信息保留为待补充，避免宣讲现场误导。 */ stats: [
        {
            label: "成立年份",
            value: "2025"
        },
        {
            label: "赛事获奖",
            value: "2026赛季山东站十六强"
        }
    ],
    /** 联系方式：对外统一走招新二维码，不留邮箱 */ contact: {
        name: "扫码联系招新群",
        /** 工作室位置 */ location: "具体位置见宣讲会通知"
    },
    /**
   * 社交平台，只用真实存在的链接。
   * 填链接时去掉 ?spm_id_from=... 这类平台追踪参数，保持干净。
   */ social: [
        {
            label: "GitHub",
            href: "https://github.com/",
            type: "github"
        },
        {
            label: "Bilibili",
            href: "https://www.bilibili.com/video/BV1x9en64EnM/?spm_id_from=333.1387.homepage.video_card.click&vd_source=fe99f8ec3cf2f05076d6bc6c0e47ce44",
            type: "bilibili"
        },
        {
            label: "公众号",
            href: "#",
            type: "wechat"
        }
    ]
};
/** 导航：宣讲会现场讲解顺序与页面结构一致 */ const site_navigation = [
    {
        label: "首页",
        href: "/"
    },
    {
        label: "RoboMaster",
        href: "#robomaster"
    },
    {
        label: "战队介绍",
        href: "#team"
    },
    {
        label: "五大组别",
        href: "#groups"
    },
    {
        label: "培养路径",
        href: "#training"
    },
    {
        label: "报名信息",
        href: "#join"
    }
];

;// CONCATENATED MODULE: ./src/components/Logo.jsx





/**
 * 战队标识图片。
 * 换 logo 只需要覆盖 public/images/brand/logo.png，不用改代码。
 * 原图 785×786 透明底 PNG，这里按 1:1 声明尺寸，实际显示大小由 class 控制。
 */ const LOGO_SRC = "/images/brand/logo.png";
/** 战队标识：官方 logo 图（透明圆底），替代早期的六边形占位图形 */ const Mark = ({ className })=>/*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: LOGO_SRC,
        alt: `${site.name} 战队标识`,
        width: 785,
        height: 786,
        priority: true,
        sizes: "72px",
        className: (0,clsx/* default */.Z)("flex-none rounded-full", className)
    });
const Logo = ({ href, className, invert = false, showName = true })=>{
    const content = /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
        className: "inline-flex items-center gap-2.5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Mark, {
                className: "h-8 w-8 sm:h-9 sm:w-9"
            }),
            showName && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "flex flex-col leading-none",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "font-display text-lg font-bold tracking-[0.14em]",
                        children: site.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "mt-0.5 text-[9px] font-medium tracking-[0.22em] text-neutral-500",
                        children: site.nameCn
                    })
                ]
            })
        ]
    });
    const cls = (0,clsx/* default */.Z)("inline-flex items-center transition", invert ? "text-white hover:text-accent" : "text-white hover:text-accent", className);
    if (href) {
        return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            "aria-label": "回到首页",
            className: cls,
            children: content
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: cls,
        children: content
    });
};
/* harmony default export */ const components_Logo = (Logo);

// EXTERNAL MODULE: ./src/components/Button.jsx
var Button = __webpack_require__(6444);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var index_esm = __webpack_require__(2717);
// EXTERNAL MODULE: ./node_modules/react-icons/io/index.esm.js
var io_index_esm = __webpack_require__(2772);
;// CONCATENATED MODULE: ./src/components/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 










const Navbar = ()=>{
    const pathname = (0,navigation.usePathname)();
    const [expanded, setExpanded] = (0,react_.useState)(false);
    const [scrolled, setScrolled] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    // 路由变化时收起移动端菜单
    (0,react_.useEffect)(()=>{
        setExpanded(false);
    }, [
        pathname
    ]);
    (0,react_.useEffect)(()=>{
        document.body.style.overflow = expanded ? "hidden" : "";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        expanded
    ]);
    const isActive = (href)=>href === "/" ? pathname === "/" : pathname.startsWith(href);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                className: (0,clsx/* default */.Z)("fixed inset-x-0 top-0 z-50 transition duration-300", scrolled || expanded ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "border-b border-transparent"),
                children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                    className: "flex h-16 items-center justify-between sm:h-20",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex w-full items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                                href: "/"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                className: "hidden items-center gap-1 md:flex",
                                children: site_navigation.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                        href: item.href,
                                        className: (0,clsx/* default */.Z)("relative rounded-full px-4 py-2 text-sm font-medium transition", isActive(item.href) ? "text-white" : "text-neutral-400 hover:text-white"),
                                        children: [
                                            item.label,
                                            isActive(item.href) && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "absolute inset-x-4 -bottom-0.5 h-px bg-accent"
                                            })
                                        ]
                                    }, item.href))
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                        href: "/join",
                                        size: "md",
                                        className: "hidden sm:inline-flex",
                                        children: site.join.cta
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        onClick: ()=>setExpanded((v)=>!v),
                                        "aria-expanded": expanded,
                                        "aria-label": expanded ? "关闭菜单" : "打开菜单",
                                        className: "-m-2.5 rounded-full p-2.5 text-white transition hover:bg-white/10 md:hidden",
                                        children: expanded ? /*#__PURE__*/ jsx_runtime_.jsx(io_index_esm/* IoMdClose */.QAE, {
                                            className: "h-6 w-6"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx(index_esm/* HiMenuAlt4 */.iwI, {
                                            className: "h-6 w-6"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (0,clsx/* default */.Z)("fixed inset-0 z-40 bg-ink transition duration-300 md:hidden", expanded ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-16 lg:px-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            className: "mx-auto flex w-full max-w-2xl flex-col",
                            children: site_navigation.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: item.href,
                                    className: (0,clsx/* default */.Z)("border-b border-white/10 py-5 font-display text-3xl font-medium tracking-tight transition", isActive(item.href) ? "text-accent" : "text-white"),
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "mr-3 font-mono text-xs text-neutral-500",
                                            children: [
                                                "0",
                                                i + 1
                                            ]
                                        }),
                                        item.label
                                    ]
                                }, item.href))
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "mx-auto mt-10 w-full max-w-2xl",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                    href: "/join",
                                    size: "lg",
                                    className: "w-full",
                                    children: site.join.cta
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "mt-6 text-sm text-neutral-500",
                                    children: site.join.slogan
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(8616);
;// CONCATENATED MODULE: ./src/components/Footer.jsx






const socialIcon = {
    github: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    }),
    bilibili: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M7.2 2.5 9.9 5h4.2l2.7-2.5 1.4 1.5L16.7 5.5H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2.3L5.8 4 7.2 2.5ZM19 7.5H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-9.5 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"
    }),
    wechat: /*#__PURE__*/ jsx_runtime_.jsx("path", {
        d: "M9.2 3C5.2 3 2 5.7 2 9c0 1.9 1 3.6 2.7 4.7l-.7 2.1 2.4-1.2c.8.2 1.7.4 2.6.4h.4a5.6 5.6 0 0 1-.2-1.5c0-3.2 3.1-5.8 7-5.8h.5C16.1 4.9 13 3 9.2 3Zm-2.6 4.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.2 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.4 2.1c-3.3 0-6 2.2-6 4.9s2.7 4.9 6 4.9c.7 0 1.4-.1 2-.3l1.9 1-.5-1.7c1.4-.9 2.2-2.2 2.2-3.7 0-2.8-2.6-5.1-6-5.1Zm-2.1 3.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm4.2 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"
    })
};
const SocialIcon = ({ type, className })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: socialIcon[type] ?? socialIcon.github
    });
const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "relative mt-24 border-t border-white/10 sm:mt-32",
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            className: "py-16 sm:py-20",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn["default"], {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(components_Logo, {
                                        href: "/"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-6 max-w-xs text-sm leading-relaxed text-neutral-500",
                                        children: site.description
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-6 flex items-center gap-3",
                                        children: site.social.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: item.href,
                                                target: item.href.startsWith("http") ? "_blank" : undefined,
                                                rel: "noreferrer",
                                                "aria-label": item.label,
                                                className: "rounded-full border border-white/10 p-2 text-neutral-400 transition hover:border-accent/50 hover:text-accent",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(SocialIcon, {
                                                    type: item.type,
                                                    className: "h-4 w-4"
                                                })
                                            }, item.label))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500",
                                        children: "导航"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        role: "list",
                                        className: "mt-5 space-y-3 text-sm",
                                        children: site_navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: item.href,
                                                    className: "text-neutral-400 transition hover:text-white",
                                                    children: item.label
                                                })
                                            }, item.href))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500",
                                        children: "联系我们"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        role: "list",
                                        className: "mt-5 space-y-3 text-sm text-neutral-400",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "block text-neutral-500",
                                                        children: "位置"
                                                    }),
                                                    site.contact.location
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "block text-neutral-500",
                                                        children: "招新"
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "/join",
                                                        className: "transition hover:text-white",
                                                        children: [
                                                            site.join.cta,
                                                            " \xb7 ",
                                                            site.join.qrTitle
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " ",
                                    site.fullName
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "font-mono uppercase tracking-[0.18em] text-neutral-600",
                                children: site.tagline
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/RootLayout.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const RootLayout = ({ children })=>{
    const pathname = (0,navigation.usePathname)();
    const photoOnly = pathname === "/team";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative flex min-h-full flex-col bg-ink text-neutral-100",
        children: [
            !photoOnly && /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "relative z-10 flex-auto",
                children: children
            }),
            !photoOnly && /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
};
/* harmony default export */ const components_RootLayout = (RootLayout);


/***/ }),

/***/ 3530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Layout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/RootLayout.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\战队网站\src\components\RootLayout.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const RootLayout = (__default__);
// EXTERNAL MODULE: ./src/config/site.js
var site = __webpack_require__(4042);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5023);
;// CONCATENATED MODULE: ./src/app/layout.jsx




const metadata = (0,site/* constructMetadata */.t)();
function Layout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "zh-CN",
        className: "h-full bg-ink text-base antialiased text-neutral-100",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: "flex min-h-full flex-col",
            children: /*#__PURE__*/ jsx_runtime_.jsx(RootLayout, {
                children: children
            })
        })
    });
}


/***/ }),

/***/ 9653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1392);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5635);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(732);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_site__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8308);






const NotFound = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        className: "pt-32 sm:pt-40",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .ZP, {
            className: "flex flex-col items-center text-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "font-mono text-xs uppercase tracking-[0.2em] text-accent",
                    children: "Error 404"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl",
                    children: "这个页面不存在"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-5 max-w-md text-lg text-neutral-400",
                    children: "可能是链接写错了，或者这一页还没做出来。回首页看看我们在做什么。"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-9",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        href: "/",
                        size: "lg",
                        children: "回到首页"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm",
                    children: _data_site__WEBPACK_IMPORTED_MODULE_5__/* .navigation */ .G.slice(1).map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: item.href,
                            className: "text-neutral-500 transition hover:text-white",
                            children: item.label
                        }, item.href))
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);


/***/ }),

/***/ 732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5182);



const variants = {
    primary: "bg-accent text-ink hover:bg-accent-soft focus-visible:outline-accent",
    secondary: "border border-white/15 text-white hover:border-white/40 hover:bg-white/5 focus-visible:outline-white/40",
    ghost: "text-neutral-300 hover:text-white focus-visible:outline-white/40"
};
const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-7 py-3.5 text-sm sm:text-base"
};
const Button = ({ href, variant = "primary", size = "md", className, children, ...props })=>{
    const cls = (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", variants[variant], sizes[size], className);
    const inner = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": "true",
                className: "transition-transform duration-200 group-hover/btn:translate-x-0.5",
                children: "→"
            })
        ]
    });
    if (href) {
        const isExternal = href.startsWith("http");
        if (isExternal) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: href,
                target: "_blank",
                rel: "noreferrer",
                className: cls,
                ...props,
                children: inner
            });
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            className: cls,
            ...props,
            children: inner
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: "button",
        className: cls,
        ...props,
        children: inner
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 1392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5182);


const Container = ({ as: Component = "div", className, innerClassName, children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)("mx-auto w-full max-w-2xl lg:max-w-none", innerClassName),
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 5635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   o$: () => (/* binding */ e0)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\战队网站\src\components\FadeIn.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["FadeInStagger"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 4042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ constructMetadata)
/* harmony export */ });
/* harmony import */ var _data_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8308);
/** 站点 SEO / 社交分享配置 */ 
function constructMetadata({ title = `${_data_site__WEBPACK_IMPORTED_MODULE_0__/* .site */ .l.name} · ${_data_site__WEBPACK_IMPORTED_MODULE_0__/* .site */ .l.nameCn}`, description = _data_site__WEBPACK_IMPORTED_MODULE_0__/* .site */ .l.description, image = "/images/og.png", icons = "/favicon.ico", noIndex = false } = {}) {
    return {
        title,
        description,
        keywords: _data_site__WEBPACK_IMPORTED_MODULE_0__/* .site */ .l.keywords,
        openGraph: {
            title,
            description,
            type: "website",
            images: [
                {
                    url: image
                }
            ]
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [
                image
            ]
        },
        icons,
        metadataBase: new URL("https://example.com"),
        themeColor: "#0A0A0A",
        ...noIndex && {
            robots: {
                index: false,
                follow: false
            }
        }
    };
}


/***/ }),

/***/ 8308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ navigation),
/* harmony export */   l: () => (/* binding */ site)
/* harmony export */ });
/**
 * 站点基础信息。
 * 换届 / 改名 / 换联系方式，只改这个文件。
 */ const site = {
    /** 英文战队名，用于导航栏、Logo 与首屏封面 */ name: "FEVER",
    /** 中文名 */ nameCn: "机器人创新工作室",
    /** 完整称呼，用于 Footer / 版权 */ fullName: "机器人创新工作室-FEVER战队",
    /** 归属（学校 / 学院 / 单位），没有可留空 */ affiliation: "校团委直属",
    /** 一句话定位，出现在导航下方和 SEO */ tagline: "BUILD ROBOTS. BUILD YOURSELF.",
    /** Hero 副标题 */ intro: "从代码到机器人，把想法真正做出来。",
    /**
   * 首屏「开场定调」。
   * slogan 一行一个元素，按顺序堆叠；换标语只改这里。
   */ hero: {
        /** 顶部胶囊：换赛季只改这一行 */ badge: "RoboMaster 2027 赛季宣讲会",
        /** 主标语（英文大字，海报主体） */ slogan: [
            "BUILD ROBOTS.",
            "BUILD YOURSELF."
        ],
        /** 副标语：一句中文定调 */ sloganCn: "把想法做成真的机器人。",
        /** 首屏说明段 */ lead: "我们做的不是课程作业，而是一台真的会被开上赛场的机器人——结构、电路、代码、调试，全部由队员自己完成。",
        /** 开场封面层的滚动提示 */ scrollHint: "向下滚动"
    },
    description: "一支真正在做机器人的学生技术团队。机械、视觉、电控、硬件、运营五个方向一起把想法做成整机，并带着它去打 RoboMaster。",
    /** 关键词（SEO） */ keywords: [
        "RoboMaster",
        "机器人",
        "嵌入式",
        "STM32",
        "电控",
        "机械设计",
        "计算机视觉",
        "学生技术团队",
        "招新"
    ],
    /** 招新 / 加入入口 */ join: {
        /** 主 CTA 文案 */ cta: "加入我们",
        /**
     * 二维码图片：真实招新群二维码（QQ 群）。
     * 图片四周已内置白色静默区，直接替换 public/images/join/qrcode.png 即可换码，不用改代码。
     * 想退回占位图：把下面这行改成 "/images/join/qrcode-placeholder.svg"。
     */ qrImage: "/images/join/qrcode.png",
        /** 占位图（自绘，不会被误扫）：仅作缺图兜底 / 未定二维码时使用 */ qrImagePlaceholder: "/images/join/qrcode-placeholder.svg",
        qrTitle: "扫码加入招新群",
        qrNote: "QQ / 微信招新群 \xb7 宣讲会现场同步答疑",
        /** 招新口号 */ slogan: "不用等准备好，来了再学。",
        /** 报名问卷链接（问卷星）：Button 会自动新窗口打开外链 */ formUrl: "https://v.wjx.cn/vm/Qsw1FME.aspx#",
        deadline: "待定报名截止时间",
        interview: "面试时间与地点待定"
    },
    /** 首页统计。没有确认的信息保留为待补充，避免宣讲现场误导。 */ stats: [
        {
            label: "成立年份",
            value: "2025"
        },
        {
            label: "赛事获奖",
            value: "2026赛季山东站十六强"
        }
    ],
    /** 联系方式：对外统一走招新二维码，不留邮箱 */ contact: {
        name: "扫码联系招新群",
        /** 工作室位置 */ location: "具体位置见宣讲会通知"
    },
    /**
   * 社交平台，只用真实存在的链接。
   * 填链接时去掉 ?spm_id_from=... 这类平台追踪参数，保持干净。
   */ social: [
        {
            label: "GitHub",
            href: "https://github.com/",
            type: "github"
        },
        {
            label: "Bilibili",
            href: "https://www.bilibili.com/video/BV1x9en64EnM/?spm_id_from=333.1387.homepage.video_card.click&vd_source=fe99f8ec3cf2f05076d6bc6c0e47ce44",
            type: "bilibili"
        },
        {
            label: "公众号",
            href: "#",
            type: "wechat"
        }
    ]
};
/** 导航：宣讲会现场讲解顺序与页面结构一致 */ const navigation = [
    {
        label: "首页",
        href: "/"
    },
    {
        label: "RoboMaster",
        href: "#robomaster"
    },
    {
        label: "战队介绍",
        href: "#team"
    },
    {
        label: "五大组别",
        href: "#groups"
    },
    {
        label: "培养路径",
        href: "#training"
    },
    {
        label: "报名信息",
        href: "#join"
    }
];


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"16x16"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5023:
/***/ (() => {



/***/ })

};
;