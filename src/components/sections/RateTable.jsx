const rates = [
  { period: "Diurno", hours: "07h–21h", multiplier: "1×", color: "bg-primary" },
  { period: "Noturno", hours: "21h–07h", multiplier: "1,25×", color: "bg-primary-dark" },
  { period: "Feriado", hours: "Feriados e domingos", multiplier: "1,5×", color: "bg-gold" },
];

export default function RateTable() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between text-xs">
        <span className="font-medium text-ink-soft">Regras de encargo automáticas</span>
        <span className="font-mono text-ink-faint">Exemplo</span>
      </div>

      <div className="space-y-3">
        {rates.map((r) => (
          <div
            key={r.period}
            className="flex items-center justify-between rounded-xl bg-bg-alt/70 px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <span className={`h-2.5 w-2.5 rounded-full ${r.color}`} />
              <div>
                <strong className="text-sm text-ink">{r.period}</strong>
                <p className="text-xs text-ink-soft">{r.hours}</p>
              </div>
            </div>
            <span className="rounded-full bg-white px-3 py-1 font-mono text-sm font-semibold text-ink shadow-sm">
              {r.multiplier}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 rounded-xl bg-primary-deep p-4 text-white">
        <div className="flex items-center justify-between text-xs text-white/70">
          <span>Turno de exemplo · Sexta-feira, feriado</span>
        </div>
        <div className="mt-1 flex items-baseline justify-between">
          <span className="text-sm">8h de trabalho no feriado</span>
          <strong className="font-display text-lg">calculado em 1,5×</strong>
        </div>
      </div>
    </div>
  );
}
