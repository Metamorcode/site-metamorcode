import { useEffect, useState } from "react";
import {
  CalendarClock,
  Users,
  AlertTriangle,
  ClipboardCheck,
  Fingerprint,
  RefreshCw,
  Waves,
  Clock,
  Workflow,
  Banknote,
  Landmark,
  Lock,
  Droplets,
  MessageCircleWarning,
  Sparkles,
} from "lucide-react";

const CYCLE_MS = 2000;

// Cor única (roxo da marca) para todas as gotas — o ciclo já não varia a cor.
const LEAK_COLOR = "#a94fc4";

// As 4 gotas que a torneira pinga, em ordem de ciclo.
const LEAKS = [
  {
    id: "escala",
    icon: CalendarClock,
    color: LEAK_COLOR,
    title: "Montar a Escala",
    description:
      "Verificar a disponibilidade de cada colaborador, à mão, toda semana — tempo do gestor que devia estar a resolver outra coisa.",
    sinal:
      "O sintoma: a escala do mês só fica pronta na véspera, e ainda muda três vezes.",
    tags: [
      { icon: Users, label: "Disponibilidade checada uma a uma" },
      { icon: AlertTriangle, label: "Conflitos só aparecem depois de fechar" },
      { icon: MessageCircleWarning, label: "Trocas de turno combinadas por WhatsApp" },
    ],
    solucao:
      "Com o MetaSenior: a disponibilidade e os conflitos aparecem sozinhos, antes de fechar a escala.",
  },
  {
    id: "folha",
    icon: ClipboardCheck,
    color: LEAK_COLOR,
    title: "Conferir a Folha",
    description:
      "Cruzar picagens com valores, mês após mês, à procura do erro que sempre aparece.",
    sinal: "O sintoma: o financeiro reabre a folha três vezes antes de a aprovar.",
    tags: [
      { icon: Fingerprint, label: "Picagens cruzadas manualmente" },
      { icon: RefreshCw, label: "O mesmo erro, todos os meses" },
      { icon: CalendarClock, label: "Feriados e turnos noturnos calculados à mão" },
    ],
    solucao:
      "Com o MetaSenior: a picagem chega já cruzada com a escala — sem reabrir nada.",
  },
  {
    id: "cascata",
    icon: Waves,
    color: LEAK_COLOR,
    title: "Efeito Bola de Neve",
    description:
      "Um atraso empurra o seguinte. Nunca aparece isolado — aparece na operação toda.",
    sinal: "O sintoma: um imprevisto de manhã ainda está a ser resolvido ao fim do dia.",
    tags: [
      { icon: Clock, label: "Um atraso puxa o próximo" },
      { icon: Workflow, label: "Passa de turno em turno" },
      { icon: AlertTriangle, label: "Ninguém percebe a causa original" },
    ],
    solucao:
      "Com o MetaSenior: o alerta chega no momento, antes de o atraso se espalhar.",
  },
  {
    id: "pagamento",
    icon: Banknote,
    color: LEAK_COLOR,
    title: "Confirmar e Pagar",
    description:
      "Entre fechar os valores e a transferência cair certa, no dia certo, perde-se tempo previsível.",
    sinal: "O sintoma: o colaborador liga a perguntar se o pagamento já saiu.",
    tags: [
      { icon: Landmark, label: "Confirmação antes da transferência" },
      { icon: CalendarClock, label: "A data certa, todos os meses" },
      { icon: RefreshCw, label: "Reconciliação manual com o TOConline" },
    ],
    solucao:
      "Com o MetaSenior: os valores confirmam-se sozinhos e a transferência sai na data certa.",
  },
];

