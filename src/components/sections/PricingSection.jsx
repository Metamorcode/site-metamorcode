import { useMemo, useState } from 'react';
import { AlertCircle, Sparkles } from 'lucide-react';
import { calculatePricing, MIN_EMPLOYEES } from '@/lib/pricing';
import { seasons, accentClasses } from '@/data/seasons';
import SeasonToast from './SeasonToast';

function formatEUR(value) {
  return value.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });
}

export default function PricingSection() {
  const [employees, setEmployees] = useState(20);
  const [devices, setDevices] = useState(0);
  const [activeSeason, setActiveSeason] = useState(null);
  const [toastSeason, setToastSeason] = useState(null);

  const result = useMemo(
    () =>
      calculatePricing({
        employees: Number(employees) || 0,
        devices: Number(devices) || 0,
      }),
    [employees, devices],
  );

  const baseMonthly = result.valid ? result.total : 0;

  const annual = useMemo(() => {
    if (!result.valid || !activeSeason) return null;
    const season = seasons.find((s) => s.id === activeSeason);
    let discounted = 0;
    for (let month = 1; month <= 12; month++) {
      if (season.months.includes(month)) {
        discounted += baseMonthly * (1 - season.discountPct / 100);
      } else {
        discounted += baseMonthly;
      }
    }
    const regular = baseMonthly * 12;
    return { season, regular, discounted, savings: regular - discounted };
  }, [activeSeason, baseMonthly, result.valid]);

  function handleSelectSeason(season) {
    setActiveSeason(season.id);
    setToastSeason(season);
  }

  return (
    <section className="bg-black py-20" id="calculadora">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            Simulador financeiro
          </span>
          <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
            Simule a sua mensalidade
          </h2>
          <p className="mt-4 text-slate-300">
            Taxa de ativação fixa de {formatEUR(50)}/mês + custo variável por
            colaborador e por dispositivo MetaBox.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Inputs */}
          <div className="rounded-xl border border-slate-100 bg-white p-7 shadow-sm">
            <label className="text-sm font-medium text-slate-900">
              Número de colaboradores
            </label>
            <input
              type="range"
              min={0}
              max={400}
              step={1}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="mt-3 w-full accent-primary"
            />
            <div className="mt-2 flex items-center justify-between">
              <input
                type="number"
                min={0}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-24 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-black"
              />
              <span className="text-xs text-slate-400">
                mínimo obrigatório: {MIN_EMPLOYEES}
              </span>
            </div>

            <label className="mt-7 block text-sm font-medium text-slate-900">
              Dispositivos MetaBox (hardware)
            </label>
            <input
              type="range"
              min={0}
              max={60}
              step={1}
              value={devices}
              onChange={(e) => setDevices(Number(e.target.value))}
              className="mt-3 w-full accent-primary"
            />
            <div className="mt-2 flex items-center justify-between">
              <input
                type="number"
                min={0}
                value={devices}
                onChange={(e) => setDevices(Number(e.target.value))}
                className="w-24 rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-black"
              />
              <span className="text-xs text-slate-400">
                {devices > 15
                  ? '20€/dispositivo (volume escalonado)'
                  : '40€/dispositivo'}
              </span>
            </div>

            {!result.valid && (
              <div className="mt-6 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                {result.reason}
              </div>
            )}
          </div>

          {/* Resultado */}
          <div className="rounded-xl border border-slate-100 bg-slate-900 p-7 text-white shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              Mensalidade estimada
            </span>
            <div className="mt-2 font-display text-4xl">
              {result.valid ? formatEUR(result.total) : '—'}
              <span className="text-base font-normal text-white/40"> /mês</span>
            </div>

            {result.valid && (
              <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
                <div className="flex justify-between text-white/60">
                  <span>Taxa de ativação</span>
                  <span>{formatEUR(result.breakdown.activationFee)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>
                    {employees} colaboradores ×{' '}
                    {formatEUR(result.breakdown.employeeRate)}
                  </span>
                  <span>{formatEUR(result.breakdown.employeesCost)}</span>
                </div>
                {devices > 0 && (
                  <div className="flex justify-between text-white/60">
                    <span>
                      {devices} MetaBox ×{' '}
                      {formatEUR(result.breakdown.deviceRate)}
                    </span>
                    <span>{formatEUR(result.breakdown.devicesCost)}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Campanhas sazonais
        <div className="mt-10 rounded-xl border border-slate-100 bg-white p-7 shadow-sm">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            <h3 className="font-display text-lg text-slate-900">
              Campanhas de fidelização anual
            </h3>
          </div>
          <p className="mt-1 text-sm text-slate-500">
            Escolha uma estação para simular o desconto no seu plano anual.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {seasons.map((s) => {
              const accent = accentClasses[s.accent];
              const isActive = activeSeason === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => handleSelectSeason(s)}
                  className={`flex flex-col items-center gap-1.5 rounded-xl border p-4 text-sm font-medium transition-all ${
                    isActive
                      ? `border-transparent ${accent.bg} ring-2 ${accent.ring}`
                      : "border-slate-100 hover:bg-primary-50"
                  }`}
                >
                  <span className="text-xl">{s.icon}</span>
                  {s.label}
                </button>
              );
            })}
          </div>

          {annual && (
            <div className="mt-6 grid gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
              <div>
                <span className="text-xs uppercase tracking-wide text-slate-400">Regular (12 meses)</span>
                <p className="mt-1 font-display text-xl text-slate-400 line-through">
                  {formatEUR(annual.regular)}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide text-slate-400">Com desconto</span>
                <p className="mt-1 font-display text-xl text-primary">
                  {formatEUR(annual.discounted)}
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wide text-slate-400">Poupança anual total</span>
                <p className="mt-1 font-display text-xl text-emerald-600">
                  {formatEUR(annual.savings)}
                </p>
              </div>
            </div>
          )}

          {!result.valid && activeSeason && (
            <p className="mt-4 text-sm text-slate-400">
              Ajuste o número de colaboradores para ver a simulação da campanha.
            </p>
          )}
        </div> */}
      </div>

      {/* <SeasonToast season={toastSeason} onClose={() => setToastSeason(null)} /> */}
    </section>
  );
}
