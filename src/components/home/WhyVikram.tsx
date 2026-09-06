import { ABOUT } from "@/lib/data";
import { Box } from "@/components/ui/box";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronRight } from "lucide-react";

export function WhyVikram() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-white/10" style={{ background: "rgba(0,0,0,0.65)" }}>
      <ParallaxLayer className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="container-mission relative">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow={ABOUT.eyebrow}
              title={ABOUT.title}
              description={`${ABOUT.intro} ${ABOUT.mission}`}
            />
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.06}>
              <Box className="p-5! sm:p-6!">
                <p className="hud-label mb-4 text-white/70">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {ABOUT.expertise.map((area) => (
                    <span
                      key={area}
                      className="inline-flex items-center gap-1.5 rounded-sm border border-white/20 bg-black/80 px-3 py-1.5 font-mono text-[11px] tracking-wider text-white/90"
                    >
                      <ChevronRight size={10} className="text-white/60" />
                      {area}
                    </span>
                  ))}
                </div>
              </Box>
            </Reveal>

            <Reveal delay={0.1}>
              <Box className="p-5! sm:p-6!">
                <p className="hud-label mb-4 text-white/70">Competitions</p>
                <ul className="space-y-2">
                  {ABOUT.competitions.map((comp) => (
                    <li
                      key={comp}
                      className="flex items-start gap-2 text-sm leading-relaxed text-white/85"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/60" />
                      {comp}
                    </li>
                  ))}
                </ul>
              </Box>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
