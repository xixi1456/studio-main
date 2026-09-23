import Container from "./Container";
import FadeIn from "./FadeIn";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import clsx from "clsx";
import { team } from "@/data/team";

const Team = ({ showHeading = true }) => {
  return (
    <section
      id="team"
      className={clsx(
        "relative scroll-mt-24 border-t border-white/10",
        showHeading ? "py-24 sm:py-32 lg:py-32" : "py-16 sm:py-20"
      )}
    >
      {showHeading && (
        <SectionHeading
          index="03"
          eyebrow="THE TEAM"
          titleEn="PEOPLE BEHIND THE ROBOT."
          title="战队介绍"
        >
          <p>{team.lead}</p>
        </SectionHeading>
      )}

      <Container className="mt-14">
        <FadeIn>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {team.profile.map((item) => (
              <div key={item.label} className="bg-ink p-6">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">{item.label}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-white">{item.value}</dd>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-12">
          <p className="max-w-3xl border-l-2 border-accent pl-5 text-base leading-relaxed text-neutral-300">{team.history}</p>
        </FadeIn>

        {showHeading && (
          <FadeIn className="mt-8">
            <Button href="/team" variant="secondary">
              查看战队介绍
            </Button>
          </FadeIn>
        )}
      </Container>
    </section>
  );
};

export default Team;
