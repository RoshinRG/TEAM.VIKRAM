import type { Metadata } from "next";
import Link from "next/link";
import { Check, Download, Star, X, Minus } from "lucide-react";
import { AsciiGlitchRipple } from "@/components/ui/ascii-glitch-ripple";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FUND_ALLOCATION, SITE, SPONSOR_TIERS, MENTOR_PARTNER } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Sponsorship",
  description: `Partner with ${SITE.name} for visibility at ${SITE.competition}.`,
};

// ── Comparison table data ─────────────────────────────────────────────────────
const TABLE_ROWS: {
  benefit: string;
  subsonic: string | boolean;
  supersonic: string | boolean;
  title: string | boolean;
}[] = [
  { benefit: "Sponsorship Brochure", subsonic: true, supersonic: true, title: true },
  { benefit: "Website Recognition", subsonic: true, supersonic: true, title: "Featured" },
  { benefit: "Social Media Recognition", subsonic: true, supersonic: true, title: "Featured" },
  { benefit: "Project Presentation", subsonic: false, supersonic: true, title: true },
  { benefit: "Technical Reports / Publications", subsonic: false, supersonic: true, title: true },
  { benefit: "Event / Competition Banner", subsonic: "Standard", supersonic: "Prominent", title: "Premium" },
  { benefit: "Official Team T-Shirt", subsonic: "Sleeve / Side", supersonic: "Back", title: "Front" },
  { benefit: "Project Showcase / Display", subsonic: true, supersonic: true, title: "Prominent" },
  { benefit: "Rocket / CanSat Branding", subsonic: false, supersonic: "Secondary", title: "Primary" },
  { benefit: "Sponsor Mention at Events", subsonic: false, supersonic: false, title: "Prominent" },
  { benefit: "Dedicated Social Media Post", subsonic: false, supersonic: true, title: true },
  { benefit: "Project Showcase Invitation", subsonic: true, supersonic: true, title: true },
  { benefit: "Certificate of Appreciation", subsonic: true, supersonic: true, title: true },
  { benefit: "Team Interaction", subsonic: true, supersonic: true, title: true },
];

