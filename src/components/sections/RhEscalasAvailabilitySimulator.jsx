import { useMemo, useState } from 'react';
import Reveal from '@/components/Reveal';
import { rhEscalasRulesIntro } from '@/data/rhEscalas';

const DAY_START = 8;
const DAY_END = 22;

function pct(hour) {
  return ((hour - DAY_START) / (DAY_END - DAY_START)) * 100;
}

function hourLabel(hour) {
  const h = Math.floor(hour);
  const m = Math.round((hour - h) * 60);
  return m === 0 ? `${h}h` : `${h}h${m.toString().padStart(2, '0')}`;
}

/** Mini-timeline horizontal (8h–22h) com duas barras de turno. */
function ShiftTimeline({ shifts }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <div className="space-y-3">
        {shifts.map((shift) => (
          <div key={shift.label} className="flex items-center gap-3">
            <span className="w-28 shrink-0 text-xs text-white/50">
              {shift.label}
            </span>
            <div className="relative h-6 flex-1 rounded-full bg-white/5">
              <div
                className={`absolute top-0 h-6 rounded-full transition-all motion-reduce:transition-none ${shift.colorClass}`}
                style={{
                  left: `${pct(shift.start)}%`,
                  width: `${pct(shift.end) - pct(shift.start)}%`,
                }}
              />
            </div>
            <span className="w-24 shrink-0 text-right text-xs text-white/50">
              {hourLabel(shift.start)}–{hourLabel(shift.end)}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-white/30">
        <span>{DAY_START}h</span>
        <span>{DAY_END}h</span>
      </div>
    </div>
  );
}

function AvailabilityBadge({ available, reasonLabel }) {
  if (available) {
    return (
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-green/15 px-4 py-1.5 text-sm font-semibold text-green">
          <span className="h-2 w-2 rounded-full bg-green" />
          Disponível
        </span>
      </div>
    );
  }
  return (
    <div>
      <span
        title={`Motivo: ${reasonLabel}`}
        className="inline-flex items-center gap-2 rounded-full bg-destructive/15 px-4 py-1.5 text-sm font-semibold text-destructive"
      >
        <span className="h-2 w-2 rounded-full bg-destructive" />
        Não disponível
      </span>
      <p className="mt-2 text-xs text-white/45">Motivo: {reasonLabel}</p>
    </div>
  );
}

const PROFESSIONS = ['Enfermeiro', 'AAD', 'Ajudante Técnica', 'Fisioterapeuta'];

const TABS = [
  { id: 'conflito', label: 'Conflito de horário' },
  { id: 'intervalo', label: 'Intervalo entre instituições' },
  { id: 'profissao', label: 'Profissão exigida' },
];

export default function RhEscalasAvailabilitySimulator() {
  const [tab, setTab] = useState('conflito');

  // Aba 1 — conflito de horário
  const [shiftBOption, setShiftBOption] = useState('14-20');
  const shiftBRange =
    shiftBOption === '14-20' ? { start: 14, end: 20 } : { start: 16, end: 22 };
  const overlaps = shiftBRange.start < 16 && shiftBRange.end > 8;

  // Aba 2 — intervalo de 30 min entre instituições
  const [gapStart, setGapStart] = useState(16 * 60);
  const [sameClient, setSameClient] = useState(false);
  const gapBlocked = !sameClient && gapStart < 16 * 60 + 30;

  // Aba 3 — profissão exigida
  const [shiftProfession, setShiftProfession] = useState('Enfermeiro');
  const [candidateProfession, setCandidateProfession] = useState('AAD');
  const professionMatches = shiftProfession === candidateProfession;

  const gapStartHour = useMemo(() => gapStart / 60, [gapStart]);

  return (
    <section id="motor-regras" className="bg-black py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {rhEscalasRulesIntro.pill}
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              {rhEscalasRulesIntro.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {rhEscalasRulesIntro.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-wide text-accent">
              Simulador de Disponibilidade
            </span>

            <div className="flex flex-wrap gap-2">
              {TABS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTab(t.id)}
                  aria-pressed={tab === t.id}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all motion-reduce:transition-none ${
                    tab === t.id
                      ? 'bg-primary text-white shadow-lg shadow-primary/50'
                      : 'bg-white/5 text-white/60 hover:bg-white/10 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {tab === 'conflito' && (
                <>
                  <ShiftTimeline
                    shifts={[
                      {
                        label: 'Turno A · Cliente X',
                        start: 8,
                        end: 16,
                        colorClass: 'bg-accent',
                      },
                      {
                        label: 'Turno B · candidato',
                        start: shiftBRange.start,
                        end: shiftBRange.end,
                        colorClass: overlaps ? 'bg-destructive' : 'bg-green',
                      },
                    ]}
                  />
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Início do turno
                      </p>
                      <div className="mt-3 flex gap-2">
                        {['14-20', '16-22'].map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setShiftBOption(option)}
                            aria-pressed={shiftBOption === option}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all motion-reduce:transition-none ${
                              shiftBOption === option
                                ? 'bg-primary text-white shadow-lg shadow-primary/50'
                                : 'bg-white/5 text-white/60 hover:bg-white/10 hover:shadow-md hover:shadow-primary/20 hover:-translate-y-0.5'
                            }`}
                          >
                            {option === '14-20' ? '14h–20h' : '16h–22h'}
                          </button>
                        ))}
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-white/60">
                        Se coincidir total ou parcialmente com outro turno, o
                        colaborador simplesmente não aparece como opção.
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#f5f2f8] p-6 shadow-[0_20px_60px_rgba(91,0,115,0.35)]">
                      <AvailabilityBadge
                        available={!overlaps}
                        reasonLabel="conflito de horário"
                      />
                    </div>
                  </div>
                </>
              )}

              {tab === 'intervalo' && (
                <>
                  <ShiftTimeline
                    shifts={[
                      {
                        label: sameClient
                          ? 'Turno A · Cliente A'
                          : 'Turno A · Cliente A',
                        start: 8,
                        end: 16,
                        colorClass: 'bg-accent',
                      },
                      {
                        label: sameClient
                          ? 'Turno B · mesmo cliente'
                          : 'Turno B · Cliente B',
                        start: gapStartHour,
                        end: Math.min(gapStartHour + 4, DAY_END),
                        colorClass: gapBlocked ? 'bg-destructive' : 'bg-green',
                      },
                    ]}
                  />
                  <div className="flex flex-col justify-between gap-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Início do turno · {hourLabel(gapStartHour)}
                      </p>
                      <input
                        type="range"
                        min={15 * 60}
                        max={17 * 60}
                        step={5}
                        value={gapStart}
                        onChange={(e) => setGapStart(Number(e.target.value))}
                        className="mt-3 w-full accent-primary"
                        aria-label="Início do turno B"
                      />

                      <label className="mt-4 flex items-center gap-2 text-sm text-white/70">
                        <input
                          type="checkbox"
                          checked={sameClient}
                          onChange={(e) => setSameClient(e.target.checked)}
                          className="h-4 w-4 accent-primary"
                        />
                        Mesmo cliente do Turno A
                      </label>

                      <p className="mt-4 text-sm leading-relaxed text-white/60">
                        Cliente A termina às 16h. Para outro cliente, o próximo
                        turno só pode começar às 16h30 — o sistema já sabe que
                        precisa de tempo de deslocação.{' '}
                        {sameClient && (
                          <span className="text-accent">
                            No mesmo cliente, esta regra não se aplica.
                          </span>
                        )}
                      </p>
                    </div>
                    <div className="rounded-2xl bg-[#f5f2f8] p-6 shadow-[0_20px_60px_rgba(91,0,115,0.35)]">
                      <AvailabilityBadge
                        available={!gapBlocked}
                        reasonLabel="intervalo entre instituições"
                      />
                    </div>
                  </div>
                </>
              )}

              {tab === 'profissao' && (
                <>
                  <div className="space-y-5">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Profissão exigida
                      </label>
                      <select
                        value={shiftProfession}
                        onChange={(e) => setShiftProfession(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
                      >
                        {PROFESSIONS.map((p) => (
                          <option key={p} value={p} className="text-ink">
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wide text-white/50">
                        Profissão do colaborador
                      </label>
                      <select
                        value={candidateProfession}
                        onChange={(e) => setCandidateProfession(e.target.value)}
                        className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
                      >
                        {PROFESSIONS.map((p) => (
                          <option key={p} value={p} className="text-ink">
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between gap-6">
                    <p className="text-sm leading-relaxed text-white/60">
                      Livre no horário não chega. Sem a profissão certa
                      registada, o colaborador não aparece — mesmo já
                      trabalhando com aquele cliente.
                    </p>
                    <div className="rounded-2xl bg-[#f5f2f8] p-6 shadow-[0_20px_60px_rgba(91,0,115,0.35)]">
                      <AvailabilityBadge
                        available={professionMatches}
                        reasonLabel="profissão incompatível"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
