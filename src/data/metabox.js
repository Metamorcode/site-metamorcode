// Ecossistema de hardware MetaBox.

export const metabox = {
  slug: "metabox",
  icon: "Nfc",
  name: "MetaBox (IoT)",
  tagline: "Terminal físico de assiduidade",
  description:
    "O terminal físico que liga a operação no terreno ao MetaSenior, em tempo real.",
};

export const metaboxFeatures = [
  {
    icon: "Nfc",
    name: "Terminal Físico de Assiduidade",
    description:
      "Dispositivo IoT proprietário para registo de entradas e saídas de colaboradores via cartões ou tags NFC.",
  },
  {
    icon: "MonitorSmartphone",
    name: "Portal Kiosk do Colaborador",
    description:
      "Interface interativa no ecrã da própria MetaBox. O trabalhador consulta de forma autónoma as suas escalas futuras e o histórico de picagens do mês.",
  },
  {
    icon: "ShieldCheck",
    name: "Validação Inteligente de Horas",
    description:
      "Algoritmos inteligentes que cruzam as picagens em tempo real com os turnos planeados no RH, sinalizando desvios de horário automaticamente.",
  },
];

// Página completa do módulo MetaBox (IoT).
// Conteúdo extraído de docs/content-briefs/05-metabox.md.

export const metaboxHero = {
  pill: "Ecossistema de hardware premium",
  title: "Assiduidade registada com prova, não com boa vontade",
  subtitle:
    "A MetaBox é o terminal físico que liga a operação no terreno ao MetaSenior ERP em tempo real. Regista, não decide, e é exatamente por isso que nunca falha",
  ctaPrimaryLabel: "Ver preços do hardware",
  ctaPrimaryTo: "/precos",
  ctaSecondaryLabel: "Ver como a validação funciona",
  ctaSecondaryTo: "#validacao-registos",
};

export const metaboxPainPoints = {
  pill: "O problema, sem a MetaBox",
  title: "Sem prova, a palavra de um vale o mesmo que a do outro",
  body:
    "Sem um ponto físico de registo, a assiduidade depende de boa memória, de folhas de papel ou de mensagens de WhatsApp, nada disso resiste a uma inspeção da ACT nem a uma disputa sobre horas extra. E quando o colaborador esquece de assinalar a saída, ninguém sabe se foi esquecimento, atraso, ou falta.",
  cards: [
    "Entradas e saídas anotadas à mão, fáceis de esquecer ou alterar",
    "Sem registo formal, uma disputa sobre horas vira palavra contra palavra",
    "Nenhuma forma rápida de confirmar, em tempo real, se alguém chegou",
  ],
};

export const metaboxTimelineIntro = {
  pill: "O papel exato da MetaBox",
  title: "A Box regista, o MetaSenior decide, nunca o contrário",
  body:
    "A MetaBox não faz cálculos salariais, não valida regras de escala, não toma decisões operacionais. A sua única função é garantir que o registo de presença aconteça de forma organizada, e transmitir isso ao MetaSenior a cada 30 minutos.",
};

