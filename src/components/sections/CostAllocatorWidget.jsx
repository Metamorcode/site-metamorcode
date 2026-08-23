import { useState } from "react";
import { Building2, Users, UserRound, ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import CostFlowLinesCanvas from "@/components/sections/CostFlowLinesCanvas";
import {
  tesourariaAllocatorIntro,
  tesourariaAllocatorCopy as copy,
} from "@/data/tesouraria";

const destinationIcons = { Building2, Users, UserRound };

function formatEUR(n) {
  return new Intl.NumberFormat("pt-PT", { style: "currency", currency: "EUR" }).format(
    Number.isFinite(n) ? n : 0
  );
}

function NumberField({ label, value, onChange, min = 0, step = 5, suffix = "€" }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wide text-white/50">{label}</span>
      <div className="mt-2 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
        <input
          type="number"
          value={value}
          min={min}
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-transparent text-sm text-white outline-none"
        />
        {suffix && <span className="shrink-0 text-xs text-white/40">{suffix}</span>}
      </div>
    </label>
  );
}

function TabButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 motion-reduce:transition-none ${
        active
          ? "bg-primary text-white shadow-lg shadow-primary/50"
          : "bg-white/5 text-white/60 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md hover:shadow-primary/20"
      }`}
    >
      {children}
    </button>
  );
}

function AllocatorPanel() {
  const [costType, setCostType] = useState(copy.costTypes[0].id);
  const [destinationId, setDestinationId] = useState(copy.destinations[0].id);

  const costTypeLabel = copy.costTypes.find((c) => c.id === costType)?.label;
  const destination = copy.destinations.find((d) => d.id === destinationId);
  const DestIcon = destinationIcons[destination.icon];

  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2">
      <div className="space-y-6">
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {copy.costTypeLabel}
          </label>
          <select
            value={costType}
            onChange={(e) => setCostType(e.target.value)}
            className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
          >
            {copy.costTypes.map((c) => (
              <option key={c.id} value={c.id} className="text-ink">
                {c.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {copy.destinationLabel}
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {copy.destinations.map((d) => (
              <TabButton
                key={d.id}
                active={destinationId === d.id}
                onClick={() => setDestinationId(d.id)}
              >
                {d.label}
              </TabButton>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Ao mudar o destino, o custo encaixa automaticamente na margem certa,
            sem passar por nenhuma folha à parte.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="text-xs text-white/50">{copy.originLabel}</span>
          <span className="text-sm font-medium text-white">{costTypeLabel}</span>
          <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-accent transition-transform duration-300 motion-reduce:transition-none" />
        </div>

        <div className="rounded-2xl bg-[#f5f2f8] p-6 shadow-[0_20px_60px_rgba(91,0,115,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">
            {copy.resultLabel}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <DestIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-lg text-ink">{destination.label}</p>
              <p className="text-sm text-ink/60">{destination.example}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReajustePanel() {
  const [reajusteType, setReajusteType] = useState(copy.reajusteTypes[0].id);
  const [baseValue, setBaseValue] = useState(850);
  const [adjustValue, setAdjustValue] = useState(40);
  const [correctionSign, setCorrectionSign] = useState("subtract");

  let afterValue = baseValue;
  let nextMonthValue = null;

  if (reajusteType === "correcao") {
    afterValue = baseValue + (correctionSign === "add" ? adjustValue : -adjustValue);
  } else if (reajusteType === "desconto") {
    afterValue = baseValue - adjustValue;
  } else {
    afterValue = baseValue + adjustValue;
    nextMonthValue = baseValue - adjustValue;
  }

  return (
    <div className="mt-8 grid gap-8 sm:grid-cols-2">
      <div className="space-y-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
            {copy.reajusteTypeLabel}
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            {copy.reajusteTypes.map((r) => (
              <TabButton
                key={r.id}
                active={reajusteType === r.id}
                onClick={() => setReajusteType(r.id)}
              >
                {r.label}
              </TabButton>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {copy.explainer[reajusteType]}
          </p>
        </div>

        {reajusteType === "correcao" && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
              {copy.correctionSignLabel}
            </p>
            <div className="mt-3 flex gap-2">
              {copy.correctionSignOptions.map((s) => (
                <TabButton
                  key={s.id}
                  active={correctionSign === s.id}
                  onClick={() => setCorrectionSign(s.id)}
                >
                  {s.label}
                </TabButton>
              ))}
            </div>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <NumberField
            label={copy.baseValueLabel}
            value={baseValue}
            onChange={setBaseValue}
            step={10}
          />
          <NumberField
            label={copy.adjustValueLabel}
            value={adjustValue}
            onChange={setAdjustValue}
            step={5}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
          <p className="text-xs text-white/50">{copy.beforeLabel}</p>
          <p className="mt-1 font-display text-lg text-white">{formatEUR(baseValue)}</p>
        </div>

        <div className="rounded-2xl bg-[#f5f2f8] p-6 shadow-[0_20px_60px_rgba(91,0,115,0.35)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary/70">
            {copy.afterLabel}
          </p>
          <p className="mt-2 font-display text-2xl text-ink transition-all motion-reduce:transition-none">
            {formatEUR(afterValue)}
          </p>
          {nextMonthValue !== null && (
            <p className="mt-3 border-t border-primary/10 pt-3 text-xs text-ink/60">
              {copy.nextMonthLabel}:{" "}
              <span className="font-semibold text-ink">{formatEUR(nextMonthValue)}</span>
            </p>
          )}
        </div>
        <p className="text-[11px] text-white/30">{copy.tooltip}</p>
      </div>
    </div>
  );
}

export default function CostAllocatorWidget() {
  const [tab, setTab] = useState("alocador");

  return (
    <section id="alocador-custos" className="relative overflow-hidden bg-black py-20">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {tesourariaAllocatorIntro.pill}
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              {tesourariaAllocatorIntro.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {tesourariaAllocatorIntro.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <CostFlowLinesCanvas />
            <div className="relative z-10">
              <span className="mb-6 block text-xs font-semibold uppercase tracking-wide text-accent">
                {copy.widgetLabel}
              </span>

              <div className="flex flex-wrap gap-2">
                <TabButton active={tab === "alocador"} onClick={() => setTab("alocador")}>
                  {copy.tabs.alocador}
                </TabButton>
                <TabButton active={tab === "reajuste"} onClick={() => setTab("reajuste")}>
                  {copy.tabs.reajuste}
                </TabButton>
              </div>

              {tab === "alocador" ? <AllocatorPanel /> : <ReajustePanel />}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
