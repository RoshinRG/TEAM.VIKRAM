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

    const tryPlay = () => {
      video.play().catch((e: DOMException) => {
        // Ignore AbortError – browser paused video to save power (tab hidden/backgrounded).
        // It will auto-resume when the page is visible again via the listener below.
        if (e.name !== "AbortError") {
          console.warn("Video background play failed:", e);
        }
      });
    };

    tryPlay();

    // Retry playback when the user returns to the tab
    const handleVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
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
