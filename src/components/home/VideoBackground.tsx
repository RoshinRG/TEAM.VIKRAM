"use client";

import { useCallback, useRef, useEffect } from "react";

const BACKGROUND_SRC = "/videos/TeamVikramrocket.mp4";

export function VideoBackground({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const tryPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !video.paused) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    void video.play().catch(() => {
      /* Autoplay blocked — poster remains visible until interaction. */
    });
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

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
