"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 76014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/questions/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/lib/questions/supabase-admin.js
var supabase_admin = __webpack_require__(27788);
;// CONCATENATED MODULE: ./src/app/api/questions/route.js


const dynamic = "force-dynamic";
async function GET() {
    if (!(0,supabase_admin/* isSupabaseConfigured */.j)()) {
        return next_response/* default */.Z.json({
            error: "问题墙尚未配置"
        }, {
            status: 503
        });
    }
    const { data, error } = await (0,supabase_admin/* getSupabaseAdmin */.t)().from("questions").select("id, text, created_at").order("created_at", {
        ascending: false
    }).limit(19);
    if (error) {
        return next_response/* default */.Z.json({
            error: "暂时无法读取问题"
        }, {
            status: 500
        });
    }
    return next_response/* default */.Z.json({
        questions: data
    });
}
async function POST(request) {
    if (!(0,supabase_admin/* isSupabaseConfigured */.j)()) {
        return next_response/* default */.Z.json({
            error: "问题墙尚未配置"
        }, {
            status: 503
        });
    }
    let body;
    try {
        body = await request.json();
    } catch  {
        return next_response/* default */.Z.json({
            error: "请求格式无效"
        }, {
            status: 400
        });
    }
    const text = typeof body?.text === "string" ? body.text.trim() : "";
    const length = [
        ...text
    ].length;
    if (!length || length > 100) {
        return next_response/* default */.Z.json({
            error: "问题需为 1 到 100 个字"
        }, {
            status: 400
        });
    }
    const { data, error } = await (0,supabase_admin/* getSupabaseAdmin */.t)().from("questions").insert({
        text
    }).select("id, text, created_at").single();
    if (error) {
        return next_response/* default */.Z.json({
            error: "问题提交失败，请稍后重试"
        }, {
            status: 500
        });
    }
    return next_response/* default */.Z.json({
        question: data
    }, {
        status: 201
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fquestions%2Froute&name=app%2Fapi%2Fquestions%2Froute&pagePath=private-next-app-dir%2Fapi%2Fquestions%2Froute.js&appDir=D%3A%5C%E6%88%98%E9%98%9F%E7%BD%91%E7%AB%99%5Csrc%5Capp&appPaths=%2Fapi%2Fquestions%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/questions/route",
        pathname: "/api/questions",
        filename: "route",
        bundlePath: "app/api/questions/route"
    },
    resolvedPagePath: "D:\\战队网站\\src\\app\\api\\questions\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/questions/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,565,501,335,66,788], () => (__webpack_exec__(76014)));
module.exports = __webpack_exports__;

})();