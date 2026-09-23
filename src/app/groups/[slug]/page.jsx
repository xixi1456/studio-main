import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { recruitment } from "@/data/recruitment";
import { constructMetadata } from "@/config/site";

const allowedGroups = new Set(["mechanical", "vision", "electrical", "hardware", "operation"]);

export function generateStaticParams() {
  return [...allowedGroups].map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const direction = recruitment.directions.find((item) => item.key === params.slug);
  return constructMetadata({
    title: direction ? `${direction.name} · 组别介绍` : "组别介绍",
    description: direction?.whatYouDo || "FEVER 战队组别介绍",
  });
}

export default function GroupPage({ params }) {
  if (!allowedGroups.has(params.slug)) notFound();
  const direction = recruitment.directions.find((item) => item.key === params.slug);
  if (!direction) notFound();

  return (
    <>
      <PageIntro index="02" eyebrow={direction.nameEn} title={`${direction.name} · 组别介绍`}>
        <p>{direction.whatYouDo}</p>
      </PageIntro>

      <Container className="py-20 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
          {direction.speech ? (
            <FadeIn>
              <article className="max-w-3xl">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{direction.nameEn} · SPEECH</p>
                <h2 className="mt-5 font-display text-2xl font-semibold text-white">{direction.name}演讲稿</h2>
                <div className="mt-8 space-y-6 text-base leading-8 text-neutral-300 sm:text-lg sm:leading-9">
                  {direction.speech.map((paragraph, index) => (
                    <p key={`${direction.key}-speech-${index}`} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            </FadeIn>
          ) : (
            <FadeIn>
              <section className="max-w-3xl border-t border-white/10 pt-7">
                <h2 className="font-display text-2xl font-semibold text-white">这个组别会做什么</h2>
                <p className="mt-4 text-base leading-relaxed text-neutral-400">{direction.whatYouDo}</p>
                <p className="mt-8 text-sm leading-relaxed text-neutral-500">
                  这里预留给你补充该组别的演讲稿、项目案例、招新说明和图片内容。
                </p>
              </section>
            </FadeIn>
          )}

          <FadeIn>
            <aside className="border-t border-white/10 pt-7 lg:sticky lg:top-28">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">ROLE</p>
              <h2 className="mt-5 font-display text-lg font-semibold text-white">组别信息</h2>
              <dl className="mt-6 space-y-6">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">需要什么</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-neutral-300">{direction.whatYouNeed}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-neutral-500">零基础可以吗</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-neutral-300">{direction.zeroBase}</dd>
                </div>
              </dl>
              <Button href="/join" className="mt-8">返回报名页面</Button>
            </aside>
          </FadeIn>
        </div>
      </Container>
    </>
  );
}
