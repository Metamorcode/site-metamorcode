// Página completa do módulo Financeiro & Billing Engine.
// Conteúdo extraído de docs/content-briefs/02-financeiro-billing.md.

export const financeiroHero = {
  pill: "Módulo · Financeiro & Billing Engine",
  title: "Cada hora tem um valor certo — o sistema já sabe qual",
  subtitle:
    "Diurno, noturno, prestação de serviço ou colaborador sem termo: o MetaSenior calcula o custo real por colaborador e gera a fatura ao cliente com base no que foi realmente trabalhado e validado.",
  ctaPrimaryLabel: "Agendar Demonstração",
  ctaPrimaryTo: "/suporte#contacto",
  ctaSecondaryLabel: "Ver como o cálculo funciona",
  ctaSecondaryTo: "#motor-financeiro",
};

export const financeiroPainPoints = {
  pill: "O problema, sem o módulo",
  title: "O mesmo erro, todos os meses, no mesmo sítio",
  body:
    "Cruzar picagens com valores à mão, mês após mês, à procura do erro que sempre aparece. Feriados calculados manualmente, horas noturnas separadas com a calculadora, contratos mensais divididos \"a olho\" entre vários colaboradores. O financeiro reabre a folha três vezes antes de aprovar — e mesmo assim um colaborador liga a perguntar se o pagamento já saiu.",
  cards: [
    "Horas noturnas e diurnas calculadas à mão, turno a turno.",
    "Contrato mensal dividido por vários colaboradores — sempre a refazer as contas.",
    "A pré-folha só é aprovada depois de reabrir três vezes.",
  ],
  image: {
    ratio: "4:5",
    alt: "Responsável financeira a conferir folhas de pagamento impressas à noite",
  },
};

export const financeiroCalculatorIntro = {
  pill: "O motor por trás do valor",
  title: "Dois vínculos, uma lógica clara para cada um",
  body:
    "O sistema não usa a mesma fórmula para um contrato de prestação de serviço e para um colaborador sem termo. Mexa nos números e veja, lado a lado, o valor pago ao colaborador e o valor faturado ao cliente — para os dois vínculos mais comuns na operação.",
};

export const financeiroCalculatorCopy = {
  panelA: {
    label: "Contrato de Prestação de Serviço",
    sublabel: "Pago por hora — ex. recibo verde",
    dayLegend: "Diurno (07h–22h)",
    nightLegend: "Noturno (22h–07h)",
    shiftLabel: "Início do turno",
    rateCollabDayLabel: "Valor/hora pago ao colaborador · diurno",
    rateCollabNightLabel: "Valor/hora pago ao colaborador · noturno",
    rateClientLabel: "Valor/hora faturado ao cliente",
    totalCollabLabel: "Total pago ao colaborador",
    totalClientLabel: "Total faturado ao cliente",
    explainer:
      "Hora diurna: 07h–22h. Hora noturna: 22h–07h. Se o turno atravessa os dois períodos, o sistema divide e aplica o valor certo a cada parte — sozinho.",
  },
  panelB: {
    label: "Contratado Sem Termo",
    sublabel: "Colaborador com salário mensal",
    salaryLabel: "Salário base mensal",
    hoursLabel: "Horas trabalhadas no mês",
    hourlyLabel: "Valor da hora (calculado)",
    overtimeHoursLabel: "Horas extras no mês",
    overtimeRateLabel: "Acréscimo de hora extra",
    rateClientLabel: "Valor/hora faturado ao cliente",
    totalCollabLabel: "Total pago ao colaborador",
    totalClientLabel: "Total faturado ao cliente",
    explainer:
      "Quanto mais horas, menor o valor da hora; quanto menos horas, maior o valor da hora. As horas extras somam-se ao salário base, com o mesmo critério diurno/noturno aplicado automaticamente.",
  },
  tooltip: "Recalculado automaticamente com base no que inseriu",
};

