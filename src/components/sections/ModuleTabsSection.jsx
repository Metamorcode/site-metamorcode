import { useState } from "react";
import { Link } from "react-router-dom";
import {
  CalendarClock,
  Banknote,
  Wallet,
  Building2,
  Nfc,
  ArrowRight,
} from "lucide-react";
import { modules } from "@/data/modules";
import BiChart from "./BiChart";
import RateTable from "./RateTable";
import MiniDashboardMock from "./MiniDashboardMock";
import MetaBoxMock from "./MetaBoxMock";

const icons = { CalendarClock, Banknote, Wallet, Building2, Nfc };

// Painel extra do IoT/MetaBox, para aparecer como mais um separador no filtro
const metaboxTab = {
  slug: "metabox",
  icon: "Nfc",
  name: "MetaBox (IoT)",
  tagline: "Terminal físico de assiduidade",
  description:
    "O terminal físico que liga a operação no terreno ao MetaSenior ERP, em tempo real — picagem por NFC, kiosk do colaborador e validação inteligente de horas.",
};

const tabs = [...modules, metaboxTab];

const visuals = {
  "rh-escalas": <BiChart />,
  "financeiro-billing": <RateTable />,
  "tesouraria-opex": (
    <MiniDashboardMock
      title="Tesouraria · Despesas do mês"
      rows={[
        { label: "Utilitários", value: "312,00 €" },
        { label: "Consumíveis descartáveis", value: "184,50 €" },
        { label: "Contingências (multas)", value: "40,00 €" },
      ]}
      kpis={[
        { value: "18,4%", label: "Margem real por unidade" },
        { value: "536,50 €", label: "Total de despesas Opex" },
      ]}
    />
  ),
  "multi-empresa": (
    <MiniDashboardMock
      title="Painel multi-empresa"
      rows={[
        { label: "Cuidar de Si — Porto", value: "Ativo" },
        { label: "Cuidar de Si — Gaia", value: "Ativo" },
        { label: "Filial Matosinhos", value: "Ativo" },
      ]}
      kpis={[
        { value: "3", label: "Empresas geridas" },
        { value: "1", label: "Painel centralizado" },
      ]}
    />
  ),
  metabox: <MetaBoxMock />,
};

export default function ModuleTabsSection() {
  const [active, setActive] = useState(tabs[0].slug);
  const current = tabs.find((t) => t.slug === active);

  return (
    <section className="bg-surface py-20" id="modulos">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wide text-accent">
            Um ERP, toda a operação
          </span>
          <h2 className="mt-3 font-display text-3xl text-white lg:text-4xl">
            Para cada frente da sua operação
          </h2>
          <p className="mt-4 text-slate-300">
            O MetaSenior ERP acompanha a sua equipa do contrato à fatura.
            Escolha uma frente para ver como funciona.
          </p>
        </div>

        {/* Filtro de pílulas */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === t.slug
                  ? "bg-primary text-white shadow-lg shadow-primary/20"
                  : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Conteúdo do módulo ativo */}
        <div
          key={active}
          className="mt-12 grid animate-in gap-12 rounded-2xl border border-white/10 bg-black/30 p-8 lg:grid-cols-2 lg:items-center lg:p-12"
        >
          <div>
            {current.tagline && (
              <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                {current.tagline}
              </span>
            )}
            <h3 className="mt-2 font-display text-2xl text-white lg:text-3xl">
              {current.name}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              {current.description}
            </p>
            <Link
              to={`/modulos-e-solucoes/${current.slug}`}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-accent"
            >
              Saiba mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div>{visuals[current.slug]}</div>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/modulos-e-solucoes"
            className="text-sm font-semibold text-slate-300 hover:text-white"
          >
            Ver todos os módulos e soluções →
          </Link>
        </div>
      </div>
    </section>
  );
}
