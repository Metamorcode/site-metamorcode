// Página completa do módulo RH & Escalas Dinâmicas.
// Conteúdo extraído de docs/content-briefs/01-rh-escalas.md.

export const rhEscalasHero = {
  pill: 'Módulo · RH & Escalas Dinâmicas',
  title:
    'A escala que se organiza sozinha — mesmo quando tudo muda ao mesmo tempo',
  subtitle:
    'Férias, faltas, baixas médicas, trocas de última hora. O MetaSenior cruza tudo automaticamente antes de deixar escalar um colaborador — para o conflito nunca chegar ao papel.',
  ctaPrimaryLabel: 'Agendar Demonstração',
  ctaPrimaryTo: '/suporte#contacto',
  ctaSecondaryLabel: 'Ver como as regras funcionam',
  ctaSecondaryTo: '#motor-regras',
};

export const rhEscalasPainPoints = {
  pill: 'O problema, sem o módulo',
  title: 'Montar a escala à mão é apostar que ninguém se engana',
  body: 'Gestores de ERPIs e apoio domiciliário fazem hoje esta verificação manualmente, turno a turno: este colaborador já está noutro turno? Já passou tempo suficiente desde o último cliente? Tem a profissão certa? Uma pessoa a verificar isto para dezenas de colaboradores, todos os meses, erra — não por falta de cuidado, mas porque é humanamente impossível cruzar tudo isto de cabeça, sempre.',
  cards: [
    'A escala do mês só fica pronta na véspera — e muda três vezes.',
    'Um colaborador aparece escalado em dois clientes ao mesmo tempo, e ninguém dá por isso até ser tarde.',
    'Trocas de turno combinadas por WhatsApp, sem registo em lado nenhum.',
  ],
  image: {
    ratio: '4:5',
    alt: 'Coordenadora de uma instituição sénior a organizar escalas manualmente em papel e computador',
  },
};

export const rhEscalasRulesIntro = {
  pill: 'O motor por trás da escala',
  title: 'Três regras correm sempre, para cada turno, sem exceção',
  body: 'O sistema não pergunta ao gestor se um colaborador está livre — calcula. Cruza automaticamente horário, cliente, profissão e intervalos obrigatórios antes de sequer mostrar esse colaborador como opção.',
};

export const rhEscalasOpenShift = {
  pill: 'Novidades',
  title: 'Venda o turno primeiro. Encontre quem o faz depois.',
  body: 'Cria-se a reserva do turno — cliente, data, horário, profissão exigida — sem travar a operação à espera de um nome. O sistema já sabe quem cumpre as regras de disponibilidade (as mesmas 3 regras do simulador acima). Em vez de o gestor ligar um a um, a MetaSenior envia automaticamente uma mensagem por WhatsApp a todos os colaboradores elegíveis — o primeiro que aceitar fica com o turno, e a escala fecha-se sozinha nesse momento.',
  footnote:
    'Já não é preciso escolher um nome para vender o turno — nem esperar a resposta de cada colaborador, um a um, para saber quem topa.',
  steps: [
    {
      id: 'reservado',
      label: 'Turno reservado',
      description: 'Cliente, data e profissão definidos; sem colaborador.',
    },
    {
      id: 'elegiveis',
      label: 'Sistema filtra elegíveis',
      description:
        'Aplica as 3 regras de disponibilidade automaticamente, mesmo sem nenhum nome ainda escolhido.',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp enviado',
      description:
        'Mensagem automática a todos os colaboradores elegíveis, com o horário e o cliente.',
    },
    {
      id: 'fecha',
      label: 'Primeiro a aceitar fecha o turno',
      description:
        'Escala criada sozinha, sem o gestor ter de escrever a ninguém.',
    },
  ],
};

