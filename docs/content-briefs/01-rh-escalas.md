# Prompt de Conteúdo — `/modulos-e-solucoes/rh-escalas`

> Usar sempre em conjunto com `00-guia-geral-conteudo.md`.
> Fonte de mecanismo real: doc. "Ecossistema Harmony aplicado aos
> procedimentos da Cuidar de Si", capítulos 3.4, 4.1.1 e 4.2.

## Posicionamento da página

Este módulo é o motor de escalas do MetaSenior ERP: monta turnos,
cruza disponibilidade automaticamente e aplica três regras de negócio
sempre da mesma forma, sem depender de decisão manual do gestor. É o
módulo com a demonstração de valor mais fácil de tornar tangível,
porque as regras são concretas e testáveis — por isso é o candidato
natural para o elemento interativo mais forte das 5 páginas.

---

## 1. Hero

- **Pill:** `Módulo · RH & Escalas Dinâmicas`
- **H1:** "A escala que se organiza sozinha, mesmo quando tudo muda ao mesmo tempo"
- **Subtítulo:** "Férias, faltas, baixas médicas, trocas de última hora: o MetaSenior cruza tudo automaticamente antes de deixar escalar um colaborador, para o conflito nunca chegar ao papel"
- **CTA primário:** "Agendar Demonstração"
- **CTA secundário:** "Ver como as regras funcionam" (âncora para a secção 3)

## 2. A dor (secção 2)

- **Pill:** `O problema, sem o módulo`
- **H2:** "Montar a escala à mão é apostar que ninguém se engana"
- **Corpo:** Gestores de ERPIs e apoio domiciliário fazem hoje esta
  verificação manualmente, turno a turno: este colaborador já está
  noutro turno? Já passou tempo suficiente desde o último cliente?
  Tem a profissão certa? Uma pessoa a verificar isto para dezenas de
  colaboradores, todos os meses, erra — não por falta de cuidado, mas
  porque é humanamente impossível cruzar tudo isto de cabeça, sempre.
- **3 cartões de sintoma** (reaproveitar o padrão visual do
  `invisibleLeakSection`, mas estáticos em grid, não cíclicos —
  já há um componente cíclico na home, não repetir o mesmo mecanismo
  aqui):
  1. "A escala do mês só fica pronta na véspera, e muda três vezes"
  2. "Um colaborador aparece escalado em dois clientes ao mesmo tempo, e ninguém dá por isso até ser tarde"
  3. "Trocas de turno combinadas por WhatsApp, sem registo em lado nenhum"

## 3. Como funciona — motor de regras (secção central, com interatividade)

- **Pill:** `O motor por trás da escala`
- **H2:** "Três regras correm sempre, para cada turno, sem exceção"
- **Corpo intro:** O sistema não pergunta ao gestor se um colaborador
  está livre — calcula. Cruza automaticamente horário, cliente,
  profissão e intervalos obrigatórios antes de sequer mostrar esse
  colaborador como opção.

### Elemento interativo: "Simulador de Disponibilidade"

Este é o coração da página — um widget que deixa o visitante *testar*
as regras reais do sistema, não apenas lê-las.

**Formato:** componente com 3 separadores/abas (uma por regra),
seguindo o padrão de cartão do `invisibleLeakSection` mas com
interação ativa do utilizador em vez de ciclo automático:

**Aba 1 — Conflito de horário**
- Mostrar dois turnos lado a lado numa mini-timeline horizontal (SVG,
  8h–22h): "Turno A: Cliente X, 08h–16h" e um segundo turno ajustável
  por um slider/toggle ("14h–20h" vs "16h–22h").
- Resultado dinâmico: quando os turnos se sobrepõem, o colaborador
  fica visualmente "bloqueado" (badge vermelho "Não disponível: conflito de horário");
  quando não há sobreposição, aparece "Disponível" a verde.
- Copy de apoio: "Se coincidir total ou parcialmente com outro turno, o colaborador simplesmente não aparece como opção"

**Aba 2 — Intervalo de 30 minutos entre instituições**
- Mesma timeline, mas com dois *clientes diferentes*. Slider controla
  o horário de início do segundo turno.
- Regra visual: se o novo turno começar antes de 30 min depois do
  fim do anterior → bloqueado. Se for no *mesmo* cliente → sem
  necessidade de intervalo (mostrar essa exceção explicitamente,
  é contraintuitiva e vale a pena destacar).
