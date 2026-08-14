import { useState } from "react";

/**
 * Diagrama horizontal de passos, com hover/foco/click a revelar o
 * detalhe de cada um — sem exigir scroll dedicado. Em mobile cai num
 * fallback em lista vertical, já toda expandida.
 *
 * Uso: <StepTimeline steps={[{ id, label, description }]} />
 */
export default function StepTimeline({ steps, accentClassName = "bg-accent" }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      {/* Desktop/tablet: nós ligados por uma linha, detalhe único por baixo */}
      <div className="hidden sm:block">
        <div className="relative flex items-start justify-between">
          <div className="absolute left-0 right-0 top-4 h-px bg-white/10" aria-hidden="true" />
          {steps.map((step, i) => (
            <button
              key={step.id}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className="group relative z-10 flex flex-1 flex-col items-center gap-3 px-2 text-center focus:outline-none"
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors motion-reduce:transition-none ${
                  active === i ? `${accentClassName} text-black` : "bg-white/10 text-white/50"
                }`}
              >
                {i + 1}
              </span>
              <span
                className={`text-sm font-medium transition-colors motion-reduce:transition-none ${
                  active === i ? "text-white" : "text-white/50"
                }`}
              >
                {step.label}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          {steps[active].badge && (
            <span className="mb-2 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
              {steps[active].badge}
            </span>
          )}
          <p className="text-sm leading-relaxed text-white/70">
            {steps[active].description}
          </p>
        </div>
      </div>

      {/* Mobile: lista vertical, já toda expandida */}
      <ol className="space-y-5 sm:hidden">
        {steps.map((step, i) => (
          <li key={step.id} className="flex gap-4">
            <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${accentClassName} text-black`}>
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-medium text-white">{step.label}</p>
              {step.badge && (
                <span className="mt-1 inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white/70">
                  {step.badge}
                </span>
              )}
              <p className="mt-1 text-sm leading-relaxed text-white/60">{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