export const metaboxTimeline = {
  widgetLabel: "Linha do tempo do registo de ponto",
  steps: [
    {
      id: "registo",
      icon: "Nfc",
      label: "Bate o ponto na MetaBox",
      description: "O colaborador aproxima o cartão ou tag NFC do terminal físico.",
    },
    {
      id: "sincronizacao",
      icon: "RefreshCw",
      label: "Chega ao MetaSenior",
      description:
        "Os dados são transmitidos automaticamente, em até 30 minutos, sem exportação manual.",
    },
    {
      id: "controlo",
      icon: "Eye",
      label: "Aparece no Controlo de Ponto",
      badge: "Apenas consulta",
      badgeTone: "neutral",
      description: "Aqui só se consulta — nada é decidido ainda.",
    },
    {
      id: "cruzamento",
      icon: "GitCompare",
      label: "Cruza com a escala",
      description:
        "O horário registado é comparado com o horário previsto no turno planeado.",
      comparison: {
        previstoLabel: "Previsto",
        previsto: "08h00 – 16h00",
        realLabel: "Real",
        real: "08h00 – 16h45",
      },
    },
    {
      id: "classificacao",
      icon: "Tags",
      label: "Classificação automática",
      description: "O desvio encontrado define automaticamente uma de três classificações.",
      badges: [
        { label: "Normal", tone: "success", detail: "Até 5 min de diferença" },
        {
          label: "Incumprimento de Horário",
          tone: "warning",
          detail: "Atraso ou saída antecipada além da tolerância",
        },
        { label: "Hora Extra", tone: "accent", detail: "Mais de 30 min além do previsto" },
      ],
      activeBadge: "Hora Extra",
    },
    {
      id: "validacao",
      icon: "CheckCircle2",
      label: "Validação de Registos",
      badge: "Autorizado para financeiro",
      badgeTone: "success",
      description: "A partir daqui, o registo impacta financeiro e faturação.",
      highlight: true,
    },
  ],
  states: [
    {
      label: "Sem Dados",
      description: "Existe agendamento, mas o colaborador não registou o ponto.",
    },
    {
      label: "Colaborador sem token ativo",
      description: "O agendamento aparece como \"Sem Dados\" até ser tratado manualmente.",
    },
  ],
  videoCaption: "Registo em segundos, sem fila real.",
};

export const metaboxFeaturesDetail = [
  {
    icon: "Nfc",
    name: "Terminal físico de assiduidade",
    description:
      "Dispositivo IoT proprietário, registo de entradas e saídas via cartão ou tag NFC.",
  },
  {
    icon: "MonitorSmartphone",
    name: "Portal Kiosk do colaborador",
    description:
      "Interface no próprio ecrã da MetaBox; o colaborador consulta autonomamente as suas escalas futuras e o histórico de picagens do mês, sem precisar de perguntar a ninguém.",
  },
  {
    icon: "ShieldCheck",
    name: "Validação inteligente de horas",
    description:
      "Cruza picagens em tempo real com os turnos planeados no RH, sinalizando desvios automaticamente (atraso, saída antecipada, hora extra).",
  },
  {
    icon: "KeyRound",
    name: "Gestão de tokens",
    description:
      "Cada colaborador tem um código de acesso próprio, atribuído e gerível através do MetaSenior; um colaborador só pode ter um token ativo por período.",
  },
  {
    icon: "RefreshCw",
    name: "Transmissão automática a cada 30 minutos",
    description: "Sem intervenção manual, sem exportação ou importação de ficheiros.",
  },
];

export const metaboxProofImages = {
  hardware: {
    ratio: "4:5",
    alt: "Terminal físico MetaBox montado na parede, com ecrã e leitor NFC",
  },
  usage: {
    ratio: "4:5",
    alt: "Colaboradora a registar o ponto com cartão NFC num terminal MetaBox",
    caption: "Placeholder — a substituir por screenshot real assim que disponível.",
  },
};

export const metaboxFaq = [
  {
    q: "A MetaBox faz algum cálculo de salário sozinha?",
    a: "Não. A MetaBox só regista presença. Todos os cálculos, validações e decisões acontecem no MetaSenior ERP, a separação existe precisamente para reduzir erros e manter rastreabilidade clara.",
  },
  {
    q: "O que acontece se um colaborador esquecer de bater a saída?",
    a: "O registo fica incompleto (só entrada ou só saída registada) e aparece sinalizado no Controlo de Ponto para verificação manual antes da validação final.",
  },
  {
    q: "Um colaborador pode ter mais do que um token ao mesmo tempo?",
    a: "Não, apenas um token ativo por período, evitando ambiguidade nos registos.",
  },
];

export const metaboxFinalCta = {
  heading: "Prova de presença que resiste a qualquer disputa",
  body: "Veja o hardware e a validação automática em ação, com os dados da sua própria operação.",
  primaryLabel: "Agendar Demonstração",
  primaryTo: "/suporte#contacto",
  secondaryLabel: "Ver preços do hardware",
  secondaryTo: "/precos",
};
