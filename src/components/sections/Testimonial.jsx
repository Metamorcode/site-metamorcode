import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

const AUTO_ADVANCE_MS = 5000;

const testimonials = [
  {
    quote:
      "Antes, ficava sozinho de madrugada a montar a escala de toda a operação. Hoje esse trabalho está resolvido em minutos — e as horas extra praticamente desapareceram.",
    author: "Edu Marques",
    role: "Fundador, Cuidar de Si",
    video: null, // TODO: adicionar vídeo do Fundador
  },
  {
    quote:
      "Já não sei o que é ficar até tarde da noite a conferir todas as folhas de ponto dos colaboradores, para poder concluir o financeiro a tempo.",
    author: "Nome do Financeiro", // TODO: substituir pelo nome real
    role: "Financeiro, Cuidar de Si",
    video: null, // TODO: adicionar vídeo do Financeiro
  },
  {
    quote:
      "O processamento salarial e o controlo de assiduidade deixaram de ser um pesadelo mensal — hoje é só validar e seguir em frente.",
    author: "Nome do RH", // TODO: substituir pelo nome real
    role: "RH, Cuidar de Si",
    video: null, // TODO: adicionar vídeo do RH
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  function goTo(i) {
    setIndex((i + testimonials.length) % testimonials.length);
    setIsExpanded(false);
  }

  useEffect(() => {
    if (isHovered || isExpanded) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTO_ADVANCE_MS);

    return () => clearInterval(id);
  }, [isHovered, isExpanded, index]);

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-center font-display text-2xl text-white lg:text-3xl">
          Conheça o testemunho dos nossos clientes
        </h2>

        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.author}
                  className="grid w-full flex-shrink-0 sm:grid-cols-2"
                >
                  <div className="flex flex-col justify-center gap-4 p-8">
                    <span className="font-display text-4xl leading-none text-accent">
                      "
                    </span>
                    <blockquote className="text-lg leading-relaxed text-white">
                      {t.quote}
                    </blockquote>
                    <cite className="text-sm not-italic text-white/50">
                      <strong className="text-white">{t.author}</strong> ·{" "}
                      {t.role}
                    </cite>
                  </div>

                  <div className="relative flex min-h-[220px] items-center justify-center bg-gradient-to-br from-primary-deep/40 to-black">
                    {t.video ? (
                      <video
                        className="h-full w-full object-cover"
                        src={t.video}
                        controls
                        playsInline
                        onPlay={() => setIsExpanded(true)}
                        onPause={() => setIsExpanded(false)}
                        onEnded={() => setIsExpanded(false)}
                      />
                    ) : (
                      <button
                        type="button"
                        onClick={() => setIsExpanded((v) => !v)}
                        aria-label="Expandir vídeo"
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary shadow-lg">
                          <Play className="h-5 w-5 fill-current" />
                        </span>
                        <span className="absolute bottom-4 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white/70">
                          Vídeo em breve · {t.role}
                        </span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Depoimento anterior"
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black sm:-translate-x-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Próximo depoimento"
            className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 translate-x-4 items-center justify-center rounded-full bg-black/70 text-white transition hover:bg-black sm:translate-x-12"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.author}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ver depoimento de ${t.author}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-accent" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}