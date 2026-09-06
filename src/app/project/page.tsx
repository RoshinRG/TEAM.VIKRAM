import type { Metadata } from "next";
import { type ElementType } from "react";
import Link from "next/link";
import {
  Rocket,
  Plane,
  Satellite,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Boxes, Cpu, Radio, LifeBuoy, MonitorSmartphone } from "lucide-react";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  MISSION_LOG,
  SITE,
  ROCKETRY_DIVISION,
  DRONE_DIVISION,
  GARUDA_DIVISION,
} from "@/lib/data";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SUBSYSTEMS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Project",
  description: `Technical overview of ${SITE.name}'s Rocketry, CanSat, and Drone Technology divisions.`,
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SUBSYSTEM_ICONS = [Boxes, Cpu, Radio, LifeBuoy, MonitorSmartphone];

const STATUS_STYLES: Record<string, string> = {
  Completed: "text-emerald-400 border-emerald-400/40 bg-emerald-400/15 font-semibold",
  Complete: "text-emerald-400 border-emerald-400/40 bg-emerald-400/15 font-semibold",
  Upcoming: "text-sky-400 border-sky-400/40 bg-sky-400/15 font-semibold",
  "In Progress": "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Testing: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  Design: "text-sky-400 border-sky-400/30 bg-sky-400/10",
};

