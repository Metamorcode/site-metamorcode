import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import ModuleTabsSection from "@/components/sections/invisibleLeakSection";
import AutomationsSection from "@/components/sections/AutomationsSection";
import Testimonial from "@/components/sections/Testimonial";
import EcosystemGrid from "@/components/sections/EcosystemGrid";
import AboutTeaser from "@/components/sections/AboutTeaser";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal><StatsStrip /></Reveal>
      {/* <Testimonial /> */}
      <Reveal><ModuleTabsSection /></Reveal>
      <FinalCTA />
    </>
  );
}
