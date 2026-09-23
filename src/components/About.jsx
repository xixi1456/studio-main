import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { event } from "@/data/event";
import { projects } from "@/data/projects";

const SeriesCard = ({ series }) => (
  <article className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition duration-300 hover:border-white/20 sm:p-9">
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-sm tracking-[0.2em] text-accent">
        {series.code}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-600">
        {series.nameEn}
      </span>
    </div>

    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
      {series.name}
    </h3>
    <span className="mt-3 inline-flex self-start rounded-full border border-white/10 px-3 py-1 text-[11px] text-neutral-400">
      {series.tag}
    </span>

    <p className="mt-5 text-sm leading-relaxed text-neutral-400">
      {series.desc}
    </p>

    <ul role="list" className="mt-6 space-y-2.5">
      {series.points.map((point) => (
        <li key={point} className="flex gap-3 text-sm leading-relaxed text-neutral-500">
          <span
            aria-hidden="true"
            className="mt-2 h-1 w-1 flex-none rounded-full bg-accent"
          />
          {point}
        </li>
      ))}
    </ul>

    <p className="mt-auto border-t border-white/10 pt-5 font-mono text-[11px] leading-relaxed text-neutral-600">
      {series.schedule}
    </p>
    <Button href={event.links[series.key] || series.href} variant="ghost" size="md" className="mt-5 self-start px-0 text-accent">
      查看赛事详情
    </Button>
  </article>
);

const About = () => {
  const robotList = projects.filter((project) =>
    event.robotsSection.interactiveSlugs.includes(project.slug)
  );

  return (
    <section
      id="robomaster"
      className="relative scroll-mt-24 border-t border-white/10 py-24 sm:py-32"
    >
      <SectionHeading
        index="02"
        eyebrow={event.eyebrow}
        titleEn={event.titleEn}
        title={event.title}
        actions={
          <Button href={event.links.robomaster} variant="secondary" size="md">
            了解 RoboMaster
          </Button>
        }
      >
        <p>{event.lead}</p>
      </SectionHeading>

      <Container className="mt-14">
        {/* 比赛形式 */}
        <FadeIn>
          <h3 className="font-display text-xl font-semibold text-white">
            {event.format.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-neutral-500">
            {event.format.desc}
          </p>
        </FadeIn>

        <FadeIn className="mt-6">
          <dl className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {event.format.points.map((point) => (
              <div key={point.label} className="bg-ink p-6">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  {point.label}
                </dt>
                <dd className="mt-3 text-sm leading-relaxed text-white">
                  {point.value}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        {/* 两大系列赛 */}
        <FadeInStagger>
          <div className="mt-16 grid gap-4 lg:grid-cols-2">
            {event.series.map((series) => (
              <FadeIn key={series.key} className="h-full">
                <SeriesCard series={series} />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>

        {/* 兵种图墙 */}
        <div className="mt-20">
          <FadeIn>
            <h3 className="font-display text-xl font-semibold text-white">
              {event.robotsSection.title}
            </h3>
          </FadeIn>

          <FadeInStagger>
            <ul
              role="list"
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
            >
              {robotList.map((robot) => (
                <li key={robot.slug}>
                  <FadeIn className="h-full">
                    <Link
                      href={`/projects/${robot.slug}`}
                      className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-4 transition duration-300 hover:border-white/25 hover:bg-white/[0.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    >
                      <div className="relative aspect-square w-full">
                        <span
                          aria-hidden="true"
                          className="absolute inset-[10%] rounded-full"
                          style={{
                            background:
                              "radial-gradient(circle at 50% 58%, rgba(255,255,255,0.10), transparent 70%)",
                          }}
                        />
                        <Image
                          src={robot.cover}
                          alt={robot.name}
                          fill
                          sizes="(min-width: 1024px) 13rem, (min-width: 640px) 30vw, 45vw"
                          className="object-contain transition duration-500 group-hover:scale-[1.06]"
                        />
                      </div>
                      <p className="mt-3 text-center text-sm font-medium text-white">
                        {robot.name}
                      </p>
                      <p className="mt-1 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-600">
                        {robot.role}
                      </p>
                    </Link>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </FadeInStagger>

          {/* 没有实拍图的兵种单独说明，不占空图位 */}
          <FadeIn className="mt-6">
            <div className="flex flex-col gap-2 rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-baseline sm:gap-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Radar
              </span>
              <p className="text-sm leading-relaxed text-neutral-400">
                <span className="font-medium text-white">
                  {event.robotsSection.extra[0].name} · {event.robotsSection.extra[0].role}
                </span>
                <span className="mx-2 text-neutral-700">/</span>
                {event.robotsSection.extra[0].desc}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* 赛事地位 */}
        <FadeIn className="mt-20">
          <div className="rounded-4xl border border-white/10 bg-white/[0.03] p-7 sm:p-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              {event.recognition.title}
            </span>
            <p className="mt-5 max-w-4xl font-display text-lg leading-relaxed text-neutral-200 sm:text-xl">
              {event.recognition.desc}
            </p>
            <Button href={event.recognition.href} variant="secondary" size="md" className="mt-7">
              了解赛事地位
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default About;