/* ─── Reusable division section ─────────────────────────────────── */
function DivisionSection({
  division,
  icon: Icon,
  id,
  accentBorder,
  accentText,
  milestones,
}: {
  division: typeof ROCKETRY_DIVISION | typeof DRONE_DIVISION | typeof GARUDA_DIVISION;
  icon: LucideIcon;
  id: string;
  accentBorder: string;
  accentText: string;
  milestones?: readonly { label: string; status: "Completed" | "In Progress" }[];
}) {
  return (
    <section
      id={id}
      className="section-pad border-b border-white/10 relative overflow-hidden"
      style={{ background: "rgba(0,0,0,0.65)" }}
    >
      <div className="container-mission relative space-y-14">
        {/* Header */}
        <Reveal>
          <div className="flex items-start gap-5">
            <div
              className={`mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border ${accentBorder} bg-black/90`}
            >
              <Icon size={22} strokeWidth={1.5} className={accentText} />
            </div>
            <div>
              <p className="hud-label mb-2 text-white/70">{division.eyebrow}</p>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                {division.heading}
              </h2>
              <p className={`mt-1 font-display text-lg font-medium ${accentText}`}>
                {division.subheading}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80">
            {division.description}
          </p>
        </Reveal>

        {/* Milestone status badges (GARUDA only) */}
        {milestones && milestones.length > 0 && (
          <Reveal delay={0.06}>
            <div>
              <p className="hud-label mb-4 text-white/70">Mission Status</p>
              <div className="flex flex-wrap gap-3">
                {milestones.map((m) => (
                  <span
                    key={m.label}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-sm border px-3 py-1.5 font-mono text-[11px] tracking-wider",
                      STATUS_STYLES[m.status] ?? STATUS_STYLES["Design"]
                    )}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        m.status === "Completed"
                          ? "bg-emerald-400"
                          : "animate-pulse bg-amber-400"
                      )}
                    />
                    {m.label}
                    {m.status === "Completed" ? " ✅" : " ⏳"}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        {/* Focus areas */}
        <Reveal delay={0.08}>
          <div>
            <p className="hud-label mb-4 text-white/70">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              {division.focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-black/80 px-3 py-1.5 font-mono text-[11px] tracking-wider text-white/90 backdrop-blur-sm"
                >
                  <ChevronRight size={10} className="text-white/60" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects */}
        <div>
          <Reveal>
            <p className="hud-label mb-6 text-white/70">Projects</p>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {division.projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.07}>
                <Box className="flex h-full flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-sm border border-white/20 bg-black/80 px-2 py-0.5 font-mono text-[10px] tracking-widest text-white/70">
                      {project.tag}
                    </span>
                    <span
                      className={`rounded-sm border px-2 py-0.5 font-mono text-[10px] tracking-wider ${STATUS_STYLES[project.status] ?? STATUS_STYLES["Design"]}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-white leading-snug">
                    {project.title}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-white/75">
                    {project.description}
                  </p>
                </Box>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function ProjectPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden border-b border-white/10" style={{ background: "rgba(0,0,0,0.65)" }}>
        <div className="container-mission relative">
          <Reveal>
            <p className="hud-label mb-3 text-white/70">Projects</p>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Three Divisions.{" "}
              <span className="text-white/80">One Mission.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
              Team Vikram operates across Rocketry, CanSat, and Drone Technology —
              each division tackling a distinct slice of aerospace engineering,
              from high-power propulsion to autonomous environmental sensing.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <AsciiGlitchRipple
                as="a"
                href="#rocketry"
                className="font-mono text-sm tracking-wider text-white/90 hover:text-white"
              >
                Rocketry →
              </AsciiGlitchRipple>
              <AsciiGlitchRipple
                as="a"
                href="#cansat"
                className="font-mono text-sm tracking-wider text-white/90 hover:text-white"
              >
                CanSat / GARUDA →
              </AsciiGlitchRipple>
              <AsciiGlitchRipple
                as="a"
                href="#drone"
                className="font-mono text-sm tracking-wider text-white/90 hover:text-white"
              >
                Drone Tech →
              </AsciiGlitchRipple>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Division quick-nav ──────────────────────────────────── */}
      <div className="border-b border-white/10 bg-black/85 backdrop-blur-md sticky top-20 z-40">
        <div className="container-mission flex items-center overflow-x-auto">
          {[
            { href: "#rocketry", label: "Rocketry", Icon: Rocket },
            { href: "#cansat", label: "CanSat / GARUDA", Icon: Satellite },
            { href: "#drone", label: "Drone Tech", Icon: Plane },
          ].map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              className="flex shrink-0 items-center gap-2 border-r border-white/10 px-6 py-4 font-mono text-[11px] tracking-widest text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              <Icon size={13} strokeWidth={1.5} />
              {label}
            </a>
          ))}
        </div>
      </div>

      {/* ── Rocketry ────────────────────────────────────────────── */}
      <DivisionSection
        id="rocketry"
        division={ROCKETRY_DIVISION}
        icon={Rocket}
        accentBorder="border-orange-500/40"
        accentText="text-orange-400"
      />

      {/* ── CanSat / GARUDA ──────────────────────────────────────── */}
      <DivisionSection
        id="cansat"
        division={GARUDA_DIVISION}
        icon={Satellite}
        accentBorder="border-indigo-500/40"
        accentText="text-indigo-400"
        milestones={GARUDA_DIVISION.milestones}
      />

      {/* ── Drone Tech ──────────────────────────────────────────── */}
      <DivisionSection
        id="drone"
        division={DRONE_DIVISION}
        icon={Plane}
        accentBorder="border-sky-500/40"
        accentText="text-sky-400"
      />

      {/* ── Build Log ───────────────────────────────────────────── */}
      <section
        id="build-log"
        className="section-pad border-b border-moon/10 bg-surface-deep/50"
      >
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow="Mission log"
              title="Build & flight gallery"
              description="Captioned milestones from concept freeze through drop tests. Replace placeholders with real photos."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MISSION_LOG.map((entry, i) => (
              <Reveal key={entry.title} delay={i * 0.05}>
                <Box flush className="overflow-hidden p-0!">
                  <div className="relative flex aspect-16/10 items-center justify-center bg-linear-to-br from-indigo/30 to-void">
                    <div className="absolute inset-0 grid-overlay opacity-50" />
                    <span className="relative font-mono text-[10px] tracking-[0.25em] text-moon/40">
                      IMG_LOG_{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="border-t border-moon/15 p-4">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display text-base font-bold text-frost">
                        {entry.title}
                      </h3>
                      <span className="shrink-0 font-mono text-[10px] tracking-wider text-indigo-glow">
                        {entry.date}
                      </span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-moon/70">
                      {entry.caption}
                    </p>
                  </div>
                </Box>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Telemetry Demo ──────────────────────────────────────── */}
      <section className="section-pad border-b border-moon/10">
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow="Telemetry demo"
              title="Simulated ground station readout"
              description="A lightweight HUD preview of the operator view. Wire to live endpoints when the GS is online."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Box flush className="p-0! overflow-hidden">
              <div className="flex items-center justify-between border-b border-moon/15 px-4 py-2">
                <span className="hud-label">GS · Simulated Link</span>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-indigo-glow">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-glow" />
                  RX OK
                </span>
              </div>
              <div className="grid gap-px bg-moon/10 sm:grid-cols-4">
                {[
                  { k: "ALT", v: "0 m" },
                  { k: "VEL", v: "0 m/s" },
                  { k: "RSSI", v: "0 dBm" },
                  { k: "BAT", v: "0 V" },
                  { k: "LAT", v: "0°" },
                  { k: "LON", v: "0°" },
                  { k: "FSM", v: "IDLE" },
                  { k: "PKT", v: "#0" },
                ].map((cell) => (
                  <div
                    key={cell.k}
                    className="bg-surface-elev/90 px-4 py-5 text-center"
                  >
                    <p className="font-mono text-[9px] tracking-[0.25em] text-moon/40">
                      {cell.k}
                    </p>
                    <p className="mt-1 font-mono text-lg text-frost/50">{cell.v}</p>
                  </div>
                ))}
              </div>
            </Box>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="section-pad">
        <div className="container-mission flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold text-frost">
                Technical documentation
              </h2>
              <p className="mt-2 text-sm text-moon/70">
                Technical report PDF will be published after design freeze.
                Request access via Contact in the meantime.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/contact?reason=Collaboration" className="btn-ghost">
              Request Technical Report
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
