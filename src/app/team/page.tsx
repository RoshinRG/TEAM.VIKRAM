import type { Metadata } from "next";
import Image from "next/image";
import { PerspectiveCarousel } from "@/components/ui/perspective-carousel";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MENTOR,
  MENTOR_PARTNER,
  ABOUT,
  SITE,
  FOUNDING_LEADS,
  TEAM_MEMBERS,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Team",
  description: `Meet ${SITE.name} student engineers.`,
  alternates: {
    canonical: "/team",
  },
};

const carouselItems = FOUNDING_LEADS.filter((m) => m.photo).map((m) => ({
  src: m.photo!,
  title: m.name,
  subtitle: m.role,
  alt: m.name,
}));

function MemberPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-3/4 overflow-hidden bg-black">
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover object-[center_20%]"
      />
    </div>
  );
}

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
            <p className="hud-label mb-6 text-center text-white/70">Founding leads</p>
          </Reveal>
          <Reveal delay={0.08}>
            <PerspectiveCarousel
              items={carouselItems}
              defaultActiveIndex={0}
              slideWidth={280}
              loop
              autoPlay
              autoPlayInterval={2800}
              showLabels
              className="h-190 text-white"
              viewportClassName="[mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]"
              imageClassName="border border-white/15 bg-black"
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {TEAM_MEMBERS.map((m, i) => (
              <Reveal key={`${m.name}-${m.role}`} delay={i * 0.03}>
                <Box flush className="overflow-hidden p-0!">
                  {m.photo ? <MemberPhoto src={m.photo} alt={m.name} /> : null}
                  <div className="border-t border-white/10 p-4">
                    <p className="hud-label text-white/60">{m.group}</p>
                    <h3 className="mt-2 font-display text-lg font-bold text-white">
                      {m.name}
                    </h3>
                    <p className="text-sm font-medium text-white/90">{m.role}</p>
                    <p className="mt-1 text-xs text-white/65">{m.subsystem}</p>
                  </div>
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
              <p className="mt-1 font-medium text-white/90">{MENTOR.title}</p>
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
            <Box className="border-l-2 border-l-white/60 p-8! sm:p-10!">
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
