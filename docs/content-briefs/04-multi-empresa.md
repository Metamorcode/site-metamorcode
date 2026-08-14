# Prompt de Conteúdo — `/modulos-e-solucoes/multi-empresa`

> Usar sempre em conjunto com `00-guia-geral-conteudo.md`.
> Fonte de mecanismo real: proposta comercial "Orçamento dos
> Desenvolvimentos" (04/08/2026), bloco "Módulo de Gestão Financeira —
> sistema de entidades", combinada com os pontos de RH sobre "empresas
> em que o colaborador trabalha".

## Nota sobre o estado desta funcionalidade

O "sistema de entidades" (empresas) é a **base estrutural** de um
desenvolvimento em curso, não uma funcionalidade acabada e à parte —
sustenta tanto o módulo de RH como o Financeiro. Não apresentar como
"módulo isolado já pronto"; apresentar como a **arquitetura que torna
possível** gerir mais do que uma empresa dentro do mesmo sistema.
Ainda por confirmar: se existe hierarquia de permissões entre empresas
(uma empresa-mãe vê tudo, outras só veem o seu próprio) — a proposta
não menciona isso, por isso não afirmar nada sobre permissões até
confirmação.

## O que ficou confirmado (deixa de ser suposição)

A proposta revela um modelo concreto, mais rico do que "isolamento
total entre empresas":

- Existem várias entidades reais no sistema (ex.: **Cuidar de Si** e
  **Flor da Evolução**), cada uma com as suas próprias regras
  financeiras (ex.: percentagem de Recibo Verde própria por empresa).
- **Um colaborador pode trabalhar em mais do que uma empresa ao mesmo
  tempo** — o cadastro do colaborador passa a ter "seleção das
  empresas em que trabalha", não uma escolha única. Isto **não é**
  isolamento estrito de dados por conta separada; é um modelo de
  **pool de colaboradores partilhado**, com regras financeiras e
  contratuais calculadas separadamente por empresa.
- Cada empresa tem os seus próprios clientes (ex.: OLC, Pinheiro
  Manso pertencem a uma operação específica) e os seus próprios custos
  (via Central de Custos e Ganhos, ver `03-tesouraria-opex.md`).
- Existe visão consolidada por empresa: indicadores de quantidade de
  colaboradores contratados e de colaboradores a recibo verde,
  segmentados por empresa, visíveis na página de RH; e o Dashboard
  Financeiro cruza faturação e custos também com esta granularidade.

---

## 1. Hero

- **Pill:** `Arquitetura · Multi-Empresa` + badge `Novidades` (ver `00-guia-geral-conteudo.md` secção 7.2, chamativo, gradiente primary→accent com sparkle)
- **H1:** "Várias empresas, uma equipa partilhada, contas sempre separadas"
- **Subtítulo:** "Um colaborador pode trabalhar em mais do que uma empresa do grupo, e o MetaSenior sabe sempre calcular o que pertence a cada uma, sem misturar contratos, percentagens ou custos"
- **CTA primário:** "Agendar Demonstração"
- **CTA secundário:** "Ver como a separação funciona"

## 2. A dor

- **Pill:** `O problema, sem esta arquitetura`
- **H2:** "Um grupo com várias empresas normalmente vive em vários sistemas"
- **Corpo:** Quando a mesma equipa presta serviço a mais do que uma
  empresa do grupo, a solução mais comum é duplicar tudo — uma conta
  por empresa, uma escala por empresa, um cálculo de percentagem à
  parte para cada uma. O resultado é o mesmo colaborador a aparecer em
  sítios diferentes, sem visão de conjunto de quantas pessoas
  trabalham, no total, para o grupo.
- **3 cartões de sintoma:**
  1. "O mesmo colaborador, cadastrado de formas diferentes em cada empresa"
  2. "Percentagem de Recibo Verde calculada à parte, empresa a empresa"
  3. "Nenhuma visão rápida de quantos colaboradores contratados e a recibo verde existem, por empresa, no grupo todo"

## 3. Como funciona — o sistema de entidades

- **Pill:** `A estrutura por trás`
- **H2:** "Cada empresa é uma entidade, com as suas próprias regras"
- **Corpo intro:** As empresas do grupo (ex.: Cuidar de Si e Flor da
  Evolução) existem como entidades próprias dentro do sistema. Um
  colaborador associa-se a uma ou mais, e a partir daí tudo o que é
  financeiro — percentagem de recibo verde, contrato, custos — é
  calculado com a regra certa de cada empresa, automaticamente.

### Elemento interativo: "Seletor de Empresa"

Um mockup interativo simples que demonstra a troca de contexto:

- Dropdown/seletor no topo: `Cuidar de Si` / `Flor da Evolução`
- Ao trocar, um mini-painel abaixo atualiza 3 números: colaboradores
  contratados, colaboradores a recibo verde, e percentagem de recibo
  verde aplicada nessa empresa — todos mudam instantaneamente,
  demonstrando que são calculados por entidade.
- Destacar visualmente (badge) os colaboradores que aparecem em mais
  do que uma empresa — para tornar tangível o "pool partilhado".

**Comportamento técnico esperado:**
- Dados de exemplo fixos no componente (não reais), claramente
  identificados como ilustrativos.
- Estado local (`useState`), sem backend.
- Fallback mobile: seletor e painel empilhados verticalmente.
- **Hover:** o dropdown/seletor e o badge de "pool partilhado" ganham
  leve elevação + glow ao passar o rato (ver `00-guia-geral-conteudo.md`
  secção 7.1).
