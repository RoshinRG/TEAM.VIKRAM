import { Rocket, Plane, Satellite } from "lucide-react";
import { Box } from "@/components/ui/box";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const DIVISIONS = [
  {
    id: "rocketry",
    icon: Rocket,
    title: "ROCKETRY",
    subtitle: "High-Power Sounding Rockets",
    description:
      "From propulsion selection and OpenRocket simulation to static motor testing and dual-deployment recovery the full rocket development lifecycle.",
  },
  {
    id: "drone",
    icon: Plane,
    title: "DRONE TECH",
    subtitle: "Autonomous UAV Platforms",
    description:
      "Custom frames, PX4/ArduPilot firmware, GPS/IMU sensor fusion, and computer vision drones built for surveillance, payload delivery, and autonomous navigation.",
  },
  {
    id: "cansat",
    icon: Satellite,
    title: "CANSAT",
    subtitle: "Satellite in a Can · IN-SPACe 2026",
    description:
      "A full aerospace mission in 330 ml LoRa telemetry, 7-state flight FSM, parachute recovery, and a Gemini-assisted ground station.",
  },
] as const;

export function FeatureTiles() {
  return (
    <section className="section-pad relative border-t border-white/10" style={{ background: "rgba(0,0,0,0.6)" }}>
      <div className="container-mission">
        <Reveal>
          <SectionHeading
            eyebrow="Divisions"
            title="Three frontiers of aerospace"
            description="Rocketry, Drone Tech, and CanSat each a distinct engineering discipline, unified under one team."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {DIVISIONS.map((div, i) => {
            const Icon = div.icon;
            return (
              <Reveal key={div.id} delay={i * 0.08}>
                <Box className="h-full !p-6 sm:!p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <Icon className="text-white/80" size={28} strokeWidth={1.5} />
                    <span className="font-mono text-[10px] tracking-[0.25em] text-white/50">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-wide text-white">
                    {div.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] tracking-[0.2em] text-white/70">
                    {div.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">
                    {div.description}
                  </p>
                </Box>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
