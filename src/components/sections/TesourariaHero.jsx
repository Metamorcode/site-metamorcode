import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { tesourariaHero } from "@/data/tesouraria";

export default function TesourariaHero() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              {tesourariaHero.pill}
            </span>
            <span
              className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_0_18px_rgba(169,79,196,0.55)] motion-safe:animate-[novidadesPulse_2.6s_ease-in-out_infinite]"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Novidades
            </span>
          </div>

          <h1 className="mt-5 font-display text-4xl text-white lg:text-5xl">
            {tesourariaHero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {tesourariaHero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
              <Link to={tesourariaHero.ctaPrimaryTo}>{tesourariaHero.ctaPrimaryLabel}</Link>
            </Button>
            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
              <a href={tesourariaHero.ctaSecondaryTo}>{tesourariaHero.ctaSecondaryLabel}</a>
            </Button>
          </div>
        </Reveal>
      </div>

      <style>{`
        @keyframes novidadesPulse {
          0%, 100% { box-shadow: 0 0 18px rgba(169,79,196,0.55); }
          50% { box-shadow: 0 0 28px rgba(169,79,196,0.85); }
        }
      `}</style>
    </section>
  );
}
