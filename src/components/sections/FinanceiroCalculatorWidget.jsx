import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/Reveal";
import RisingParticlesCanvas from "@/components/sections/RisingParticlesCanvas";
import { financeiroCalculatorIntro, financeiroCalculatorCopy as copy } from "@/data/financeiro";

// Estimativa grosseira do valor total combinado (ambos os painéis) usada só
// para normalizar a intensidade visual das partículas — não é um limite real.
const COMBINED_TOTAL_ESTIMATE = 3000;

// Eixo do turno: 18h00 (dia 0) até 18h00 (dia 1) — 24h sem quebra à meia-noite,
// para o turno (20h–08h por omissão) nunca precisar de "dar a volta" na barra.
const AXIS_START_MIN = 18 * 60;
const SHIFT_DURATION = 12 * 60;
// Fronteiras diurno/noturno relativas ao eixo (07h–22h = diurno; 22h–07h = noturno).
const NIGHT_START = 22 * 60 - AXIS_START_MIN; // 240
const NIGHT_END = (24 + 7) * 60 - AXIS_START_MIN; // 780

function formatEUR(n) {
  return new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" }).format(
    Number.isFinite(n) ? n : 0
  );
}

function clockLabel(axisMinutes) {
  const real = (AXIS_START_MIN + axisMinutes) % (24 * 60);
  const h = Math.floor(real / 60);
  const m = real % 60;
  return `${h.toString().padStart(2, "0")}h${m ? m.toString().padStart(2, "0") : ""}`;
}

/** Parte o turno [start, start+duração) em segmentos diurno/noturno contíguos. */
function buildShiftSegments(start, duration) {
  const end = start + duration;
  const boundaries = [NIGHT_START, NIGHT_END].filter((b) => b > start && b < end);
  const points = [start, ...boundaries, end].sort((a, b) => a - b);
  const segments = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    if (b <= a) continue;
    const mid = (a + b) / 2;
    const type = mid >= NIGHT_START && mid < NIGHT_END ? "night" : "day";
    segments.push({ type, start: a, end: b, minutes: b - a });
  }
  return segments;
}

function NumberField({ label, value, onChange, min = 0, max, step = 0.5, suffix }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-white/50">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent text-sm text-white outline-none"
        />
        {suffix && <span className="shrink-0 text-xs text-white/40">{suffix}</span>}
      </div>
    </label>
  );
}

function TotalsPair({ collabLabel, collabValue, clientLabel, clientValue }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="rounded-xl border border-accent/25 bg-accent/[0.07] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-accent">
          {collabLabel}
        </p>
        <p className="mt-1.5 font-display text-xl text-white transition-all motion-reduce:transition-none">
          {formatEUR(collabValue)}
        </p>
      </div>
      <div className="rounded-xl border border-cyan/25 bg-cyan/[0.07] p-4">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan">
          {clientLabel}
        </p>
        <p className="mt-1.5 font-display text-xl text-white transition-all motion-reduce:transition-none">
          {formatEUR(clientValue)}
        </p>
      </div>
    </div>
  );
}

