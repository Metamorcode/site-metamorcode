# Prompt de Conteúdo — `/modulos-e-solucoes/financeiro-billing`

> Usar sempre em conjunto com `00-guia-geral-conteudo.md`.
> Fonte de mecanismo real: doc. "Ecossistema Harmony aplicado aos
> procedimentos da Cuidar de Si", capítulos 4.1.2 e 5.

## Posicionamento da página

Este é o módulo que transforma escala + ponto validado em valores —
sem inventar informação nova, só consolidando o que já foi confirmado
na operação. O ponto de venda mais forte aqui é a diferença entre
**contrato por valor/hora** e **contrato mensal de valor fixo**, e o
facto de o sistema fazer a divisão diurna/noturna e o rateio
proporcional automaticamente — cálculos que hoje, feitos à mão, são a
principal fonte de erro salarial.

---

## 1. Hero

- **Pill:** `Módulo · Financeiro & Billing Engine`
- **H1:** "Cada hora tem um valor certo, o sistema já sabe qual"
- **Subtítulo:** "Diurno, noturno, contrato por hora ou valor mensal fixo: o MetaSenior calcula o custo real por colaborador e gera a fatura ao cliente com base no que foi realmente trabalhado e validado"
- **CTA primário:** "Agendar Demonstração"
- **CTA secundário:** "Ver como o cálculo funciona"

## 2. A dor

- **Pill:** `O problema, sem o módulo`
- **H2:** "O mesmo erro, todos os meses, no mesmo sítio"
- **Corpo:** Cruzar picagens com valores à mão, mês após mês, à
  procura do erro que sempre aparece. Feriados calculados manualmente,
  horas noturnas separadas com a calculadora, contratos mensais
  divididos "a olho" entre vários colaboradores. O financeiro reabre a
  folha três vezes antes de aprovar — e mesmo assim um colaborador
  liga a perguntar se o pagamento já saiu.
- **3 cartões de sintoma:**
  1. "Horas noturnas e diurnas calculadas à mão, turno a turno"
  2. "Contrato mensal dividido por vários colaboradores, sempre a refazer as contas"
  3. "A pré-folha só é aprovada depois de reabrir três vezes"

## 3. Como funciona — os dois modelos de contrato

- **Pill:** `O motor por trás do valor`
- **H2:** "Dois modelos, uma lógica clara para cada um"

### Elemento interativo: "Calculadora de Valor-Hora"

Um widget de comparação lado a lado, com inputs simples, que traduz o
capítulo 4.1.2 do documento em algo que se manipula:

**Painel A — Contrato por Valor/Hora**
- Input: horário do turno (ex. slider 20h–08h, atravessando a noite).
- O sistema divide visualmente o turno em segmentos: `20h–22h` (diurno)
  e `22h–07h` (noturno) e `07h–08h` (diurno) — barra horizontal
  colorida por classificação (dourado para diurno, roxo escuro para
  noturno).
- Mostra o valor de cada segmento lado a lado, somando no total.
- Copy: "Hora diurna: 07h–22h. Hora noturna: 22h–07h. Se o turno atravessa os dois períodos, o sistema divide e aplica o valor certo a cada parte, sozinho"

**Painel B — Contrato Mensal de Valor Fixo**
- Input: valor mensal fixo (ex. slider ou campo numérico, default 2.000€)
  e total de horas trabalhadas no mês (slider, default 200h).
- Output dinâmico: `Valor da hora = valor mensal ÷ horas trabalhadas`,
  recalculado ao vivo (ex: 2000€ / 200h = 10€/h).
- Mover o slider de horas para cima faz o valor/hora descer
  visualmente — e a copy explica porquê: "quanto mais horas, menor o
  valor da hora; quanto menos horas, maior o valor da hora."
- Opcional (se houver espaço/tempo): alternar para "mais de um
  colaborador" e mostrar a distribuição proporcional entre 2 pessoas
  com base nas horas de cada uma.

**Comportamento técnico esperado:**
- Estado local (`useState`), sem chamadas a backend.
- Transições suaves nos valores recalculados (`Reveal`-style, respeitar
  `prefers-reduced-motion`).
