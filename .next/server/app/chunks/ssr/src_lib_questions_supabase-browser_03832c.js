(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_lib_questions_supabase-browser_03832c.js", {

"[project]/src/lib/questions/supabase-browser.js (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "getSupabaseBrowser": ()=>getSupabaseBrowser
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@supabase/supabase-js/dist/module/index.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
let client;
function getSupabaseBrowser() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) return null;
    if (!client) client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$28$ecmascript$29$__["createClient"](url, key);
    return client;
}

})()),
}]);

//# sourceMappingURL=src_lib_questions_supabase-browser_03832c.js.map