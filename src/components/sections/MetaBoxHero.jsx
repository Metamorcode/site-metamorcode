import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import MetaBoxMock from "@/components/sections/MetaBoxMock";
import { metaboxHero } from "@/data/metabox";

export default function MetaBoxHero() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <Reveal>
            <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
              {metaboxHero.pill}
            </span>
            <h1 className="mt-5 font-display text-4xl text-white lg:text-5xl">
              {metaboxHero.title}
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">
              {metaboxHero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button className="bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
                <Link to={metaboxHero.ctaPrimaryTo}>{metaboxHero.ctaPrimaryLabel}</Link>
              </Button>
              <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10" asChild>
                <a href={metaboxHero.ctaSecondaryTo}>{metaboxHero.ctaSecondaryLabel}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100">
              <MetaBoxMock />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