- Fallback mobile: painéis empilhados em vez de lado a lado.
- **Hover:** cada painel ganha leve elevação + glow ao passar o rato
  (ver `00-guia-geral-conteudo.md` secção 7.1).
- **Cartão de resultado:** o valor/hora calculado vive num cartão
  claro com profundidade (fundo `#f5f2f8`, sombra roxa suave), para
  ser o ponto de maior contraste visual da secção (ver secção 7.3 do
  guia geral).

## 4. Funcionalidades em detalhe

Baseado no capítulo 5 do documento:

1. **Conferência da pré-folha salarial** — etapa de verificação, não de
   pagamento; identifica ausências ou dados incompletos antes do
   fecho, ainda permite corrigir.
2. **Geração da folha salarial** — consolida total de horas, valores
   por tipo de contrato, detalhe diurno/noturno e extras; gera PDF e
   envia por e-mail ao colaborador, financeiro ou contabilista.
3. **Conferência dos salários agrupados por cliente** — apura
   rapidamente quem trabalhou, quantas horas, e se os valores batem
   com o contrato do cliente — evita faturação incorreta.
4. **Folha financeira do cliente** — o espelho exato do que será
   faturado: escalas realizadas, valores diurno/noturno/extras, total
   por período. Base para emissão de fatura.
5. **Conferência de pagamentos por cliente** — visão mais detalhada,
   agrupada por profissão e por colaborador, com subtotais — fecha o
   ciclo financeiro.
6. **Integração com a TOConline** — os dados validados alimentam a
   contabilidade sem reintrodução manual. *(Nota: a proposta de
   04/08/2026 previa uma integração financeira mais ampla com a
   TOConline que acabou por sair do âmbito atual — manter a copy
   pública alinhada apenas com o que já está confirmado como ativo,
   sem prometer alcance maior do que o real.)*

### Novidades — Central de Custos e Recibos

> **Pill:** `Novidades` (badge chamativo, ver `00-guia-geral-conteudo.md` secção 7.2)

Fonte: proposta comercial "Orçamento dos Desenvolvimentos" (04/08/2026).

### Elemento visual de assinatura desta página: "Partículas a Subir"

