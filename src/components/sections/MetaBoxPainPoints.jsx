import { AlertTriangle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { metaboxPainPoints } from "@/data/metabox";

export default function MetaBoxPainPoints() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div>
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {metaboxPainPoints.pill}
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              {metaboxPainPoints.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              {metaboxPainPoints.body}
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {metaboxPainPoints.cards.map((card) => (
            <Reveal key={card} delay={50}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-accent transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  {card}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
