import { Hero } from "@/components/home/Hero";
import { MissionVideo } from "@/components/home/MissionVideo";
import { FeatureTiles } from "@/components/home/FeatureTiles";

import { WhyVikram } from "@/components/home/WhyVikram";
import { MissionHighlights } from "@/components/home/MissionHighlights";
import { ImpactStrip } from "@/components/home/ImpactStrip";
import { CtaBand } from "@/components/home/CtaBand";
import { MissionSplash } from "@/components/ui/MissionSplash";

export default function HomePage() {
  return (
    <>
      <MissionSplash />
      <Hero />
      <MissionVideo />
      <FeatureTiles />
      <WhyVikram />
      <MissionHighlights />
      <ImpactStrip />
      <CtaBand />
    </>
  );
}
