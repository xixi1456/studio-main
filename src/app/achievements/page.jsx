import Image from "next/image";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";
import { constructMetadata } from "@/config/site";

export const metadata = constructMetadata({
  title: "战队成果",
  description: "FEVER 战队 RMUL 2026 3V3 对抗赛山东站现场与成绩记录。",
});

const achievements = [
  {
    src: "/images/achievements/team-result-photo.jpg",
    width: 1078,
    height: 712,
    alt: "FEVER 战队成员在 RMUL 2026 3V3 对抗赛山东站合影",
    title: "赛事现场",
    description: "RMUL 2026 · 3V3 对抗赛（山东站）",
  },
  {
    src: "/images/achievements/achievement-poster.jpg",
    width: 800,
    height: 1868,
    alt: "RMUL 2026 3V3 对抗赛山东站赛事成绩海报",
    title: "赛事成绩",
    description: "RMUL 2026 · 3V3 对抗赛（山东站）",
  },
];

export default function AchievementsPage() {
  return (
    <>
      <PageIntro index="04" eyebrow="RESULTS" title="战队成果">
        <p>RMUL 2026 · 3V3 对抗赛（山东站）</p>
      </PageIntro>

      <Container className="pb-24 pt-12 sm:pt-16">
        <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
          {achievements.map((achievement) => (
            <figure key={achievement.src} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.03]">
              <Image
                src={achievement.src}
                alt={achievement.alt}
                width={achievement.width}
                height={achievement.height}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-white/10 px-5 py-4">
                <h2 className="text-base font-semibold text-white">{achievement.title}</h2>
                <p className="mt-1 text-sm text-neutral-400">{achievement.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </>
  );
}
