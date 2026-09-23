import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { recruitment } from "@/data/recruitment";

const Process = () => {
  return (
    <section
      id="training"
      className="relative scroll-mt-24 border-t border-white/10 py-24 sm:py-32 lg:py-32"
    >
      <SectionHeading
        index="05"
        eyebrow="TRAINING PATH"
        titleEn="FROM INTERVIEW TO THE FIELD."
        title="新人培养路径"
      >
        <p>
          面试之后不是放养。老队员带新队员，任务有检查，完成基础训练后进入真实备赛。
        </p>
      </SectionHeading>

      <Container className="mt-16">
        <div className="relative">
          {/* 横向连接线，只在最宽布局下出现 */}
          <span
            aria-hidden="true"
            className="absolute left-4 right-4 top-4 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent xl:block"
          />
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {recruitment.timeline.map((step, i) => (
              <li key={step.step} className="relative">
                <FadeIn transition={{ duration: 0.45, delay: i * 0.05 }}>
                  <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-ink font-mono text-[11px] font-medium text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    {i === 0 ? "INTERVIEW" : i === 1 ? "TRAINING" : i === 2 ? "CHECKPOINT" : "SEASON"}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {step.desc}
                  </p>
                </FadeIn>
              </li>
            ))}
          </ol>
        </div>

        <FadeIn className="mt-16">
          <p className="border-l-2 border-accent pl-5 font-display text-xl font-medium text-neutral-300 sm:text-2xl">
            零基础可以来，但需要投入时间、按要求完成任务，并在团队需要时参与培训、调试与备赛。
            <br className="hidden sm:block" />
            我们提供带教和反馈，也期待你把分配到的事情做完。
          </p>
        </FadeIn>

        <FadeIn className="mt-8">
          <Button href="/training" variant="secondary">
            查看完整培养路径
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Process;
