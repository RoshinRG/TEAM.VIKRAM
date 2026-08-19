import type { Metadata } from "next";
import Link from "next/link";
import { Check, Download, Star } from "lucide-react";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FUND_ALLOCATION, SITE, SPONSOR_TIERS } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sponsorship",
  description: `Partner with ${SITE.name} for visibility at ${SITE.competition}.`,
};

export default function SponsorshipPage() {
  return (
    <div className="pt-20">
      <section className="section-pad relative overflow-hidden border-b border-white/10" style={{ background: "rgba(0,0,0,0.65)" }}>
        <div className="container-mission relative">
          <Reveal>
            <p className="hud-label mb-3 text-white/70">Sponsorship</p>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Partner With{" "}
              <span className="text-white/80">Team Vikram</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              Your support fuels high-power sounding rocket fabrication, autonomous drone platform development, and CanSat satellite flight testing putting your brand beside India&apos;s next generation of aerospace engineers.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow="Why sponsor us"
              title="Visibility with technical credibility"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                t: "National stage",
                d: `Logo presence tied to ${SITE.competition} a platform watched by institutions, mentors, and aerospace peers.`,
              },
              {
                t: "Student reach",
                d: "Campus outreach, social channels, and demo days put your brand in front of engineering talent pipelines.",
              },
              {
                t: "Real hardware",
                d: "Not a poster project flight tests, LoRa telemetry, and a working ground station stack you can point to.",
              },
            ].map((item, i) => (
              <Reveal key={item.t} delay={i * 0.08}>
                <Box className="h-full border-l-2 border-l-white/60">
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.t}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    {item.d}
                  </p>
                </Box>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden border-b border-white/10" style={{ background: "rgba(0,0,0,0.7)" }}>
        <div className="container-mission relative">
          <Reveal>
            <p className="mb-10 text-center font-display text-2xl font-bold lowercase tracking-wide text-white sm:text-3xl">
              sponsorship programs
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {SPONSOR_TIERS.map((tier, i) => {
              return (
                <Reveal key={tier.name} delay={i * 0.06}>
                  <article
                    className={cn(
                      "relative flex h-full flex-col rounded-2xl border bg-black/85 p-6 backdrop-blur-md transition",
                      tier.highlight
                        ? "border-white/50 shadow-[0_0_40px_-12px_rgba(255,255,255,0.3)]"
                        : "border-white/20"
                    )}
                  >
                    {tier.highlight && (
                      <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/40 bg-black px-3 py-1 font-mono text-[10px] tracking-wider text-white">
                        <Star size={10} className="fill-white text-white" />
                        most popular
                      </span>
                    )}

                    <h3 className="font-display text-xl font-bold tracking-wide text-white">
                      {tier.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{tier.tagline}</p>
                    <p className="mt-4 font-mono text-lg font-semibold text-white/90">
                      {tier.price}
                    </p>

                    <ul className="mt-6 flex-1 space-y-3">
                      {tier.benefits.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2.5 text-sm leading-snug text-white/85"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/90 text-black">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow="Fund allocation"
              title="Where sponsorship goes"
              description="Transparent breakdown so partners know exactly what they enable."
            />
          </Reveal>
          <div className="space-y-5">
            {FUND_ALLOCATION.map((item, i) => (
              <Reveal key={item.label} delay={i * 0.04}>
                <div>
                  <div className="mb-2 flex items-end justify-between gap-4">
                    <span className="text-sm text-white">{item.label}</span>
                    <span className="font-mono text-sm text-white/80">
                      {item.pct}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-white/20">
                    <div
                      className="h-full bg-gradient-to-r from-white/40 to-white"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="container-mission">
          <Reveal>
            <Box className="border-dashed px-8 py-12 text-center">
              <p className="hud-label mb-3 text-white/70">Partners</p>
              <h2 className="font-display text-2xl font-bold text-white">
                Become a Founding Sponsor
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
                We&apos;re assembling our first partner cohort for CanSat India
                2026. Early sponsors receive founding recognition across our
                site and materials.
              </p>
            </Box>
          </Reveal>
        </div>
      </section>

      <section className="section-pad" style={{ background: "rgba(0,0,0,0.6)" }}>
        <div className="container-mission flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Reveal>
            <div>
              <h2 className="font-display text-2xl font-bold text-white">
                Ready to partner?
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Request the sponsorship deck or reach out via Contact.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/contact?reason=Sponsorship" className="btn-ghost">
                <Download size={16} />
                Request Sponsorship Deck
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
              <AsciiGlitchRipple
                as="a"
                href="/contact"
                className="font-mono text-xs tracking-wider text-white/80 hover:text-white"
              >
                Open contact channel →
              </AsciiGlitchRipple>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
