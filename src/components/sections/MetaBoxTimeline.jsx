import { useState } from "react";
import { Nfc, RefreshCw, Eye, GitCompare, Tags, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import ConcentricRings from "@/components/sections/ConcentricRings";
import { metaboxTimelineIntro, metaboxTimeline } from "@/data/metabox";
import filaPicagemPonto from "@/assets/fila-picagem-ponto.mp4";

const stepIcons = { Nfc, RefreshCw, Eye, GitCompare, Tags, CheckCircle2 };

const toneBadge = {
  success: "bg-green/15 text-green",
  warning: "bg-amber/15 text-amber",
  accent: "bg-accent/15 text-accent",
  neutral: "bg-white/10 text-white/60",
};

const toneBorder = {
  success: "border-green/40 bg-green/10",
  warning: "border-amber/40 bg-amber/10",
  accent: "border-accent/40 bg-accent/10",
};

const toneText = {
  success: "text-green",
  warning: "text-amber",
  accent: "text-accent",
};

function StepBody({ step }) {
  return (
    <div>
      {step.badge && (
        <span
          className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${toneBadge[step.badgeTone] ?? toneBadge.neutral}`}
        >
          {step.badge}
        </span>
      )}

      <p className={`text-sm leading-relaxed ${step.highlight ? "text-ink/80" : "text-white/70"}`}>
        {step.description}
      </p>

      {step.comparison && (
        <div className="mt-4 space-y-3">
          <div>
            <div className="flex justify-between text-xs text-white/50">
              <span>{step.comparison.previstoLabel}</span>
              <span>{step.comparison.previsto}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-white/10">
              <div className="h-2 w-4/5 rounded-full bg-white/30" />
            </div>
          </div>
          <div>
            <div className="flex justify-between text-xs text-white/50">
              <span>{step.comparison.realLabel}</span>
              <span className="text-gold">{step.comparison.real}</span>
            </div>
            <div className="mt-1.5 h-2 rounded-full bg-white/10">
              <div className="h-2 w-full rounded-full bg-gold" />
            </div>
          </div>
        </div>
      )}

      {step.badges && (
        <div className="mt-4 grid gap-2.5 sm:grid-cols-3">
          {step.badges.map((b) => {
            const isActive = b.label === step.activeBadge;
            return (
              <div
                key={b.label}
                className={`rounded-xl border px-3.5 py-2.5 transition-opacity motion-reduce:transition-none ${
                  isActive ? toneBorder[b.tone] : "border-white/10 opacity-45"
                }`}
              >
                <span className={`text-xs font-semibold uppercase tracking-wide ${toneText[b.tone]}`}>
                  {b.label}
                </span>
                <p className="mt-1 text-[11px] leading-snug text-white/50">{b.detail}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

function StepNode({ step, index, active, onActivate }) {
  const Icon = stepIcons[step.icon];
  const isActive = active === index;

  return (
    <button
      type="button"
      onMouseEnter={() => onActivate(index)}
      onFocus={() => onActivate(index)}
      onClick={() => onActivate(index)}
      aria-pressed={isActive}
      className="group relative z-10 flex flex-1 flex-col items-center gap-3 px-1.5 text-center focus:outline-none"
    >
      <span
        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 motion-reduce:transition-none group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-accent/30 ${
          isActive ? "bg-primary text-white shadow-lg shadow-primary/50" : "bg-white/10 text-white/50"
        }`}
      >
        {index === 0 && <ConcentricRings />}
        <Icon className="relative h-5 w-5" />
      </span>
      <span
        className={`text-xs font-medium leading-snug transition-colors motion-reduce:transition-none sm:text-sm ${
          isActive ? "text-white" : "text-white/50"
        }`}
      >
        {step.label}
      </span>
    </button>
  );
}

function Video() {
  return (
    <div className="mx-auto max-w-xl overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100">
      <video
        className="aspect-video w-full object-cover"
        src={filaPicagemPonto}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
}

export default function MetaBoxTimeline() {
  const [active, setActive] = useState(0);
  const steps = metaboxTimeline.steps;
  const activeStep = steps[active];

  return (
    <section id="validacao-registos" className="bg-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {metaboxTimelineIntro.pill}
            </span>
            <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
              {metaboxTimelineIntro.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {metaboxTimelineIntro.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <span className="mb-6 block text-xs font-semibold uppercase tracking-wide text-accent">
              {metaboxTimeline.widgetLabel}
            </span>

            {/* Desktop/tablet: nós ligados por uma linha, painel de detalhe único por baixo */}
            <div className="hidden sm:block">
              <div className="relative flex items-start justify-between">
                <div className="absolute left-0 right-0 top-5 h-px bg-white/10" aria-hidden="true" />
                {steps.map((step, i) => (
                  <StepNode key={step.id} step={step} index={i} active={active} onActivate={setActive} />
                ))}
              </div>

              <div
                className={`mt-8 rounded-2xl p-6 transition-colors motion-reduce:transition-none ${
                  activeStep.highlight
                    ? "bg-[#f5f2f8] shadow-[0_20px_60px_rgba(91,0,115,0.35)]"
                    : "border border-white/10 bg-white/[0.03]"
                }`}
              >
                <StepBody step={activeStep} />
              </div>
            </div>

            {/* Mobile: lista vertical, já toda expandida */}
            <ol className="space-y-5 sm:hidden">
              {steps.map((step, i) => {
                const Icon = stepIcons[step.icon];
                return (
                  <li key={step.id} className="flex gap-4">
                    <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/20 text-accent">
                      {i === 0 && <ConcentricRings />}
                      <Icon className="relative h-4 w-4" />
                    </span>
                    <div
                      className={`flex-1 rounded-xl p-4 ${
                        step.highlight
                          ? "bg-[#f5f2f8] shadow-[0_12px_30px_rgba(91,0,115,0.3)]"
                          : "border border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      <p className={`text-sm font-medium ${step.highlight ? "text-ink" : "text-white"}`}>
                        {step.label}
                      </p>
                      <div className="mt-2">
                        <StepBody step={step} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            {/* Estados a ilustrar: registos sem dados */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {metaboxTimeline.states.map((s) => (
                <div key={s.label} className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-4 py-3.5">
                  <span className="inline-block rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/60">
                    {s.label}
                  </span>
                  <p className="mt-2 text-xs leading-relaxed text-white/45">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Video />
              <p className="mt-4 text-center text-xs text-white/40">{metaboxTimeline.videoCaption}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
