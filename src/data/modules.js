// Módulos centrais do MetaSenior ERP (plataforma SaaS).

export const modules = [
  {
    slug: "rh-escalas",
    icon: "CalendarClock",
    name: "RH & Escalas Dinâmicas",
    tagline: "Planeamento inteligente de turnos",
    description:
      "Planeamento inteligente de turnos com bloqueio automático por indisponibilidade (férias, faltas e baixas médicas). Cálculo automatizado de adicionais laborais (horas noturnas, folgas e feriados).",
    bullets: [
      "Bloqueio automático por férias, faltas e baixas médicas",
      "Cálculo automatizado de horas noturnas, folgas e feriados",
      "Escalas publicadas sem conflitos de horário",
    ],
  },
  {
    slug: "financeiro-billing",
    icon: "Banknote",
    name: "Financeiro & Billing Engine",
    tagline: "Custo real e faturação automática",
    description:
      "Apuramento instantâneo do custo real por colaborador (salário base, subsídios e encargos sociais). Motor de faturação flexível para clientes, emitindo faturas automáticas com base nas horas reais executadas na escala.",
    bullets: [
      "Custo real por colaborador: salário, subsídios e encargos sociais",
      "Faturas automáticas com base nas horas reais da escala",
      "Motor de faturação flexível por cliente",
    ],
  },
  {
    slug: "tesouraria-opex",
    icon: "Wallet",
    name: "Tesouraria & Controlo de Despesas (Opex)",
    tagline: "Margem real por unidade",
    description:
      "Registo simplificado de despesas operacionais (utilitários, consumíveis descartáveis) e contingências (multas) para calcular a margem de lucro real por unidade.",
    bullets: [
      "Registo de despesas operacionais (utilitários, consumíveis)",
      "Registo de contingências e multas",
      "Cálculo automático da margem de lucro real por unidade",
    ],
  },
  {
    slug: "multi-empresa",
    icon: "Building2",
    name: "Arquitetura Multi-Empresa Nativa",
    tagline: "Um painel, todas as empresas",
    description:
      "Plataforma multitenant desenvolvida para gerir múltiplas empresas, filiais ou unidades de negócio independentes a partir de um único painel centralizado.",
    bullets: [
      "Arquitetura multitenant nativa",
      "Gestão de filiais e unidades de negócio independentes",
      "Painel único e centralizado para todas as empresas",
    ],
  },
];
