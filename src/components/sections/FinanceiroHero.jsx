import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { financeiroHero } from "@/data/financeiro";

export default function FinanceiroHero() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            {financeiroHero.pill}
          </span>
          <h1 className="mt-5 font-display text-4xl text-white lg:text-5xl">
            {financeiroHero.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {financeiroHero.subtitle}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button className="bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
              <Link to={financeiroHero.ctaPrimaryTo}>{financeiroHero.ctaPrimaryLabel}</Link>
            </Button>
            <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
              <a href={financeiroHero.ctaSecondaryTo}>{financeiroHero.ctaSecondaryLabel}</a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
