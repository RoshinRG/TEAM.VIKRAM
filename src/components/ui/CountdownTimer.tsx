"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";
import { Box } from "@/components/ui/box";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: string): TimeLeft {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function CountdownTimer() {
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(SITE.countdownTarget));
    const id = setInterval(() => {
      setTime(getTimeLeft(SITE.countdownTarget));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const cells = time
    ? [
        { label: "DAYS", value: pad(time.days) },
        { label: "HRS", value: pad(time.hours) },
        { label: "MIN", value: pad(time.minutes) },
        { label: "SEC", value: pad(time.seconds) },
      ]
    : [
        { label: "DAYS", value: "--" },
        { label: "HRS", value: "--" },
        { label: "MIN", value: "--" },
        { label: "SEC", value: "--" },
      ];

  return (
    <Box className="w-full max-w-md p-0!" flush>
      <div className="flex items-center justify-between border-b border-moon/15 px-4 py-2">
        <span className="hud-label">T− Countdown</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-glow" />
          <span className="font-mono text-[10px] tracking-widest text-indigo-glow">
            LIVE
          </span>
        </span>
      </div>
      <p className="border-b border-moon/10 px-4 py-2 font-mono text-[10px] tracking-wider text-moon/60">
        {SITE.countdownLabel}
      </p>
      <div className="grid grid-cols-4 divide-x divide-moon/15">
        {cells.map((c) => (
          <div key={c.label} className="px-2 py-4 text-center sm:px-3">
            <div className="font-mono text-2xl font-bold tracking-wider text-frost sm:text-3xl">
              {c.value}
            </div>
            <div className="mt-1 font-mono text-[9px] tracking-[0.2em] text-moon/55">
              {c.label}
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
