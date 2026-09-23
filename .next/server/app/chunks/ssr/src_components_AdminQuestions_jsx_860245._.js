(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/ssr/src_components_AdminQuestions_jsx_860245._.js", {

"[project]/src/components/AdminQuestions.jsx (ecmascript, ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, k: __turbopack_refresh__ }) => (() => {

__turbopack_esm__({
    "default": ()=>AdminQuestions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js (ecmascript, ssr)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questions$2f$supabase$2d$browser$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/lib/questions/supabase-browser.js (ecmascript, ssr)");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
function formatDate(value) {
    return new Intl.DateTimeFormat("zh-CN", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
    }).format(new Date(value));
}
function AdminQuestions() {
    const [questions, setQuestions] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]([]);
    const [drawnQuestion, setDrawnQuestion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](null);
    const [password, setPassword] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const [authenticated, setAuthenticated] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [checkingSession, setCheckingSession] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](true);
    const [busy, setBusy] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"](false);
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useState"]("");
    const loadQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useCallback"](async ()=>{
        const response = await fetch("/api/admin/questions", {
            cache: "no-store"
        });
        const body = await response.json();
        if (!response.ok) throw new Error(body.error || "无法读取问题");
        setQuestions(body.questions || []);
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        let cancelled = false;
        fetch("/api/admin/questions", {
            cache: "no-store"
        }).then(async (response)=>{
            const body = await response.json();
            if (response.status === 401) return;
            if (!response.ok) throw new Error(body.error || "无法读取问题");
            if (!cancelled) {
                setAuthenticated(true);
                setQuestions(body.questions || []);
            }
        }).catch((loadError)=>{
            if (!cancelled) setError(loadError.message || "后台暂时不可用");
        }).finally(()=>{
            if (!cancelled) setCheckingSession(false);
        });
        return ()=>{
            cancelled = true;
        };
    }, []);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$28$ecmascript$29$__["useEffect"](()=>{
        if (!authenticated) return undefined;
        const supabase = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$questions$2f$supabase$2d$browser$2e$js__$28$ecmascript$29$__["getSupabaseBrowser"]();
        const channel = supabase?.channel("admin-question-list").on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "questions"
        }, ({ new: row })=>setQuestions((items)=>[
                    row,
                    ...items.filter((item)=>item.id !== row.id)
                ].sort((a, b)=>new Date(b.created_at) - new Date(a.created_at)))).on("postgres_changes", {
            event: "DELETE",
            schema: "public",
            table: "questions"
        }, ({ old: row })=>setQuestions((items)=>items.filter((item)=>item.id !== row.id))).subscribe((status)=>{
            if (status === "SUBSCRIBED") {
                loadQuestions().catch((loadError)=>setError(loadError.message || "无法同步问题"));
            }
        });
        return ()=>{
            if (channel) supabase.removeChannel(channel);
        };
    }, [
        authenticated,
        loadQuestions
    ]);
    const login = async (event)=>{
        event.preventDefault();
        if (busy) return;
        setBusy(true);
        setError("");
        try {
            const response = await fetch("/api/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password
                })
            });
            const body = await response.json();
            if (!response.ok) throw new Error(body.error || "登录失败");
            setAuthenticated(true);
            setPassword("");
            await loadQuestions();
        } catch (loginError) {
            setError(loginError.message || "登录失败");
        } finally{
            setBusy(false);
        }
    };
    const drawQuestion = async ()=>{
        if (busy) return;
        setBusy(true);
        setError("");
        try {
            const response = await fetch("/api/admin/draw", {
                method: "POST"
            });
            const body = await response.json();
            if (response.status === 401) {
                setAuthenticated(false);
                throw new Error("登录状态已失效，请重新登录");
            }
            if (!response.ok) throw new Error(body.error || "抽取失败");
            setDrawnQuestion(body.question);
            if (body.question) {
                setQuestions((items)=>items.filter((item)=>item.id !== body.question.id));
            }
        } catch (drawError) {
            setError(drawError.message || "抽取失败");
        } finally{
            setBusy(false);
        }
    };
    const logout = async ()=>{
        await fetch("/api/admin/logout", {
            method: "POST"
        });
        setAuthenticated(false);
        setQuestions([]);
        setDrawnQuestion(null);
    };
    if (checkingSession) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
            className: "mx-auto w-full max-w-5xl px-6 py-20 text-sm text-neutral-400",
            children: "正在检查登录状态…"
        }, void 0, false, {
            fileName: "<[project]/src/components/AdminQuestions.jsx>",
            lineNumber: 143,
            columnNumber: 12
        }, this);
    }
    if (!authenticated) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
            className: "mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-6 py-16",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "mb-8 text-sm text-neutral-500 transition hover:text-white",
                    children: "← 返回首页"
                }, void 0, false, {
                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                    lineNumber: 149,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "text-xs uppercase tracking-[0.18em] text-accent",
                    children: "Question Admin"
                }, void 0, false, {
                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                    className: "mt-3 text-3xl font-semibold text-white",
                    children: "问题管理"
                }, void 0, false, {
                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("form", {
                    onSubmit: login,
                    className: "mt-8 space-y-4",
                    children: [
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("label", {
                            htmlFor: "admin-password",
                            className: "block text-sm text-neutral-300",
                            children: "管理员密码"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/AdminQuestions.jsx>",
                            lineNumber: 155,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("input", {
                            id: "admin-password",
                            type: "password",
                            autoComplete: "current-password",
                            value: password,
                            onChange: (event)=>setPassword(event.target.value),
                            required: true,
                            className: "w-full rounded-md border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none focus:border-accent"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/AdminQuestions.jsx>",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                            type: "submit",
                            disabled: !password || busy,
                            className: "w-full rounded-md bg-accent px-4 py-3 text-sm font-semibold text-ink transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50",
                            children: busy ? "登录中…" : "登录"
                        }, void 0, false, {
                            fileName: "<[project]/src/components/AdminQuestions.jsx>",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "mt-4 text-sm text-red-300",
                    role: "alert",
                    children: error
                }, void 0, false, {
                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                    lineNumber: 175,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "<[project]/src/components/AdminQuestions.jsx>",
            lineNumber: 148,
            columnNumber: 7
        }, this);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("main", {
        className: "mx-auto w-full max-w-5xl px-6 py-12 sm:py-16",
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                className: "flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-xs text-neutral-500 transition hover:text-white",
                                children: "← 首页"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("h1", {
                                className: "mt-3 text-2xl font-semibold text-white",
                                children: "待回答问题"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "mt-1 text-sm text-neutral-500",
                                children: "新提交的问题会自动出现在这里。"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/AdminQuestions.jsx>",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                        type: "button",
                        onClick: logout,
                        className: "rounded-md border border-white/15 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/35 hover:text-white",
                        children: "退出登录"
                    }, void 0, false, {
                        fileName: "<[project]/src/components/AdminQuestions.jsx>",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "mt-8 border-b border-white/10 pb-8",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "flex flex-wrap items-center justify-between gap-3",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "text-xs uppercase tracking-[0.16em] text-neutral-500",
                                        children: "Random draw"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                        className: "mt-1 text-sm text-neutral-300",
                                        children: [
                                            questions.length,
                                            " 个待抽问题"
                                        ]
                                    }, void 0, true, {
                                        fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                        lineNumber: 201,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("button", {
                                type: "button",
                                onClick: drawQuestion,
                                disabled: busy || !questions.length,
                                className: "rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40",
                                children: busy ? "处理中…" : "抽取一个问题"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/AdminQuestions.jsx>",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this),
                    drawnQuestion && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("div", {
                        className: "mt-5 border-l-2 border-accent bg-accent/[0.06] px-5 py-4",
                        "aria-live": "polite",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "text-xs uppercase tracking-[0.14em] text-accent",
                                children: "本次抽中"
                            }, void 0, false, {
                                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                className: "mt-2 break-words text-lg leading-relaxed text-white",
                                children: drawnQuestion.text
                            }, void 0, false, {
                                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "<[project]/src/components/AdminQuestions.jsx>",
                        lineNumber: 213,
                        columnNumber: 11
                    }, this),
                    error && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                        className: "mt-4 text-sm text-red-300",
                        role: "alert",
                        children: error
                    }, void 0, false, {
                        fileName: "<[project]/src/components/AdminQuestions.jsx>",
                        lineNumber: 218,
                        columnNumber: 19
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("section", {
                className: "mt-2",
                "aria-label": "待抽问题列表",
                children: questions.length ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("ol", {
                    className: "divide-y divide-white/10",
                    children: questions.map((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("li", {
                            className: "flex gap-4 py-5",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("span", {
                                    className: "w-12 shrink-0 pt-0.5 font-mono text-xs text-neutral-600",
                                    children: formatDate(item.created_at)
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                    lineNumber: 226,
                                    columnNumber: 17
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                                    className: "min-w-0 break-words text-sm leading-relaxed text-neutral-200",
                                    children: item.text
                                }, void 0, false, {
                                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "<[project]/src/components/AdminQuestions.jsx>",
                            lineNumber: 225,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                    lineNumber: 223,
                    columnNumber: 11
                }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$28$ecmascript$29$__["jsxDEV"]("p", {
                    className: "py-12 text-center text-sm text-neutral-500",
                    children: "目前没有待抽问题"
                }, void 0, false, {
                    fileName: "<[project]/src/components/AdminQuestions.jsx>",
                    lineNumber: 234,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/components/AdminQuestions.jsx>",
                lineNumber: 221,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/components/AdminQuestions.jsx>",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_components_AdminQuestions_jsx_860245._.js.map