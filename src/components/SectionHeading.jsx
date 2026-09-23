import clsx from "clsx";
import FadeIn from "./FadeIn";
import Container from "./Container";

/**
 * 统一区块标题：编号 + 英文小标 + 中文大标题 + 引言。
 */
const SectionHeading = ({
  index,
  eyebrow,
  title,
  titleEn,
  children,
  actions,
  align = "left",
  className,
}) => {
  return (
    <Container className={clsx(className)}>
      <FadeIn className={clsx("max-w-3xl", align === "center" && "mx-auto text-center")}>
        <div
          className={clsx(
            "flex items-center gap-3",
            align === "center" && "justify-center"
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

        {titleEn && (
          <p className="mt-8 font-display text-2xl font-medium tracking-tight text-neutral-500 sm:text-3xl">
            {titleEn}
          </p>
        )}

        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-3">
          <h2 className="font-display text-4xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            {title}
          </h2>
          {actions}
        </div>

        {children && (
          <div className="mt-6 max-w-2xl text-lg text-neutral-400 [text-wrap:pretty]">
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  );
};

export default SectionHeading;
