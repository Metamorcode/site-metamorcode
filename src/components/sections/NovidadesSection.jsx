import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

// Posições/tempos fixos (não aleatórios a cada render) para as linhas
// verticais decorativas — um "chuveiro" de traços a descer em loop.
const LINES = [
  { left: 4, height: 26, duration: 5.5, delay: 0 },
  { left: 11, height: 20, duration: 6.5, delay: 1.2 },
  { left: 19, height: 32, duration: 4.8, delay: 2.6 },
  { left: 27, height: 22, duration: 7.2, delay: 0.6 },
  { left: 35, height: 18, duration: 5.2, delay: 3.4 },
  { left: 44, height: 28, duration: 6.1, delay: 1.8 },
  { left: 53, height: 24, duration: 4.5, delay: 2.2 },
  { left: 61, height: 20, duration: 6.8, delay: 0.2 },
  { left: 69, height: 30, duration: 5.9, delay: 3.9 },
  { left: 77, height: 22, duration: 7.5, delay: 1.5 },
  { left: 85, height: 26, duration: 5.0, delay: 2.9 },
  { left: 93, height: 19, duration: 6.3, delay: 0.9 },
];

/** Bloco "Novidades" claro, sem cartão/moldura, com traços a cair ao fundo. */
export default function NovidadesSection({ title, intro, items, icons }) {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {LINES.map((line, i) => (
          <span
            key={i}
            className="absolute top-0 w-px motion-reduce:hidden"
            style={{
              left: `${line.left}%`,
              height: `${line.height}%`,
              background: "linear-gradient(to bottom, transparent, rgba(91,0,115,0.35), transparent)",
              animation: `novidadesLineDrop ${line.duration}s linear infinite`,
              animationDelay: `${line.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <span className="relative inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            <span
              className="pointer-events-none absolute inset-0 rounded-full border border-primary/40 motion-reduce:hidden"
              style={{ animation: "novidadesPing 2.4s cubic-bezier(0,0,0.2,1) infinite" }}
            />
            <Sparkles className="h-3.5 w-3.5" />
            Novidades
          </span>
          <h3 className="mt-4 font-display text-2xl text-ink">{title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">{intro}</p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.name} delay={(i % 4) * 60}>
                <div className="group flex h-full gap-4 rounded-xl border border-card-border bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-base text-ink">{item.name}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes novidadesLineDrop {
          0% { transform: translateY(-30%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateY(500%); opacity: 0; }
        }
        @keyframes novidadesPing {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.6); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
