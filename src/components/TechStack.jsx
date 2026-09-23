import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { recruitment } from "@/data/recruitment";

const TechStack = () => {
  return (
    <section
      id="groups"
      className="relative scroll-mt-24 border-t border-white/10 py-24 sm:py-32 lg:py-32"
    >
      <SectionHeading
        index="04"
        eyebrow="FIVE GROUPS"
        titleEn="FIVE FIELDS. ONE ROBOT."
        title="五大组别"
      >
        <p>每个组别都按同一套方式了解：做什么、需要什么技能、零基础能不能来。</p>
      </SectionHeading>

      <Container className="mt-14">
        <FadeInStagger>
          <ul role="list" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recruitment.directions.map((item, index) => (
              <li key={item.key}>
                <FadeIn className="h-full">
                  <Link href={`/groups/${item.key}`} className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-white/25 hover:bg-white/[0.045]">
                    {/* hover 时顶部主色线展开 */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full"
                    />
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-xs tracking-[0.2em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                        {item.nameEn}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-3xl font-semibold tracking-tight text-white">
                      {item.name}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-neutral-400">
                        {item.whatYouDo}
                    </p>

                    <dl className="mt-6 space-y-4 border-t border-white/10 pt-5">
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">需要什么技能</dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-neutral-400">{item.whatYouNeed}</dd>
                      </div>
                      <div>
                        <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">零基础能不能来</dt>
                        <dd className="mt-1.5 text-sm leading-relaxed text-neutral-400">{item.zeroBase}</dd>
                      </div>
                    </dl>
                    <span className="mt-7 inline-flex self-start text-sm font-semibold text-accent transition group-hover:translate-x-1">
                      进入组别页面 →
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}

          </ul>
        </FadeInStagger>
      </Container>
    </section>
  );
};

export default TechStack;
