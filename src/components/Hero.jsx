"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import clsx from "clsx";
import Container from "./Container";
import Button from "./Button";
import GridBackdrop from "./GridBackdrop";

/**
 * 环绕标语的同心轨道。
 * 外圈静态细环定住构图，内圈主色虚线环缓慢自转，轨道上带四枚测点。
 * 全部用 SVG 自绘，不加动画库、不加粒子。
 *
 * 椭圆比例按「两行大标语」调过：ry 必须明显大于标语半高，
 * 否则上下弧线会穿过文字和上方胶囊。
 */
const Orbit = ({ reduce }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 1200 520"
    className="pointer-events-none absolute left-1/2 top-1/2 h-[250%] w-[118%] -translate-x-1/2 -translate-y-1/2"
  >
    <g transform="translate(600 260)">
      <ellipse
        cx="0"
        cy="0"
        rx="500"
        ry="245"
        fill="none"
        stroke="white"
        strokeOpacity="0.18"
        strokeWidth="0.75"
        vectorEffect="non-scaling-stroke"
      />
      <motion.g
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
      >
        <ellipse
          cx="0"
          cy="0"
          rx="405"
          ry="200"
          fill="none"
          stroke="#FF4D2E"
          strokeOpacity="0.7"
          strokeWidth="0.75"
          strokeDasharray="8 8"
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="405" cy="0" r="3.5" fill="#FF4D2E" />
        <circle cx="-405" cy="0" r="3" fill="#FF4D2E" fillOpacity="0.75" />
        <circle cx="0" cy="-200" r="2" fill="#FF4D2E" fillOpacity="0.6" />
        <circle cx="0" cy="200" r="2" fill="#FF4D2E" fillOpacity="0.6" />
      </motion.g>
    </g>
  </svg>
);

/**
 * 首屏：开场定调。
 *
 * 两层叠在同一块 sticky 视口里：
 *   底层 = 主海报（海报页眉 + 超大标语 + 环绕 SVG + 兵种条）
 *   顶层 = 开场封面，随滚动自上而下让开
 *
 * 关键：不做滚动劫持。滚动距离由 section 的额外高度（165vh）提供，
 * 滚动进度只用来驱动位移，手感跟原生滚动完全一致。
 *
 * 数据全部由服务端 page 裁剪后以 props 传入，这里不直接 import 数据模块。
 */
const Hero = ({ hero, teamName, joinCta, robots }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  /** 封面：自上而下移出，先把上半屏让出来 */
  const coverY = useTransform(scrollYProgress, [0, 0.74], ["0%", "100%"]);
  const coverOpacity = useTransform(scrollYProgress, [0.46, 0.78], [1, 0]);
  /** 海报层反向微移，制造前后层次 */
  const stageY = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[165vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* ── 主海报层 ── */}
        <GridBackdrop opacity={0.85} />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-44 -top-56 h-[32rem] w-[32rem] rounded-full bg-accent/[0.07] blur-[140px]"
        />

        <motion.div
          style={reduce ? undefined : { y: stageY }}
          className="relative flex h-full flex-col will-change-transform"
        >
          <Container className="flex flex-1 flex-col justify-center pb-12 pt-24">
            {/* 海报页眉：编排感 */}
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-700">
              <span>RoboMaster University Series</span>
              <span
                aria-hidden="true"
                className="hidden h-px flex-1 bg-white/[0.07] sm:block"
              />
              <span className="hidden sm:block">{teamName}</span>
            </div>

            <div className="mt-8 flex justify-center">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-300">
                  {hero.badge}
                </span>
              </span>
            </div>

            {/* 标语 + 环绕轨道 */}
            <div className="relative mt-10 flex flex-col items-center">
              <Orbit reduce={reduce} />
              <h1 className="relative text-center font-display text-[clamp(2.6rem,8.2vw,7rem)] font-bold leading-[0.94] tracking-[-0.025em]">
                {hero.slogan.map((line, i) => (
                  <span
                    key={line}
                    className={clsx(
                      "block",
                      i === 0 ? "text-white" : "text-neutral-600"
                    )}
                  >
                    {line}
                  </span>
                ))}
              </h1>
            </div>

            <p className="mt-12 text-center font-display text-lg text-neutral-200 sm:text-2xl">
              {hero.sloganCn}
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-neutral-500 sm:text-base">
              {hero.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button href="/join" size="lg">
                {joinCta}
              </Button>
              <Button
                href="https://www.robomaster.com/"
                size="lg"
                variant="secondary"
              >
                了解赛事
              </Button>
            </div>
          </Container>

          {/* 兵种条 */}
          <div className="border-y border-white/10 bg-white/[0.02]">
            <Container className="py-5">
              <ul
                role="list"
                className="flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500 sm:justify-between"
              >
                {robots.map((robot) => (
                  <li key={robot.slug} className="flex items-center gap-2">
                    <span className="font-mono text-accent">{robot.index}</span>
                    {robot.name}
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        </motion.div>

        {/* ── 开场封面层：滚动时自上而下让开 ── */}
        <motion.div
          style={reduce ? { y: "100%" } : { y: coverY, opacity: coverOpacity }}
          className="absolute inset-0 z-20 bg-ink will-change-transform"
        >
          <GridBackdrop size={88} opacity={0.7} />

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex h-full flex-col items-center justify-center px-6"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.46em] text-neutral-600">
              {teamName}
            </span>
            <h2 className="mt-8 max-w-2xl text-center font-display text-[clamp(1.4rem,4.2vw,2.6rem)] font-bold leading-tight tracking-[-0.01em] text-white">
              {hero.badge}
            </h2>
            <span aria-hidden="true" className="mt-10 h-px w-16 bg-accent" />
            <p className="mt-6 max-w-md text-center text-sm leading-relaxed text-neutral-500">
              {hero.sloganCn}
            </p>
          </motion.div>

          <motion.div
            style={reduce ? undefined : { opacity: hintOpacity }}
            className="absolute inset-x-0 bottom-12 flex flex-col items-center"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
              {hero.scrollHint}
            </span>
            <span
              aria-hidden="true"
              className="mt-3 h-10 w-px bg-gradient-to-b from-white/30 to-transparent"
            />
          </motion.div>

          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-px bg-accent/70"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
