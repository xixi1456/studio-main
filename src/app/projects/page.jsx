import PageIntro from "@/components/PageIntro";
import Projects from "@/components/Projects";
import { constructMetadata } from "@/config/site";

export const metadata = constructMetadata({
  title: "项目 · 我们做过的机器人",
  description:
    "英雄、步兵、工程、哨兵、空中、飞镖——六台机器人的完整拆解：背景、问题、方案、硬件、软件、控制、调试与结果。",
});

const ProjectsPage = () => {
  return (
    <>
      <PageIntro
        index="01"
        eyebrow="PROJECTS"
        title="六台机器人，六段真实的调试过程。"
      >
        <p>
          每台机器人的分工不同，遇到的问题也完全不同。点进去可以看到我们是怎么从问题找到方案的——
          不是只有成品照。
        </p>
      </PageIntro>
      <Projects showHeading={false} />
    </>
  );
};

export default ProjectsPage;