function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function LeakingFaucetSection() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // A torneira pinga a cada 2s. Passar o rato pelo cartão pausa tudo —
  // o ciclo só avança depois de o rato sair.
  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % LEAKS.length);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused]);

  const active = LEAKS[index];
  const ActiveIcon = active.icon;

  return (
    <section className="bg-surface py-20" id="fugas">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent"
              style={{ animation: "livePulse 2s ease-in-out infinite" }}
            />
            Onde o dinheiro está a fugir
          </span>
          <h2 className="mt-4 font-display text-4xl text-white lg:text-5xl">
            A sua operação também tem uma torneira a pingar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/60">
            Não é um erro grande. São pequenas fugas, todos os dias, que nunca
            aparecem sozinhas numa fatura — só se somam no fim do mês.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-center">
          {/* Torneira + gota */}
          <div className="relative flex h-[460px] w-60 shrink-0 flex-col items-center">
            <svg
              width="216"
              height="234"
              viewBox="0 0 120 130"
              className="drop-shadow-[0_12px_18px_rgba(0,0,0,0.55)]"
            >
              <defs>
                <linearGradient id="faucetMetal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#3f3f46" />
                </linearGradient>
                <linearGradient id="faucetLight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#e4e4e7" />
                  <stop offset="100%" stopColor="#9ca3af" />
                </linearGradient>
              </defs>

              {/* corpo principal do cotovelo */}
              <path
                d="M 15 38 L 43 38 A 28 28 0 0 1 71 66 L 71 108 L 49 108 L 49 66 A 6 6 0 0 0 43 60 L 15 60 Z"
                fill="url(#faucetMetal)"
                stroke="#18181b"
                strokeWidth="1"
              />

              {/* tampa escura na parede */}
              <rect x="9" y="37" width="8" height="24" rx="2" fill="#18181b" />

              {/* colarinho da válvula */}
              <rect x="27" y="27" width="24" height="11" rx="4" fill="url(#faucetLight)" stroke="#18181b" strokeWidth="0.5" />
              {/* haste */}
              <rect x="32" y="15" width="14" height="16" rx="3" fill="url(#faucetMetal)" />
              {/* bonnet */}
              <circle cx="39" cy="15" r="9" fill="url(#faucetLight)" stroke="#18181b" strokeWidth="0.5" />
              {/* manípulo em T */}
              <rect
                x="20"
                y="7"
                width="38"
                height="9"
                rx="4.5"
                fill="url(#faucetLight)"
                stroke="#18181b"
                strokeWidth="0.5"
                transform="rotate(-6 39 11.5)"
              />

              {/* brilhos */}
              <rect x="25" y="9.5" width="8" height="2" rx="1" fill="#f4f4f5" opacity="0.7" transform="rotate(-6 39 11.5)" />
              <rect x="40" y="9.5" width="10" height="2" rx="1" fill="#f4f4f5" opacity="0.5" transform="rotate(-6 39 11.5)" />
              <path d="M 51 42 A 24 24 0 0 1 67 62" fill="none" stroke="#e4e4e7" strokeWidth="2.5" strokeLinecap="round" opacity="0.5" />
              <line x1="67" y1="72" x2="67" y2="98" stroke="#e4e4e7" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
              <rect x="19" y="47" width="14" height="2" rx="1" fill="#e4e4e7" opacity="0.35" />

              {/* abertura do bico */}
              <rect x="49" y="105" width="22" height="4" rx="1" fill="#0a0a0a" opacity="0.6" />
            </svg>

            {/* gota a cair */}
            <div
              key={index}
              className="absolute left-1/2 top-[194px] h-4 w-3.5 -translate-x-1/2"
              style={{
                borderRadius: "50% 50% 50% 50% / 62% 62% 38% 38%",
                background: `linear-gradient(180deg, ${hexToRgba(
                  active.color,
                  0.95
                )}, ${hexToRgba(active.color, 0.65)})`,
                boxShadow: `0 0 10px ${hexToRgba(active.color, 0.55)}`,
                animation: `dripFall ${CYCLE_MS}ms linear infinite`,
                animationPlayState: paused ? "paused" : "running",
              }}
            />

            {/* poça no fundo, muda de cor com a gota atual */}
            <div
              className="absolute bottom-3 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full blur-[2px] transition-colors duration-500"
              style={{ background: hexToRgba(active.color, 0.35) }}
            />
          </div>

          {/* Cartão que muda a cada gota */}
          <div
            className="w-full max-w-md"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl border p-6 sm:p-7"
              style={{
                borderColor: hexToRgba(active.color, 0.35),
                background: "#000",
                boxShadow: `0 0 30px ${hexToRgba(active.color, 0.12)}`,
                animation: "cardIn 0.45s ease",
              }}
            >
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ background: hexToRgba(active.color, 0.18) }}
                >
                  <ActiveIcon className="h-5 w-5" style={{ color: active.color }} />
                </span>
                <p className="font-display text-2xl text-white sm:text-3xl">{active.title}</p>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {active.description}
              </p>

              <p
                className="mt-3 border-l-2 pl-3 text-xs italic leading-relaxed text-white/45"
                style={{ borderColor: hexToRgba(active.color, 0.4) }}
              >
                {active.sinal}
              </p>

              <ul className="mt-4 space-y-2">
                {active.tags.map((tag) => {
                  const TagIcon = tag.icon;
                  return (
                    <li
                      key={tag.label}
                      className="flex items-center gap-2 text-xs text-white/55"
                    >
                      <TagIcon className="h-3.5 w-3.5 shrink-0" style={{ color: active.color }} />
                      {tag.label}
                    </li>
                  );
                })}
              </ul>

              <div
                className="mt-5 flex items-start gap-2 rounded-xl p-3"
                style={{ background: hexToRgba(active.color, 0.12) }}
              >
                <Sparkles
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: active.color }}
                />
                <p className="text-xs leading-relaxed text-white/80">
                  {active.solucao}
                </p>
              </div>
            </div>

            {/* indicadores */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {LEAKS.map((leak, i) => (
                <button
                  key={leak.id}
                  type="button"
                  aria-label={leak.title}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 22 : 8,
                    background:
                      i === index ? leak.color : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* O que se vê vs. o que não se vê */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15">
                <Lock className="h-5 w-5 text-accent" />
              </span>
              <p className="font-display text-xl text-white">
                O preço do MetaSenior
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Sabe exatamente quanto paga, todos os meses. Está sempre à
              vista, num único valor fixo.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow/15">
                <Droplets className="h-5 w-5 text-yellow" />
              </span>
              <p className="font-display text-xl text-white">
                O custo de não o ter
              </p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Acumula-se em horas, atrasos e erros que nunca aparecem numa
              fatura — até serem somados.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes dripFall {
          0% { transform: translateY(0) translateX(-50%) scale(0.6); opacity: 0; }
          8% { opacity: 1; transform: translateY(0) translateX(-50%) scale(1); }
          78% { opacity: 1; transform: translateY(235px) translateX(-50%) scale(1); }
          88% { opacity: 0; transform: translateY(248px) translateX(-50%) scale(0.7); }
          100% { opacity: 0; transform: translateY(248px) translateX(-50%) scale(0.7); }
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
