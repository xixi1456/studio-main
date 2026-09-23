import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import Button from "./Button";
import clsx from "clsx";
import { projects } from "@/data/projects";

const Projects = ({ featuredOnly = false, showHeading = true }) => {
  const list = featuredOnly ? projects.slice(0, 3) : projects;

  return (
    <section
      id="projects"
      className={clsx(
        "relative scroll-mt-24 border-t border-white/10",
        // 独立页面已经有 PageIntro 了，这里就不再留一个大标题的空间
        showHeading ? "py-24 sm:py-32 lg:py-32" : "py-16 sm:py-20"
      )}
    >
      {showHeading && (
        <SectionHeading
          index="03"
          eyebrow="PROJECTS"
          titleEn="WHAT WE HAVE BUILT."
          title="项目"
        >
          <p>
            六台机器人，六种完全不同的做法。每一台都有明确的分工，也都有一段真实的调试过程——
            这一部分才是网站上最值得看的内容。
          </p>
        </SectionHeading>
      )}

      <Container className="mt-14">
        <FadeInStagger faster>
          <ul role="list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((project, i) => (
              <li key={project.slug}>
                <FadeIn className="h-full">
                  <ProjectCard project={project} priority={i === 0} />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>

        {featuredOnly && (
          <FadeIn className="mt-12 flex flex-wrap items-center gap-4">
            <Button href="/projects" variant="secondary" size="lg">
              查看全部 6 个项目
            </Button>
            <span className="text-sm text-neutral-500">
              英雄 · 步兵 · 工程 · 哨兵 · 空中 · 飞镖
            </span>
          </FadeIn>
        )}
      </Container>
    </section>
  );
};

export default Projects;
