"use client";

import MaskedHeading from "@/components/ui/MaskedHeading";
import { Reveal } from "@/components/ui/Reveal";

export function MaskedMissionHeading() {
  return (
    <section className="relative overflow-hidden border-y border-moon/10 bg-void">
      <div className="absolute inset-0 bg-nebula opacity-40" aria-hidden />
      <div className="absolute inset-0 grid-overlay opacity-30" aria-hidden />

      <div className="container-mission relative section-pad py-16! sm:py-24!">
        <Reveal>
          <p className="hud-label mb-6 text-center">Mission signature</p>
        </Reveal>

        <MaskedHeading
          text="Engineered for flight"
          fillScale={1.25}
          parallax={26}
          reveal="rise"
          trigger="view"
          drift={18}
          brightness={1.05}
          saturation={1.1}
          grayscale={false}
          duration={1.1}
          stagger={0.09}
          align="center"
          weight={700}
          tracking={-0.03}
          lineHeight={1.06}
          textScale={0.115}
          className="min-h-[28vw] max-md:min-h-[42vw]"
        />

        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-moon/70 sm:text-base">
            Student-led aerospace from REC, Chennai — competing at IN-SPACe
            Student Competitions and Spaceport America Cup.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