- Copy: "Cliente A termina às 16h. Para outro cliente, o próximo turno só pode começar às 16h30: o sistema já sabe que precisa de tempo de deslocação"

**Aba 3 — Profissão exigida**
- Dropdown simples: escolher a profissão do turno (ex: "Enfermeiro")
  vs. a profissão do colaborador candidato (ex: "AAD").
- Resultado: só aparece disponível se as profissões coincidirem, *mesmo que o horário esteja livre*.
- Copy: "Livre no horário não chega. Sem a profissão certa registada, o colaborador não aparece, mesmo já trabalhando com aquele cliente"

**Comportamento técnico esperado:**
- Sem chamadas a backend — tudo simulado em estado local (React
  `useState`), como um "modo demo".
- Cada aba tem um resultado claro (badge verde/vermelho + frase curta)
  que muda em tempo real com o input do utilizador.
- Fallback mobile: manter os sliders/dropdowns, mas empilhar
  verticalmente em vez de lado a lado.
- Respeitar `prefers-reduced-motion` nas transições de cor/badge.
- **Hover:** cada aba ganha leve elevação + glow ao passar o rato,
  antes mesmo de ser clicada (ver `00-guia-geral-conteudo.md` secção 7.1).
- **Cartão de resultado:** o resultado final (badge "Disponível" /
  "Não disponível") vive dentro de um cartão claro com profundidade
  (fundo `#f5f2f8`, sombra roxa suave) — é o elemento que mais quer
  atenção nesta secção, por isso destaca-se do resto em fundo escuro
  (ver secção 7.3 do guia geral).

## 3B. Novidade — Turno em Aberto, sem colaborador alocado

> Fonte: proposta comercial "Orçamento dos Desenvolvimentos" (04/08/2026),
> funcionalidade sob medida do Módulo Financeiro que opera sobre a
> mesma lógica de escalas. Trata-se de desenvolvimento em curso — usar
> linguagem "em breve" / "nova capacidade", nunca apresentar como já
> disponível hoje.

Hoje, um turno só existe no sistema depois de ter cliente, data, turno
e **colaborador** associados. A nova capacidade quebra essa
dependência: o turno pode ser **reservado e vendido ao cliente antes
de ter um colaborador alocado** — cobrindo o caso real de "sei que
vou precisar de alguém quinta às 8h, ainda não sei quem".

- **Pill:** `Novidades` (badge chamativo, ver `00-guia-geral-conteudo.md` secção 7.2)
- **H2:** "Venda o turno primeiro, encontre quem o faz depois"
- **Corpo:** Cria-se a reserva do turno: cliente, data, horário,
  profissão exigida, sem travar a operação à espera de um nome.
  O sistema já sabe quem cumpre as regras de disponibilidade (as
  mesmas 3 regras do simulador acima). Em vez de o gestor ligar um a
  um, a MetaSenior envia automaticamente uma mensagem por WhatsApp a
  todos os colaboradores elegíveis, e o primeiro que aceitar fica com
  o turno: a escala fecha-se sozinha nesse momento.

### Elemento visual de assinatura desta página: "Chuva de Sinais"

