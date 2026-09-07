"use client";

import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/ui/BrandLogo";

const BOOT_LINES = [
  "AVIONICS BUS … OK",
  "LORA TELEMETRY … LINKED",
  "GROUND STATION … ONLINE",
  "MISSION CLOCK … SYNCED",
];

type LoadingScreenProps = {
  /** Full-viewport splash (default) vs inline route fallback */
  variant?: "splash" | "inline";
  className?: string;
  /** 0–100 when driven externally; omit for indeterminate sweep */
  progress?: number;
  statusLabel?: string;
};

export function LoadingScreen({
  variant = "inline",
  className,
  progress,
  statusLabel = "Initializing uplink",
}: LoadingScreenProps) {
  const isSplash = variant === "splash";
  const pct =
    typeof progress === "number"
      ? Math.min(100, Math.max(0, Math.round(progress)))
      : null;

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden bg-void px-6",
        isSplash
          ? "fixed inset-0 z-100 min-h-svh"
          : "min-h-[70vh] w-full py-24",
        className
      )}
      role="status"
      aria-live="polite"
      aria-label="Loading Team Vikram mission interface"
      aria-busy="true"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 trajectory-dots opacity-15"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute left-1/2 top-[38%] h-80 w-80 -translate-x-1/2 -translate-y-1/2 sm:h-112 sm:w-md"
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full border border-moon/10" />
        <div className="loading-orbit absolute inset-0 rounded-full border border-transparent border-t-moon/40 border-r-frost/20" />
      </div>

      <div className="relative z-10 flex w-full max-w-lg flex-col items-center text-center">
        <div className="relative mb-8 w-full max-w-70 drop-shadow-[0_0_28px_rgba(255,255,255,0.16)] sm:max-w-95 md:max-w-115">
          <BrandLogo fillWidth linked={false} priority />
        </div>

        <p className="hud-label mb-3">IN-SPACe Rocketry, Drone and CanSat</p>
        <p className="font-mono text-xs tracking-[0.18em] text-moon/65">
          {statusLabel}
        </p>

        <ul className="mt-8 w-full space-y-2 text-left font-mono text-[10px] tracking-[0.14em] text-moon/45">
          {BOOT_LINES.map((line, i) => (
            <li
              key={line}
              className="loading-boot-line flex items-center justify-between border border-moon/10 bg-surface/60 px-3 py-2"
              style={{ animationDelay: `${i * 0.22}s` }}
            >
              <span>{line.split("…")[0]}…</span>
              <span className="text-frost-muted">
                {line.includes("OK") ||
                line.includes("LINKED") ||
                line.includes("ONLINE") ||
                line.includes("SYNCED")
                  ? line.split("…")[1]?.trim()
                  : ""}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 w-full">
          <div className="mb-2 flex items-center justify-between font-mono text-[9px] tracking-[0.22em] text-moon/55">
            <span>MISSION BOOT</span>
            <span className="text-frost-muted">
              {pct !== null ? `${pct}%` : "STANDBY"}
            </span>
          </div>
          <div className="h-1 w-full overflow-hidden border border-moon/15 bg-moon/5">
            {pct !== null ? (
              <div
                className="h-full bg-linear-to-r from-surface-elev via-frost-muted to-moon/70 transition-[width] duration-150 ease-out"
                style={{ width: `${pct}%` }}
              />
            ) : (
              <div className="loading-bar h-full w-1/3 bg-linear-to-r from-surface-elev via-frost-muted to-moon/80" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
