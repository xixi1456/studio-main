"use strict";
exports.id = 607;
exports.ids = [607];
exports.modules = {

/***/ 3607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1392);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5635);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5182);





const PageIntro = ({ index, eyebrow, title, children, centered = false })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        className: "pt-24 sm:pt-32",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .ZP, {
            onMount: true,
            className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(centered && "text-center"),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("flex items-center gap-3", centered && "justify-center"),
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
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "mt-8 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-6xl",
                    children: title
                }),
                children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)("mt-6 max-w-2xl text-lg text-neutral-400", centered && "mx-auto"),
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageIntro);


/***/ })

};
;