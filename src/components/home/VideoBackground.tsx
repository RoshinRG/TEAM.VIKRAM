"use client";

import { useRef, useEffect } from "react";

const BACKGROUND_SOURCES = [
  "/videos/rocket-bg.mp4",
  "/videos/TeamVikram.mp4",
];

export function VideoBackground({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let sourceIndex = 0;
    let cancelled = false;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const tryPlay = () => {
      if (cancelled || !video.paused) return;
      void video.play().catch(() => {
        /* Autoplay or codec failure — poster remains visible. */
      });
    };

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
  }, []);

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
        poster="/images/masked-heading-nebula.png"
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
