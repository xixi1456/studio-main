import React from "react";
import Container from "./Container";
import FadeIn from "./FadeIn";
import clsx from "clsx";

const PageIntro = ({ index, eyebrow, title, children, centered = false }) => {
  return (
    <Container className="pt-24 sm:pt-32">
      <FadeIn onMount className={clsx(centered && "text-center")}>
        <div
          className={clsx(
            "flex items-center gap-3",
            centered && "justify-center"
          )}
        >
          {index && (
            <span className="font-mono text-xs font-medium tracking-[0.2em] text-accent">
              {index}
            </span>
          )}
          <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {children && (
          <div
            className={clsx(
              "mt-6 max-w-2xl text-lg text-neutral-400",
              centered && "mx-auto"
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default PageIntro;
