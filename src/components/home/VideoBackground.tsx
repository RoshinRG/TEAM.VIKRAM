"use client";

import { useRef, useEffect } from "react";

export function VideoBackground({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.volume = 0;

    const tryPlay = () => {
      video.play().catch((e: DOMException) => {
        // AbortError  – browser paused (tab hidden / power saving). Will retry on visibility.
        // NotSupportedError – browser has no supported codec for this source. Nothing to retry;
        //   the video simply won't play on this device/browser (graceful degradation).
        if (e.name !== "AbortError" && e.name !== "NotSupportedError" && e.name !== "NotAllowedError") {
          console.warn("Video background play failed:", e);
        }
      });
    };

    // Only attempt playback once the source is ready to avoid NotSupportedError loops.
    const handleCanPlay = () => tryPlay();
    const handleVisibility = () => {
      if (document.visibilityState === "visible") tryPlay();
    };

    video.addEventListener("canplay", handleCanPlay, { once: true });
    document.addEventListener("visibilitychange", handleVisibility);

    // Trigger load now that the element is mounted (preload="none" delays network fetch).
    video.load();

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
      document.removeEventListener("visibilitychange", handleVisibility);
      // Pause and release the media resource to free memory on unmount.
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, []);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${className ?? ""}`}
    >
      {/* Team Vikram rocket background video – strictly muted, gracefully skipped if codec unsupported */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover scale-105 brightness-75 contrast-110"
      >
        <source src="/videos/TeamVIkramrocket.mp4" type="video/mp4" />
      </video>

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
