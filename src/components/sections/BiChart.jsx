const data = [
  { label: "Porto", value: 58 },
  { label: "V. N. de Gaia", value: 71 },
  { label: "Matosinhos", value: 45 },
  { label: "Lisboa", value: 66 },
];

export default function BiChart() {
  return (
    <div className="rounded-2xl border border-card-border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between text-xs">
        <span className="font-medium text-ink-soft">
          Business Intelligence · Desempenho por localidade
        </span>
        <span className="font-mono text-ink-faint">Abril 2026</span>
      </div>
      <div className="flex items-end justify-between gap-4 px-2">
        {data.map((d) => (
          <div key={d.label} className="flex flex-1 flex-col items-center gap-2">
            <span className="text-sm font-semibold text-ink">{d.value}%</span>
            <div className="flex h-32 w-full items-end rounded-md bg-bg-alt">
              <div
                className="w-full rounded-md bg-primary transition-all"
                style={{ height: `${d.value}%` }}
              />
            </div>
            <span className="text-center text-[11px] text-ink-soft">{d.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-ink-faint">
        Horas produtivas por localidade · média mensal
      </p>
    </div>
  );
}