function CellValue({ value, isTitle }: { value: string | boolean; isTitle?: boolean }) {
  if (value === true) {
    return (
      <span
        className={cn(
          "mx-auto flex h-5 w-5 items-center justify-center rounded-full text-black",
          isTitle ? "bg-amber-300" : "bg-white/80"
        )}
      >
        <Check size={12} strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return <Minus size={14} className="mx-auto text-white/25" />;
  }
  return (
    <span
      className={cn(
        "font-mono text-[10px] tracking-wider",
        isTitle ? "font-semibold text-amber-200" : "text-white/75"
      )}
    >
      {value}
    </span>
  );
}

export default function SponsorshipPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden border-b border-white/10" style={{ background: "rgba(0,0,0,0.65)" }}>
        <div className="container-mission relative">
          <Reveal>
            <p className="hud-label mb-3 text-white/70">Sponsorship</p>
            <h1 className="max-w-3xl font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Partner With{" "}
              <span className="text-white/80">Team Vikram</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-white/85">
              Your support fuels high-power sounding rocket fabrication, autonomous CanSat development, and national aerospace competition campaigns — putting your brand beside India&apos;s next generation of aerospace engineers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Why sponsor ──────────────────────────────────────────────────── */}
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
                t: "National & International Stage",
                d: `Brand presence at IN-SPACe competitions, SIRC, and Spaceport America Cup — platforms watched by institutions, mentors, and aerospace peers.`,
              },
              {
                t: "Student Talent Pipeline",
                d: "Campus outreach, social channels, and demo days put your brand in front of engineering talent pipelines across REC and beyond.",
              },
              {
                t: "Real Hardware — Real Results",
                d: "Not a poster project — 3rd Rank All India at SIRC 2026, ISRO conference publication, and active competition hardware you can point to.",
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

      {/* ── Sponsorship Tiers ─────────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden border-b border-white/10" style={{ background: "rgba(0,0,0,0.7)" }}>
        <div className="container-mission relative">
          <Reveal>
            <p className="mb-10 text-center font-display text-2xl font-bold lowercase tracking-wide text-white sm:text-3xl">
              sponsorship programs
            </p>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {SPONSOR_TIERS.map((tier, i) => {
              return (
                <Reveal key={tier.name} delay={i * 0.06}>
                  <article
                    className={cn(
                      "relative flex h-full flex-col rounded-2xl border bg-black/85 p-6 backdrop-blur-md transition",
                      tier.highlight
                        ? "border-amber-400/50 shadow-[0_0_40px_-12px_rgba(251,191,36,0.35)]"
                        : "border-white/20"
                    )}
                  >
                    {tier.highlight && (
                      <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full border border-amber-400/50 bg-black px-3 py-1 font-mono text-[10px] tracking-wider text-amber-300">
                        <Star size={10} className="fill-amber-300 text-amber-300" />
                        title partner
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

      {/* ── Comparison Table ──────────────────────────────────────────────── */}
      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow="Detailed comparison"
              title="What each tier includes"
              description="Full benefit matrix across all sponsorship levels."
            />
          </Reveal>
          <Reveal delay={0.06}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-150 border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-3 pr-6 text-left">
                      <span className="hud-label text-white/50">Benefit</span>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <span className="font-display text-sm font-bold text-white/80">Subsonic</span>
                      <p className="mt-0.5 font-mono text-[10px] text-white/50">₹10K – ₹25K</p>
                    </th>
                    <th className="px-4 py-3 text-center">
                      <span className="font-display text-sm font-bold text-white/80">Supersonic</span>
                      <p className="mt-0.5 font-mono text-[10px] text-white/50">₹25K – ₹50K</p>
                    </th>
                    <th className="rounded-t-lg border border-b-0 border-amber-400/40 bg-amber-400/10 px-4 py-3 text-center">
                      <span className="font-display text-sm font-bold text-amber-200">Title Partner</span>
                      <p className="mt-0.5 font-mono text-[10px] text-amber-300/80">&gt; ₹50K</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((row, i) => (
                    <tr
                      key={row.benefit}
                      className={cn(
                        "border-b border-white/10",
                        i % 2 === 0 ? "bg-white/2" : "bg-transparent"
                      )}
                    >
                      <td className="py-3 pr-6 text-xs text-white/75">{row.benefit}</td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.subsonic} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CellValue value={row.supersonic} />
                      </td>
                      <td className="border-x border-amber-400/25 bg-amber-400/5 px-4 py-3 text-center">
                        <CellValue value={row.title} isTitle />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CSR & Sponsor Benefits ────────────────────────────────────────── */}
      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.55)" }}>
        <div className="container-mission">
          <Reveal>
            <SectionHeading
              eyebrow="Additional benefits"
              title="CSR & Sponsor advantages"
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                t: "CSR & Tax Exemption",
                d: "Eligible contributions may qualify for tax deduction under the Income Tax Act (subject to statutory conditions and institutional eligibility). Consult your financial advisor for applicable provisions.",
              },
              {
                t: "Event Visibility",
                d: "Brand exposure at national and international events, exhibitions, and technical platforms — including IN-SPACe competitions, SIRC, Spaceport America Cup, and ISRO-affiliated conferences.",
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

      {/* ── Fund Allocation ───────────────────────────────────────────────── */}
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
                      className="h-full bg-linear-to-r from-white/40 to-white"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mentor Partner ────────────────────────────────────────────────── */}
      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="container-mission">
          <Reveal>
            <Box glow className="p-8! sm:p-10!">
              <p className="hud-label mb-3 text-white/60">Mentor Partner</p>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {MENTOR_PARTNER.name}
              </h2>
              <p className="mt-1 font-medium text-white/90">{MENTOR_PARTNER.role}</p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85">
                {MENTOR_PARTNER.note}
              </p>
            </Box>
          </Reveal>
        </div>
      </section>

      {/* ── Become a sponsor ─────────────────────────────────────────────── */}
      <section className="section-pad border-b border-white/10" style={{ background: "rgba(0,0,0,0.5)" }}>
        <div className="container-mission">
          <Reveal>
            <Box className="border-dashed px-8 py-12 text-center">
              <p className="hud-label mb-3 text-white/70">Partners</p>
              <h2 className="font-display text-2xl font-bold text-white">
                Become a Founding Sponsor
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-white/80">
                We&apos;re assembling our first partner cohort for IN-SPACe 2026. Early sponsors receive founding recognition across our site and competition materials.
              </p>
            </Box>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
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
