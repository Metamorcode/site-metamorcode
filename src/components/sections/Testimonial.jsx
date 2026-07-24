import { Play } from "lucide-react";

export default function Testimonial({ quote, author, role, initials }) {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-center font-display text-2xl text-white lg:text-3xl">
          Conheça os nossos clientes
        </h2>

        <div className="grid overflow-hidden rounded-xl border border-white/10 bg-slate-900 sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-4 p-8">
            <span className="font-display text-4xl leading-none text-accent">"</span>
            <blockquote className="text-lg leading-relaxed text-white">
              {quote}
            </blockquote>
            <cite className="text-sm not-italic text-white/50">
              <strong className="text-white">{author}</strong> · {role}
            </cite>
          </div>

          <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-primary-deep/40 to-black">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg">
              <Play className="h-5 w-5 fill-current" />
            </span>
            <span className="absolute bottom-4 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white/70">
              Vídeo em breve · Cuidar de Si
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