function PanelServicoPrestado({ onTotalClientChange }) {
  const c = copy.panelA;
  const [shiftStart, setShiftStart] = useState(120); // 20h00 no eixo relativo
  const [rateCollabDay, setRateCollabDay] = useState(6.5);
  const [rateCollabNight, setRateCollabNight] = useState(8);
  const [rateClient, setRateClient] = useState(12);

  const segments = useMemo(() => buildShiftSegments(shiftStart, SHIFT_DURATION), [shiftStart]);
  const dayMinutes = segments.filter((s) => s.type === "day").reduce((sum, s) => sum + s.minutes, 0);
  const nightMinutes = segments.filter((s) => s.type === "night").reduce((sum, s) => sum + s.minutes, 0);

  const totalCollab = (dayMinutes / 60) * rateCollabDay + (nightMinutes / 60) * rateCollabNight;
  const totalClient = (SHIFT_DURATION / 60) * rateClient;

  useEffect(() => {
    onTotalClientChange?.(totalClient);
  }, [totalClient, onTotalClientChange]);

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
        {c.label}
      </span>
      <p className="mt-2 text-sm text-white/50">{c.sublabel}</p>

      <div className="mt-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
          {c.shiftLabel} · {clockLabel(shiftStart)}
        </p>
        <input
          type="range"
          min={0}
          max={300}
          step={15}
          value={shiftStart}
          onChange={(e) => setShiftStart(Number(e.target.value))}
          className="mt-3 w-full accent-primary"
          aria-label={c.shiftLabel}
        />

        <div className="mt-4 flex h-7 w-full overflow-hidden rounded-full bg-white/5">
          {segments.map((s, i) => (
            <div
              key={i}
              className={`h-full transition-all motion-reduce:transition-none ${
                s.type === "day" ? "bg-gold" : "bg-primary-dark"
              }`}
              style={{ width: `${(s.minutes / SHIFT_DURATION) * 100}%` }}
              title={`${s.type === "day" ? "Diurno" : "Noturno"} · ${clockLabel(s.start)}–${clockLabel(s.end)}`}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-white/40">
          <span>{clockLabel(shiftStart)}</span>
          <span>{clockLabel(shiftStart + SHIFT_DURATION)}</span>
        </div>
        <div className="mt-2 flex gap-4 text-[11px] text-white/50">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-gold" /> {c.dayLegend}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-primary-dark" /> {c.nightLegend}
          </span>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/60">{c.explainer}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <NumberField
          label={c.rateCollabDayLabel}
          value={rateCollabDay}
          onChange={setRateCollabDay}
          step={0.25}
          suffix="€/h"
        />
        <NumberField
          label={c.rateCollabNightLabel}
          value={rateCollabNight}
          onChange={setRateCollabNight}
          step={0.25}
          suffix="€/h"
        />
        <NumberField
          label={c.rateClientLabel}
          value={rateClient}
          onChange={setRateClient}
          step={0.25}
          suffix="€/h"
        />
      </div>

      <div className="mt-5">
        <TotalsPair
          collabLabel={c.totalCollabLabel}
          collabValue={totalCollab}
          clientLabel={c.totalClientLabel}
          clientValue={totalClient}
        />
      </div>
      <p className="mt-3 text-[11px] text-white/30">{copy.tooltip}</p>
    </div>
  );
}

function PanelSemTermo({ onTotalClientChange }) {
  const c = copy.panelB;
  const [salary, setSalary] = useState(1100);
  const [hoursWorked, setHoursWorked] = useState(160);
  const [overtimeHours, setOvertimeHours] = useState(5);
  const [overtimeRate, setOvertimeRate] = useState(1.5);
  const [rateClient, setRateClient] = useState(11);

  const hourlyRate = hoursWorked > 0 ? salary / hoursWorked : 0;
  const overtimeValue = overtimeHours * hourlyRate * overtimeRate;
  const totalCollab = salary + overtimeValue;
  const totalClient = (hoursWorked + overtimeHours) * rateClient;

  useEffect(() => {
    onTotalClientChange?.(totalClient);
  }, [totalClient, onTotalClientChange]);

  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <span className="inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
        {c.label}
      </span>
      <p className="mt-2 text-sm text-white/50">{c.sublabel}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {c.salaryLabel} · {formatEUR(salary)}
          </p>
          <input
            type="range"
            min={600}
            max={2500}
            step={25}
            value={salary}
            onChange={(e) => setSalary(Number(e.target.value))}
            className="mt-3 w-full accent-primary"
            aria-label={c.salaryLabel}
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {c.hoursLabel} · {hoursWorked}h
          </p>
          <input
            type="range"
            min={80}
            max={220}
            step={5}
            value={hoursWorked}
            onChange={(e) => setHoursWorked(Number(e.target.value))}
            className="mt-3 w-full accent-primary"
            aria-label={c.hoursLabel}
          />
        </div>
      </div>

      <div className="mt-4 rounded-lg bg-white/[0.04] px-4 py-3">
        <p className="text-xs text-white/50">
          {c.hourlyLabel}:{" "}
          <span className="font-display text-base text-white">{formatEUR(hourlyRate)}</span>
        </p>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/60">{c.explainer}</p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {c.overtimeHoursLabel} · {overtimeHours}h
          </p>
          <input
            type="range"
            min={0}
            max={40}
            step={1}
            value={overtimeHours}
            onChange={(e) => setOvertimeHours(Number(e.target.value))}
            className="mt-3 w-full accent-primary"
            aria-label={c.overtimeHoursLabel}
          />
        </div>
        <NumberField
          label={c.overtimeRateLabel}
          value={overtimeRate}
          onChange={setOvertimeRate}
          min={1}
          max={2}
          step={0.05}
          suffix="×"
        />
      </div>

      <div className="mt-5">
        <NumberField
          label={c.rateClientLabel}
          value={rateClient}
          onChange={setRateClient}
          step={0.25}
          suffix="€/h"
        />
      </div>

      <div className="mt-5">
        <TotalsPair
          collabLabel={c.totalCollabLabel}
          collabValue={totalCollab}
          clientLabel={c.totalClientLabel}
          clientValue={totalClient}
        />
      </div>
      <p className="mt-3 text-[11px] text-white/30">{copy.tooltip}</p>
    </div>
  );
}

export default function FinanceiroCalculatorWidget() {
  const [totalClientA, setTotalClientA] = useState(0);
  const [totalClientB, setTotalClientB] = useState(0);

  const intensity = Math.min(
    1,
    Math.max(0, (totalClientA + totalClientB) / COMBINED_TOTAL_ESTIMATE),
  );

  return (
    <section id="motor-financeiro" className="bg-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {financeiroCalculatorIntro.pill}
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              {financeiroCalculatorIntro.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {financeiroCalculatorIntro.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <RisingParticlesCanvas intensity={intensity} />
            <div className="relative z-10">
              <span className="mb-6 block text-xs font-semibold uppercase tracking-wide text-accent">
                Calculadora de Valor-Hora
              </span>
              <div className="grid gap-6 sm:grid-cols-2">
                <PanelServicoPrestado onTotalClientChange={setTotalClientA} />
                <PanelSemTermo onTotalClientChange={setTotalClientB} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
