# Prompt de Conteúdo — `/modulos-e-solucoes/tesouraria-opex`

> Usar sempre em conjunto com `00-guia-geral-conteudo.md`.
> Fonte de mecanismo real: proposta comercial "Orçamento dos
> Desenvolvimentos" (04/08/2026), bloco "Central de Custos e Ganhos",
> combinada com a descrição já existente em `src/data/modules.js`.

## Nota sobre o estado desta funcionalidade

A "Central de Custos e Ganhos" é uma funcionalidade **em
desenvolvimento**, ainda não entregue — não a apresentar como já
disponível hoje. Toda a copy abaixo usa "em breve" / linguagem de
capacidade futura. Um ponto ainda em aberto: não foi confirmado se
existe fluxo de aprovação em várias etapas para lançamentos de
contingências/multas, nem se há importação em lote de despesas — a
proposta descreve lançamento direto, por isso assumo lançamento manual
ponto a ponto até indicação em contrário.

---

## 1. Hero

- **Pill:** `Módulo · Tesouraria & Controlo de Despesas (Opex)` + badge `Novidades` (ver `00-guia-geral-conteudo.md` secção 7.2, chamativo, gradiente primary→accent com sparkle)
- **H1:** "A margem real de cada empresa, cliente ou colaborador, não uma estimativa"
- **Subtítulo:** "Utilitários, combustível, consumíveis descartáveis: lançados exatamente onde pertencem, a uma empresa, a um cliente ou a um turno específico, para saber, a qualquer momento, quanto cada um está a dar de lucro"
- **CTA primário:** "Agendar Demonstração"
- **CTA secundário:** "Ver como a alocação funciona"

## 2. A dor

- **Pill:** `O problema, sem o módulo`
- **H2:** "Um custo sem destino é um custo que ninguém vê a tempo"
- **Corpo:** Combustível da carrinha, contas fixas e variáveis,
  material descartável — despesas reais da operação que hoje ficam
  soltas: na conta bancária, num recibo de papel, numa folha de Excel
  à parte. Sem saber a que empresa, cliente ou colaborador/turno cada
  custo pertence, a margem real de cada unidade de negócio só se
  descobre a olho, muito depois de já não haver nada a fazer sobre
  isso.
- **3 cartões de sintoma:**
  1. "Combustível e descartáveis lançados sem ligação a nenhum cliente ou empresa específica"
  2. "Um pagamento errado do mês passado corrigido à mão, sem histórico formal"
  3. "Um adiantamento a um colaborador, e depois esperar lembrar-se de descontar no mês seguinte"

## 3. Como funciona — a Central de Custos e Ganhos

- **Pill:** `O motor por trás da margem`
- **H2:** "Cada custo tem um destino: empresa, cliente ou colaborador/turno"
- **Corpo intro:** Em vez de um único registo genérico de "despesa",
  a Central de Custos e Ganhos obriga a escolher onde o custo
  realmente pertence — o que é o que torna a margem por unidade
  possível de calcular com precisão, e não por aproximação.

### Elemento interativo: "Alocador de Custos"

Um widget que demonstra a lógica de três destinos possíveis para o
mesmo tipo de custo — reaproveitando o padrão de calculadora já
especificado para Financeiro & Billing (inputs simples + resultado ao
vivo, estado local, sem backend):

- Escolher um tipo de custo (dropdown: `Combustível`, `Conta fixa/variável (ex: Uber)`, `Consumível descartável`)
- Escolher o destino (3 botões/tabs): `Empresa` (ex: Cuidar de Si) ·
  `Cliente` (ex: OLC, Pinheiro Manso) · `Colaborador/Turno` (ex: João
  Santos — Turno Manhã no OLC)
- Ao mudar o destino, mostrar visualmente onde esse custo vai impactar
  a margem — uma pequena barra/etiqueta que se "encaixa" na
  empresa/cliente/colaborador escolhido.
- Segunda aba do mesmo widget: **Reajuste Extra Operacional** —
  simular uma correção (ex: "pagamento errado do mês anterior: −40€"),
  um desconto, ou um adiantamento com desconto automático no mês
  seguinte, mostrando o antes/depois do valor a pagar.

**Comportamento técnico esperado:**
- Estado local (`useState`), sem backend.
- Fallback mobile: tabs empilhadas em vez de lado a lado.
- Reaproveitar o componente de calculadora já desenhado para
  Financeiro & Billing sempre que possível, para não duplicar padrões
  visuais.
- **Hover:** cada tab de destino (`Empresa`/`Cliente`/`Colaborador`)
  ganha leve elevação + glow ao passar o rato, mesmo antes de ser
  selecionada (ver `00-guia-geral-conteudo.md` secção 7.1).
- **Cartão de resultado:** a barra/etiqueta que mostra onde o custo
  "encaixa" vive num cartão claro com profundidade (fundo `#f5f2f8`,
  sombra roxa suave), o ponto de maior contraste da secção (ver
  secção 7.3 do guia geral).

