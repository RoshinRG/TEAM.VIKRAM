"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MISSION_VIDEO_SRC = "/videos/TeamVikram.mp4";
const MISSION_VIDEO_LABEL = "/videos/TeamVikram.mp4";

export function MissionVideo() {
  return (
    <section className="section-pad relative border-t border-moon/10 bg-void">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" aria-hidden />
      <div className="container-mission relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <SectionHeading
              eyebrow="Mission film"
              title="Team Vikram in motion"
              description="A look at the team, the hardware, and the runway to rocketry, drones, and CanSat."
            />
            <a
              href="/videos/team-motion-2"
              className="inline-flex items-center gap-2 self-start md:self-auto border border-white/20 bg-white/5 px-4 py-2 text-xs font-mono tracking-wider text-frost transition hover:border-white/50 hover:bg-white/10"
            >
              <span>WATCH DEDICATED PAGE</span>
              <span className="text-white/40">→</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden border border-moon/20 bg-void shadow-[0_0_0_1px_rgba(46,46,46,0.6)]">
            <div className="flex items-center justify-between border-b border-moon/15 px-4 py-2">
              <span className="hud-label">REC · TEAM VIKRAM</span>
              <a
                href="/videos/team-motion-2"
                className="font-mono text-[10px] tracking-wider text-moon/50 hover:text-white transition"
              >
                {MISSION_VIDEO_LABEL} ↗
              </a>
            </div>
            <div className="relative aspect-video w-full bg-black">
              <video
                key={MISSION_VIDEO_SRC}
                src={MISSION_VIDEO_SRC}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
