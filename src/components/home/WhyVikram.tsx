import { WHY_STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Box } from "@/components/ui/box";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyVikram() {
  return (
    <section className="section-pad relative overflow-hidden border-t border-white/10" style={{ background: "rgba(0,0,0,0.65)" }}>
      <ParallaxLayer className="pointer-events-none absolute inset-0 grid-overlay opacity-20" />
      <div className="container-mission relative">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              eyebrow="Why Team Vikram"
              title="Mission-driven student aerospace"
              description="We build like a flight ops team rigorous reviews, logged tests, and a ground station that treats telemetry as the mission heartbeat. Rocketry, drones, and CanSat are our proving grounds."
            />
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {WHY_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <Box className="!p-5 sm:!p-6">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-mono text-3xl font-bold text-white sm:text-4xl"
                  />
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                    {stat.label}
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
