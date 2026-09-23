import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import QuestionWall from "@/components/QuestionWall";
import Team from "@/components/Team";
import JoinCta from "@/components/JoinCta";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export default function Home() {
  /* 客户端组件不直接 import 数据模块，这里裁剪出首屏真正需要的字段 */
  const robots = projects.map(({ slug, index, name }) => ({
    slug,
    index,
    name,
  }));

  return (
    <>
      <Hero
        hero={site.hero}
        teamName={site.name}
        joinCta={site.join.cta}
        robots={robots}
      />
      <About />
      <Team />
      <TechStack />
      <Process />
      <QuestionWall />
      <JoinCta />
    </>
  );
}
