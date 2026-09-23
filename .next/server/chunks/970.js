"use strict";
exports.id = 970;
exports.ids = [970];
exports.modules = {

/***/ 6709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5182);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);



/**
 * 机器人展示台。
 * 因为图片是透明底 PNG，这里用「聚光灯 + 同心环 + 地面阴影」给机器人一个舞台，
 * 而不是套一个白色方框（深色背景上更干净）。
 */ const RobotStage = ({ src, alt, priority = false, className, imageClassName, sizes = "(min-width: 1024px) 36rem, 88vw", rings = true, glow = true })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("relative isolate", className),
        children: [
            glow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                "aria-hidden": "true",
                className: "absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(circle_at_50%_42%,rgba(255,77,46,0.22),rgba(255,255,255,0.07)_40%,transparent_72%)] blur-2xl"
            }),
            rings && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 400 400",
                className: "absolute inset-0 -z-10 h-full w-full text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "200",
                        cy: "200",
                        r: "188",
                        fill: "none",
                        stroke: "currentColor",
                        strokeOpacity: "0.07"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                        cx: "200",
                        cy: "200",
                        r: "150",
                        fill: "none",
                        stroke: "currentColor",
                        strokeOpacity: "0.09",
                        strokeDasharray: "2 8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M200 4v26M200 370v26M4 200h26M370 200h26",
                        stroke: "currentColor",
                        strokeOpacity: "0.22",
                        strokeWidth: "1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M200 12a188 188 0 0 1 133 61",
                        fill: "none",
                        stroke: "#FF4D2E",
                        strokeOpacity: "0.7",
                        strokeWidth: "1.5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M67 339a188 188 0 0 1-42-97",
                        fill: "none",
                        stroke: "#FF4D2E",
                        strokeOpacity: "0.45",
                        strokeWidth: "1.5"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ellipse", {
                        cx: "200",
                        cy: "352",
                        rx: "118",
                        ry: "16",
                        fill: "black",
                        fillOpacity: "0.6",
                        className: "blur-[6px]"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative aspect-square w-full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    src: src,
                    alt: alt,
                    fill: true,
                    priority: priority,
                    sizes: sizes,
                    className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("object-contain drop-shadow-[0_28px_50px_rgba(0,0,0,0.6)]", imageClassName)
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RobotStage);


/***/ }),

/***/ 9469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xd: () => (/* binding */ ArrowLeft),
/* harmony export */   ol: () => (/* binding */ ArrowRight)
/* harmony export */ });
/* unused harmony export ArrowDown */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/** 少量手写图标，避免为了两个箭头引入整包图标库 */ 
const ArrowRight = ({ className })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M2.5 8h11M9 3.5 13.5 8 9 12.5"
        })
    });
const ArrowLeft = ({ className })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M13.5 8h-11M7 3.5 2.5 8 7 12.5"
        })
    });
const ArrowDown = ({ className })=>/*#__PURE__*/ _jsx("svg", {
        viewBox: "0 0 16 16",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        "aria-hidden": "true",
        children: /*#__PURE__*/ _jsx("path", {
            d: "M8 2.5v11M3.5 9 8 13.5 12.5 9"
        })
    });


/***/ })

};
;