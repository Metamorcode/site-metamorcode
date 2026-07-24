// Regras das campanhas sazonais de fidelização anual.
// "months" = array de índices de mês (1-based) em que o desconto se aplica.

export const seasons = [
  {
    id: "verao",
    icon: "☀️",
    label: "Verão",
    accent: "orange",
    toast:
      "Campanha de Verão Ativa: Assine por 1 ano e o 1º mês é totalmente Gratuito!",
    discountPct: 100,
    months: [1],
  },
  {
    id: "outono",
    icon: "🍂",
    label: "Outono",
    accent: "amber",
    toast:
      "Campanha de Outono: Garanta 25% de desconto fixo nas primeiras 4 mensalidades sob contrato anual.",
    discountPct: 25,
    months: [1, 2, 3, 4],
  },
  {
    id: "inverno",
    icon: "❄️",
    label: "Inverno",
    accent: "cyan",
    toast:
      "Campanha de Inverno: Reduza custos de transição. Primeiros 2 meses com 50% de desconto direto na subscrição anual.",
    discountPct: 50,
    months: [1, 2],
  },
  {
    id: "primavera",
    icon: "🌱",
    label: "Primavera",
    accent: "pink",
    toast:
      "Campanha de Primavera: Obtenha 20% de desconto distribuído nas suas primeiras 5 faturas anuais.",
    discountPct: 20,
    months: [1, 2, 3, 4, 5],
  },
];

export const accentClasses = {
  orange: {
    ring: "ring-orange-400",
    bg: "bg-orange-400/15",
    text: "text-orange-300",
    dot: "bg-orange-400",
  },
  amber: {
    ring: "ring-amber-400",
    bg: "bg-amber-400/15",
    text: "text-amber-300",
    dot: "bg-amber-400",
  },
  cyan: {
    ring: "ring-cyan-400",
    bg: "bg-cyan-400/15",
    text: "text-cyan-300",
    dot: "bg-cyan-400",
  },
  pink: {
    ring: "ring-pink-400",
    bg: "bg-pink-400/15",
    text: "text-pink-300",
    dot: "bg-pink-400",
  },
};
