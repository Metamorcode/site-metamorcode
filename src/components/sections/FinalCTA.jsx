import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Reveal from '@/components/Reveal';
import { ArrowRight } from 'lucide-react';

export default function FinalCTA({
  heading = 'Pronto para simplificar a gestão da sua equipa?',
  body = 'Veja em segundos quanto custa o MetaSenior para o tamanho da sua operação',
  primaryLabel = 'Ver Preços e Planos',
  primaryTo = '/precos',
  secondaryLabel = 'Preferir falar primeiro com a equipa?',
  secondaryTo = '/suporte#contacto',
}) {
  return (
    <section className="relative overflow-hidden bg-black py-28 text-center">
      {/* halo ambiente atrás do texto/botão */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[130px]"
        style={{ animation: 'ctaGlow 4s ease-in-out infinite' }}
      />

      <div className="relative mx-auto max-w-2xl px-6">
        <Reveal>
          <h2 className="font-display text-3xl text-white lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-slate-300">{body}</p>

          <div className="relative mt-10 flex justify-center">
            {/* anéis a pulsar por trás do botão, a convidar ao clique */}
            <span
              className="pointer-events-none absolute inline-flex h-full w-full rounded-full bg-primary/40"
              style={{
                animation: 'ctaPing 2.6s cubic-bezier(0,0,0.2,1) infinite',
              }}
            />
            <span
              className="pointer-events-none absolute inline-flex h-full w-full rounded-full bg-primary/30"
              style={{
                animation: 'ctaPing 2.6s cubic-bezier(0,0,0.2,1) infinite 0.6s',
              }}
            />

            <Button
              size="lg"
              asChild
              className="group relative rounded-full bg-primary px-14 py-9 text-xl font-semibold text-white shadow-[0_0_45px_rgba(169,79,196,0.5)] transition-all duration-300 hover:scale-105 hover:bg-primary-hover hover:shadow-[0_0_65px_rgba(169,79,196,0.7)]"
            >
              <Link to={primaryTo} className="flex items-center gap-3">
                {primaryLabel}
                <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <Link
            to={secondaryTo}
            className="mt-6 inline-block text-sm text-white/45 underline-offset-4 transition-colors hover:text-white/70 hover:underline"
          >
            {secondaryLabel}
          </Link>
        </Reveal>
      </div>

      <style>{`
        @keyframes ctaGlow {
          0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -50%) scale(1.15); }
        }
        @keyframes ctaPing {
          0% { opacity: 0.55; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.35); }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="animation"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