- **Cartão de resultado:** o mini-painel com os 3 números (colaboradores
  contratados, a recibo verde, percentagem) vive num cartão claro com
  profundidade (fundo `#f5f2f8`, sombra roxa suave), o ponto de maior
  contraste da secção (ver secção 7.3 do guia geral).

### Elemento visual de assinatura desta página: "Constelação a Pulsar"

Fundo animado exclusivo desta secção: pontos de luz (nós) representando
as empresas do grupo, ligados entre si por linhas finas em `accent`
(#a94fc4), que pulsam suavemente de brilho, como um mapa de rede
lento. Pequenos pontos mais pequenos (representando colaboradores)
deslocam-se devagar entre os dois nós principais ao longo das linhas
de ligação, reforçando visualmente a ideia do "pool partilhado" entre
empresas. Ao trocar a empresa ativa no seletor, o nó correspondente
ganha destaque (brilho mais forte) e os outros esbatem ligeiramente.

- Densidade baixa, nunca compete com o texto ou com o widget
- `IntersectionObserver`, cap de 30fps, `prefers-reduced-motion`
  remove a animação e mostra o fundo estático
- Implementação sugerida: `<canvas>` ou SVG com `requestAnimationFrame`,
  mesmo padrão de `HeroWavesCanvas.jsx` (ciclo fechado, sem salto ao
  repetir)

## 4. Funcionalidades em detalhe

1. **Entidades de empresa** — cada empresa do grupo existe como
   registo próprio no sistema, com as suas regras financeiras.
2. **Colaboradores partilhados entre empresas** — um colaborador pode
   estar associado a mais do que uma empresa, sem necessidade de
   cadastro duplicado.
3. **Percentagem de recibo verde por empresa** — aplicada
   automaticamente consoante a empresa (e combinada com o contrato,
   quando aplicável).
4. **Indicadores por empresa** — quantidade de colaboradores
   contratados e a recibo verde, visíveis diretamente na página de RH.
5. **Custos e faturação separados por empresa** — via Central de
   Custos e Ganhos e Dashboard Financeiro, cruzando sempre com a
   entidade certa.

## 5. Prova visual

### Imagem 1 — Fotografia documental
- **Onde entra:** secção 2
- **Proporção:** 4:5
- **Prompt para IA de imagem:**
  "Documentary-style photo, a regional operations manager in Portugal reviewing organizational charts for two different care facility brands side by side on a desk, natural office lighting, focused expression, realistic office setting, muted natural colors, photojournalistic style, not staged"
- **Alt text:** "Gestora a comparar a estrutura de duas empresas do mesmo grupo"

### Imagem 2 — Mockup do produto
- **Onde entra:** secção 3, junto ao "Seletor de Empresa"
- **Proporção:** 16:10
- **Prompt para IA de imagem:**
  "Dark-themed SaaS dashboard UI mockup, a company selector dropdown at the top switching between two organization entities, small panel below showing employee count metrics that update per entity, deep purple (#5b0073) and near-black (#08060b) background, light purple (#a94fc4) accent highlights, clean modern sans-serif typography, professional B2B software aesthetic, no readable logos or real text, high detail, 16:10 aspect ratio"
- **Alt text:** "Ecrã do MetaSenior ERP com seletor de empresa e indicadores que mudam consoante a entidade selecionada"

## 6. FAQ específica do módulo

- **"Um colaborador que trabalha em duas empresas do grupo tem de ser cadastrado duas vezes?"**
  Não — associa-se o mesmo colaborador a mais do que uma empresa, e o
  sistema calcula separadamente o que pertence a cada uma.
- **"A percentagem de recibo verde é igual em todas as empresas do grupo?"**
  Não necessariamente — cada empresa pode ter a sua própria
  percentagem, aplicada automaticamente consoante o vínculo do
  colaborador.
- **"Consigo ver quantos colaboradores tenho, no total, em todas as empresas?"**
  🟡 Não confirmado se existe uma vista somada de todas as empresas em
  conjunto, ou se os indicadores são sempre vistos empresa a empresa —
  confirmar antes de publicar esta resposta.

## 7. UX Writing (microcopy)

- Botão CTA hero: `Agendar Demonstração`
- Botão CTA secundário: `Ver como a separação funciona`
- Label do seletor: `Empresa ativa`
- Badge de colaborador partilhado: `Trabalha em mais do que uma empresa`
- CTA final: `Falar com a nossa equipa sobre gestão multi-empresa`

## 8. CTA final

- **H2:** "Uma equipa, várias empresas, contas sempre certas"
- **Corpo:** "Veja como o mesmo colaborador pode servir mais do que uma empresa do grupo, sem confundir uma única regra financeira"
- Botões: `Agendar Demonstração` + `Ver preços e planos`

## 9. O que ainda falta confirmar

1. Existe hierarquia de permissões entre empresas (ex: empresa-mãe vê
   tudo, outras só veem o seu próprio), ou todas são pares?
2. Existe uma vista consolidada somando todas as empresas, além da
   vista por empresa?
3. Como funciona, na prática, a troca de contexto na interface — um
   seletor global, ou o utilizador escolhe a empresa ao entrar?

## 10. Notas técnicas de implementação

- Criar `src/data/multiEmpresa.js` com a estrutura desta página,
  seguindo o padrão de `metabox.js`.
- Criar `CompanySelectorMock.jsx` para o elemento interativo da secção
  3 — dados de exemplo fixos, claramente ilustrativos, estado local.
- Confirmar com o Leonardo o ponto 9.1 (hierarquia de permissões)
  antes de publicar qualquer afirmação sobre segurança/isolamento de
  dados entre empresas — é o tipo de claim que, se errado, gera
  problema de confiança sério com clientes B2B.
