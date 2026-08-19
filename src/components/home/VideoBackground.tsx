"use client";

import { useRef, useEffect } from "react";

export function VideoBackground({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Permanently mute the video background and ensure continuous playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;
    video.play().catch((e) => console.warn("Video background play failed:", e));
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${className ?? ""}`}
    >
      {/* SpaceX Starship launch video - strictly muted */}
      <video
        ref={videoRef}
        src="/videos/TeamVIkramrocket.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
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
