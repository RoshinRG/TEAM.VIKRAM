"use client";

import { useCallback, useRef, useEffect } from "react";

const BACKGROUND_SRC = "/videos/TeamVikramrocket.mp4?v=rocket-bg-2";
const EXPECTED_BACKGROUND_DURATION = 91.4;

export function VideoBackground({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const logVideoState = useCallback((event: string, video: HTMLVideoElement) => {
    // #region agent log
    fetch("http://127.0.0.1:7905/ingest/6f405458-28b4-4663-8899-2a20fbce9785", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "3a9c0d" },
      body: JSON.stringify({
        sessionId: "3a9c0d",
        runId: "post-fix",
        hypothesisId: "A-D",
        location: "VideoBackground.tsx:logVideoState",
        message: event,
        data: {
          component: "background",
          configuredSrc: BACKGROUND_SRC,
          currentSrc: video.currentSrc,
          duration: video.duration,
          videoWidth: video.videoWidth,
          videoHeight: video.videoHeight,
          readyState: video.readyState,
          networkState: video.networkState,
          errorCode: video.error?.code ?? null,
          expectedDuration: EXPECTED_BACKGROUND_DURATION,
          durationMatchesRocket: Math.abs(video.duration - EXPECTED_BACKGROUND_DURATION) < 2,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
  }, []);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    void video.play().catch(() => {
      /* Autoplay blocked — retry on visibility change. */
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    document.addEventListener("visibilitychange", handleVisibility);
    tryPlay();

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      video.pause();
    };
  }, [tryPlay]);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${className ?? ""}`}
    >
      <video
        ref={videoRef}
        src={BACKGROUND_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={(e) => {
          logVideoState("loadeddata", e.currentTarget);
          tryPlay();
        }}
        onCanPlay={(e) => {
          logVideoState("canplay", e.currentTarget);
          tryPlay();
        }}
        onError={(e) => logVideoState("error", e.currentTarget)}
        className="absolute inset-0 h-full w-full object-cover scale-105 brightness-75 contrast-110"
      />

      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 45%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      <div className="absolute inset-0 grid-overlay opacity-25" />
    </div>
  );
}