export const rhEscalasFeatures = [
  {
    icon: 'CalendarPlus',
    name: 'Criação e edição de escala',
    description:
      'Associa cliente, data, turno, profissão e colaborador num único fluxo; as 3 regras acima correm automaticamente em cada criação.',
  },
  {
    icon: 'Search',
    name: 'Localizar colaboradores disponíveis',
    description:
      'Busca rápida que já filtra por quem está livre, respeita o intervalo entre clientes e tem a profissão certa — sem conferência manual.',
  },
  {
    icon: 'Mail',
    name: 'Envio de escala por e-mail',
    description:
      'Para cliente, colaborador ou equipa interna, com registo formal — histórico de que a comunicação aconteceu, útil em caso de disputa.',
  },
  {
    icon: 'FileDown',
    name: 'Exportação em PDF',
    description:
      'Para impressão, arquivo ou consulta offline; reflete exatamente o que está no sistema no momento da geração.',
  },
  {
    icon: 'ListX',
    name: 'Exclusão de agendamentos em massa',
    description:
      'Quando um cliente cancela vários dias de uma vez, sem ter de apagar turno a turno.',
  },
  {
    icon: 'History',
    name: 'Histórico de ações da escala',
    description: 'Quem criou, quem editou, quando — rastreabilidade total.',
  },
  {
    icon: 'Activity',
    name: 'Acompanhamento das escalas do dia',
    description:
      'Visão em tempo real na Home da aplicação, agrupada por cliente e ordenada por hora de início; o turno muda de cor quando está prestes a começar.',
  },
  {
    icon: 'Repeat',
    name: 'Troca e substituição de turnos entre colaboradores',
    description:
      'Reatribuir um turno a outro colaborador sem ter de apagar e recriar a escala.',
  },
];

export const rhEscalasUpcoming = {
  title: 'Gestão de Recursos Humanos',
  intro:
    'O RH & Escalas está a deixar de ser só "escalas" para se tornar a fonte única de dados sobre a equipa. Chegam brevemente.',
  items: [
    {
      icon: 'HeartPulse',
      name: 'Regras automáticas de baixa médica e cancelamento',
      description:
        'Ao marcar um turno como baixa médica, o colaborador não é pago e o cliente não é cobrado, automaticamente. Um cancelamento em cima da hora e um cancelamento avisado com 5 dias de antecedência seguem regras diferentes de pagamento ao colaborador e cobrança ao cliente — sem ser preciso decidir caso a caso.',
    },
    {
      icon: 'CalendarHeart',
      name: 'Calendário de férias e baixas médicas',
      description:
        'Visão consolidada do estado de cada colaborador (férias pontuais ou extensas, baixas médicas prolongadas), com verificação automática de se a empresa paga o colaborador nesse período.',
    },
    {
      icon: 'BarChart3',
      name: 'Métricas do colaborador',
      description:
        'Indicadores acumulados no ano por pessoa: dias de férias, dias de baixa, dias trabalhados, dias de falta. Substitui a folha paralela que hoje guarda esta contagem.',
    },
    {
      icon: 'Cake',
      name: 'Aniversariantes do mês e tempo de casa',
      description:
        'Pequenos detalhes que tornam a gestão de equipa mais humana, sem sair do sistema.',
    },
  ],
};

export const rhEscalasProofImage = {
  ratio: '16:10',
  alt: 'Ecrã do MetaSenior ERP a mostrar a grelha semanal de escalas com turnos coloridos por colaborador',
  caption:
    'Placeholder — a substituir por screenshot real da aplicação assim que disponível.',
};

export const rhEscalasFaq = [
  {
    q: 'Porque é que um colaborador não aparece como disponível para um turno?',
    a: 'Quase sempre é uma de três razões: já está escalado num horário que colide, não respeita o intervalo de 30 minutos entre clientes diferentes, ou não tem a profissão exigida registada. O simulador acima mostra exatamente como cada uma funciona.',
  },
  {
    q: 'Posso criar as escalas do mês inteiro de uma vez?',
    a: 'Sim. Recomendamos criar com antecedência, rever conflitos, confirmar que todos os colaboradores têm token ativo na MetaBox e conferir feriados antes de fechar o mês.',
  },
  {
    q: 'Alterar um turno afeta as escalas já criadas?',
    a: 'Não. Alterações em turnos/honorários só se aplicam a escalas futuras — as já criadas mantêm os valores com que foram geradas.',
  },
  {
    q: 'Uma baixa médica é tratada da mesma forma que um cancelamento?',
    a: 'Não. A baixa médica tem regra própria (colaborador não pago, cliente não cobrado). Um cancelamento avisado com antecedência e um cancelamento em cima da hora também seguem regras diferentes entre si — o sistema aplica cada uma automaticamente, sem depender de memória ou de decisão manual repetida.',
  },
];

export const rhEscalasFinalCta = {
  heading: 'Pronto para parar de verificar tudo à mão?',
  body: 'Agende uma demonstração e veja o motor de regras a correr com os dados reais da sua operação.',
  primaryLabel: 'Agendar Demonstração',
  primaryTo: '/suporte#contacto',
  secondaryLabel: 'Ver preços e planos',
  secondaryTo: '/precos',
};
