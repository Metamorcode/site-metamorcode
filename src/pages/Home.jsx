import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import ModuleTabsSection from "@/components/sections/ModuleTabsSection";
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
      <Reveal><ModuleTabsSection /></Reveal>
      <Reveal><AutomationsSection /></Reveal>

      <Testimonial
        quote="Antes, ficava sozinho de madrugada a montar a escala de toda a operação. Hoje esse trabalho está resolvido em minutos — e as horas extra praticamente desapareceram."
        author="Edu Marques"
        role="Fundador, Cuidar de Si"
        initials="EM"
      />

      <Reveal><EcosystemGrid /></Reveal>
      <Reveal><AboutTeaser /></Reveal>
      <FinalCTA />
    </>
  );
}
