"use strict";
exports.id = 699;
exports.ids = [699];
exports.modules = {

/***/ 6806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(566);
/* __next_internal_client_entry_do_not_use__ default auto */ 


/**
 * 二维码位。
 * 当前指向真实招新群二维码 public/images/join/qrcode.png（四周已内置白色静默区，保证扫码）。
 * 换码：直接覆盖 qrcode.png，或在 src/data/site.js 里改 join.qrImage。
 * 图片加载失败时自动回退到占位图 qrcode-placeholder.svg（占位图不会被误扫）。
 */ const QrCode = ({ src, alt, size = 180, className })=>{
    const [failed, setFailed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fallback = "/images/join/qrcode-placeholder.svg";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("relative flex items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2", className),
        style: {
            width: size,
            height: size
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: failed ? fallback : src,
            alt: alt,
            width: size,
            height: size,
            onError: ()=>setFailed(true),
            className: "h-full w-full rounded-xl object-contain"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QrCode);


/***/ }),

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_JoinCta)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(1392);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(5635);
// EXTERNAL MODULE: ./src/components/Button.jsx
var Button = __webpack_require__(732);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./src/components/QrCode.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\战队网站\src\components\QrCode.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const QrCode = (__default__);
// EXTERNAL MODULE: ./src/data/site.js
var site = __webpack_require__(8308);
// EXTERNAL MODULE: ./src/data/recruitment.js
var recruitment = __webpack_require__(6721);
// EXTERNAL MODULE: ./src/components/TagList.jsx
var TagList = __webpack_require__(9568);
;// CONCATENATED MODULE: ./src/components/JoinCta.jsx








const JoinCta = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "join",
        className: "relative scroll-mt-24 overflow-hidden border-t border-white/10 py-24 sm:py-32 lg:py-32",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                "aria-hidden": "true",
                className: "pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[70rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/[0.13] blur-[150px]"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn/* default */.ZP, {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent",
                                children: "06 \xb7 REGISTRATION"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-8 font-display text-[clamp(3rem,13vw,9rem)] font-bold leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)]",
                                children: "JOIN US"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "mx-auto mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-4xl",
                                children: "报名加入，和我们一起做一台真的机器人。"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mx-auto mt-6 max-w-2xl text-lg text-neutral-400",
                                children: "招新群二维码、报名问卷、截止时间和面试安排都在这里。"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* default */.ZP, {
                        className: "mt-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-wrap justify-center gap-2",
                            children: recruitment/* recruitment */.H.openness.qualities.map((q)=>/*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                                    accent: true,
                                    children: q
                                }, q))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                className: "mt-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-ink p-7",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-mono text-xs text-accent",
                                        children: "01"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "mt-5 font-display text-xl font-semibold text-white",
                                        children: "招新群二维码"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-3 text-sm leading-relaxed text-neutral-500",
                                        children: "扫码进群，获取宣讲会现场答疑和后续通知。"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-ink p-7",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-mono text-xs text-accent",
                                        children: "02"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "mt-5 font-display text-xl font-semibold text-white",
                                        children: "报名问卷"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-3 text-sm leading-relaxed text-neutral-500",
                                        children: "填写兴趣方向与可投入时间，提交报名信息。"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "bg-ink p-7",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-mono text-xs text-accent",
                                        children: "03"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "mt-5 font-display text-xl font-semibold text-white",
                                        children: "截止与面试"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "mt-3 text-sm leading-relaxed text-neutral-500",
                                        children: [
                                            site/* site */.l.join.deadline,
                                            "；",
                                            site/* site */.l.join.interview,
                                            "。"
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
                className: "mt-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* default */.ZP, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid gap-10 rounded-4xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                        className: "font-display text-2xl font-semibold text-white sm:text-3xl",
                                        children: "现在就可以开始"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "mt-4 max-w-xl text-base leading-relaxed text-neutral-400",
                                        children: "不用等准备好。先扫码进群，或者直接来实验室看一台车怎么装起来—— 比任何介绍都直接。"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "mt-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500",
                                                children: "招新方向"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagList */.P, {
                                                className: "mt-3",
                                                children: recruitment/* recruitment */.H.directions.map((d)=>/*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                                                        children: d.name
                                                    }, d.key))
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "mt-8 flex flex-wrap gap-3",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                            href: site/* site */.l.join.formUrl,
                                            size: "lg",
                                            children: "填写报名问卷"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col items-center gap-4 lg:pl-6",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(QrCode, {
                                        src: site/* site */.l.join.qrImage,
                                        alt: site/* site */.l.join.qrTitle,
                                        size: 188
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-sm font-semibold text-white",
                                                children: site/* site */.l.join.qrTitle
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "mt-1 text-xs text-neutral-500",
                                                children: site/* site */.l.join.qrNote
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const components_JoinCta = (JoinCta);


/***/ })

};
;