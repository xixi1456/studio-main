import Link from "next/link";
import RobotStage from "./RobotStage";
import { TagList, TagListItem } from "./TagList";
import { ArrowRight } from "./icons";

const ProjectCard = ({ project, priority = false }) => {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.01] p-6 transition duration-300 group-hover:border-white/25 group-hover:from-white/[0.07] sm:p-7">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-[0.2em] text-accent">
            {project.index}
          </span>
          <span className="rounded-full border border-white/10 bg-ink/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
            {project.role}
          </span>
        </div>

        <RobotStage
          src={project.cover}
          alt={`${project.name}整机`}
          priority={priority}
          sizes="(min-width: 1024px) 26rem, 88vw"
          className="mt-2 transition-transform duration-500 group-hover:scale-[1.04]"
        />

        <div className="mt-2 flex flex-1 flex-col">
          <div className="flex items-baseline gap-3">
            <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
              {project.name}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-600">
              {project.nameEn}
            </span>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-neutral-400">
            {project.summary}
          </p>

          <div className="mt-6 flex-1">
            <TagList>
              {project.tags.slice(0, 4).map((tag) => (
                <TagListItem key={tag}>{tag}</TagListItem>
              ))}
            </TagList>
          </div>

          <span className="mt-7 inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-semibold text-neutral-300 transition group-hover:text-accent">
            查看项目
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
