"use client";

import { createContext, useContext } from "react";
import { motion, useReducedMotion } from "framer-motion";
const FadeInStaggerContext = createContext(false);

/**
 * 滚动触发边距。
 *
 * 刻意用 0：不把「进入视口」的判定线往上抬。
 * 曾经用过 -200px / -120px / -40px，都会让「顶部刚好压在折叠线上」的元素
 * 一直停在 opacity:0，必须多滚一点才出现——矮屏（1366×768）上尤其明显，
 * 而这类缺陷在静态截图里完全看不出来。
 * 现在只要元素有任意一部分进入视口就会触发，从根上杜绝「首屏内容不显示」。
 * 首屏内的元素另外用 onMount 让动画随加载播放，双保险。
 */
const viewport = { once: true, margin: "0px" };

const FadeIn = ({ onMount = false, delay = 0, transition, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const isInStaggerGroup = useContext(FadeInStaggerContext);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={transition ?? { duration: 0.5, delay }}
      {...(isInStaggerGroup && !onMount
        ? {}
        : onMount
          ? { initial: "hidden", animate: "visible" }
          : {
              initial: "hidden",
              whileInView: "visible",
              viewport,
            })}
      {...props}
    />
  );
};

export const FadeInStagger = ({ faster = false, onMount = false, ...props }) => {
  return (
    <FadeInStaggerContext.Provider value={true}>
      <motion.div
        initial="hidden"
        {...(onMount
          ? { animate: "visible" }
          : { whileInView: "visible", viewport })}
        transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
        {...props}
      />
    </FadeInStaggerContext.Provider>
  );
};

export default FadeIn;
