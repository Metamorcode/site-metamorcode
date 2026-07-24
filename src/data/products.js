// Todos os produtos do ecossistema Harmony Senior.
// Editar aqui reflete automaticamente no menu, no grid e nas páginas.

export const products = [
  {
    slug: "hours",
    name: "Harmony Hours",
    status: "live",
    statusLabel: "Disponível",
    tagline: "RH, escalas & payroll",
    description:
      "RH, escalas, contratos, payroll e Business Intelligence.",
  },
  {
    slug: "box",
    name: "Harmony Box",
    status: "live",
    statusLabel: "Disponível",
    tagline: "Controlo de ponto",
    description:
      "Terminal de ponto por NFC, com conferência automática de horas.",
  },
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
