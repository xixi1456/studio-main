import Container from "./Container";
import FadeIn from "./FadeIn";
import Button from "./Button";
import QrCode from "./QrCode";
import { site } from "@/data/site";
import { recruitment } from "@/data/recruitment";
import { TagList, TagListItem } from "./TagList";

const JoinCta = () => {
  return (
    <section
      id="join"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/10 py-24 sm:py-32 lg:py-32"
    >
      {/* 视觉高潮：主色辉光 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[70rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-accent/[0.13] blur-[150px]"
      />

      <Container>
        <FadeIn className="text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/[0.08] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            06 · REGISTRATION
          </span>
          <p className="mt-8 font-display text-[clamp(3rem,13vw,9rem)] font-bold leading-none tracking-[-0.03em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.22)]">
            JOIN US
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-white [text-wrap:balance] sm:text-4xl">
            报名加入，和我们一起做一台真的机器人。
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400">
            招新群二维码、报名问卷、截止时间和面试安排都在这里。
          </p>
        </FadeIn>

        <FadeIn className="mt-10">
          <div className="flex flex-wrap justify-center gap-2">
            {recruitment.openness.qualities.map((q) => (
              <TagListItem key={q} accent>
                {q}
              </TagListItem>
            ))}
          </div>
        </FadeIn>
      </Container>

      {/* 报名方式与关键信息 */}
      <Container className="mt-20">
        <FadeIn>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            <div className="bg-ink p-7"><span className="font-mono text-xs text-accent">01</span><h3 className="mt-5 font-display text-xl font-semibold text-white">招新群二维码</h3><p className="mt-3 text-sm leading-relaxed text-neutral-500">扫码进群，获取宣讲会现场答疑和后续通知。</p></div>
            <div className="bg-ink p-7"><span className="font-mono text-xs text-accent">02</span><h3 className="mt-5 font-display text-xl font-semibold text-white">报名问卷</h3><p className="mt-3 text-sm leading-relaxed text-neutral-500">填写兴趣方向与可投入时间，提交报名信息。</p></div>
            <div className="bg-ink p-7"><span className="font-mono text-xs text-accent">03</span><h3 className="mt-5 font-display text-xl font-semibold text-white">截止与面试</h3><p className="mt-3 text-sm leading-relaxed text-neutral-500">{site.join.deadline}；{site.join.interview}。</p></div>
          </div>
        </FadeIn>
      </Container>

      {/* 扫码 + 方向 */}
      <Container className="mt-16">
        <FadeIn>
          <div className="grid gap-10 rounded-4xl border border-white/10 bg-white/[0.03] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12">
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                现在就可以开始
              </h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400">
                不用等准备好。先扫码进群，或者直接来实验室看一台车怎么装起来——
                比任何介绍都直接。
              </p>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  招新方向
                </p>
                <TagList className="mt-3">
                  {recruitment.directions.map((d) => (
                    <TagListItem key={d.key}>{d.name}</TagListItem>
                  ))}
                </TagList>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={site.join.formUrl} size="lg">
                  填写报名问卷
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 lg:pl-6">
              <QrCode src={site.join.qrImage} alt={site.join.qrTitle} size={188} />
              <div className="text-center">
                <p className="text-sm font-semibold text-white">
                  {site.join.qrTitle}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  {site.join.qrNote}
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default JoinCta;
