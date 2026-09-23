"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { getSupabaseBrowser } from "@/lib/questions/supabase-browser";

function formatDate(value) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default function AdminQuestions() {
  const [questions, setQuestions] = useState([]);
  const [drawnQuestion, setDrawnQuestion] = useState(null);
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const loadQuestions = useCallback(async () => {
    const response = await fetch("/api/admin/questions", { cache: "no-store" });
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "无法读取问题");
    setQuestions(body.questions || []);
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/admin/questions", { cache: "no-store" })
      .then(async (response) => {
        const body = await response.json();
        if (response.status === 401) return;
        if (!response.ok) throw new Error(body.error || "无法读取问题");
        if (!cancelled) {
          setAuthenticated(true);
          setQuestions(body.questions || []);
        }
      })
      .catch((loadError) => {
        if (!cancelled) setError(loadError.message || "后台暂时不可用");
      })
      .finally(() => {
        if (!cancelled) setCheckingSession(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!authenticated) return undefined;
    const supabase = getSupabaseBrowser();
    const channel = supabase
      ?.channel("admin-question-list")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "questions" },
        ({ new: row }) =>
          setQuestions((items) =>
            [row, ...items.filter((item) => item.id !== row.id)].sort(
              (a, b) => new Date(b.created_at) - new Date(a.created_at)
            )
          )
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "questions" },
        ({ old: row }) =>
          setQuestions((items) => items.filter((item) => item.id !== row.id))
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          loadQuestions().catch((loadError) =>
            setError(loadError.message || "无法同步问题")
          );
        }
      });

    return () => {
      if (channel) supabase.removeChannel(channel);
    };
  }, [authenticated, loadQuestions]);

  const login = async (event) => {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "登录失败");
      setAuthenticated(true);
      setPassword("");
      await loadQuestions();
    } catch (loginError) {
      setError(loginError.message || "登录失败");
    } finally {
      setBusy(false);
    }
  };

  const drawQuestion = async () => {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/admin/draw", { method: "POST" });
      const body = await response.json();
      if (response.status === 401) {
        setAuthenticated(false);
        throw new Error("登录状态已失效，请重新登录");
      }
      if (!response.ok) throw new Error(body.error || "抽取失败");
      setDrawnQuestion(body.question);
      if (body.question) {
        setQuestions((items) => items.filter((item) => item.id !== body.question.id));
      }
    } catch (drawError) {
      setError(drawError.message || "抽取失败");
    } finally {
      setBusy(false);
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setQuestions([]);
    setDrawnQuestion(null);
  };

  if (checkingSession) {
    return <main className="mx-auto w-full max-w-5xl px-6 py-20 text-sm text-neutral-400">正在检查登录状态…</main>;
  }

  if (!authenticated) {
    return (
      <main className="mx-auto flex min-h-[70vh] w-full max-w-md flex-col justify-center px-6 py-16">
        <Link href="/" className="mb-8 text-sm text-neutral-500 transition hover:text-white">
          ← 返回首页
        </Link>
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Question Admin</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">问题管理</h1>
        <form onSubmit={login} className="mt-8 space-y-4">
          <label htmlFor="admin-password" className="block text-sm text-neutral-300">
            管理员密码
          </label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full rounded-md border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none focus:border-accent"
          />
          <button
            type="submit"
            disabled={!password || busy}
            className="w-full rounded-md bg-accent px-4 py-3 text-sm font-semibold text-ink transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-50"
          >
            {busy ? "登录中…" : "登录"}
          </button>
        </form>
        {error && <p className="mt-4 text-sm text-red-300" role="alert">{error}</p>}
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-5xl px-6 py-12 sm:py-16">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <Link href="/" className="text-xs text-neutral-500 transition hover:text-white">← 首页</Link>
          <h1 className="mt-3 text-2xl font-semibold text-white">待回答问题</h1>
          <p className="mt-1 text-sm text-neutral-500">新提交的问题会自动出现在这里。</p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="rounded-md border border-white/15 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/35 hover:text-white"
        >
          退出登录
        </button>
      </div>

      <section className="mt-8 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">Random draw</p>
            <p className="mt-1 text-sm text-neutral-300">{questions.length} 个待抽问题</p>
          </div>
          <button
            type="button"
            onClick={drawQuestion}
            disabled={busy || !questions.length}
            className="rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
          >
            {busy ? "处理中…" : "抽取一个问题"}
          </button>
        </div>
        {drawnQuestion && (
          <div className="mt-5 border-l-2 border-accent bg-accent/[0.06] px-5 py-4" aria-live="polite">
            <p className="text-xs uppercase tracking-[0.14em] text-accent">本次抽中</p>
            <p className="mt-2 break-words text-lg leading-relaxed text-white">{drawnQuestion.text}</p>
          </div>
        )}
        {error && <p className="mt-4 text-sm text-red-300" role="alert">{error}</p>}
      </section>

      <section className="mt-2" aria-label="待抽问题列表">
        {questions.length ? (
          <ol className="divide-y divide-white/10">
            {questions.map((item) => (
              <li key={item.id} className="flex gap-4 py-5">
                <span className="w-12 shrink-0 pt-0.5 font-mono text-xs text-neutral-600">
                  {formatDate(item.created_at)}
                </span>
                <p className="min-w-0 break-words text-sm leading-relaxed text-neutral-200">{item.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="py-12 text-center text-sm text-neutral-500">目前没有待抽问题</p>
        )}
      </section>
    </main>
  );
}
