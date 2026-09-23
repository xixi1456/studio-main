"use strict";
exports.id = 923;
exports.ids = [923];
exports.modules = {

/***/ 40063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(74937);


/***/ }),

/***/ 39923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JW: () => (/* binding */ isAdminConfigured),
/* harmony export */   NK: () => (/* binding */ clearAdminSession),
/* harmony export */   Tp: () => (/* binding */ hasAdminSession),
/* harmony export */   ih: () => (/* binding */ passwordMatches),
/* harmony export */   mN: () => (/* binding */ setAdminSession)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6113);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40063);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_1__);


const COOKIE_NAME = "question_admin_session";
const SESSION_AGE_SECONDS = 60 * 60 * 24 * 7;
function sign(value) {
    return (0,crypto__WEBPACK_IMPORTED_MODULE_0__.createHmac)("sha256", process.env.QUESTION_SESSION_SECRET).update(value).digest("hex");
}
function isAdminConfigured() {
    return Boolean(process.env.QUESTION_ADMIN_PASSWORD && process.env.QUESTION_SESSION_SECRET);
}
function passwordMatches(candidate) {
    const expected = process.env.QUESTION_ADMIN_PASSWORD;
    if (!expected || typeof candidate !== "string") return false;
    const candidateBuffer = Buffer.from(candidate);
    const expectedBuffer = Buffer.from(expected);
    return candidateBuffer.length === expectedBuffer.length && (0,crypto__WEBPACK_IMPORTED_MODULE_0__.timingSafeEqual)(candidateBuffer, expectedBuffer);
}
function setAdminSession() {
    const expiresAt = Math.floor(Date.now() / 1000) + SESSION_AGE_SECONDS;
    const payload = String(expiresAt);
    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(COOKIE_NAME, `${payload}.${sign(payload)}`, {
        httpOnly: true,
        secure: "production" === "production",
        sameSite: "strict",
        path: "/",
        maxAge: SESSION_AGE_SECONDS
    });
}
function clearAdminSession() {
    (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().set(COOKIE_NAME, "", {
        httpOnly: true,
        secure: "production" === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 0
    });
}
function hasAdminSession() {
    if (!isAdminConfigured()) return false;
    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)().get(COOKIE_NAME)?.value;
    if (!token) return false;
    const [payload, suppliedSignature, extra] = token.split(".");
    if (!payload || !suppliedSignature || extra) return false;
    const expectedSignature = sign(payload);
    const suppliedBuffer = Buffer.from(suppliedSignature);
    const expectedBuffer = Buffer.from(expectedSignature);
    if (suppliedBuffer.length !== expectedBuffer.length || !(0,crypto__WEBPACK_IMPORTED_MODULE_0__.timingSafeEqual)(suppliedBuffer, expectedBuffer)) {
        return false;
    }
    return Number(payload) > Math.floor(Date.now() / 1000);
}


/***/ })

};
;