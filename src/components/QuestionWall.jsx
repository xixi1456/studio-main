"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";

const SCRIPT_PATHS = [
  "/emotion-ball/js/rings.js",
  "/emotion-ball/js/emotions.js",
  "/emotion-ball/js/ball.js",
  "/emotion-ball/js/engine.js",
];

const MAX_USER_QUESTIONS = 100;
let sdkPromise;

function loadEmotionBall() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("EmotionBall requires a browser"));
  }
  if (window.EmotionBall?.create) return Promise.resolve(window.EmotionBall);
  if (sdkPromise) return sdkPromise;

  sdkPromise = SCRIPT_PATHS.reduce(
    (promise, src) =>
      promise.then(
        () =>
          new Promise((resolve, reject) => {
            const existing = document.querySelector(
              `script[data-emotion-ball="${src}"]`
            );
            if (existing) {
              if (existing.dataset.loaded === "true") {
                resolve();
                return;
              }
              existing.addEventListener("load", resolve, { once: true });
              existing.addEventListener("error", reject, { once: true });
              return;
            }

            const script = document.createElement("script");
            script.src = src;
            script.async = false;
            script.dataset.emotionBall = src;
            script.onload = () => {
              script.dataset.loaded = "true";
              resolve();
            };
            script.onerror = () => reject(new Error(`Failed to load ${src}`));
            document.head.appendChild(script);
          })
      ),
    Promise.resolve()
  ).then(() => window.EmotionBall);

  return sdkPromise;
}

