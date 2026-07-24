export default function MiniDashboardMock({ title, rows = [], kpis = [] }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium">{title}</span>
        <span className="font-mono">Exemplo</span>
      </div>

      {rows.length > 0 && (
        <div className="space-y-2">
          {rows.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm"
            >
              <span className="text-slate-600">{r.label}</span>
              <span className="font-mono font-semibold text-slate-900">{r.value}</span>
            </div>
          ))}
        </div>
      )}

      {kpis.length > 0 && (
        <div className="mt-5 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5">
          {kpis.map((k) => (
            <div key={k.label}>
              <strong className="font-display text-2xl text-primary">{k.value}</strong>
              <p className="text-xs text-slate-500">{k.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