### Elemento visual de assinatura desta página: "Linhas de Fluxo"

Fundo animado exclusivo desta secção: linhas finas e curvas, na cor
`accent` (#a94fc4) com segmentos em `gold` (#d9a441), percorrem o
espaço atrás do widget, partindo de um ponto de origem (o lançamento
do custo) e convergindo lentamente até um dos três destinos
(empresa/cliente/colaborador), como pequenos rastos de luz em
movimento contínuo. Ao contrário da "chuva" de RH & Escalas e das
"partículas a subir" de Financeiro & Billing, aqui o movimento é
lateral e direcionado, sugerindo visualmente a própria ideia de
"alocação com destino certo" que é o mecanismo desta página.

- Densidade baixa, nunca compete com o texto ou com o widget
- `IntersectionObserver`, cap de 30fps, `prefers-reduced-motion`
  remove a animação e mostra o fundo estático
- Implementação sugerida: `<canvas>`, mesmo padrão de
  `HeroWavesCanvas.jsx` (ciclo fechado, sem salto ao repetir)

## 4. Funcionalidades em detalhe

1. **Lançamento de custos extras** — utilitários, combustível, contas
   fixas e variáveis, consumíveis descartáveis.
2. **Alocação a três níveis** — cada custo é atribuído a uma empresa,
   a um cliente ou a um colaborador/agendamento específico.
3. **Reajuste extra operacional** — correção de pagamentos errados do
   mês anterior (ao cliente ou ao colaborador), lançamento de
   descontos, e registo de adiantamentos com desconto automático no
   mês seguinte.
4. **Cruzamento com o Dashboard Financeiro** — os lançamentos desta
   central alimentam o balanço automático mensal e os KPIs de
   evolução do negócio (ver módulo Financeiro & Billing).

## 5. Prova visual

### Imagem 1 — Fotografia documental
- **Onde entra:** secção 2
- **Proporção:** 4:5
- **Prompt para IA de imagem:**
  "Documentary-style photo, a small business manager in Portugal organizing paper receipts and fuel invoices on a desk next to a laptop showing a spreadsheet, natural office lighting, focused expression, realistic office setting, muted natural colors, photojournalistic style, not staged"
- **Alt text:** "Gestor a organizar recibos de combustível e despesas operacionais"

### Imagem 2 — Mockup do produto
- **Onde entra:** secção 3, junto ao "Alocador de Custos"
- **Proporção:** 16:10
- **Prompt para IA de imagem:**
  "Dark-themed SaaS dashboard UI mockup, an expense entry form with a three-way destination selector labeled company, client, and employee/shift, deep purple (#5b0073) and near-black (#08060b) background, light purple (#a94fc4) accent highlights on the selected destination, clean modern sans-serif typography, professional B2B software aesthetic, no readable logos or real text, high detail, 16:10 aspect ratio"
- **Alt text:** "Ecrã da Central de Custos e Ganhos com seletor de destino do custo: empresa, cliente ou colaborador"

## 6. FAQ específica do módulo

- **"Um custo pode ser dividido entre mais do que um destino?"**
  🟡 Não confirmado na proposta — a descrever como "um custo, um
  destino" até indicação em contrário; confirmar antes de publicar.
- **"Como corrijo um pagamento que saiu errado no mês passado?"**
  Através do reajuste extra operacional — permite corrigir o valor,
  tanto para o cliente como para o colaborador, com histórico da
  alteração.
- **"Um adiantamento a um colaborador é descontado automaticamente?"**
  Sim — regista-se o adiantamento e o sistema aplica o respetivo
  desconto no mês seguinte, sem ser preciso lembrar manualmente.

## 7. UX Writing (microcopy)

- Botão CTA hero: `Agendar Demonstração`
- Botão CTA secundário: `Ver como a alocação funciona`
- Labels do alocador: `Tipo de custo`, `Alocar a: Empresa / Cliente / Colaborador`
- Tab do reajuste: `Reajuste Extra Operacional`
- CTA final: `Falar com a nossa equipa sobre Tesouraria & Opex`

## 8. CTA final

- **H2:** "Saiba a margem real, não a estimativa"
- **Corpo:** "Veja como cada custo encontra o destino certo, automaticamente"
- Botões: `Agendar Demonstração` + `Ver preços e planos`

## 9. Notas técnicas de implementação

- Criar `src/data/tesouraria.js` com a estrutura desta página, seguindo
  o padrão de `metabox.js`.
- Criar `CostAllocatorWidget.jsx`, reaproveitando o componente-base de
  calculadora já especificado em `02-financeiro-billing.md` sempre que
  possível (mesmo padrão de inputs/estado local/output ao vivo).
- Confirmar antes de publicar: fluxo de aprovação para contingências,
  possibilidade de dividir um custo entre múltiplos destinos, e se
  existe importação em lote de despesas — nenhum destes pontos está
  confirmado na proposta de 04/08/2026.