Fundo animado exclusivo desta secção (não repetir nas outras 4
páginas): pequenos pontos de luz na cor `accent` (#a94fc4) e `gold`
(#d9a441), com leve rasto/glow, caem verticalmente atrás do conteúdo,
em velocidades e tamanhos ligeiramente distintos entre si (não uma
grelha uniforme — o efeito só convence com alguma aleatoriedade
controlada). Cada "gota" representa uma notificação de WhatsApp a
chegar a um colaborador elegível. Quando uma gota atinge a base da
secção, dissolve-se num pequeno destaque (glow) em vez de desaparecer
abruptamente — sugerindo silenciosamente "aceite".

- Densidade baixa (não deve competir com o texto por atenção — é
  ambiente, não protagonista)
- `IntersectionObserver`: só corre enquanto a secção está visível
- Cap de 30fps, `prefers-reduced-motion` remove a animação e mostra o
  fundo estático
- Implementação sugerida: `<canvas>`, mesmo padrão de
  `HeroWavesCanvas.jsx` (ciclo fechado, sem salto ao repetir)

### Elemento interativo: linha do tempo "Turno em Aberto"

Diagrama horizontal de 4 passos, no mesmo espírito visual da secção
"Como funciona" da MetaBox (ver `05-metabox.md`), sem precisar de
inputs do utilizador, só de hover/tap para revelar detalhe:

1. `Turno reservado` — cliente, data e profissão definidos; sem colaborador.
2. `Sistema filtra elegíveis` — aplica as 3 regras de disponibilidade automaticamente, mesmo sem nenhum nome ainda escolhido.
3. `WhatsApp enviado` — mensagem automática a todos os colaboradores elegíveis, com o horário e o cliente.
4. `Primeiro a aceitar fecha o turno` — escala criada sozinha, sem o gestor ter de escrever a ninguém.

**Copy de apoio:** "Já não é preciso escolher um nome para vender o
turno, nem esperar a resposta de cada colaborador, um a um, para
saber quem topa"

## 4. Funcionalidades em detalhe (secção 4, grid 2 colunas ou lista com ícone)

Baseado no capítulo 4.2 do documento — usar os nomes técnicos reais,
não inventar sinónimos:

1. **Criação e edição de escala** — associa cliente, data, turno,
   profissão e colaborador num único fluxo; as 3 regras acima correm
   automaticamente em cada criação.
2. **Localizar colaboradores disponíveis** — busca rápida que já
   filtra por quem está livre, respeita o intervalo entre clientes e
   tem a profissão certa — sem conferência manual.
3. **Envio de escala por e-mail** — para cliente, colaborador ou
   equipa interna, com registo formal (histórico de que a comunicação
   aconteceu — útil em caso de disputa).
4. **Exportação em PDF** — para impressão, arquivo ou consulta offline;
   reflete exatamente o que está no sistema no momento da geração.
5. **Exclusão de agendamentos em massa** — quando um cliente cancela
   vários dias de uma vez, sem ter de apagar turno a turno.
6. **Histórico de ações da escala** — quem criou, quem editou, quando —
   rastreabilidade total.
7. **Acompanhamento das escalas do dia** — visão em tempo real na Home
   da aplicação, agrupada por cliente e ordenada por hora de início;
   o turno muda de cor quando está prestes a começar.
8. **Troca e substituição de turnos entre colaboradores** — reatribuir
   um turno a outro colaborador sem ter de apagar e recriar a escala.

### Novidades — Gestão de Recursos Humanos (em desenvolvimento)

> Fonte: proposta comercial de 04/08/2026. Apresentar como evolução do
> módulo — o RH & Escalas está a deixar de ser só "escalas" para se
> tornar a fonte única de dados sobre a equipa.

9. **Regras automáticas de baixa médica e cancelamento** — ao marcar
   um turno como baixa médica, o colaborador não é pago e o cliente
   não é cobrado, automaticamente. Um cancelamento em cima da hora e
   um cancelamento avisado com 5 dias de antecedência seguem regras
   diferentes de pagamento ao colaborador e cobrança ao cliente — sem
   ser preciso decidir caso a caso.
10. **Calendário de férias e baixas médicas** — visão consolidada do
    estado de cada colaborador (férias pontuais ou extensas, baixas
    médicas prolongadas), com verificação automática de se a empresa
    paga o colaborador nesse período.
11. **Métricas do colaborador** — indicadores acumulados no ano por
    pessoa: dias de férias, dias de baixa, dias trabalhados, dias de
    falta. Substitui a folha paralela que hoje guarda esta contagem.
12. **Aniversariantes do mês e tempo de casa** — pequenos detalhes que
    tornam a gestão de equipa mais humana, sem sair do sistema.

## 5. Prova visual

### Imagem 1 — Mockup do ecrã de criação de escala
- **Onde entra:** logo a seguir à secção do simulador, como "isto é o ecrã real"
- **Proporção:** 16:10
- **Prompt para IA de imagem:**
  "Dark-themed SaaS dashboard UI mockup, scheduling/calendar interface for healthcare staff shift management, deep purple (#5b0073) and near-black (#08060b) color scheme with light purple accents (#a94fc4), clean sans-serif typography, a weekly calendar grid with colored shift blocks, a sidebar with employee avatars, subtle glow effects on active elements, professional B2B software aesthetic, no readable logos or real text, high detail, 16:10 aspect ratio"
- **Alt text:** "Ecrã do MetaSenior ERP a mostrar a grelha semanal de escalas com turnos coloridos por colaborador"
- **Nota:** idealmente substituir por *screenshot real* da aplicação assim que existir; usar isto apenas como placeholder.

### Imagem 2 — Fotografia documental
- **Onde entra:** secção 2 ("A dor"), como imagem de apoio ao lado do texto
- **Proporção:** 4:5
- **Prompt para IA de imagem:**
  "Documentary-style photo, a care home coordinator in Portugal working at a desk with a laptop and paper schedule sheets, warm natural indoor lighting, authentic and slightly tired expression, realistic office setting in a senior care facility, muted natural colors, no text visible on screen, photojournalistic style, not overly staged or corporate stock-photo looking"
- **Alt text:** "Coordenadora de uma instituição sénior a organizar escalas manualmente em papel e computador"

## 6. FAQ específica do módulo

(extraída do capítulo 6.1–6.3 do documento, reformulada em tom de FAQ)

- **"Porque é que um colaborador não aparece como disponível para um turno?"**
  Quase sempre é uma de três razões: já está escalado num horário que
  colide, não respeita o intervalo de 30 minutos entre clientes
  diferentes, ou não tem a profissão exigida registada. O simulador
  acima mostra exatamente como cada uma funciona.
- **"Posso criar as escalas do mês inteiro de uma vez?"**
  Sim. Recomendamos criar com antecedência, rever conflitos, confirmar
  que todos os colaboradores têm token ativo na MetaBox e conferir
  feriados antes de fechar o mês.
- **"Alterar um turno afeta as escalas já criadas?"**
  Não. Alterações em turnos/honorários só se aplicam a escalas
  futuras — as já criadas mantêm os valores com que foram geradas.
- **"Uma baixa médica é tratada da mesma forma que um cancelamento?"**
  Não. A baixa médica tem regra própria (colaborador não pago,
  cliente não cobrado). Um cancelamento avisado com antecedência e um
  cancelamento em cima da hora também seguem regras diferentes entre
  si — o sistema aplica cada uma automaticamente, sem depender de
  memória ou de decisão manual repetida.

## 7. UX Writing (microcopy)

- Botão CTA hero: `Agendar Demonstração`
- Botão CTA secundário: `Ver como as regras funcionam`
- Badge de resultado no simulador: `Disponível` (verde) / `Não disponível` (vermelho)
- Tooltip sobre o badge vermelho: `Motivo: [conflito de horário / intervalo entre instituições / profissão incompatível]`
- Label dos sliders: `Início do turno`, `Cliente`, `Profissão exigida`
- Estado vazio (se simulador não tiver interação ainda): `Ajuste o horário para ver a regra em ação`
- CTA final da página: `Falar com a nossa equipa sobre RH & Escalas`

## 8. CTA final

- **H2:** "Pronto para parar de verificar tudo à mão?"
- **Corpo:** "Agende uma demonstração e veja o motor de regras a correr com os dados reais da sua operação."
- Botões: `Agendar Demonstração` (primário) + `Ver preços e planos` (secundário, link para `/precos`)

## 9. Notas técnicas de implementação

- Expandir `modules.js` no slug `rh-escalas` com os campos novos
  (`hero`, `painPoints`, `features` detalhado, `faq`) em vez de manter
  só `description` + `bullets` — ou criar `src/data/rhEscalas.js`
  dedicado, seguindo o padrão já usado por `metabox.js`.
- Criar `RhEscalasAvailabilitySimulator.jsx` em
  `src/components/sections/`, isolado e reutilizável, com estado local
  apenas (sem dependência de API).
- `ModuleDetailPage.jsx` precisa de um caminho de renderização próprio
  para `rh-escalas` (como já existe para `metabox`), em vez de cair no
  bloco genérico atual de `module.bullets`.
- Criar `OpenShiftTimeline.jsx` para a secção 3B (linha do tempo do
  turno em aberto), reaproveitando o mesmo padrão de "scrollytelling"
  horizontal proposto para `MetaBoxTimeline.jsx` em `05-metabox.md` —
  vale a pena construir um componente base partilhado
  (`StepTimeline.jsx`) em vez de duplicar a lógica nas duas páginas.
- Qualquer copy sobre "Turno em Aberto + WhatsApp" e sobre as novas
  funcionalidades de RH (baixa médica automática, calendário de
  férias/baixas, métricas do colaborador) deve deixar claro que são
  capacidades **em desenvolvimento**, não já disponíveis — confirmar
  com o Leonardo o texto exato de disponibilidade antes de publicar
  (ex.: "brevemente" vs. data específica).
