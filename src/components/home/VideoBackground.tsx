"use client";

import { useCallback, useRef, useEffect } from "react";

// TeamVikram.mp4 is the path Vercel production already serves (200).
// It now contains the same 720p rocket encode as TeamVikramrocket.mp4.
const BACKGROUND_SOURCES = [
  "/videos/TeamVikram.mp4",
  "/videos/TeamVikramrocket.mp4",
  "/videos/rocket-bg.mp4",
];

export function VideoBackground({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

    let sourceIndex = 0;
    let cancelled = false;

    const loadSource = (index: number) => {
      if (cancelled || index >= BACKGROUND_SOURCES.length) return;
      sourceIndex = index;
      video.src = BACKGROUND_SOURCES[index];
      video.load();
    };

    const handleCanPlay = () => tryPlay();
    const handleError = () => {
      if (sourceIndex + 1 < BACKGROUND_SOURCES.length) {
        loadSource(sourceIndex + 1);
      }
    };
    const handleVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("error", handleError);
    document.addEventListener("visibilitychange", handleVisibility);
    loadSource(0);

    return () => {
      cancelled = true;
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("error", handleError);
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
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={tryPlay}
        onCanPlay={tryPlay}
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
