import { IMPACT_STATS } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal } from "@/components/ui/Reveal";

export function ImpactStrip() {
  return (
    <section className="border-y border-white/10" style={{ background: "rgba(0,0,0,0.7)" }}>
      <div className="container-mission px-5 py-12 sm:px-8 md:px-12 lg:px-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-4">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-mono text-3xl font-bold text-white md:text-4xl"
                />
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
