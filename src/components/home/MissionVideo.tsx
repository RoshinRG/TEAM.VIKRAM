"use client";

import { useCallback } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const MISSION_VIDEO_SRC = "/videos/TeamVikram.mp4?v=team-motion-2";
const EXPECTED_MISSION_DURATION = 55.1;

export function MissionVideo() {
  const logMissionVideo = useCallback((event: string, video: HTMLVideoElement, runId = "pre-fix") => {
    // #region agent log
    fetch("http://127.0.0.1:7905/ingest/6f405458-28b4-4663-8899-2a20fbce9785", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "3a9c0d" },
      body: JSON.stringify({
        sessionId: "3a9c0d",
        runId,
        hypothesisId: "A-E",
        location: "MissionVideo.tsx:logMissionVideo",
        message: event,
        data: {
          component: "mission",
          configuredSrc: MISSION_VIDEO_SRC,
          currentSrc: video.currentSrc,
          duration: video.duration,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          readyState: video.readyState,
          networkState: video.networkState,
          errorCode: video.error?.code ?? null,
          expectedDuration: EXPECTED_MISSION_DURATION,
          durationMatchesTeam: Math.abs(video.duration - EXPECTED_MISSION_DURATION) < 2,
          durationMatchesRocket: Math.abs(video.duration - 91.4) < 2,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

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
                {MISSION_VIDEO_SRC}
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
                onLoadedMetadata={(e) => logMissionVideo("loadedmetadata", e.currentTarget, "post-fix")}
                onPlay={(e) => logMissionVideo("play", e.currentTarget, "post-fix")}
                onError={(e) => logMissionVideo("error", e.currentTarget, "post-fix")}
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
