import Reveal from "@/components/Reveal";
import { rhEscalasProofImage } from "@/data/rhEscalas";

export default function RhEscalasProof() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Isto é o ecrã real
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              A escala, sempre à vista de todos
            </h2>
          </div>

          <div className="mx-auto mt-10 flex aspect-[16/10] max-w-3xl items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
            <p className="text-sm leading-relaxed text-white/35">{rhEscalasProofImage.alt}</p>
          </div>
          <p className="mt-4 text-center text-xs text-white/30">
            {rhEscalasProofImage.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
