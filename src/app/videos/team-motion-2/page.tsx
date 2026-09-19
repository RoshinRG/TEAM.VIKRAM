import type { Metadata } from "next";
import Link from "next/link";
import {
  Tv,
  ArrowLeft,
  CheckCircle2,
  Layers,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/lib/data";

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Team Vikram - Team Motion",
  description:
    "Watch Team Vikram in motion — student aerospace engineering, high-power sounding rockets, autonomous UAV drones, and CanSat satellite payloads at Rajalakshmi Engineering College.",
  thumbnailUrl: [
    "https://www.teamvikram.in/images/vikram-logo.png",
    "https://www.teamvikram.in/images/logo-light.png",
  ],
  uploadDate: "2024-01-01T00:00:00+05:30",
  duration: "PT55S",
  contentUrl: "https://www.teamvikram.in/videos/TeamVikram.mp4",
  embedUrl: "https://www.teamvikram.in/videos/team-motion-2",
};

export const metadata: Metadata = {
  title: "Team Motion 2 | Official Mission Video",
  description:
    "Watch Team Vikram in motion — student aerospace engineering, sounding rockets, UAV drones, and CanSat satellite systems at Rajalakshmi Engineering College.",
  alternates: {
    canonical: "https://www.teamvikram.in/videos/team-motion-2",
  },
  openGraph: {
    title: "Team Vikram - Team Motion 2",
    description:
      "Official mission video showcasing Team Vikram's rocketry, autonomous drones, and CanSat space systems.",
    url: "https://www.teamvikram.in/videos/team-motion-2",
    type: "video.other",
    videos: [
      {
        url: "https://www.teamvikram.in/videos/TeamVikram.mp4",
        secureUrl: "https://www.teamvikram.in/videos/TeamVikram.mp4",
        type: "video/mp4",
        width: 1920,
        height: 1080,
      },
    ],
    images: [
      {
        url: "/images/vikram-logo.png",
        width: 512,
        height: 512,
        alt: "Team Vikram Logo",
      },
    ],
  },
  twitter: {
    card: "player",
    title: "Team Vikram - Team Motion 2",
    description:
      "Watch Team Vikram in motion — student aerospace engineering, sounding rockets, UAV drones, and CanSat satellite systems.",
    images: ["/images/vikram-logo.png"],
  },
};

