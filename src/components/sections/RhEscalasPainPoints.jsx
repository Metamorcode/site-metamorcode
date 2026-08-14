import { AlertTriangle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { rhEscalasPainPoints } from "@/data/rhEscalas";

export default function RhEscalasPainPoints() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {rhEscalasPainPoints.pill}
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              {rhEscalasPainPoints.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/60">
              {rhEscalasPainPoints.body}
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-6 text-center">
              <p className="text-xs leading-relaxed text-white/35">
                {rhEscalasPainPoints.image.alt}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {rhEscalasPainPoints.cards.map((card) => (
            <Reveal key={card} delay={50}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-accent">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{card}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
