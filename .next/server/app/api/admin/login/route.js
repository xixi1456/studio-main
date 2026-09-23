"use strict";
(() => {
var exports = {};
exports.id = 672;
exports.ids = [672];
exports.modules = {

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 70643:
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

// NAMESPACE OBJECT: ./src/app/api/admin/login/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/lib/questions/auth.js
var auth = __webpack_require__(39923);
;// CONCATENATED MODULE: ./src/app/api/admin/login/route.js


async function POST(request) {
    if (!(0,auth/* isAdminConfigured */.JW)()) {
        return next_response/* default */.Z.json({
            error: "管理员登录尚未配置"
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
    if (!(0,auth/* passwordMatches */.ih)(body?.password)) {
        return next_response/* default */.Z.json({
            error: "密码不正确"
        }, {
            status: 401
        });
    }
    (0,auth/* setAdminSession */.mN)();
    return next_response/* default */.Z.json({
        ok: true
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fadmin%2Flogin%2Froute&name=app%2Fapi%2Fadmin%2Flogin%2Froute&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Flogin%2Froute.js&appDir=D%3A%5C%E6%88%98%E9%98%9F%E7%BD%91%E7%AB%99%5Csrc%5Capp&appPaths=%2Fapi%2Fadmin%2Flogin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/admin/login/route",
        pathname: "/api/admin/login",
        filename: "route",
        bundlePath: "app/api/admin/login/route"
    },
    resolvedPagePath: "D:\\战队网站\\src\\app\\api\\admin\\login\\route.js",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/admin/login/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [587,565,501,335,923], () => (__webpack_exec__(70643)));
module.exports = __webpack_exports__;

})();