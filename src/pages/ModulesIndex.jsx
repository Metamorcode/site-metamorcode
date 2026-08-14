import { Link } from "react-router-dom";
import { CalendarClock, Banknote, Wallet, Building2, Nfc, ArrowRight } from "lucide-react";
import { modules } from "@/data/modules";
import { metabox } from "@/data/metabox";
import Reveal from "@/components/Reveal";

const icons = { CalendarClock, Banknote, Wallet, Building2, Nfc };

const items = [...modules, metabox];

export default function ModulesIndex() {
  return (
    <>
      <section className="bg-black py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            Módulos e Soluções
          </span>
          <h1 className="mt-3 font-display text-4xl text-white lg:text-5xl">
            Tudo o que o MetaSenior resolve
          </h1>
          <p className="mt-4 text-slate-300">
            Da gestão de RH ao hardware de assiduidade, cada peça foi pensada
            para a realidade de quem gere equipas de cuidado.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((m, i) => {
              const Icon = icons[m.icon];
              return (
                <Reveal key={m.slug} delay={i * 60}>
                  <Link
                    to={`/modulos-e-solucoes/${m.slug}`}
                    className="group flex h-full flex-col rounded-xl border border-slate-100 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-display text-xl text-slate-900">{m.name}</h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary/70">
                      {m.tagline}
                    </p>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
                      {m.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Saiba mais
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
