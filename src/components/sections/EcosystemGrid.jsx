import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { roadmap } from "@/data/roadmap";

const statusStyles = {
  live: "bg-primary-50 text-primary",
  soon: "bg-amber-50 text-amber-600",
  roadmap: "bg-slate-100 text-slate-500",
};

export default function EcosystemGrid() {
  return (
    <section className="bg-surface py-20" id="roadmap">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            Roadmap de inovação
          </span>
          <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
            O que vem a seguir ao MetaSenior ERP
          </h2>
          <p className="mt-4 text-slate-300">
            Além da gestão da equipa, estamos a construir a próxima geração
            de cuidado sénior — do registo clínico à IA preditiva.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {roadmap.map((p) => (
            <Link
              key={p.slug}
              to={`/roadmap/${p.slug}`}
              className="group rounded-xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span
                className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${statusStyles[p.status]}`}
              >
                {p.statusLabel}
              </span>
              <h3 className="mt-4 font-display text-lg text-slate-900">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-500">{p.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Saiba mais
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
