(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_7babea._.js", {

"[project]/src/components/GridBackdrop.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const GridBackdrop = ({ className, size = 64, opacity = 0.55 })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        "aria-hidden": "true",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("pointer-events-none absolute inset-0 overflow-hidden", className),
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "absolute inset-0",
            style: {
                opacity,
                backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.055) 1px, transparent 1px)",
                backgroundSize: `${size}px ${size}px`,
                maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, white 20%, transparent 78%)",
                WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, white 20%, transparent 78%)"
            }
        }, void 0, false, {
            fileName: "<[project]/src/components/GridBackdrop.jsx>",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/GridBackdrop.jsx>",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = GridBackdrop;

})()),
"[project]/src/components/Button.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
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
    const cls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("group/btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2", variants[variant], sizes[size], className);
    const inner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/Button.jsx>",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                "aria-hidden": "true",
                className: "transition-transform duration-200 group-hover/btn:translate-x-0.5",
                children: "→"
            }, void 0, false, {
                fileName: "<[project]/src/components/Button.jsx>",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (href) {
        const isExternal = href.startsWith("http");
        if (isExternal) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                href: href,
                target: "_blank",
                rel: "noreferrer",
                className: cls,
                ...props,
                children: inner
            }, void 0, false, {
                fileName: "<[project]/src/components/Button.jsx>",
                lineNumber: 48,
                columnNumber: 9
            }, this);
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
            href: href,
            className: cls,
            ...props,
            children: inner
        }, void 0, false, {
            fileName: "<[project]/src/components/Button.jsx>",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
        type: "button",
        className: cls,
        ...props,
        children: inner
    }, void 0, false, {
        fileName: "<[project]/src/components/Button.jsx>",
        lineNumber: 67,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Button;

})()),
"[project]/src/components/Container.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const Container = ({ as: Component = "div", className, innerClassName, children })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Component, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("mx-auto max-w-7xl px-6 lg:px-8", className),
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("mx-auto w-full max-w-2xl lg:max-w-none", innerClassName),
            children: children
        }, void 0, false, {
            fileName: "<[project]/src/components/Container.jsx>",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Container.jsx>",
        lineNumber: 5,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Container;

})()),
"[project]/src/components/Hero.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Container.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridBackdrop$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/GridBackdrop.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
const Orbit = ({ reduce })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
        "aria-hidden": "true",
        viewBox: "0 0 1200 520",
        className: "pointer-events-none absolute left-1/2 top-1/2 h-[250%] w-[118%] -translate-x-1/2 -translate-y-1/2",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("g", {
            transform: "translate(600 260)",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ellipse", {
                    cx: "0",
                    cy: "0",
                    rx: "500",
                    ry: "245",
                    fill: "none",
                    stroke: "white",
                    strokeOpacity: "0.18",
                    strokeWidth: "0.75",
                    vectorEffect: "non-scaling-stroke"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Hero.jsx>",
                    lineNumber: 30,
                    columnNumber: 7
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].g, {
                    style: {
                        transformBox: "fill-box",
                        transformOrigin: "center"
                    },
                    animate: reduce ? undefined : {
                        rotate: 360
                    },
                    transition: {
                        duration: 48,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ellipse", {
                            cx: "0",
                            cy: "0",
                            rx: "405",
                            ry: "200",
                            fill: "none",
                            stroke: "#FF4D2E",
                            strokeOpacity: "0.7",
                            strokeWidth: "0.75",
                            strokeDasharray: "8 8",
                            vectorEffect: "non-scaling-stroke"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 46,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("circle", {
                            cx: "405",
                            cy: "0",
                            r: "3.5",
                            fill: "#FF4D2E"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 58,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("circle", {
                            cx: "-405",
                            cy: "0",
                            r: "3",
                            fill: "#FF4D2E",
                            fillOpacity: "0.75"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 59,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("circle", {
                            cx: "0",
                            cy: "-200",
                            r: "2",
                            fill: "#FF4D2E",
                            fillOpacity: "0.6"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 60,
                            columnNumber: 9
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("circle", {
                            cx: "0",
                            cy: "200",
                            r: "2",
                            fill: "#FF4D2E",
                            fillOpacity: "0.6"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 61,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/Hero.jsx>",
                    lineNumber: 41,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/Hero.jsx>",
            lineNumber: 29,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Hero.jsx>",
        lineNumber: 24,
        columnNumber: 3
    }, this);
const Hero = ({ hero, teamName, joinCta, robots })=>{
    const ref = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    const reduce = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["useReducedMotion"]();
    const { scrollYProgress } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["useScroll"]({
        target: ref,
        offset: [
            "start start",
            "end end"
        ]
    });
    const coverY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["useTransform"](scrollYProgress, [
        0,
        0.74
    ], [
        "0%",
        "100%"
    ]);
    const coverOpacity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["useTransform"](scrollYProgress, [
        0.46,
        0.78
    ], [
        1,
        0
    ]);
    const stageY = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["useTransform"](scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "-5%"
    ]);
    const hintOpacity = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["useTransform"](scrollYProgress, [
        0,
        0.1
    ], [
        1,
        0
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
        ref: ref,
        className: "relative h-[165vh]",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
            className: "sticky top-0 h-screen overflow-hidden",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridBackdrop$2e$jsx__$28$ecmascript$29$__["default"], {
                    opacity: 0.85
                }, void 0, false, {
                    fileName: "<[project]/src/components/Hero.jsx>",
                    lineNumber: 98,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    "aria-hidden": "true",
                    className: "pointer-events-none absolute -right-44 -top-56 h-[32rem] w-[32rem] rounded-full bg-accent/[0.07] blur-[140px]"
                }, void 0, false, {
                    fileName: "<[project]/src/components/Hero.jsx>",
                    lineNumber: 99,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                    style: reduce ? undefined : {
                        y: stageY
                    },
                    className: "relative flex h-full flex-col will-change-transform",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__["default"], {
                            className: "flex flex-1 flex-col justify-center pb-12 pt-24",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-700",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            children: "RoboMaster University Series"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            "aria-hidden": "true",
                                            className: "hidden h-px flex-1 bg-white/[0.07] sm:block"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "hidden sm:block",
                                            children: teamName
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "mt-8 flex justify-center",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                        className: "inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "relative flex h-1.5 w-1.5",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/Hero.jsx>",
                                                        lineNumber: 122,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-accent"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/Hero.jsx>",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/components/Hero.jsx>",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-300",
                                                children: hero.badge
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/Hero.jsx>",
                                                lineNumber: 125,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/Hero.jsx>",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "relative mt-10 flex flex-col items-center",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Orbit, {
                                            reduce: reduce
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                            className: "relative text-center font-display text-[clamp(2.6rem,8.2vw,7rem)] font-bold leading-[0.94] tracking-[-0.025em]",
                                            children: hero.slogan.map((line, i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("block", i === 0 ? "text-white" : "text-neutral-600"),
                                                    children: line
                                                }, line, false, {
                                                    fileName: "<[project]/src/components/Hero.jsx>",
                                                    lineNumber: 136,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mt-12 text-center font-display text-lg text-neutral-200 sm:text-2xl",
                                    children: hero.sloganCn
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-neutral-500 sm:text-base",
                                    children: hero.lead
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                    className: "mt-10 flex flex-wrap items-center justify-center gap-3",
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$28$ecmascript$29$__["default"], {
                                            href: "/join",
                                            size: "lg",
                                            children: joinCta
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$28$ecmascript$29$__["default"], {
                                            href: "https://www.robomaster.com/",
                                            size: "lg",
                                            variant: "secondary",
                                            children: "了解赛事"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "border-y border-white/10 bg-white/[0.02]",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__["default"], {
                                className: "py-5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                    role: "list",
                                    className: "flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:justify-between",
                                    children: robots.map((robot)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                    className: "font-mono text-accent",
                                                    children: robot.index
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Hero.jsx>",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this),
                                                robot.name
                                            ]
                                        }, robot.slug, true, {
                                            fileName: "<[project]/src/components/Hero.jsx>",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Hero.jsx>",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/Hero.jsx>",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                    style: reduce ? {
                        y: "100%"
                    } : {
                        y: coverY,
                        opacity: coverOpacity
                    },
                    className: "absolute inset-0 z-20 bg-ink will-change-transform",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GridBackdrop$2e$jsx__$28$ecmascript$29$__["default"], {
                            size: 88,
                            opacity: 0.7
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 14
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                duration: 0.85,
                                ease: [
                                    0.22,
                                    1,
                                    0.36,
                                    1
                                ]
                            },
                            className: "relative flex h-full flex-col items-center justify-center px-6",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "font-mono text-[11px] uppercase tracking-[0.46em] text-neutral-600",
                                    children: teamName
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 201,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                    className: "mt-8 max-w-2xl text-center font-display text-[clamp(1.4rem,4.2vw,2.6rem)] font-bold leading-tight tracking-[-0.01em] text-white",
                                    children: hero.badge
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 204,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    "aria-hidden": "true",
                                    className: "mt-10 h-px w-16 bg-accent"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mt-6 max-w-md text-center text-sm leading-relaxed text-neutral-500",
                                    children: hero.sloganCn
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
                            style: reduce ? undefined : {
                                opacity: hintOpacity
                            },
                            className: "absolute inset-x-0 bottom-12 flex flex-col items-center",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500",
                                    children: hero.scrollHint
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    "aria-hidden": "true",
                                    className: "mt-3 h-10 w-px bg-gradient-to-b from-white/30 to-transparent"
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Hero.jsx>",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 213,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            "aria-hidden": "true",
                            className: "absolute inset-x-0 bottom-0 h-px bg-accent/70"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Hero.jsx>",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/Hero.jsx>",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/Hero.jsx>",
            lineNumber: 96,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Hero.jsx>",
        lineNumber: 95,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Hero;

})()),
"[project]/src/components/Logo.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/site.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const LOGO_SRC = "/images/brand/logo.png";
const Mark = ({ className })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$28$ecmascript$29$__["default"], {
        src: LOGO_SRC,
        alt: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].name} 战队标识`,
        width: 785,
        height: 786,
        priority: true,
        sizes: "72px",
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("flex-none rounded-full", className)
    }, void 0, false, {
        fileName: "<[project]/src/components/Logo.jsx>",
        lineNumber: 15,
        columnNumber: 3
    }, this);
const Logo = ({ href, className, invert = false, showName = true })=>{
    const content = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
        className: "inline-flex items-center gap-2.5",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](Mark, {
                className: "h-8 w-8 sm:h-9 sm:w-9"
            }, void 0, false, {
                fileName: "<[project]/src/components/Logo.jsx>",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            showName && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                className: "flex flex-col leading-none",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "font-display text-lg font-bold tracking-[0.14em]",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].name
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Logo.jsx>",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                        className: "mt-0.5 text-[9px] font-medium tracking-[0.22em] text-neutral-500",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].nameCn
                    }, void 0, false, {
                        fileName: "<[project]/src/components/Logo.jsx>",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Logo.jsx>",
                lineNumber: 31,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/Logo.jsx>",
        lineNumber: 28,
        columnNumber: 5
    }, this);
    const cls = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("inline-flex items-center transition", invert ? "text-white hover:text-accent" : "text-white hover:text-accent", className);
    if (href) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
            href: href,
            "aria-label": "回到首页",
            className: cls,
            children: content
        }, void 0, false, {
            fileName: "<[project]/src/components/Logo.jsx>",
            lineNumber: 51,
            columnNumber: 7
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
        className: cls,
        children: content
    }, void 0, false, {
        fileName: "<[project]/src/components/Logo.jsx>",
        lineNumber: 57,
        columnNumber: 10
    }, this);
};
const __TURBOPACK__default__export__ = Logo;

})()),
"[project]/src/components/FadeIn.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "FadeInStagger": ()=>FadeInStagger,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/framer-motion/dist/es/index.mjs (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
const FadeInStaggerContext = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["createContext"](false);
const viewport = {
    once: true,
    margin: "0px"
};
const FadeIn = ({ onMount = false, delay = 0, transition, ...props })=>{
    const shouldReduceMotion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["useReducedMotion"]();
    const isInStaggerGroup = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useContext"](FadeInStaggerContext);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
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
    }, void 0, false, {
        fileName: "<[project]/src/components/FadeIn.jsx>",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const FadeInStagger = ({ faster = false, onMount = false, ...props })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](FadeInStaggerContext.Provider, {
        value: true,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$index$2e$mjs__$28$ecmascript$29$__["motion"].div, {
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
        }, void 0, false, {
            fileName: "<[project]/src/components/FadeIn.jsx>",
            lineNumber: 47,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/FadeIn.jsx>",
        lineNumber: 46,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = FadeIn;

})()),
"[project]/src/components/Footer.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Container.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/FadeIn.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Logo.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/site.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const socialIcon = {
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.06 10.06 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    }, void 0, false, {
        fileName: "<[project]/src/components/Footer.jsx>",
        lineNumber: 9,
        columnNumber: 5
    }, this),
    bilibili: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
        d: "M7.2 2.5 9.9 5h4.2l2.7-2.5 1.4 1.5L16.7 5.5H19a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h2.3L5.8 4 7.2 2.5ZM19 7.5H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-9.5 3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Zm5 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1Z"
    }, void 0, false, {
        fileName: "<[project]/src/components/Footer.jsx>",
        lineNumber: 16,
        columnNumber: 5
    }, this),
    wechat: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("path", {
        d: "M9.2 3C5.2 3 2 5.7 2 9c0 1.9 1 3.6 2.7 4.7l-.7 2.1 2.4-1.2c.8.2 1.7.4 2.6.4h.4a5.6 5.6 0 0 1-.2-1.5c0-3.2 3.1-5.8 7-5.8h.5C16.1 4.9 13 3 9.2 3Zm-2.6 4.4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.2 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.4 2.1c-3.3 0-6 2.2-6 4.9s2.7 4.9 6 4.9c.7 0 1.4-.1 2-.3l1.9 1-.5-1.7c1.4-.9 2.2-2.2 2.2-3.7 0-2.8-2.6-5.1-6-5.1Zm-2.1 3.6a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm4.2 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"
    }, void 0, false, {
        fileName: "<[project]/src/components/Footer.jsx>",
        lineNumber: 19,
        columnNumber: 5
    }, this)
};
const SocialIcon = ({ type, className })=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        className: className,
        children: socialIcon[type] ?? socialIcon.github
    }, void 0, false, {
        fileName: "<[project]/src/components/Footer.jsx>",
        lineNumber: 24,
        columnNumber: 3
    }, this);
const Footer = ()=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("footer", {
        className: "relative mt-24 border-t border-white/10 sm:mt-32",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__["default"], {
            className: "py-16 sm:py-20",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$jsx__$28$ecmascript$29$__["default"], {
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$28$ecmascript$29$__["default"], {
                                        href: "/"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Footer.jsx>",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "mt-6 max-w-xs text-sm leading-relaxed text-neutral-500",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].description
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Footer.jsx>",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mt-6 flex items-center gap-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].social.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("a", {
                                                href: item.href,
                                                target: item.href.startsWith("http") ? "_blank" : undefined,
                                                rel: "noreferrer",
                                                "aria-label": item.label,
                                                className: "rounded-full border border-white/10 p-2 text-neutral-400 transition hover:border-accent/50 hover:text-accent",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](SocialIcon, {
                                                    type: item.type,
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Footer.jsx>",
                                                    lineNumber: 50,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.label, false, {
                                                fileName: "<[project]/src/components/Footer.jsx>",
                                                lineNumber: 42,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Footer.jsx>",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Footer.jsx>",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500",
                                        children: "导航"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Footer.jsx>",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                        role: "list",
                                        className: "mt-5 space-y-3 text-sm",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["navigation"].map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                    href: item.href,
                                                    className: "text-neutral-400 transition hover:text-white",
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "<[project]/src/components/Footer.jsx>",
                                                    lineNumber: 63,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.href, false, {
                                                fileName: "<[project]/src/components/Footer.jsx>",
                                                lineNumber: 62,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Footer.jsx>",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Footer.jsx>",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                                        className: "text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500",
                                        children: "联系我们"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Footer.jsx>",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ul", {
                                        role: "list",
                                        className: "mt-5 space-y-3 text-sm text-neutral-400",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "block text-neutral-500",
                                                        children: "位置"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/Footer.jsx>",
                                                        lineNumber: 80,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].contact.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/components/Footer.jsx>",
                                                lineNumber: 79,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                        className: "block text-neutral-500",
                                                        children: "招新"
                                                    }, void 0, false, {
                                                        fileName: "<[project]/src/components/Footer.jsx>",
                                                        lineNumber: 84,
                                                        columnNumber: 19
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                                        href: "/join",
                                                        className: "transition hover:text-white",
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].join.cta,
                                                            " \xb7 ",
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].join.qrTitle
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "<[project]/src/components/Footer.jsx>",
                                                        lineNumber: 85,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/components/Footer.jsx>",
                                                lineNumber: 83,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/Footer.jsx>",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Footer.jsx>",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Footer.jsx>",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                children: [
                                    "\xa9 ",
                                    new Date().getFullYear(),
                                    " ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].fullName
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Footer.jsx>",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "font-mono uppercase tracking-[0.18em] text-neutral-600",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].tagline
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Footer.jsx>",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Footer.jsx>",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/Footer.jsx>",
                lineNumber: 33,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/components/Footer.jsx>",
            lineNumber: 32,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/Footer.jsx>",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;

})()),
"[project]/src/components/Navbar.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Container.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Logo.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Button.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/site.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/hi/index.esm.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.esm.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
;
;
;
;
;
const Navbar = ()=>{
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"]();
    const [expanded, setExpanded] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [scrolled, setScrolled] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const onScroll = ()=>setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>window.removeEventListener("scroll", onScroll);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        setExpanded(false);
    }, [
        pathname
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        document.body.style.overflow = expanded ? "hidden" : "";
        return ()=>{
            document.body.style.overflow = "";
        };
    }, [
        expanded
    ]);
    const isActive = (href)=>href === "/" ? pathname === "/" : pathname.startsWith(href);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["Fragment"], {
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("header", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("fixed inset-x-0 top-0 z-50 transition duration-300", scrolled || expanded ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : "border-b border-transparent"),
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__["default"], {
                    className: "flex h-16 items-center justify-between sm:h-20",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex w-full items-center justify-between",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Logo$2e$jsx__$28$ecmascript$29$__["default"], {
                                href: "/"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navbar.jsx>",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
                                className: "hidden items-center gap-1 md:flex",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["navigation"].map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("relative rounded-full px-4 py-2 text-sm font-medium transition", isActive(item.href) ? "text-white" : "text-neutral-400 hover:text-white"),
                                        children: [
                                            item.label,
                                            isActive(item.href) && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "absolute inset-x-4 -bottom-0.5 h-px bg-accent"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/Navbar.jsx>",
                                                lineNumber: 69,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, item.href, true, {
                                        fileName: "<[project]/src/components/Navbar.jsx>",
                                        lineNumber: 57,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "<[project]/src/components/Navbar.jsx>",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$28$ecmascript$29$__["default"], {
                                        href: "/join",
                                        size: "md",
                                        className: "hidden sm:inline-flex",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].join.cta
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navbar.jsx>",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                        type: "button",
                                        onClick: ()=>setExpanded((v)=>!v),
                                        "aria-expanded": expanded,
                                        "aria-label": expanded ? "关闭菜单" : "打开菜单",
                                        className: "-m-2.5 rounded-full p-2.5 text-white transition hover:bg-white/10 md:hidden",
                                        children: expanded ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["IoMdClose"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Navbar.jsx>",
                                            lineNumber: 91,
                                            columnNumber: 19
                                        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$esm$2e$js__$28$ecmascript$29$__["HiMenuAlt4"], {
                                            className: "h-6 w-6"
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/Navbar.jsx>",
                                            lineNumber: 93,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/Navbar.jsx>",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/Navbar.jsx>",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/Navbar.jsx>",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/Navbar.jsx>",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Navbar.jsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("fixed inset-0 z-40 bg-ink transition duration-300 md:hidden", expanded ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"),
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-16 lg:px-8",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("nav", {
                            className: "mx-auto flex w-full max-w-2xl flex-col",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["navigation"].map((item, i)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("border-b border-white/10 py-5 font-display text-3xl font-medium tracking-tight transition", isActive(item.href) ? "text-accent" : "text-white"),
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "mr-3 font-mono text-xs text-neutral-500",
                                            children: [
                                                "0",
                                                i + 1
                                            ]
                                        }, void 0, true, {
                                            fileName: "<[project]/src/components/Navbar.jsx>",
                                            lineNumber: 121,
                                            columnNumber: 17
                                        }, this),
                                        item.label
                                    ]
                                }, item.href, true, {
                                    fileName: "<[project]/src/components/Navbar.jsx>",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "<[project]/src/components/Navbar.jsx>",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                            className: "mx-auto mt-10 w-full max-w-2xl",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Button$2e$jsx__$28$ecmascript$29$__["default"], {
                                    href: "/join",
                                    size: "lg",
                                    className: "w-full",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].join.cta
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navbar.jsx>",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "mt-6 text-sm text-neutral-500",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].join.slogan
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/Navbar.jsx>",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "<[project]/src/components/Navbar.jsx>",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/Navbar.jsx>",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/Navbar.jsx>",
                lineNumber: 102,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Navbar;

})()),
"[project]/src/components/RootLayout.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Navbar.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Footer.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
const RootLayout = ({ children })=>{
    const pathname = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$28$ecmascript$29$__["usePathname"]();
    const photoOnly = pathname === "/team";
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
        className: "relative flex min-h-full flex-col bg-ink text-neutral-100",
        children: [
            !photoOnly && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/components/RootLayout.jsx>",
                lineNumber: 13,
                columnNumber: 22
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
                className: "relative z-10 flex-auto",
                children: children
            }, void 0, false, {
                fileName: "<[project]/src/components/RootLayout.jsx>",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            !photoOnly && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "<[project]/src/components/RootLayout.jsx>",
                lineNumber: 15,
                columnNumber: 22
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/RootLayout.jsx>",
        lineNumber: 12,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = RootLayout;

})()),
"[project]/src/components/SectionHeading.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/FadeIn.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Container.jsx (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const SectionHeading = ({ index, eyebrow, title, titleEn, children, actions, align = "left", className })=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__["default"], {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"](className),
        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$jsx__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("max-w-3xl", align === "center" && "mx-auto text-center"),
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$28$ecmascript$29$__["default"]("flex items-center gap-3", align === "center" && "justify-center"),
                    children: [
                        index && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "font-mono text-xs font-medium tracking-[0.2em] text-accent",
                            children: index
                        }, void 0, false, {
                            fileName: "<[project]/src/components/SectionHeading.jsx>",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            "aria-hidden": "true",
                            className: "h-px w-8 bg-accent/50"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/SectionHeading.jsx>",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                            className: "text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400",
                            children: eyebrow
                        }, void 0, false, {
                            fileName: "<[project]/src/components/SectionHeading.jsx>",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/SectionHeading.jsx>",
                    lineNumber: 21,
                    columnNumber: 9
                }, this),
                titleEn && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "mt-8 font-display text-2xl font-medium tracking-tight text-neutral-500 sm:text-3xl",
                    children: titleEn
                }, void 0, false, {
                    fileName: "<[project]/src/components/SectionHeading.jsx>",
                    lineNumber: 39,
                    columnNumber: 11
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mt-2 flex flex-wrap items-center gap-x-5 gap-y-3",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h2", {
                            className: "font-display text-4xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]",
                            children: title
                        }, void 0, false, {
                            fileName: "<[project]/src/components/SectionHeading.jsx>",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        actions
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/SectionHeading.jsx>",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                children && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                    className: "mt-6 max-w-2xl text-lg text-neutral-400 [text-wrap:pretty]",
                    children: children
                }, void 0, false, {
                    fileName: "<[project]/src/components/SectionHeading.jsx>",
                    lineNumber: 52,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/SectionHeading.jsx>",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/components/SectionHeading.jsx>",
        lineNumber: 19,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = SectionHeading;

})()),
"[project]/src/components/QuestionWall.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/Container.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/FadeIn.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$jsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/components/SectionHeading.jsx (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questions$2f$supabase$2d$browser$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/questions/supabase-browser.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
;
const SCRIPT_PATHS = [
    "/emotion-ball/js/rings.js",
    "/emotion-ball/js/emotions.js",
    "/emotion-ball/js/ball.js",
    "/emotion-ball/js/engine.js"
];
let sdkPromise;
function loadEmotionBall() {
    if (typeof window === "undefined") {
        return Promise.reject(new Error("EmotionBall requires a browser"));
    }
    if (window.EmotionBall?.create) return Promise.resolve(window.EmotionBall);
    if (sdkPromise) return sdkPromise;
    sdkPromise = SCRIPT_PATHS.reduce((promise, src)=>promise.then(()=>new Promise((resolve, reject)=>{
                const existing = document.querySelector(`script[data-emotion-ball="${src}"]`);
                if (existing) {
                    if (existing.dataset.loaded === "true") return resolve();
                    existing.addEventListener("load", resolve, {
                        once: true
                    });
                    existing.addEventListener("error", reject, {
                        once: true
                    });
                    return;
                }
                const script = document.createElement("script");
                script.src = src;
                script.async = false;
                script.dataset.emotionBall = src;
                script.onload = ()=>{
                    script.dataset.loaded = "true";
                    resolve();
                };
                script.onerror = ()=>reject(new Error(`Failed to load ${src}`));
                document.head.appendChild(script);
            })), Promise.resolve()).then(()=>window.EmotionBall);
    return sdkPromise;
}
const exampleMessages = [
    "第一次来，想知道加入战队要准备什么？",
    "机械组平时会做哪些真实项目？",
    "零基础也可以报名吗？",
    "训练会和课程时间冲突吗？",
    "想看看大家最近在做的机器人。"
];
function getAffinityTier(affinity) {
    if (affinity >= 13) return 4;
    if (affinity >= 10) return 3;
    if (affinity >= 6) return 2;
    if (affinity >= 3) return 1;
    return 0;
}
function emotionForAffinity(affinity) {
    if (affinity >= 13) return "33";
    if (affinity >= 10) return "10";
    if (affinity >= 6) return "19";
    if (affinity >= 3) return "10";
    return "12";
}
function moodForAffinity(affinity) {
    if (affinity >= 13) return "超级开心";
    if (affinity >= 10) return "欢快";
    if (affinity >= 6) return "开心";
    if (affinity >= 3) return "平静";
    return "需要一点鼓励";
}
const QuestionWall = ()=>{
    const ballRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    const engineRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](null);
    const previousAffinityRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](3);
    const affinityRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useRef"](3);
    const [userQuestions, setUserQuestions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [question, setQuestion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [affinity, setAffinity] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](3);
    const [notice, setNotice] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [noticeKind, setNoticeKind] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("info");
    const [submitting, setSubmitting] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [sdkError, setSdkError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [serviceUnavailable, setServiceUnavailable] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    affinityRef.current = affinity;
    const visibleMessages = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useMemo"](()=>[
            ...exampleMessages,
            ...userQuestions.slice(0, 19)
        ], [
        userQuestions
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        let cancelled = false;
        loadEmotionBall().then((EmotionBall)=>{
            if (cancelled || !ballRef.current) return;
            ballRef.current.replaceChildren();
            const engine = EmotionBall.create(ballRef.current, {
                emotion: emotionForAffinity(affinityRef.current),
                fallbackId: "02",
                autostart: true,
                label: "提问区情绪球"
            });
            if (!ballRef.current.querySelector("svg")) {
                throw new Error("EmotionBall did not mount its SVG renderer");
            }
            engineRef.current = engine;
            previousAffinityRef.current = affinityRef.current;
        }).catch(()=>{
            if (!cancelled) setSdkError(true);
        });
        return ()=>{
            cancelled = true;
            engineRef.current?.destroy();
            engineRef.current = null;
        };
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const engine = engineRef.current;
        if (!engine) return;
        const previousAffinity = previousAffinityRef.current;
        const previousTier = getAffinityTier(previousAffinity);
        const nextTier = getAffinityTier(affinity);
        engine.setEmotion(emotionForAffinity(affinity));
        if (affinity > previousAffinity && nextTier !== previousTier) {
            if (nextTier >= 4) {
                engine.bounce?.();
                engine.spin?.(2);
                engine.burst?.(28);
            } else if (nextTier >= 3) {
                engine.bounce?.();
                engine.spin?.(1);
            } else if (nextTier >= 2) {
                engine.bounce?.();
            }
        }
        previousAffinityRef.current = affinity;
    }, [
        affinity
    ]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        let cancelled = false;
        const refreshQuestions = ()=>fetch("/api/questions", {
                cache: "no-store"
            }).then(async (response)=>{
                const body = await response.json();
                if (!response.ok) throw new Error(body.error || "暂时无法加载问题");
                if (!cancelled) {
                    setUserQuestions((items)=>{
                        const latestById = new Map(items.map((item)=>[
                                item.id,
                                item
                            ]));
                        for (const item of body.questions || [])latestById.set(item.id, item);
                        return [
                            ...latestById.values()
                        ].sort((a, b)=>new Date(b.created_at) - new Date(a.created_at)).slice(0, 19);
                    });
                }
            }).catch((error)=>{
                if (!cancelled) {
                    setServiceUnavailable(true);
                    setNotice(error.message || "问题墙暂时不可用");
                    setNoticeKind("error");
                }
            });
        refreshQuestions();
        const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questions$2f$supabase$2d$browser$2e$js__$28$ecmascript$29$__["getSupabaseBrowser"]();
        const channel = supabase?.channel("public-question-wall").on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "questions"
        }, ({ new: row })=>setUserQuestions((items)=>[
                    row,
                    ...items.filter((item)=>item.id !== row.id)
                ].slice(0, 19))).on("postgres_changes", {
            event: "DELETE",
            schema: "public",
            table: "questions"
        }, ({ old: row })=>setUserQuestions((items)=>items.filter((item)=>item.id !== row.id))).subscribe((status)=>{
            if (status === "SUBSCRIBED") refreshQuestions();
        });
        return ()=>{
            cancelled = true;
            if (channel) supabase.removeChannel(channel);
        };
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        const timer = window.setInterval(()=>{
            setAffinity((value)=>Math.max(0, value - 1));
        }, 8000);
        return ()=>window.clearInterval(timer);
    }, []);
    const submitQuestion = async (event)=>{
        event.preventDefault();
        const text = question.trim();
        if (!text || submitting || serviceUnavailable) return;
        setSubmitting(true);
        setNotice("");
        try {
            const response = await fetch("/api/questions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text
                })
            });
            const body = await response.json();
            if (!response.ok) throw new Error(body.error || "提交失败，请稍后重试");
            setUserQuestions((items)=>[
                    body.question,
                    ...items.filter((item)=>item.id !== body.question.id)
                ].slice(0, 19));
            setQuestion("");
            setNotice("问题已送达，谢谢你的提问。 ");
            setNoticeKind("success");
            setAffinity((value)=>Math.min(15, value + 1));
        } catch (error) {
            setNotice(error.message || "提交失败，请稍后重试");
            setNoticeKind("error");
        } finally{
            setSubmitting(false);
        }
    };
    const inputDisabled = submitting || serviceUnavailable;
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
        id: "questions",
        className: "relative overflow-hidden border-t border-white/10 py-24 sm:py-32",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SectionHeading$2e$jsx__$28$ecmascript$29$__["default"], {
                index: "06",
                eyebrow: "ASK THE TEAM",
                titleEn: "LEAVE A QUESTION.",
                title: "有什么想问的？",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    children: "把你对机器人、比赛或加入战队的好奇留下来，让情绪球替你记住。"
                }, void 0, false, {
                    fileName: "<[project]/src/components/QuestionWall.jsx>",
                    lineNumber: 271,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/QuestionWall.jsx>",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Container$2e$jsx__$28$ecmascript$29$__["default"], {
                className: "mt-14",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FadeIn$2e$jsx__$28$ecmascript$29$__["default"], {
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "relative isolate min-h-[28rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-4 py-8 sm:px-8 sm:py-10",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                lineNumber: 279,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "relative z-10 flex min-h-[15rem] items-center justify-center",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "pointer-events-none absolute inset-x-0 top-5 overflow-hidden",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "question-barrage-track flex w-max gap-3 px-3",
                                            children: [
                                                ...visibleMessages,
                                                ...visibleMessages
                                            ].map((item, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "max-w-[15rem] rounded-full border border-white/10 bg-ink/80 px-3 py-2 text-xs leading-relaxed text-neutral-500",
                                                    children: item.text || item
                                                }, `${item.id || item}-${index}`, false, {
                                                    fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                    lineNumber: 285,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/QuestionWall.jsx>",
                                            lineNumber: 283,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "pointer-events-none absolute inset-x-0 bottom-5 overflow-hidden",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                            className: "question-barrage-track question-barrage-track-reverse flex w-max gap-3 px-3",
                                            children: [
                                                ...visibleMessages,
                                                ...visibleMessages
                                            ].map((item, index)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                                    className: "max-w-[15rem] rounded-full border border-white/10 bg-ink/80 px-3 py-2 text-xs leading-relaxed text-neutral-500",
                                                    children: item.text || item
                                                }, `${item.id || item}-bottom-${index}`, false, {
                                                    fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/QuestionWall.jsx>",
                                            lineNumber: 296,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                ref: ballRef,
                                                className: "h-full w-full"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this),
                                            sdkError && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                                className: "absolute inset-0 flex items-center justify-center rounded-full border border-accent/30 bg-accent/[0.08] px-6 text-center text-xs text-accent",
                                                children: "情绪球暂时休息中"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 311,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                className: "relative z-10 mx-auto mt-8 max-w-xl text-center",
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                children: "好感度"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-accent",
                                                children: [
                                                    affinity,
                                                    "/15"
                                                ]
                                            }, void 0, true, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                className: "text-neutral-300",
                                                children: moodForAffinity(affinity)
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 322,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 319,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mx-auto mt-3 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/10",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                            className: "block h-full rounded-full bg-accent transition-[width] duration-500",
                                            style: {
                                                width: `${affinity / 15 * 100}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "<[project]/src/components/QuestionWall.jsx>",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
                                        onSubmit: submitQuestion,
                                        className: "mt-6 flex flex-col gap-2 sm:flex-row",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                                                htmlFor: "question-input",
                                                className: "sr-only",
                                                children: "留下你的问题"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 332,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                                                id: "question-input",
                                                value: question,
                                                onChange: (event)=>setQuestion(event.target.value),
                                                maxLength: 100,
                                                disabled: inputDisabled,
                                                placeholder: serviceUnavailable ? "问题墙暂不可用" : "留下一个问题，和我们打个招呼",
                                                className: "min-w-0 flex-1 rounded-full border border-white/15 bg-ink/80 px-5 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-accent disabled:cursor-not-allowed disabled:opacity-50"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 335,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                                type: "submit",
                                                disabled: !question.trim() || inputDisabled,
                                                className: "rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40",
                                                children: submitting ? "发送中…" : "发送问题"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 344,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                        className: "mt-3 flex items-center justify-center gap-2 text-xs text-neutral-600",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                children: "问题实时同步"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                "aria-hidden": "true",
                                                children: "\xb7"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 355,
                                                columnNumber: 17
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                                children: "匿名提交"
                                            }, void 0, false, {
                                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 353,
                                        columnNumber: 15
                                    }, this),
                                    notice && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: `mt-3 text-xs ${noticeKind === "error" ? "text-red-300" : "text-accent"}`,
                                        role: "status",
                                        children: notice
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                                        lineNumber: 359,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/QuestionWall.jsx>",
                                lineNumber: 318,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/QuestionWall.jsx>",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "<[project]/src/components/QuestionWall.jsx>",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/QuestionWall.jsx>",
                lineNumber: 276,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/QuestionWall.jsx>",
        lineNumber: 261,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = QuestionWall;

})()),
}]);

//# sourceMappingURL=src_components_7babea._.js.map