// Examples are displayed for context only and never enter the draw pool.
const exampleMessages = [
  "第一次来，想知道加入战队要准备什么？",
  "机械组平时会做哪些真实项目？",
  "零基础也可以报名吗？",
  "训练会和课程时间冲突吗？",
  "想看看大家最近在做的机器人。",
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

const QuestionWall = () => {
  const ballRef = useRef(null);
  const engineRef = useRef(null);
  const previousAffinityRef = useRef(3);
  const affinityRef = useRef(3);
  const [userQuestions, setUserQuestions] = useState([]);
  const [question, setQuestion] = useState("");
  const [affinity, setAffinity] = useState(3);
  const [drawnQuestion, setDrawnQuestion] = useState("");
  const [notice, setNotice] = useState("");
  const [sdkError, setSdkError] = useState(false);

  affinityRef.current = affinity;

  const visibleMessages = useMemo(
    () => [...exampleMessages, ...userQuestions.slice(-19)],
    [userQuestions]
  );

  useEffect(() => {
    let cancelled = false;
    loadEmotionBall()
      .then((EmotionBall) => {
        if (cancelled || !ballRef.current) return;
        ballRef.current.replaceChildren();
        const engine = EmotionBall.create(ballRef.current, {
          emotion: emotionForAffinity(affinityRef.current),
          fallbackId: "02",
          autostart: true,
          label: "提问区情绪球",
        });
        if (!ballRef.current.querySelector("svg")) {
          throw new Error("EmotionBall did not mount its SVG renderer");
        }
        engineRef.current = engine;
        previousAffinityRef.current = affinityRef.current;
      })
      .catch(() => {
        if (!cancelled) setSdkError(true);
      });

    return () => {
      cancelled = true;
      engineRef.current?.destroy();
      engineRef.current = null;
    };
  }, []);

  useEffect(() => {
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
  }, [affinity]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAffinity((value) => Math.max(0, value - 1));
    }, 8000);
    return () => window.clearInterval(timer);
  }, []);

  const submitQuestion = (event) => {
    event.preventDefault();
    const text = question.trim();
    if (!text) return;
    if (userQuestions.length >= MAX_USER_QUESTIONS) {
      setNotice(`本次最多收集 ${MAX_USER_QUESTIONS} 个问题`);
      return;
    }

    setUserQuestions((items) => [
      ...items,
      { id: `${Date.now()}-${items.length}`, text },
    ]);
    setQuestion("");
    setNotice("");
    setAffinity((value) => Math.min(15, value + 1));
  };

  const drawQuestion = () => {
    if (!userQuestions.length) return;
    const picked = userQuestions[Math.floor(Math.random() * userQuestions.length)];
    setDrawnQuestion(picked.text);
    setNotice("");
    engineRef.current?.bounce?.();
  };

  const inputDisabled = userQuestions.length >= MAX_USER_QUESTIONS;

  return (
    <section
      id="questions"
      className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32"
    >
      <SectionHeading
        index="06"
        eyebrow="ASK THE TEAM"
        titleEn="LEAVE A QUESTION."
        title="有什么想问的？"
      >
        <p>
          把你对机器人、比赛或加入战队的好奇留下来，让情绪球替你记住。
        </p>
      </SectionHeading>

      <Container className="mt-14">
        <FadeIn>
          <div className="relative isolate min-h-[28rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] px-4 py-8 sm:px-8 sm:py-10">
            <div className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:32px_32px]" />

            <div className="relative z-10 flex min-h-[15rem] items-center justify-center">
              <div className="pointer-events-none absolute inset-x-0 top-5 overflow-hidden">
                <div className="question-barrage-track flex w-max gap-3 px-3">
                  {[...visibleMessages, ...visibleMessages].map((item, index) => (
                    <p
                      key={`${item.id || item}-${index}`}
                      className="max-w-[15rem] rounded-full border border-white/10 bg-ink/80 px-3 py-2 text-xs leading-relaxed text-neutral-500"
                    >
                      {item.text || item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-5 overflow-hidden">
                <div className="question-barrage-track question-barrage-track-reverse flex w-max gap-3 px-3">
                  {[...visibleMessages, ...visibleMessages].map((item, index) => (
                    <p
                      key={`${item.id || item}-bottom-${index}`}
                      className="max-w-[15rem] rounded-full border border-white/10 bg-ink/80 px-3 py-2 text-xs leading-relaxed text-neutral-500"
                    >
                      {item.text || item}
                    </p>
                  ))}
                </div>
              </div>

              <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
                <div ref={ballRef} className="h-full w-full" />
                {sdkError && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-full border border-accent/30 bg-accent/[0.08] px-6 text-center text-xs text-accent">
                    情绪球暂时休息中
                  </div>
                )}
              </div>
            </div>

            <div className="relative z-10 mx-auto mt-8 max-w-xl text-center">
              <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
                <span>好感度</span>
                <span className="text-accent">{affinity}/15</span>
                <span className="text-neutral-300">{moodForAffinity(affinity)}</span>
              </div>
              <div className="mx-auto mt-3 h-1.5 max-w-xs overflow-hidden rounded-full bg-white/10">
                <span
                  className="block h-full rounded-full bg-accent transition-[width] duration-500"
                  style={{ width: `${(affinity / 15) * 100}%` }}
                />
              </div>

              <form onSubmit={submitQuestion} className="mt-6 flex flex-col gap-2 sm:flex-row">
                <label htmlFor="question-input" className="sr-only">
                  留下你的问题
                </label>
                <input
                  id="question-input"
                  value={question}
                  onChange={(event) => setQuestion(event.target.value)}
                  maxLength={100}
                  disabled={inputDisabled}
                  placeholder={inputDisabled ? "本次问题已收集完毕" : "留下一个问题，和我们打个招呼"}
                  className="min-w-0 flex-1 rounded-full border border-white/15 bg-ink/80 px-5 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-accent disabled:cursor-not-allowed disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!question.trim() || inputDisabled}
                  className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-ink transition hover:bg-accent-soft disabled:cursor-not-allowed disabled:opacity-40"
                >
                  发射问题
                </button>
              </form>

              <div className="mt-3 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={drawQuestion}
                  disabled={!userQuestions.length}
                  className="rounded-full border border-accent/60 px-5 py-2.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
                >
                  抽一个问题
                </button>
                <span className="text-xs text-neutral-600">
                  已加入 {userQuestions.length}/{MAX_USER_QUESTIONS}
                </span>
              </div>

              {drawnQuestion && (
                <div
                  className="mt-5 rounded-2xl border border-accent/40 bg-accent/[0.08] px-5 py-4 text-left"
                  aria-live="polite"
                >
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-accent">
                    抽到的问题
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-white">{drawnQuestion}</p>
                </div>
              )}
              {notice && <p className="mt-3 text-xs text-accent">{notice}</p>}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default QuestionWall;
