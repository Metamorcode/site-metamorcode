// Página completa do módulo Tesouraria & Controlo de Despesas (Opex).
// Conteúdo extraído de docs/content-briefs/03-tesouraria-opex.md.
// Funcionalidade em desenvolvimento — nunca apresentar como já disponível hoje.

export const tesourariaHero = {
  pill: "Módulo · Tesouraria & Controlo de Despesas (Opex)",
  title: "A margem real de cada empresa, cliente ou colaborador, não uma estimativa",
  subtitle:
    "Utilitários, combustível, consumíveis descartáveis: lançados exatamente onde pertencem, a uma empresa, a um cliente ou a um turno específico, para saber, a qualquer momento, quanto cada um está a dar de lucro",
  ctaPrimaryLabel: "Agendar Demonstração",
  ctaPrimaryTo: "/suporte#contacto",
  ctaSecondaryLabel: "Ver como a alocação funciona",
  ctaSecondaryTo: "#alocador-custos",
};

export const tesourariaPainPoints = {
  pill: "O problema, sem o módulo",
  title: "Um custo sem destino é um custo que ninguém vê a tempo",
  body:
    "Combustível da carrinha, contas fixas e variáveis, material descartável: despesas reais da operação que hoje ficam soltas, na conta bancária, num recibo de papel, numa folha de Excel à parte. Sem saber a que empresa, cliente ou colaborador/turno cada custo pertence, a margem real de cada unidade de negócio só se descobre a olho, muito depois de já não haver nada a fazer sobre isso.",
  cards: [
    "Combustível e descartáveis lançados sem ligação a nenhum cliente ou empresa específica",
    "Um pagamento errado do mês passado corrigido à mão, sem histórico formal",
    "Um adiantamento a um colaborador, e depois esperar lembrar-se de descontar no mês seguinte",
  ],
  image: {
    ratio: "4:5",
    alt: "Gestor a organizar recibos de combustível e despesas operacionais",
  },
};

export const tesourariaAllocatorIntro = {
  pill: "O motor por trás da margem",
  title: "Cada custo tem um destino: empresa, cliente ou colaborador/turno",
  body:
    "Em vez de um único registo genérico de \"despesa\", a Central de Custos e Ganhos obriga a escolher onde o custo realmente pertence — o que é o que torna a margem por unidade possível de calcular com precisão, e não por aproximação.",
};

export const tesourariaAllocatorCopy = {
  widgetLabel: "Alocador de Custos",
  tabs: {
    alocador: "Alocador de Custos",
    reajuste: "Reajuste Extra Operacional",
  },
  costTypeLabel: "Tipo de custo",
  costTypes: [
    { id: "combustivel", label: "Combustível" },
    { id: "conta", label: "Conta fixa/variável (ex: Uber)" },
    { id: "consumivel", label: "Consumível descartável" },
  ],
  destinationLabel: "Alocar a",
  destinations: [
    { id: "empresa", label: "Empresa", example: "Cuidar de Si", icon: "Building2" },
    { id: "cliente", label: "Cliente", example: "OLC · Pinheiro Manso", icon: "Users" },
    {
      id: "colaborador",
      label: "Colaborador/Turno",
      example: "João Santos · Turno Manhã, OLC",
      icon: "UserRound",
    },
  ],
  originLabel: "Custo lançado",
  resultLabel: "Este custo passa a impactar a margem de",
  reajusteTypeLabel: "Tipo de reajuste",
  reajusteTypes: [
    { id: "correcao", label: "Correção de pagamento errado" },
    { id: "desconto", label: "Desconto" },
    { id: "adiantamento", label: "Adiantamento" },
  ],
  baseValueLabel: "Valor a pagar, antes do reajuste",
  adjustValueLabel: "Valor do reajuste",
  beforeLabel: "Antes do reajuste",
  afterLabel: "Depois do reajuste",
  nextMonthLabel: "Mês seguinte (desconto automático)",
  correctionSignLabel: "Sentido da correção",
  correctionSignOptions: [
    { id: "add", label: "A favor (+)" },
    { id: "subtract", label: "A descontar (−)" },
  ],
  explainer: {
    correcao:
      "Corrige o valor pago no mês anterior, para o cliente ou para o colaborador, com histórico da alteração.",
    desconto: "Aplica um desconto ao valor a pagar neste mês.",
    adiantamento:
      "Regista o adiantamento neste mês; o sistema aplica o respetivo desconto no mês seguinte, sozinho.",
  },
  tooltip: "Recalculado automaticamente com base no que inseriu",
};

export const tesourariaFeatures = [
  {
    icon: "Fuel",
    name: "Lançamento de custos extras",
    description:
      "Utilitários, combustível, contas fixas e variáveis, consumíveis descartáveis.",
  },
  {
    icon: "Split",
    name: "Alocação a três níveis",
    description:
      "Cada custo é atribuído a uma empresa, a um cliente ou a um colaborador/agendamento específico.",
  },
  {
    icon: "RefreshCcw",
    name: "Reajuste extra operacional",
    description:
      "Correção de pagamentos errados do mês anterior (ao cliente ou ao colaborador), lançamento de descontos, e registo de adiantamentos com desconto automático no mês seguinte.",
  },
  {
    icon: "LayoutDashboard",
    name: "Cruzamento com o Dashboard Financeiro",
    description:
      "Os lançamentos desta central alimentam o balanço automático mensal e os KPIs de evolução do negócio.",
  },
];

export const tesourariaProofImages = {
  documentary: {
    ratio: "4:5",
    alt: "Gestor a organizar recibos de combustível e despesas operacionais",
  },
  mockup: {
    ratio: "16:10",
    alt: "Ecrã da Central de Custos e Ganhos com seletor de destino do custo: empresa, cliente ou colaborador",
    caption: "Placeholder — a substituir por screenshot real da aplicação assim que disponível.",
  },
};

export const tesourariaFaq = [
  {
    q: "Um custo pode ser dividido entre mais do que um destino?",
    a: "Ainda não confirmado. Por agora, cada custo tem sempre um único destino: uma empresa, um cliente ou um colaborador/turno.",
  },
  {
    q: "Como corrijo um pagamento que saiu errado no mês passado?",
    a: "Através do reajuste extra operacional — permite corrigir o valor, tanto para o cliente como para o colaborador, com histórico da alteração.",
  },
  {
    q: "Um adiantamento a um colaborador é descontado automaticamente?",
    a: "Sim. Regista-se o adiantamento e o sistema aplica o respetivo desconto no mês seguinte, sem ser preciso lembrar manualmente.",
  },
];

export const tesourariaFinalCta = {
  heading: "Saiba a margem real, não a estimativa",
  body: "Veja como cada custo encontra o destino certo, automaticamente",
  primaryLabel: "Agendar Demonstração",
  primaryTo: "/suporte#contacto",
  secondaryLabel: "Ver preços e planos",
  secondaryTo: "/precos",
};
