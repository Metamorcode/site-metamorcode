import { useParams, Link } from "react-router-dom";
import { CalendarClock, Banknote, Wallet, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { modules } from "@/data/modules";
import { roadmap, statusStyles } from "@/data/roadmap";

const icons = { CalendarClock, Banknote, Wallet, Building2 };

export default function ProductPage() {
  const { slug } = useParams();
  const module = modules.find((m) => m.slug === slug);
  const item = roadmap.find((p) => p.slug === slug);

  if (module) {
    const Icon = icons[module.icon];
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary">
            <Icon className="h-7 w-7" />
          </span>
          <span className="mt-5 block text-xs font-semibold uppercase tracking-wide text-primary">
            Módulo do MetaSenior
          </span>
          <h1 className="mt-2 font-display text-4xl text-slate-900">{module.name}</h1>
          <p className="mt-4 text-lg text-slate-500">{module.description}</p>

          <Button className="mt-10 bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
            <Link to="/contacto">Falar com a nossa equipa</Link>
          </Button>
        </div>
      </section>
    );
  }

  if (item) {
    return (
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[item.status]}`}>
            {item.statusLabel}
          </span>
          <h1 className="mt-4 font-display text-4xl text-slate-900">{item.name}</h1>
          <p className="mt-4 text-lg text-slate-500">{item.description}</p>

          <div className="mt-10 rounded-xl border border-dashed border-slate-200 bg-surface p-10 text-sm text-slate-300">
            Conteúdo detalhado do {item.name} — edite este ficheiro em{" "}
            <code className="rounded bg-black/30 px-1.5 py-0.5">src/pages/ProductPage.jsx</code>{" "}
            para adicionar a página completa.
          </div>

          <Button className="mt-8 bg-primary hover:bg-primary-hover text-white rounded-full" asChild>
            <Link to="/contacto">Entrar na lista de espera</Link>
          </Button>
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
