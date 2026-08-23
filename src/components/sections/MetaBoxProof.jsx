import Reveal from "@/components/Reveal";
import { metaboxProofImages } from "@/data/metabox";

export default function MetaBoxProof() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              O hardware
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              O terminal, montado e em uso
            </h2>
          </div>

          <div className="mx-auto mt-10 grid gap-6 sm:grid-cols-2">
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
              <p className="text-sm leading-relaxed text-white/35">{metaboxProofImages.hardware.alt}</p>
            </div>
            <div className="flex aspect-[4/5] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-8 text-center">
              <p className="text-sm leading-relaxed text-white/35">{metaboxProofImages.usage.alt}</p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-white/30">
            {metaboxProofImages.usage.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
