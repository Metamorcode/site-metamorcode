# Guia Geral — Sistema de Conteúdo Metamorcode (Módulos e Soluções)

> Este ficheiro é a base partilhada por todos os prompts de secção
> (`01` a `05`). Cole-o sempre junto do prompt da página específica ao
> pedir a outra IA (ou a mim, noutra sessão) para gerar/implementar o
> conteúdo — garante consistência de marca entre as 5 páginas.

## 1. Objetivo do exercício

A home do site já cobre bem branding, copy, conteúdo e UX writing. As
páginas de módulo (`/modulos-e-solucoes/*`) estão hoje reduzidas a um
ícone + título + descrição + 3 bullets (ver `ModuleDetailPage.jsx`) —
não vendem, não explicam o mecanismo real do produto, não têm prova
visual. O objetivo é transformar cada uma numa **página de produto
completa**: longa, explicativa, com prova (regras reais do sistema,
não genéricas), espaço de imagem/vídeo definido, e pelo menos um
elemento interativo que demonstre o valor do módulo em vez de apenas
o descrever.

## 2. Tom de voz (regra de ouro: o "purple hook")

Todas as secções fortes do site seguem este padrão, confirmado no
`invisibleLeakSection.jsx` e no `StatsStrip.jsx`:

1. **Pill/label** pequena, maiúsculas, cor `accent`, acima do título —
   ancora o contexto ("Onde o dinheiro está a fugir", "Chega de caos
   operacional").
2. **Título grande** (`font-display`, 4xl–6xl), direto, começa pela dor
   ou pela transformação — nunca pelo nome do produto.
3. **Parágrafo de corpo** (`text-lg`/`text-xl`, `text-white/60-80`) que
   descreve a dor operacional em termos concretos e humanos (noites a
   fechar folha, colaborador a ligar a perguntar se o pagamento saiu),
   **antes** de introduzir a solução.
4. Só depois entra o **"Com o MetaSenior: ..."** — a resolução, curta,
   quase uma frase de conforto.

Evitar: adjetivos vazios ("inovador", "revolucionário", "líder de
mercado"), promessas sem mecanismo por trás. Cada afirmação de
benefício deve amarrar a uma regra real do sistema (ex: não dizer
"escalas sem erros", dizer "o sistema não deixa escalar um
colaborador em conflito de horário — a regra corre sozinha, sempre").

Português europeu, tratamento direto ("a sua equipa", nunca "você").

### 2.1. Regra de pontuação (aplica-se a todo o site)

- **Nunca usar travessão longo (—) como conector dentro de títulos
  (H1/H2), pills, taglines, badges ou frases curtas de CTA.** O
  travessão longo lê-se bem em texto corrido/documental, mas em copy
  de site parece gerado por IA e quebra o ritmo visual do título.
  Substituir por: vírgula, dois pontos, "e", ou dividir em duas frases
  curtas. Exemplo: em vez de "A escala que se organiza sozinha — mesmo
  quando tudo muda ao mesmo tempo", usar "A escala que se organiza
  sozinha, mesmo quando tudo muda ao mesmo tempo".
- **Títulos, pills, taglines, badges e labels de CTA nunca terminam
  com ponto final.** Ponto final em frases curtas isoladas (que não
  fazem parte de um parágrafo) também lê como formatação de documento,
  não de site. Frases de corpo de texto (parágrafos com várias
  orações) mantêm pontuação normal — a regra aplica-se a elementos
  curtos e autónomos, não a parágrafos inteiros.
- Esta regra aplica-se a todo o conteúdo já escrito nos prompts
  `01`–`05` (foram revistos) e a qualquer copy nova gerada a partir
  deles — incluindo pela IA que for implementar no Claude Code.

## 3. Paleta de marca (para copy de imagem e para specs de componente)

```
--color-bg:            #08060b   fundo principal (quase preto, base violeta)
--color-bg-alt:         #100b18
--color-bg-alt2:        #150e21   cartões escuros
--color-primary:        #5b0073   roxo de marca (extraído do logótipo)
--color-primary-hover:  #7a1f96
--color-primary-dark:   #46005a
--color-primary-deep:   #2b0038
--color-accent:         #a94fc4   roxo claro — pills, ícones, destaques
--color-gold:           #d9a441
--color-green:          #2c7a45
--color-cyan:           #22d3ee
--color-rose:           #f472b6
--color-amber:          #f59e0b
--color-onDark:          #f5f2f8  texto principal sobre fundo escuro
--color-onDark-soft:     #b6acc4
--color-onDark-faint:    #7d7189
Tipografia: display "Nunito", corpo "Inter", mono "JetBrains Mono"
```

Fundo predominantemente escuro/preto-violeta nas secções de produto
(consistente com `StatsStrip` e `invisibleLeakSection`, ambos em
`bg-black` / `bg-surface`). Cartões brancos só quando o conteúdo é
denso e precisa de contraste de leitura (ex: tabelas).

## 4. Padrões de interatividade já existentes (reutilizar, não reinventar)

| Padrão | Onde já existe | Reutilizar para |
|---|---|---|
| `Reveal` (fade-in ao scroll) | `Reveal.jsx`, usado em quase tudo | Toda secção nova |
| Cartão cíclico com indicadores (auto-avança, pausa no hover) | `invisibleLeakSection.jsx` | Mostrar várias regras/casos de uso em sequência sem ocupar scroll infinito |
| Fallback em acordeão para mobile | mencionado no mind map do MetaSenior ERP | Qualquer componente rico que não funcione bem em ecrã estreito |
| Vídeo autoplay/loop/muted em bloco 2 colunas | `StatsStrip.jsx` | Blocos de prova visual "problema vs. solução" |
| Carrossel com autoplay + pausa + expandir | `Testimonial.jsx` | Testemunhos por módulo, se existirem |

Cada prompt de página abaixo propõe **um componente interativo novo
específico do módulo** — mas sempre construído sobre estes mesmos
princípios de interação (pausa no hover, indicadores, `prefers-reduced-motion`,
fallback mobile), para não fugir da identidade visual já validada.

## 5. Convenção para pedidos de imagem/vídeo

Cada prompt de página lista as imagens/vídeos necessários no formato:

```
### [nome do asset]
- **Onde entra:** secção X, tipo de bloco
- **Proporção:** ex. 16:9, 4:5, 1:1
- **Prompt para IA de imagem:**
  "..."
- **Alt text (PT-PT):** "..."
```

Os prompts de imagem descrevem estilo **UI dashboard escuro em tons de
roxo da marca** (para mockups de produto) ou **fotografia documental
autêntica de lares/ERPIs portugueses** (para fotos humanas) —
nunca "stock photo genérica de sorrisos". Onde a imagem for um mockup
de produto real (ecrãs do MetaSenior), sinalizo isso como preferível a
gerar por IA — o ideal é *screenshot real* da aplicação; a IA só serve
de placeholder até lá.

## 6. Estrutura-tipo de página de módulo (as 5 seguem esta ordem-base)

1. Hero (pill + H1 + subtítulo + 2 CTAs)
2. A dor (o que acontece hoje, sem o módulo)
3. Como funciona (mecanismo real + elemento interativo)
4. Funcionalidades em detalhe (grid ou lista)
5. Prova visual (mockup/imagem/vídeo do produto)
6. Números/stats (se existir dado real; caso contrário omitir, nunca inventar)
7. FAQ específica do módulo
8. CTA final

## 7. Movimento, interação e destaque visual (atualização de design)

> Direção nova: a home já está validada; agora as páginas de módulo
> (e qualquer secção nova) devem parecer **site animado**, não
> documento estático. Isto aplica-se a toda a implementação em
> Claude Code a partir de agora.

### 7.1. Toda a interação passa a reagir ao cursor

Nenhum componente fica estático ao passar o rato. Regra geral por
tipo de elemento:

| Elemento | Reação ao hover |
|---|---|
| Cartão de funcionalidade/feature | Eleva-se ligeiramente (`translateY(-4px)`), ganha sombra/glow na cor `accent`, borda ganha opacidade |
| Ícone dentro de cartão | Rotação leve ou escala (`scale(1.08)`) |
| Botão/CTA | Já tem estado hover na home (glow permanente) — manter, reforçar com leve escala |
| Linha de timeline/step (MetaBox, Turno em Aberto) | Passo ativo expande, os outros esbatem opacidade (`opacity: 0.5`) |
| Badge/pill | Brilho subtil (`box-shadow` pulsante lento) mesmo sem hover, para chamar o olhar |
| Imagem/mockup de produto | Leve zoom (`scale(1.02)`) com overflow escondido no contentor |

Sempre com `transition` suave (200 a 300ms), sempre com fallback via
`prefers-reduced-motion: reduce` (remover ou reduzir drasticamente a
animação, nunca removendo a funcionalidade em si).

### 7.2. "Em breve" / "Em desenvolvimento" deixa de existir na copy pública

Estas expressões soam a lista de tarefas internas, não a site. Trocar
sempre por um badge **"Novidades"**, com identidade visual própria:

- **Texto do badge:** `Novidades`
- **Estilo:** pill com gradiente `primary` → `accent`, ícone de
  sparkle/estrela (lucide `Sparkles` ou `Zap`) a pulsar lentamente,
  ligeiramente maior/mais chamativo do que os outros pills informativos
  da página (esses continuam neutros, cor `accent` sólida)
- **Uso:** aplicar a qualquer funcionalidade ainda em desenvolvimento
  em todas as 5 páginas (a "Turno em Aberto" em RH & Escalas, a
  "Central de Custos e Recibos" em Financeiro & Billing, e as duas
  páginas inteiras de Tesouraria & Opex e Multi-Empresa, que hoje
  estão ambas marcadas como capacidade futura)
- **Regra de honestidade:** o badge chama a atenção, mas o texto por
  perto continua claro que é uma capacidade nova a chegar — nunca
  afirmar que já está disponível hoje.

### 7.3. Cartões claros sobre fundo escuro, com profundidade

Quando uma secção estiver em fundo escuro (`bg-black`/`bg-bg`, que é a
maioria), o elemento mais importante dessa secção — o que quer mais
atenção — passa a ser um cartão **claro**, não mais um cartão escuro
translúcido como os já existentes. Isto cria contraste real em vez de
tudo se misturar no mesmo tom.

- **Fundo do cartão:** branco ou quase-branco (`#f5f2f8`, o
  `--color-onDark` invertido como fundo), nunca cinza neutro genérico
- **Profundidade:** sombra grande e suave por baixo
  (`box-shadow: 0 20px 60px rgba(91,0,115,0.35)`, usando o roxo de
  marca em vez de preto puro — isto é o que faz parecer "profundidade
  de marca" e não sombra genérica de Bootstrap)
- **Texto dentro do cartão:** cor `ink` (`#2a1638`), já definida no
  tema para cartões brancos
- **Quando usar:** um cartão claro por secção, no máximo, para o
  elemento-chave (ex.: o resultado do simulador, o valor calculado na
  calculadora, o CTA mais importante) — nunca em todos os cartões da
  mesma secção, senão perde-se o efeito de destaque

### 7.4. Elemento visual de assinatura, um por página

Cada uma das 5 páginas ganha **um momento visual distinto e animado**
de fundo, exclusivo dela, para que cada página tenha identidade
própria em vez de parecerem cópias umas das outras com texto trocado.
Todos reaproveitam a paleta de marca (nunca cores fora dela) e todos
respeitam `prefers-reduced-motion`. A atribuição específica está
detalhada no prompt de cada página, secção "Elemento visual de
assinatura":

| Página | Conceito |
|---|---|
| RH & Escalas | Chuva de sinais a cair (a resposta do WhatsApp, na secção Novidades) |
| Financeiro & Billing | Partículas a subir (o valor a acumular, na calculadora) |
| Tesouraria & Opex | Linhas de fluxo animadas (o custo a percorrer até ao destino) |
| Multi-Empresa | Constelação a pulsar (nós ligados, representando as empresas) |
| MetaBox | Ondas concêntricas a expandir (o sinal NFC a emitir) |

Implementação técnica sugerida para todos: componente `Canvas` ou SVG
dedicado, absolutamente posicionado atrás do conteúdo da secção
(`z-index` negativo ou `pointer-events: none`), `IntersectionObserver`
para só animar quando visível (mesmo padrão já usado em
`HeroWavesCanvas.jsx`), 30fps cap, ciclo matematicamente fechado (sem
salto visível ao repetir).

## 8. Fontes de conteúdo usadas

1. **`Metamorcode — Ecossistema Harmony aplicado aos procedimentos da
   Cuidar de Si` (Fev/2026)** — mecanismo real das regras de
   disponibilidade, motor financeiro diurno/noturno, ciclo de vida do
   pedido. Base de **RH & Escalas**, **Financeiro & Billing** e
   **MetaBox**.
2. **`Orçamento dos Desenvolvimentos — Módulos de RH e Financeiro`
   (04/08/2026)** — proposta comercial que revelou: a funcionalidade
   de reserva de turno sem colaborador alocado + aviso automático por
   WhatsApp (nova em RH & Escalas); a Central de Custos e Ganhos, que
   é o mecanismo real de **Tesouraria & Opex**; e o "sistema de
   entidades" (empresas), que é o mecanismo real de **Multi-Empresa**.
   Deste documento só se usou o conteúdo funcional — valores e horas
   orçamentadas foram ignorados. Itens marcados a vermelho no
   documento original (cortados do âmbito) **não** foram incorporados
   como funcionalidade real: bloqueio do turno após validação
   financeira, reorganização das páginas financeiras, a expansão mais
   ampla da integração TOConline, e o upload de anexos de atestados.

Estado de confiança por página, após incorporar as duas fontes:

| Página | Confiança | Notas |
|---|---|---|
| RH & Escalas | Alta | Regras de disponibilidade + novidade reserva/WhatsApp confirmadas |
| Financeiro & Billing | Alta | Motor diurno/noturno + Central de Custos + recibos confirmados |
| MetaBox | Alta | Papel do hardware e validação de registos confirmados |
| Tesouraria & Opex | Média-alta | Mecanismo de alocação confirmado; falta confirmar fluxo de aprovação e importação em lote |
| Multi-Empresa | Média | Modelo de "pool partilhado" confirmado; falta confirmar hierarquia de permissões e vista consolidada |

Tudo o que ainda depende de confirmação está listado no fim dos
prompts 03 e 04, secção "O que ainda falta confirmar".
