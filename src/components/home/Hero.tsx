"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Rocket, Plane, Satellite } from "lucide-react";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CountdownTimer } from "@/components/ui/CountdownTimer";
import { SITE } from "@/lib/data";

const SolarSystemCanvas = dynamic(
  () =>
    import("@/components/home/SolarSystem").then(
      (m) => m.SolarSystemCanvas
    ),
  { ssr: false }
);

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-transparent">
      {/* Strong bottom-to-mid gradient so hero text pops over the video */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.2) 65%, transparent 100%)",
        }}
      />
      <div className="absolute inset-0 grid-overlay opacity-20" aria-hidden />
      <div
        className="absolute inset-0 trajectory-dots opacity-15 mask-fade-b"
        aria-hidden
      />

      {/* 3D Solar System canvas framed on the right */}
      <div className="pointer-events-none absolute inset-y-[8%] right-0 z-[1] hidden w-[45%] max-w-lg md:block lg:right-[3%] lg:max-w-xl">
        <SolarSystemCanvas className="h-full w-full opacity-95" />
      </div>

      {!reduce && (
        <div
          className="pointer-events-none absolute inset-0 z-[2] overflow-hidden opacity-20"
          aria-hidden
        >
          <div className="absolute inset-x-0 h-24 animate-scan bg-gradient-to-b from-transparent via-indigo/40 to-transparent" />
        </div>
      )}

      <div
        className="relative z-10 container-mission w-full px-5 pb-16 pt-28 sm:px-8 sm:pb-20 md:px-12 lg:px-16 lg:pb-24"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl lg:max-w-3xl"
        >
          <p className="hud-label mb-6 text-white/70">{SITE.competition}</p>
          <h1 className="sr-only">
            Team Vikram {SITE.tagline}
          </h1>
          <div className="max-w-[200px] sm:max-w-[260px] md:max-w-[320px]">
            <BrandLogo fillWidth linked={false} priority />
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.35em] text-white/70">
            Team Vikram · Rocketry · Drone Tech · CanSat
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm">
              <Rocket size={13} strokeWidth={1.5} className="text-orange-400" />
              Rocketry Division
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm">
              <Plane size={13} strokeWidth={1.5} className="text-sky-400" />
              Drone Tech Division
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white/90 backdrop-blur-sm">
              <Satellite size={13} strokeWidth={1.5} className="text-indigo-400" />
              CanSat Satellite
            </span>
          </div>

          <div className="mt-6">
            <AsciiGlitchRipple
              as="a"
              href="/project"
              dur={1000}
              spread={1.2}
              className="whitespace-nowrap font-body text-sm text-white/90 hover:text-white sm:text-base md:text-lg"
            >
              {SITE.tagline}
            </AsciiGlitchRipple>
          </div>

          <div className="mt-8">
            <AsciiGlitchRipple
              as="a"
              href="/project"
              dur={900}
              spread={1.1}
              className="font-mono text-sm tracking-wider text-white/80 hover:text-white"
            >
              Explore Our Mission →
            </AsciiGlitchRipple>
          </div>

          <div className="mt-10">
            <CountdownTimer />
          </div>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col items-start gap-2 sm:mt-16"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="hud-label text-white/60">Scroll to discover</span>
          <ChevronDown
            className="animate-bounce text-white/60"
            size={22}
            aria-hidden
          />
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-32 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
}