export default function VideoWatchPage() {
  return (
    <>
      {/* 1. VideoObject Structured Data for Google Video SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      {/* 2. Dedicated Watch Page with Video as Primary / Hero Element */}
      <main className="relative min-h-screen bg-void pt-24 pb-20 text-frost">
        {/* Ambient background effects */}
        <div className="pointer-events-none absolute inset-0 grid-overlay opacity-30" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-125 w-200 rounded-full bg-cyan-500/10 blur-[140px]"
          aria-hidden
        />

        <div className="container-mission relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
          {/* Breadcrumb Navigation */}
          <Reveal>
            <div className="mb-6 flex items-center justify-between">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-xs text-moon/70 transition hover:text-cyan-400"
              >
                <ArrowLeft size={14} />
                <span>BACK TO BASE</span>
              </Link>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  CANONICAL WATCH STREAM
                </span>
                <span className="font-mono text-xs text-moon/50 hidden sm:inline-block">
                  REC · CHENNAI
                </span>
              </div>
            </div>
          </Reveal>

          {/* Primary Hero Video Player */}
          <Reveal delay={0.05}>
            <div className="group relative overflow-hidden rounded-xl border border-moon/30 bg-black/90 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-md">
              {/* HUD Header Bar */}
              <div className="flex items-center justify-between border-b border-moon/20 bg-void/80 px-4 py-2.5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-mono text-xs font-semibold tracking-wider text-frost">
                    REC // STREAM 01 · TEAM MOTION 2
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-moon/60 hidden sm:inline-block">
                    1080P HD · 60FPS
                  </span>
                  <span className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/70">
                    MP4
                  </span>
                </div>
              </div>

              {/* Video Element - Hero of the Page */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  src="https://www.teamvikram.in/videos/TeamVikram.mp4"
                  controls
                  autoPlay={false}
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                  style={{ width: "100%", maxHeight: "80vh" }}
                >
                  <source src="/videos/TeamVikram.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* HUD Status Footer */}
              <div className="flex flex-wrap items-center justify-between border-t border-moon/15 bg-void/60 px-4 py-2 font-mono text-[11px] text-moon/60">
                <div className="flex items-center gap-4">
                  <span>URL: /videos/team-motion-2</span>
                  <span className="hidden md:inline">AUDIO: STEREO</span>
                </div>
                <div className="flex items-center gap-2 text-moon/80">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                  <span>OFFICIAL RELEASE</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Video Metadata & Information Section */}
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            {/* Primary Details */}
            <div className="lg:col-span-2 space-y-6">
              <Reveal delay={0.1}>
                <div>
                  <div className="mb-2 flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-wider">
                    <Tv size={14} />
                    <span>Featured Film · Season 2024-2026</span>
                  </div>
                  <h1 className="font-heading text-3xl font-bold tracking-tight text-frost sm:text-4xl md:text-5xl">
                    Team Motion 2
                  </h1>
                  <p className="mt-4 text-base leading-relaxed text-moon/80 sm:text-lg">
                    A cinematic deep-dive into {SITE.name}&apos;s engineering operations, propulsion test runs, UAV aerial test maneuvers, and precision CanSat satellite electronics. Witness the runway to rocketry competitions and next-generation space exploration built by undergraduate engineers at Rajalakshmi Engineering College.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-lg border border-moon/20 bg-void/60 p-6 backdrop-blur">
                  <h2 className="font-heading text-lg font-semibold text-frost">
                    About This Mission Film
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-moon/70">
                    This video documents the multidisciplinary development pipeline powering Team Vikram. From computational fluid dynamics simulations and static motor firings to telemetry downlinks and autonomous multirotor payload deliveries, our engineers build real flight hardware for the IN-SPACe Student Competition and global student rocketry arenas.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/project"
                      className="inline-flex items-center gap-2 border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-mono tracking-wider text-cyan-300 transition hover:bg-cyan-500/20"
                    >
                      <Layers size={14} />
                      <span>EXPLORE PROJECTS</span>
                    </Link>
                    <Link
                      href="/sponsorship"
                      className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-4 py-2 text-xs font-mono tracking-wider text-frost transition hover:bg-white/10"
                    >
                      <Sparkles size={14} />
                      <span>SPONSOR THE TEAM</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Sidebar Specifications */}
            <div className="space-y-6">
              <Reveal delay={0.2}>
                <div className="rounded-lg border border-moon/20 bg-void/80 p-5 space-y-4 backdrop-blur">
                  <h3 className="font-mono text-xs font-semibold tracking-wider text-moon/50 uppercase">
                    Technical Specifications
                  </h3>

                  <div className="space-y-3 font-mono text-xs divide-y divide-moon/10">
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-moon/60">Upload Date</span>
                      <span className="text-frost">Jan 01, 2024</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-moon/60">Entity</span>
                      <span className="text-frost">Team Vikram REC</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-moon/60">Institution</span>
                      <span className="text-frost text-right">Rajalakshmi Eng. College</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-moon/60">Divisions</span>
                      <span className="text-frost">Rocketry, Drones, CanSat</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-moon/60">Media Resolution</span>
                      <span className="text-cyan-400">1920 × 1080 (FHD)</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-moon/60">Direct File</span>
                      <a
                        href="/videos/TeamVikram.mp4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline"
                      >
                        TeamVikram.mp4 ↗
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="rounded-lg border border-white/10 bg-white/2 p-5">
                  <h3 className="font-mono text-xs font-semibold tracking-wider text-moon/50 uppercase mb-3">
                    Mission Navigation
                  </h3>
                  <div className="space-y-2 font-mono text-xs">
                    <Link
                      href="/"
                      className="block p-2 rounded bg-white/5 text-moon/80 hover:text-white hover:bg-white/10 transition"
                    >
                      → Return to Homepage
                    </Link>
                    <Link
                      href="/team"
                      className="block p-2 rounded bg-white/5 text-moon/80 hover:text-white hover:bg-white/10 transition"
                    >
                      → Meet Team Members &amp; Leads
                    </Link>
                    <Link
                      href="/contact"
                      className="block p-2 rounded bg-white/5 text-moon/80 hover:text-white hover:bg-white/10 transition"
                    >
                      → Contact Mission Control
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
