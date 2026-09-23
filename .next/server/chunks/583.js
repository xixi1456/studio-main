"use strict";
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 23583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95182);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55635);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41392);




/**
 * 统一区块标题：编号 + 英文小标 + 中文大标题 + 引言。
 */ const SectionHeading = ({ index, eyebrow, title, titleEn, children, actions, align = "left", className })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(className),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FadeIn__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP, {
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("max-w-3xl", align === "center" && "mx-auto text-center"),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)("flex items-center gap-3", align === "center" && "justify-center"),
                    children: [
                        index && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "font-mono text-xs font-medium tracking-[0.2em] text-accent",
                            children: index
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            "aria-hidden": "true",
                            className: "h-px w-8 bg-accent/50"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400",
                            children: eyebrow
                        })
                    ]
                }),
                titleEn && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "mt-8 font-display text-2xl font-medium tracking-tight text-neutral-500 sm:text-3xl",
                    children: titleEn
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-2 flex flex-wrap items-center gap-x-5 gap-y-3",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "font-display text-4xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]",
                            children: title
                        }),
                        actions
                    ]
                }),
                children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mt-6 max-w-2xl text-lg text-neutral-400 [text-wrap:pretty]",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeading);


/***/ })

};
;