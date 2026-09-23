import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import JoinCta from "@/components/JoinCta";
import PageIntro from "@/components/PageIntro";
import { constructMetadata } from "@/config/site";
import { recruitment } from "@/data/recruitment";
import { TagList, TagListItem } from "@/components/TagList";

export const metadata = constructMetadata({
  title: "招新 · 加入我们",
  description: `${recruitment.openness.title}${recruitment.openness.desc}`,
});

const DirectionCard = ({ direction }) => {
  const rows = [
    { label: "你会做什么", value: direction.whatYouDo },
    { label: "需要什么基础", value: direction.whatYouNeed },
    { label: "零基础能不能来", value: direction.zeroBase },
  ];

  return (
    <div className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-white/25 hover:bg-white/[0.045]">
      <div className="flex items-baseline gap-3">
        <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
          {direction.name}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
          {direction.nameEn}
        </span>
      </div>
      <dl className="mt-6 space-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {row.label}
            </dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-neutral-400">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

const JoinPage = () => {
  return (
    <>
      <PageIntro index="01" eyebrow="RECRUITMENT" title="不用等准备好，来了再学。">
        <p>{recruitment.lead}</p>
      </PageIntro>

      {/* 我们看重什么 */}
      <Container className="mt-16">
        <FadeIn>
          <div className="rounded-4xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-white">
              {recruitment.openness.title}
            </h2>
            <p className="mt-3 max-w-3xl text-base text-neutral-400">
              {recruitment.openness.lead}
            </p>
            <TagList className="mt-6">
              {recruitment.openness.qualities.map((q) => (
                <TagListItem key={q} accent>
                  {q}
                </TagListItem>
              ))}
            </TagList>
          </div>
        </FadeIn>
      </Container>

      {/* 招新方向 */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <Container>
          <FadeIn>
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.2em] text-accent">
                02
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                Open positions
              </span>
            </div>
            <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {recruitment.title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-neutral-400">
              {recruitment.directionsLead}
            </p>
          </FadeIn>

          <FadeInStagger>
            <ul role="list" className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recruitment.directions.map((direction) => (
                <li key={direction.key}>
                  <FadeIn className="h-full">
                    <DirectionCard direction={direction} />
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>
        </Container>
      </section>

      {/* 你会经历什么 */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[20rem_1fr] lg:gap-20">
            <FadeIn className="lg:sticky lg:top-28 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-[0.2em] text-accent">
                  03
                </span>
                <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
                  Timeline
                </span>
              </div>
              <h2 className="mt-8 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                你会经历什么
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-500">
                不是一次面试进来就消失。你会有一个清晰的成长路径，
                从跟着做到独立负责，再到带下一届。
              </p>
            </FadeIn>

            <FadeInStagger>
              <ol className="border-l border-white/10">
                {recruitment.timeline.map((item) => (
                  <li key={item.step} className="relative pb-10 pl-8 last:pb-0">
                    <FadeIn>
                      <span
                        aria-hidden="true"
                        className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent/60 bg-ink"
                      />
                      <span className="font-mono text-xs tracking-[0.2em] text-accent">
                        {item.step}
                      </span>
                      <h3 className="mt-2 font-display text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">
                        {item.desc}
                      </p>
                    </FadeIn>
                  </li>
                ))}
              </ol>
            </FadeInStagger>
          </div>
        </Container>
      </section>

      <JoinCta />
    </>
  );
};

export default JoinPage;
