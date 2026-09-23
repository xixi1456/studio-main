import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import FadeIn, { FadeInStagger } from "@/components/FadeIn";
import RobotStage from "@/components/RobotStage";
import Button from "@/components/Button";
import GridBackdrop from "@/components/GridBackdrop";
import { TagList, TagListItem } from "@/components/TagList";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { projects, getProject } from "@/data/projects";
import { constructMetadata } from "@/config/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return constructMetadata({ noIndex: true });

  return constructMetadata({
    title: `${project.name} · ${project.nameEn}`,
    description: project.summary,
  });
}

const ProjectPage = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      {/* 头部 */}
      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <GridBackdrop />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-accent/10 blur-[130px]"
        />

        <Container>
          <FadeIn>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              所有项目
            </Link>
          </FadeIn>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <FadeIn>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-[0.2em] text-accent">
                    {project.index}
                  </span>
                  <span aria-hidden="true" className="h-px w-8 bg-accent/50" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-400">
                    {project.role}
                  </span>
                </div>

                <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-neutral-500">
                  {project.nameEn}
                </p>

                <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-300">
                  {project.summary}
                </p>

                <div className="mt-8">
                  <TagList>
                    {project.tags.map((tag) => (
                      <TagListItem key={tag} accent>
                        {tag}
                      </TagListItem>
                    ))}
                  </TagList>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                        {stat.label}
                      </dt>
                      <dd className="mt-1.5 font-display text-lg font-semibold text-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </FadeIn>

              <FadeIn delay={0.15} className="mt-10">
                <Button href="/join" size="lg">
                  想参与这台车
                </Button>
              </FadeIn>
            </div>

            <FadeIn delay={0.1} className="relative mx-auto w-full max-w-[30rem] lg:max-w-none">
              <RobotStage
                src={project.cover}
                alt={`${project.name}整机`}
                priority
                sizes="(min-width: 1024px) 34rem, 88vw"
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 项目拆解 */}
      <section className="border-t border-white/10 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[16rem_1fr] lg:gap-20">
            <FadeIn onMount className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                项目拆解
              </p>
              <ol className="mt-6 space-y-3">
                {project.detail.map((section, i) => (
                  <li
                    key={section.title}
                    className="flex items-baseline gap-3 text-sm text-neutral-400"
                  >
                    <span className="font-mono text-[11px] text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </li>
                ))}
              </ol>
            </FadeIn>

            <FadeInStagger>
              <div className="divide-y divide-white/10">
                {project.detail.map((section, i) => (
                  <section
                    key={section.title}
                    id={`section-${i + 1}`}
                    className="scroll-mt-28 py-10 first:pt-0 last:pb-0"
                  >
                    <FadeIn>
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs tracking-[0.2em] text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                          {section.title}
                        </h2>
                      </div>
                      <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-400 lg:pl-10">
                        {section.body.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </FadeIn>
                  </section>
                ))}
              </div>
            </FadeInStagger>
          </div>
        </Container>
      </section>

      {/* 上一个 / 下一个 */}
      <section className="border-t border-white/10 py-16">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link
              href={`/projects/${prev.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/25 hover:bg-white/[0.045]"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                <ArrowLeft className="h-4 w-4" />
                上一个
              </span>
              <span className="mt-6 font-display text-xl font-semibold text-white">
                {prev.name}
              </span>
            </Link>

            <Link
              href={`/projects/${next.slug}`}
              className="group flex flex-col items-end justify-between rounded-3xl border border-white/10 bg-white/[0.02] p-7 text-right transition hover:border-white/25 hover:bg-white/[0.045]"
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                下一个
                <ArrowRight className="h-4 w-4" />
              </span>
              <span className="mt-6 font-display text-xl font-semibold text-white">
                {next.name}
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ProjectPage;