export const financeiroFeatures = [
  {
    icon: "ClipboardCheck",
    name: "Conferência da pré-folha salarial",
    description:
      "Etapa de verificação, não de pagamento; identifica ausências ou dados incompletos antes do fecho, ainda permite corrigir.",
  },
  {
    icon: "FileText",
    name: "Geração da folha salarial",
    description:
      "Consolida total de horas, valores por tipo de contrato, detalhe diurno/noturno e extras; gera PDF e envia por e-mail ao colaborador, financeiro ou contabilista.",
  },
  {
    icon: "Users",
    name: "Conferência dos salários agrupados por cliente",
    description:
      "Apura rapidamente quem trabalhou, quantas horas, e se os valores batem com o contrato do cliente — evita faturação incorreta.",
  },
  {
    icon: "Receipt",
    name: "Folha financeira do cliente",
    description:
      "O espelho exato do que será faturado: escalas realizadas, valores diurno/noturno/extras, total por período. Base para emissão de fatura.",
  },
  {
    icon: "ListChecks",
    name: "Conferência de pagamentos por cliente",
    description:
      "Visão mais detalhada, agrupada por profissão e por colaborador, com subtotais — fecha o ciclo financeiro.",
  },
  {
    icon: "FileSpreadsheet",
    name: "Mapa de horas por colaborador e instituição",
    description:
      "Relatório que cruza, por colaborador, as horas feitas em cada instituição com os respetivos valores — conferência rápida para o financeiro, sem cruzar escalas e folhas à parte.",
  },
];

export const financeiroUpcoming = {
  title: "Central de Custos e Recibos",
  intro: "Chegam brevemente ao Financeiro & Billing Engine.",
  items: [
    {
      icon: "Percent",
      name: "Percentagem paga automática",
      description:
        "O sistema aplica a percentagem correta consoante o vínculo do colaborador: por empresa, quando é a recibo verde, ou pela combinação entre contrato e recibo, quando aplicável. Acaba com o cálculo manual de \"quanto fica retido, quanto é pago\".",
    },
    {
      icon: "PiggyBank",
      name: "Central de Custos e Ganhos",
      description:
        "Área dedicada a lançar custos extras (utilitários, combustível, consumíveis descartáveis) e a alocá-los exatamente onde pertencem: a uma empresa, a um cliente ou a um colaborador/turno específico. Inclui o reajuste extra operacional — correção de pagamentos errados do mês anterior, lançamento de descontos e registo de adiantamentos com desconto automático no mês seguinte.",
    },
    {
      icon: "FileDown",
      name: "Recibos em PDF",
      description: "Geração automática de Recibo de Vencimento e Recibo Verde, prontos a enviar.",
    },
    {
      icon: "LayoutDashboard",
      name: "Dashboard Financeiro",
      description:
        "Balanço automático mensal, faturação por turnos cruzada com os custos da folha de pagamento, e KPIs de evolução do negócio, tudo num único painel.",
    },
    {
      icon: "Clock3",
      name: "Cálculo de horas extras diurno/noturno unificado",
      description:
        "O mesmo critério de hora extra passa a valer tanto quando é lançada manualmente na Revisão como quando vem automaticamente da MetaBox, refletindo-se de forma consistente em todos os relatórios.",
    },
  ],
};

export const financeiroProofImage = {
  ratio: "16:10",
  alt: "Ecrã do MetaSenior ERP a mostrar a folha financeira de um cliente com horas diurnas e noturnas separadas",
  caption: "Placeholder — a substituir por screenshot real da aplicação assim que disponível.",
};

export const financeiroFaq = [
  {
    q: "Como o sistema decide se uma hora é diurna ou noturna?",
    a: "Hora diurna: 07h–22h. Hora noturna: 22h–07h. Se um turno atravessa os dois períodos, o sistema divide automaticamente e aplica o valor correspondente a cada parte.",
  },
  {
    q: "O que acontece se eu alterar o valor de um turno depois de já ter escalas criadas?",
    a: "Nada muda nas escalas já criadas — a alteração só se aplica às futuras.",
  },
  {
    q: "Como funciona o pagamento quando um contrato mensal tem mais de um colaborador?",
    a: "O sistema soma todas as horas de todos, calcula o valor/hora proporcional do mês e distribui o total conforme as horas de cada colaborador — o valor total do contrato nunca muda, só a divisão interna.",
  },
  {
    q: "Onde registo um custo que não é de um turno específico, como combustível ou material descartável?",
    a: "Na Central de Custos e Ganhos — cada custo extra é alocado a uma empresa, a um cliente ou a um colaborador/turno específico, conforme onde realmente pertence.",
  },
  {
    q: "Se um colaborador recebeu a mais no mês passado, como corrijo?",
    a: "O reajuste extra operacional permite corrigir pagamentos errados do mês anterior, lançar descontos e registar adiantamentos com o respetivo desconto automático no mês seguinte.",
  },
];

export const financeiroFinalCta = {
  heading: "Pare de reabrir a folha três vezes por mês",
  body: "Veja o motor financeiro a calcular, ao vivo, com os seus próprios números.",
  primaryLabel: "Agendar Demonstração",
  primaryTo: "/suporte#contacto",
  secondaryLabel: "Ver preços e planos",
  secondaryTo: "/precos",
};
