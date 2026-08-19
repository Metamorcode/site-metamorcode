import { Sparkles } from 'lucide-react';
import Reveal from '@/components/Reveal';
import StepTimeline from '@/components/sections/StepTimeline';
import RainSignalsCanvas from '@/components/sections/RainSignalsCanvas';
import { rhEscalasOpenShift } from '@/data/rhEscalas';

export default function OpenShiftTimeline() {
  return (
    <section className="relative overflow-hidden bg-surface py-20">
      <RainSignalsCanvas />
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
              <span
                className="pointer-events-none absolute inset-0 rounded-full border border-white/40 motion-reduce:hidden"
                style={{
                  animation:
                    'novidadesPing 2.4s cubic-bezier(0,0,0.2,1) infinite',
                }}
              />
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              Novidades
            </span>
            <h2 className="mt-4 font-display text-3xl text-white lg:text-4xl">
              {rhEscalasOpenShift.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/60">
              {rhEscalasOpenShift.body}
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12">
            <StepTimeline
              steps={rhEscalasOpenShift.steps}
              accentClassName="bg-gold"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-8 max-w-xl text-center text-sm italic leading-relaxed text-white/50">
            {rhEscalasOpenShift.footnote}
          </p>
        </Reveal>
      </div>

      <style>{`
        @keyframes novidadesPing {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.6); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
