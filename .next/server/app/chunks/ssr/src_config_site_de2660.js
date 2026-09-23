(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_config_site_de2660.js", {

"[project]/src/config/site.js (ecmascript, rsc)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "constructMetadata": ()=>constructMetadata
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/data/site.js (ecmascript, rsc)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
function constructMetadata({ title = `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].name} · ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].nameCn}`, description = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].description, image = "/images/og.png", icons = "/favicon.ico", noIndex = false } = {}) {
    return {
        title,
        description,
        keywords: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$js__$28$ecmascript$29$__["site"].keywords,
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

})()),
}]);

//# sourceMappingURL=src_config_site_de2660.js.map