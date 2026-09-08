"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MISSION_VIDEO_SRC = "/videos/TeamVikram.mp4?v=team-motion-2";
const MISSION_VIDEO_LABEL = "/videos/TeamVikram.mp4";

export function MissionVideo() {
  return (
    <section className="section-pad relative border-t border-moon/10 bg-void">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" aria-hidden />
      <div className="container-mission relative">
        <Reveal>
          <SectionHeading
            eyebrow="Mission film"
            title="Team Vikram in motion"
            description="A look at the team, the hardware, and the runway to rocketry, drones, and CanSat."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden border border-moon/20 bg-void shadow-[0_0_0_1px_rgba(46,46,46,0.6)]">
            <div className="flex items-center justify-between border-b border-moon/15 px-4 py-2">
              <span className="hud-label">REC · TEAM VIKRAM</span>
              <span className="font-mono text-[10px] tracking-wider text-moon/50">
                {MISSION_VIDEO_LABEL}
              </span>
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
