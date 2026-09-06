import type { Metadata } from "next";
import { PerspectiveCarousel } from "@/components/ui/perspective-carousel";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MENTOR, MENTOR_PARTNER, ABOUT, SITE, TEAM_MEMBERS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet ${SITE.name} student engineers.`,
};

const MEMBER_MEDIA: Record<string, { video?: string }> = {
  "Sanjay C": { video: "/videos/snajay.mp4" },
};

const carouselItems = TEAM_MEMBERS.map((m, i) => ({
  src: `/images/member-${(i % 9) + 1}.svg`,
  title: `${m.name} ${m.role}`,
  alt: `${m.name}, ${m.subsystem}`,
  ...MEMBER_MEDIA[m.name],
}));


export default function TeamPage() {
  return (
    <div className="pt-20">
      <section className="section-pad relative overflow-hidden border-b border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
        <div className="container-mission relative">
          <Reveal>
            <SectionHeading
              eyebrow="The Crew & Divisions"
              title="Team Vikram Engineers"
              description={ABOUT.intro}
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow={ABOUT.eyebrow}
              title={ABOUT.title}
              description={ABOUT.mission}
            />
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.06}>
              <Box className="h-full border-l-2 border-l-white/60">
                <p className="hud-label mb-4 text-white/70">Core Expertise</p>
                <ul className="space-y-2">
                  {ABOUT.expertise.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-sm text-white/85">
                      <span className="h-1 w-1 rounded-full bg-white/60" />
                      {area}
                    </li>
                  ))}
                </ul>
              </Box>
            </Reveal>
            <Reveal delay={0.1}>
              <Box className="h-full border-l-2 border-l-white/60">
                <p className="hud-label mb-4 text-white/70">Competition Platforms</p>
                <ul className="space-y-2">
                  {ABOUT.competitions.map((comp) => (
                    <li key={comp} className="flex items-start gap-2 text-sm text-white/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </Box>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad py-10! border-b border-white/10 carbon-fiber">
        <div className="container-mission">
          <Reveal>
            <p className="hud-label mb-6 text-center text-white/70">Crew carousel</p>
          </Reveal>
          <Reveal delay={0.08}>
            <PerspectiveCarousel
              items={carouselItems}
              defaultActiveIndex={Math.min(2, carouselItems.length - 1)}
              slideWidth={280}
              loop
              className="h-170 text-white"
              viewportClassName="[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
              labelClassName="font-mono text-xs tracking-wide text-white/80"
              imageClassName="border border-white/20"
              controlsClassName="border-white/20 bg-black/60 text-white backdrop-blur-md"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-pad py-14! border-b border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
        <div className="container-mission">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold text-white">
              Roster
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM_MEMBERS.map((m, i) => (
              <Reveal key={`${m.name}-${m.role}`} delay={i * 0.04}>
                <Box>
                  <p className="hud-label text-white/60">{m.group}</p>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">
                    {m.name}
                  </h3>
                  <p className="text-sm text-white/90 font-medium">{m.role}</p>
                  <p className="mt-1 text-xs text-white/65">{m.subsystem}</p>
                </Box>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="container-mission">
          <Reveal>
            <Box glow className="p-8! sm:p-10!">
              <p className="hud-label mb-3 text-white/60">Faculty Advisor</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {MENTOR.name}
              </h2>
              <p className="mt-1 text-white/90 font-medium">{MENTOR.title}</p>
              <p className="text-sm text-white/70">{MENTOR.dept}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
                {MENTOR.note}
              </p>
            </Box>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: "rgba(0,0,0,0.45)" }}>
        <div className="container-mission">
          <Reveal>
            <Box className="p-8! sm:p-10! border-l-2 border-l-white/60">
              <p className="hud-label mb-3 text-white/60">Mentor Partner</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {MENTOR_PARTNER.name}
              </h2>
              <p className="mt-1 font-medium text-white/90">{MENTOR_PARTNER.role}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
                {MENTOR_PARTNER.note}
              </p>
            </Box>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
