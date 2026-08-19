import { MISSION_HIGHLIGHTS } from "@/lib/data";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MissionHighlights() {
  return (
    <section className="section-pad border-t border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="container-mission">
        <Reveal>
          <SectionHeading
            eyebrow="Mission Highlights"
            title="From selection to flight software"
            description="Three chapters that define where we are on the path to rocketry, drones, and CanSat."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {MISSION_HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <Box className="flex h-full flex-col border-l-2 border-l-white/60">
                <span className="hud-label text-white/70">{item.meta}</span>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/85">
                  {item.body}
                </p>
              </Box>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
