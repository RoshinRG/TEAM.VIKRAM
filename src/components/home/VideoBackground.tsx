"use client";

import { useRef, useEffect } from "react";

const BACKGROUND_SRC = "/videos/TeamVIkramrocket.mp4";

export function VideoBackground({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const tryPlay = () => {
      if (video.paused) {
        void video.play().catch(() => {
          /* Autoplay or codec failure — poster remains visible. */
        });
      }
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", handleVisibility);
    tryPlay();

    return () => {
      video.removeEventListener("canplay", tryPlay);
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
        src={BACKGROUND_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/masked-heading-nebula.png"
        className="absolute inset-0 h-full w-full object-cover scale-105 brightness-75 contrast-110"
      />

      {/* Cinematic vignette overlays */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.35)" }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 45%, rgba(0,0,0,0.5) 100%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-25" />
    </div>
  );
}
