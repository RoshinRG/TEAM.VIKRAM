"use client";

import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const MIN_MS = 1800;
const MAX_MS = 2800;

/**
 * First-visit full-screen mission splash. Skips when prefers-reduced-motion
 * or when session already saw the splash.
 * Starts hidden to avoid hydration mismatch / flash for returning visitors.
 */
export function MissionSplash() {
  const [phase, setPhase] = useState<"idle" | "show" | "exit" | "done">(
    "idle"
  );
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing uplink");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("tv-splash-seen") === "1";
    } catch {
      seen = false;
    }

    if (reduce || seen) {
      setPhase("done");
      return;
    }

    setPhase("show");
    const start = performance.now();
    let raf = 0;
    let doneTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const statuses = [
      { at: 0, label: "Initializing uplink" },
      { at: 35, label: "Syncing telemetry" },
      { at: 65, label: "Arming ground station" },
      { at: 90, label: "Mission interface ready" },
    ];

    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(1, elapsed / MIN_MS);
      const eased = 1 - Math.pow(1 - t, 2.4);
      const p = Math.round(eased * 100);
      setProgress(p);

      const current = [...statuses].reverse().find((s) => p >= s.at);
      if (current) setStatus(current.label);

      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        const hold = Math.max(0, MAX_MS - elapsed);
        doneTimer = setTimeout(() => {
          setPhase("exit");
          try {
            sessionStorage.setItem("tv-splash-seen", "1");
          } catch {
            /* private mode */
          }
          hideTimer = setTimeout(() => setPhase("done"), 500);
        }, hold);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (doneTimer) clearTimeout(doneTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, []);

  if (phase === "idle" || phase === "done") return null;

  return (
    <div
      className={`transition-opacity duration-500 ease-out ${
        phase === "exit" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <LoadingScreen
        variant="splash"
        progress={progress}
        statusLabel={status}
      />
    </div>
  );
}
