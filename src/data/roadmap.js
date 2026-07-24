// Roadmap de inovação Metamorcode — produtos futuros do ecossistema AgeTech,
// que se conectam ao MetaSenior ERP mas ainda não fazem parte do núcleo.

export const roadmap = [
  {
    slug: "life",
    name: "Harmony Life",
    status: "soon",
    statusLabel: "Em breve",
    tagline: "Registo de cuidados",
    description: "Registo de cuidados em tempo real, por texto ou voz.",
  },
  {
    slug: "predict",
    name: "Harmony Predict",
    status: "roadmap",
    statusLabel: "Em desenvolvimento",
    tagline: "IA preditiva clínica",
    description:
      "IA preditiva clínica: antecipa quedas, síncopes e convulsões.",
  },
  {
    slug: "watch",
    name: "Harmony Watch",
    status: "roadmap",
    statusLabel: "Em desenvolvimento",
    tagline: "Relógio inteligente",
    description: "Relógio inteligente com GPS e sensores biométricos.",
  },
  {
    slug: "sensor",
    name: "Harmony Sensor",
    status: "roadmap",
    statusLabel: "Em desenvolvimento",
    tagline: "Localização por divisão",
    description: "Sensores BLE que localizam o idoso sem câmaras.",
  },
];

export const statusStyles = {
  live: "bg-primary/10 text-primary",
  soon: "bg-gold/15 text-gold",
  roadmap: "bg-ink-faint/15 text-ink-soft",
};