Fundo animado exclusivo desta secção: pequenos pontos de luz em
`gold` (#d9a441) e `accent` (#a94fc4) sobem lentamente de baixo para
cima, atrás do widget da calculadora — o oposto direcional da "chuva"
usada em RH & Escalas, para reforçar a identidade própria desta
página. Cada partícula representa uma unidade de valor a acumular-se
à medida que o utilizador mexe nos sliders da calculadora; a
densidade/velocidade das partículas pode aumentar ligeiramente quando
o valor recalculado sobe, e diminuir quando desce — uma resposta
visual subtil ao próprio input, não só decoração de fundo.

- Densidade baixa, nunca compete com o texto ou com o resultado
  numérico da calculadora
- `IntersectionObserver`, cap de 30fps, `prefers-reduced-motion`
  remove a animação
- Implementação sugerida: `<canvas>`, mesmo padrão de
  `HeroWavesCanvas.jsx`


7. **Percentagem paga automática** — o sistema aplica a percentagem
   correta consoante o vínculo do colaborador: por empresa, quando é a
   recibo verde, ou pela combinação entre contrato e recibo, quando
   aplicável. Acaba com o cálculo manual de "quanto fica retido, quanto
   é pago".
8. **Central de Custos e Ganhos** — área dedicada a lançar custos
   extras (utilitários, combustível, consumíveis descartáveis) e a
   alocá-los exatamente onde pertencem: a uma empresa, a um cliente ou
   a um colaborador/turno específico. Inclui também o **reajuste extra
   operacional** — correção de pagamentos errados do mês anterior
   (ao cliente ou ao colaborador), lançamento de descontos e registo de
   adiantamentos com desconto automático no mês seguinte.
9. **Recibos em PDF** — geração automática de Recibo de Vencimento e
   Recibo Verde, prontos a enviar.
10. **Dashboard Financeiro** — balanço automático mensal, faturação por
    turnos cruzada com os custos da folha de pagamento, e KPIs de
    evolução do negócio, tudo num único painel.
11. **Cálculo de horas extras diurno/noturno unificado** — o mesmo
    critério de hora extra passa a valer tanto quando é lançada
    manualmente na Revisão como quando vem automaticamente da MetaBox,
    refletindo-se de forma consistente em todos os relatórios.

## 5. Prova visual

### Imagem 1 — Mockup da folha financeira do cliente
- **Onde entra:** secção 4, junto à explicação da "folha financeira do cliente"
- **Proporção:** 16:10
- **Prompt para IA de imagem:**
  "Dark-themed SaaS dashboard UI mockup, financial reconciliation table interface, rows showing hours worked split into day/night columns with amounts, deep purple (#5b0073) and near-black (#08060b) background, light purple (#a94fc4) accent highlights on totals, clean modern sans-serif typography, subtle card shadows, professional B2B fintech-style software aesthetic, no readable logos or real personal data, high detail, 16:10 aspect ratio"
- **Alt text:** "Ecrã do MetaSenior ERP a mostrar a folha financeira de um cliente com horas diurnas e noturnas separadas"

### Imagem 2 — Fotografia documental
- **Onde entra:** secção 2 ("A dor")
- **Proporção:** 4:5
- **Prompt para IA de imagem:**
  "Documentary-style photo, a finance/accounting professional in Portugal reviewing printed payroll sheets and a calculator next to a laptop, late evening office lighting, tired but focused expression, realistic small-business finance office setting, muted natural colors, photojournalistic style, not staged or overly corporate"
- **Alt text:** "Responsável financeira a conferir folhas de pagamento impressas à noite"

## 6. FAQ específica do módulo

- **"Como o sistema decide se uma hora é diurna ou noturna?"**
  Hora diurna: 07h–22h. Hora noturna: 22h–07h. Se um turno atravessa
  os dois períodos, o sistema divide automaticamente e aplica o valor
  correspondente a cada parte.
- **"O que acontece se eu alterar o valor de um turno depois de já ter escalas criadas?"**
  Nada muda nas escalas já criadas — a alteração só se aplica às
  futuras.
- **"Como funciona o pagamento quando um contrato mensal tem mais de um colaborador?"**
  O sistema soma todas as horas de todos, calcula o valor/hora
  proporcional do mês e distribui o total conforme as horas de cada
  colaborador — o valor total do contrato nunca muda, só a divisão
  interna.
- **"Onde registo um custo que não é de um turno específico, como combustível ou material descartável?"**
  Na Central de Custos e Ganhos — cada custo extra é alocado a uma
  empresa, a um cliente ou a um colaborador/turno específico, conforme
  onde realmente pertence.
- **"Se um colaborador recebeu a mais no mês passado, como corrijo?"**
  O reajuste extra operacional permite corrigir pagamentos errados do
  mês anterior, lançar descontos e registar adiantamentos com o
  respetivo desconto automático no mês seguinte.

## 7. UX Writing (microcopy)

- Botão CTA hero: `Agendar Demonstração`
- Botão CTA secundário: `Ver como o cálculo funciona`
- Labels calculadora: `Valor mensal fixo`, `Horas trabalhadas no mês`, `Valor da hora (calculado)`
- Legenda dos segmentos de turno: `Diurno (07h–22h)` / `Noturno (22h–07h)`
- Tooltip sobre o resultado: `Recalculado automaticamente com base no que inseriu`
- CTA final: `Falar com a nossa equipa sobre Financeiro & Billing`

## 8. CTA final

- **H2:** "Pare de reabrir a folha três vezes por mês"
- **Corpo:** "Veja o motor financeiro a calcular, ao vivo, com os seus próprios números."
- Botões: `Agendar Demonstração` + `Ver preços e planos`

## 9. Notas técnicas de implementação

- Criar `src/data/financeiro.js` com a estrutura de conteúdo desta
  página (hero, dor, features, faq), seguindo o padrão de `metabox.js`.
- Criar `FinanceiroCalculatorWidget.jsx` em `src/components/sections/`
  — dois painéis controlados por estado local, sem backend.
- Reaproveitar a paleta dourado/roxo já usada no `invisibleLeakSection`
  para distinguir visualmente diurno vs. noturno.
- Adicionar caminho de renderização dedicado a `financeiro-billing`
  em `ModuleDetailPage.jsx`.
