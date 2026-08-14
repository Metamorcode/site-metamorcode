import { useParams, Link } from "react-router-dom";
import {
  CalendarClock, Banknote, Wallet, Building2, Nfc, MonitorSmartphone, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/modules";
import { metabox, metaboxFeatures } from "@/data/metabox";
import { roadmap, statusStyles } from "@/data/roadmap";
import { rhEscalasFaq, rhEscalasFinalCta } from "@/data/rhEscalas";
import { financeiroFaq, financeiroFinalCta } from "@/data/financeiro";
import MetaBoxMock from "@/components/sections/MetaBoxMock";
import RhEscalasHero from "@/components/sections/RhEscalasHero";
import RhEscalasPainPoints from "@/components/sections/RhEscalasPainPoints";
import RhEscalasAvailabilitySimulator from "@/components/sections/RhEscalasAvailabilitySimulator";
import OpenShiftTimeline from "@/components/sections/OpenShiftTimeline";
import RhEscalasFeatures from "@/components/sections/RhEscalasFeatures";
import RhEscalasProof from "@/components/sections/RhEscalasProof";
import FinanceiroHero from "@/components/sections/FinanceiroHero";
import FinanceiroPainPoints from "@/components/sections/FinanceiroPainPoints";
import FinanceiroCalculatorWidget from "@/components/sections/FinanceiroCalculatorWidget";
import FinanceiroFeatures from "@/components/sections/FinanceiroFeatures";
import FinanceiroProof from "@/components/sections/FinanceiroProof";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Reveal from "@/components/Reveal";

const icons = { CalendarClock, Banknote, Wallet, Building2, Nfc, MonitorSmartphone, ShieldCheck };

export default function ModuleDetailPage() {
  const { slug } = useParams();
  const module = modules.find((m) => m.slug === slug);
  const isMetabox = slug === "metabox";
  const isRhEscalas = slug === "rh-escalas";
  const isFinanceiro = slug === "financeiro-billing";
  const item = roadmap.find((p) => p.slug === slug);

  if (isRhEscalas) {
    return (
      <>
        <RhEscalasHero />
        <RhEscalasPainPoints />
        <RhEscalasAvailabilitySimulator />
        <OpenShiftTimeline />
        <RhEscalasFeatures />
        <RhEscalasProof />
        <FAQSection items={rhEscalasFaq} />
        <FinalCTA {...rhEscalasFinalCta} />
      </>
    );
  }

  if (isFinanceiro) {
    return (
      <>
        <FinanceiroHero />
        <FinanceiroPainPoints />
        <FinanceiroCalculatorWidget />
        <FinanceiroFeatures />
        <FinanceiroProof />
        <FAQSection items={financeiroFaq} />
        <FinalCTA {...financeiroFinalCta} />
      </>
    );
  }

  if (module) {
    const Icon = icons[module.icon];
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
              <Icon className="h-7 w-7" />
            </span>
            <span className="mt-5 block text-xs font-semibold uppercase tracking-wide text-primary">
              Módulo do MetaSenior
            </span>
            <h1 className="mt-2 font-display text-4xl text-slate-900">{module.name}</h1>
            <p className="mt-4 text-lg text-slate-500">{module.description}</p>
          </Reveal>

          {module.bullets && (
            <Reveal delay={100}>
              <ul className="mx-auto mt-8 max-w-md space-y-3 text-left">
                {module.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary">
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
                <Link to="/suporte#contacto">Falar com a nossa equipa</Link>
              </Button>
              <Button variant="outline" className="rounded-full" asChild>
                <Link to="/precos">Ver preços e planos</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }

  if (isMetabox) {
    return (
      <>
        <section className="bg-black py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <Reveal>
                <span className="rounded-full bg-primary/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
                  Ecossistema de hardware premium
                </span>
                <h1 className="mt-4 font-display text-4xl text-white">{metabox.name}</h1>
                <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
                  {metabox.description}
                </p>

                <div className="mt-8 space-y-6">
                  {metaboxFeatures.map((f) => {
                    const Icon = icons[f.icon];
                    return (
                      <div key={f.name} className="flex gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="font-display text-lg text-white">{f.name}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-white/50">
                            {f.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button className="mt-8 bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
                  <Link to="/precos">Ver preços do hardware</Link>
                </Button>
              </Reveal>

              <Reveal delay={150}>
                <MetaBoxMock />
              </Reveal>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (item) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}>
              {item.statusLabel}
            </span>
            <h1 className="mt-4 font-display text-4xl text-slate-900">{item.name}</h1>
            <p className="mt-4 text-lg text-slate-500">{item.description}</p>

            <div className="mt-10 rounded-xl border border-dashed border-slate-200 bg-surface p-10 text-sm text-slate-300">
              Conteúdo detalhado do {item.name} — em construção.
            </div>

            <Button className="mt-8 bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
              <Link to="/suporte#contacto">Entrar na lista de espera</Link>
            </Button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-24 text-center">
      <h1 className="font-display text-3xl text-slate-900">Página não encontrada</h1>
      <Link to="/" className="mt-4 inline-block text-primary">
        Voltar à página inicial
      </Link>
    </section>
  );
}
