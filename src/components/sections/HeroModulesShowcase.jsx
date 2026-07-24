import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CalendarClock,
  Users,
  Banknote,
  Receipt,
  Wallet,
  ShoppingBag,
  Building2,
  LayoutGrid,
  Nfc,
  MonitorSmartphone,
  ShieldCheck,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroWaves from '@/assets/hero-waves.mp4';
import heroWavesPoster from '@/assets/hero-waves-poster.jpg';
import MiniDashboardMock from './MiniDashboardMock';
import MetaBoxMock from './MetaBoxMock';
import { metaboxFeatures } from '@/data/metabox';

// Mapeia o separador do showcase para o slug da página de detalhe do módulo.
const moduleRouteSlug = {
  'escalas-rh': 'rh-escalas',
  'financeiro-billing': 'financeiro-billing',
  'tesouraria-opex': 'tesouraria-opex',
  'multi-empresa': 'multi-empresa',
  metabox: 'metabox',
};

const featureIcons = { Nfc, MonitorSmartphone, ShieldCheck };

function ScheduleWeekMock() {
  const days = [
    { d: 'Seg', shifts: ['AM', 'PM'] },
    { d: 'Ter', shifts: ['AM'] },
    { d: 'Qua', shifts: ['AM', 'PM'] },
    { d: 'Qui', shifts: ['PM'] },
    { d: 'Sex', shifts: ['AM', 'PM'] },
    { d: 'Sáb', shifts: ['AM'] },
    { d: 'Dom', shifts: [] },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium">Escala da semana · Equipa Porto</span>
        <span className="font-mono">Sem. 30</span>
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day) => (
          <div key={day.d} className="flex flex-col items-center gap-1.5">
            <span className="text-[11px] font-medium text-slate-500">
              {day.d}
            </span>
            <div className="flex h-20 w-full flex-col justify-end gap-1">
              {day.shifts.length === 0 ? (
                <div className="h-6 rounded-md border border-dashed border-slate-200" />
              ) : (
                day.shifts.map((s) => (
                  <div
                    key={s}
                    className={`rounded-md py-1.5 text-center text-[10px] font-semibold text-white ${
                      s === 'AM' ? 'bg-primary' : 'bg-accent'
                    }`}
                  >
                    {s}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-xl bg-slate-50 px-4 py-3 text-center text-xs text-slate-500">
        Sem conflitos de horário · Publicada automaticamente
      </div>
    </div>
  );
}

function EmployeeStatusMock() {
  const people = [
    { name: 'Ana Silva', status: 'Ativo', tone: 'bg-green/10 text-green' },
    { name: 'Rui Costa', status: 'Férias', tone: 'bg-gold/10 text-gold' },
    {
      name: 'Marta Lima',
      status: 'Baixa médica',
      tone: 'bg-rose/10 text-rose',
    },
    { name: 'João Pinto', status: 'Ativo', tone: 'bg-green/10 text-green' },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium">Recursos Humanos · Equipa</span>
        <span className="font-mono">4 colaboradores</span>
      </div>
      <div className="space-y-2">
        {people.map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary">
                {p.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </span>
              <span className="text-slate-700">{p.name}</span>
            </div>
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-semibold ${p.tone}`}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function InvoiceMock() {
  const lines = [
    { label: 'Turnos executados · Julho', hours: '168h', value: '2.184,00 €' },
    { label: 'Adicional noturno', hours: '12h', value: '156,00 €' },
    { label: 'Feriados', hours: '8h', value: '96,00 €' },
  ];

  return (
    <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between text-xs text-slate-400">
        <span className="font-medium">Fatura gerada automaticamente</span>
        <span className="rounded-full bg-green/10 px-2 py-0.5 font-mono text-green">
          Auto
        </span>
      </div>
      <div className="space-y-2">
        {lines.map((l) => (
          <div
            key={l.label}
            className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3 text-sm"
          >
            <div>
              <p className="text-slate-700">{l.label}</p>
              <p className="text-xs text-slate-400">
                {l.hours} executadas na escala
              </p>
            </div>
            <span className="font-mono font-semibold text-slate-900">
              {l.value}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl bg-primary-deep px-4 py-3 text-white">
        <span className="text-sm">Total a faturar</span>
        <strong className="font-display text-lg">2.436,00 €</strong>
      </div>
    </div>
  );
}

function FeatureListMock({ items }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white p-6 shadow-sm">
      <div className="mb-5 text-xs font-medium text-slate-400">
        MetaBox · Inteligência embutida
      </div>
      <div className="space-y-4">
        {items.map((f) => {
          const Icon = featureIcons[f.icon];
          return (
            <div key={f.name} className="flex gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{f.name}</p>
                <p className="text-xs leading-relaxed text-slate-500">
                  {f.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const tabs = [
  {
    slug: 'escalas-rh',
    name: 'Escalas Dinâmicas & RH',
    cards: [
      {
        icon: CalendarClock,
        title: 'Escalas Dinâmicas',
        tagline: 'Turnos sem conflitos, sempre atualizados',
        description:
          'Crie e publique escalas semanais com bloqueio automático por férias, faltas e baixas médicas.',
        visual: <ScheduleWeekMock />,
      },
      {
        icon: Users,
        title: 'RH',
        tagline: 'Férias, faltas e baixas médicas sob controlo',
        description:
          'Acompanhe férias, faltas e baixas médicas de toda a equipa num único painel centralizado.',
        visual: <EmployeeStatusMock />,
      },
    ],
  },
  {
    slug: 'financeiro-billing',
    name: 'Financeiro & Billing Engine',
    cards: [
      {
        icon: Banknote,
        title: 'Financeiro',
        tagline: 'Custo real por colaborador, calculado ao minuto',
        description:
          'Veja o custo real por colaborador, incluindo salário base, subsídios e encargos sociais.',
        visual: (
          <MiniDashboardMock
            title="Custo real · Colaborador"
            rows={[
              { label: 'Salário base', value: '950,00 €' },
              { label: 'Subsídios', value: '180,00 €' },
              { label: 'Encargos sociais', value: '215,00 €' },
            ]}
            kpis={[{ value: '1.345,00 €', label: 'Custo real mensal' }]}
          />
        ),
      },
      {
        icon: Receipt,
        title: 'Billing Engine',
        tagline: 'Faturas automáticas com base nas horas da escala',
        description:
          'Gere faturas automaticamente com base nas horas reais executadas na escala de cada cliente.',
        visual: <InvoiceMock />,
      },
    ],
  },
  {
    slug: 'tesouraria-opex',
    name: 'Tesouraria & Despesas',
    cards: [
      {
        icon: Wallet,
        title: 'Tesouraria',
        tagline: 'Margem real por unidade, em tempo real',
        description:
          'Acompanhe a margem de lucro real por unidade de negócio, atualizada em tempo real.',
        visual: (
          <MiniDashboardMock
            title="Tesouraria · Resumo do mês"
            kpis={[
              { value: '18,4%', label: 'Margem real por unidade' },
              { value: '536,50 €', label: 'Total de despesas Opex' },
            ]}
          />
        ),
      },
      {
        icon: ShoppingBag,
        title: 'Despesas (Opex)',
        tagline: 'Utilitários, consumíveis e contingências',
        description:
          'Registe utilitários, consumíveis descartáveis e contingências operacionais em segundos.',
        visual: (
          <MiniDashboardMock
            title="Despesas do mês"
            rows={[
              { label: 'Utilitários', value: '312,00 €' },
              { label: 'Consumíveis descartáveis', value: '184,50 €' },
              { label: 'Contingências (multas)', value: '40,00 €' },
            ]}
          />
        ),
      },
    ],
  },
  {
    slug: 'multi-empresa',
    name: 'Multi-Empresa',
    cards: [
      {
        icon: Building2,
        title: 'Multi-Empresa Nativa',
        tagline: 'Todas as filiais, um único painel',
        description:
          'Faça a gestão de todas as filiais e unidades de negócio a partir de um único painel centralizado.',
        visual: (
          <MiniDashboardMock
            title="Painel multi-empresa"
            rows={[
              { label: 'Cuidar de Si — Porto', value: 'Ativo' },
              { label: 'Cuidar de Si — Gaia', value: 'Ativo' },
              { label: 'Filial Matosinhos', value: 'Ativo' },
            ]}
          />
        ),
      },
      {
        icon: LayoutGrid,
        title: 'Arquitetura Nativa',
        tagline: 'Multitenant desde a primeira linha de código',
        description:
          'Estrutura multitenant desenhada desde a primeira linha de código, sem soluções de contorno.',
        visual: (
          <MiniDashboardMock
            title="Estrutura da conta"
            kpis={[
              { value: '3', label: 'Empresas geridas' },
              { value: '1', label: 'Painel centralizado' },
            ]}
          />
        ),
      },
    ],
  },
  {
    slug: 'metabox',
    name: 'MetaBox (IoT)',
    cards: [
      {
        icon: Nfc,
        title: 'MetaBox',
        tagline: 'Terminal físico de assiduidade',
        description:
          'Terminal físico para picagens rápidas e seguras, sem cartões partilhados nem folhas de papel.',
        visual: <MetaBoxMock />,
      },
      {
        icon: ShieldCheck,
        title: 'IoT & Validação',
        tagline: 'Picagens cruzadas com a escala, em tempo real',
        description:
          'Cruze automaticamente cada picagem do terminal com a escala publicada, em tempo real.',
        visual: <FeatureListMock items={metaboxFeatures} />,
      },
    ],
  },
];

export default function HeroModulesShowcase() {
  const [active, setActive] = useState(tabs[0].slug);
  const current = tabs.find((t) => t.slug === active);

  return (
    <div className="relative z-10 mx-auto mt-14 max-w-6xl px-6 pb-20">
      {/* <div className="flex justify-center">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 p-1.5">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 sm:px-6 sm:text-base ${
                active === t.slug
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div> */}
      <div className="flex justify-center w-full px-4">
        <div className="flex flex-wrap items-center justify-center gap-1.5 rounded-2xl bg-slate-800 p-1.5 sm:rounded-full">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => setActive(t.slug)}
              className={`w-full sm:w-auto whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 sm:px-6 sm:py-2.5 sm:text-base ${
                active === t.slug
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-white hover:bg-white/10 hover:text-white'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mx-[calc(-50vw_+_50%)] mt-10 w-screen overflow-hidden">
        {/* Vídeo de ondas roxas em loop, encostado nas laterais da tela, restrito apenas à área dos cards */}
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={heroWaves}
          poster={heroWavesPoster}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />

        <div
          key={active}
          className="relative mx-auto flex max-w-6xl animate-in flex-wrap justify-center gap-8 px-6 py-14 sm:px-10"
        >
          {current.cards.map((card) => (
            <div
              key={card.title}
              className="flex w-full max-w-sm flex-col items-center rounded-3xl bg-white px-8 pb-10 pt-8 text-center shadow-xl"
            >
              <p className="text-sm font-semibold text-primary">
                {card.tagline}
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-slate-900">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                {card.description}
              </p>

              <Button
                asChild
                className="mt-6 rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-slate-800"
              >
                <Link
                  to={`/modulos-e-solucoes/${moduleRouteSlug[current.slug]}`}
                >
                  Saiba como funciona
                </Link>
              </Button>

              <div className="mt-8 flex w-full justify-center">
                {card.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
