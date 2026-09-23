import Button from "@/components/Button";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import PageIntro from "@/components/PageIntro";
import { constructMetadata } from "@/config/site";
import { recruitment } from "@/data/recruitment";

export const metadata = constructMetadata({
  title: "新人培养路径 · 从第一次任务到上场",
  description: "FEVER 战队新人培养路径，以及加入之后会得到和失去什么。",
});

const PlaceholderGrid = ({ title, items, accent = false }) => (
  <section className={`border-t border-white/10 py-20 sm:py-24 ${accent ? "bg-accent/[0.03]" : ""}`}>
    <Container>
      <div className="flex items-end justify-between gap-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{accent ? "TRADE-OFF" : "TAKEAWAYS"}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        </div>
        <span className="hidden font-mono text-xs text-neutral-600 sm:block">{String(items.length).padStart(2, "0")} ITEMS</span>
      </div>
      <FadeInStagger>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <FadeIn key={item.index}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-7">
                <span className="font-mono text-xs text-accent">{item.index}</span>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </FadeInStagger>
    </Container>
  </section>
);

export default function TrainingPage() {
  return (
    <>
      <PageIntro index="01" eyebrow="TRAINING PATH" title="从第一次任务到真正上场">
        <p>这里保留完整的新人培养路径。具体规则、讲稿和案例可以继续补充。</p>
      </PageIntro>

      <section className="border-t border-white/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {recruitment.timeline.map((step) => (
              <FadeIn key={step.step}>
                <article className="h-full border-l border-accent/50 pl-5">
                  <span className="font-mono text-xs text-accent">{step.step}</span>
                  <h2 className="mt-4 font-display text-xl font-semibold text-white">{step.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">{step.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <PlaceholderGrid title="加入之后，你会得到什么" items={recruitment.benefits} />
      <PlaceholderGrid title="加入之后，你会失去什么" items={recruitment.losses} accent />

      <Container className="py-16 sm:py-20">
        <Button href="/join">去报名加入</Button>
      </Container>
    </>
  );
}
