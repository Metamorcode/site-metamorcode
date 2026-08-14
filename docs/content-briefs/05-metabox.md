# Prompt de Conteúdo — `/modulos-e-solucoes/metabox`

> Usar sempre em conjunto com `00-guia-geral-conteudo.md`.
> Fonte de mecanismo real: doc. "Ecossistema Harmony aplicado aos
> procedimentos da Cuidar de Si", capítulos 1.2, 3.7 e 4.3, mais
> `src/data/metabox.js` (já existente no repositório).

## Posicionamento da página

Ao contrário das outras 4, a MetaBox tem uma componente física real
(hardware IoT) — por isso esta página já pode (e deve) puxar mais para
o registo visual "produto premium" que o `ModuleDetailPage.jsx` já
inicia com fundo preto e `MetaBoxMock`. O valor central: a MetaBox é
*a única fonte da verdade* sobre presença — não calcula nada, não
decide nada, só regista com prova. É essa separação de
responsabilidades (Box regista, Hours decide) que precisa de ficar
cristalina, porque é a resposta a "porque preciso de hardware, se já
tenho um ERP?".

---

## 1. Hero

- **Pill:** `Ecossistema de hardware premium`
- **H1:** "Assiduidade registada com prova, não com boa vontade"
- **Subtítulo:** "A MetaBox é o terminal físico que liga a operação no terreno ao MetaSenior ERP em tempo real. Regista, não decide, e é exatamente por isso que nunca falha"
- **CTA primário:** "Ver preços do hardware"
- **CTA secundário:** "Ver como a validação funciona"

## 2. A dor

- **Pill:** `O problema, sem a MetaBox`
- **H2:** "Sem prova, a palavra de um vale o mesmo que a do outro"
- **Corpo:** Sem um ponto físico de registo, a assiduidade depende de
  boa memória, de folhas de papel ou de mensagens de WhatsApp — nada
  disso resiste a uma inspeção da ACT nem a uma disputa sobre horas
  extra. E quando o colaborador esquece de assinalar a saída, ninguém
  sabe se foi esquecimento, atraso, ou falta.
- **3 cartões de sintoma:**
  1. "Entradas e saídas anotadas à mão, fáceis de esquecer ou alterar."
  2. "Sem registo formal, uma disputa sobre horas vira palavra contra palavra."
  3. "Nenhuma forma rápida de confirmar, em tempo real, se alguém chegou."

## 3. Como funciona — a separação de responsabilidades

- **Pill:** `O papel exato da MetaBox`
- **H2:** "A Box regista, o MetaSenior decide, nunca o contrário"
- **Corpo intro:** A MetaBox não faz cálculos salariais, não valida
  regras de escala, não toma decisões operacionais. A sua única função
  é garantir que o registo de presença aconteça de forma organizada —
  e transmitir isso ao MetaSenior a cada 30 minutos.

### Elemento interativo: "Linha do tempo do registo de ponto"

Um diagrama horizontal animado/interativo (pode ser SVG + hover, sem
necessidade de estado complexo) que mostra o percurso de um único
registo de ponto, do momento do "bater" até ao impacto financeiro —
tornando tangível a diferença entre **Controlo de Ponto** e
**Validação de Registos** (distinção real do documento, capítulo 4.3,
que hoje não está explicada em lado nenhum do site):

1. `Colaborador bate o ponto na MetaBox` (ícone NFC/cartão)
2. `Dados chegam ao MetaSenior em até 30 min` (ícone de sincronização)
3. `Aparece no Controlo de Ponto` (apenas consulta — badge cinza)
4. `Cruza com a escala existente` (comparação visual: horário previsto vs. horário real)
5. `Classificação automática`: `Normal` (tolerância 5 min) / `Incumprimento` / `Hora Extra` (>30 min além do previsto) — mostrar as 3 badges coloridas possíveis
6. `Validação de Registos` (confirmação oficial — badge verde "Autorizado para financeiro")

**Interação:** ao passar o rato (ou tocar, em mobile) sobre cada passo,
expandir uma explicação curta e destacar o passo seguinte — como um
"scrollytelling" horizontal leve, sem exigir scroll dedicado, cabendo
numa única secção.

**Estados a ilustrar explicitamente** (são casos reais do documento e
muito relevantes para o comprador entender o rigor do sistema):
- `Sem Dados` — existe agendamento, mas o colaborador não registou o ponto.
- `Colaborador sem token ativo` — agendamento aparece como "Sem Dados" até ser tratado manualmente.

**Hover e destaque:** cada passo ganha leve elevação + glow ao passar
o rato, mesmo antes de ser o passo ativo (ver `00-guia-geral-conteudo.md`
secção 7.1). O passo 6 (`Validação de Registos`, o momento em que o
registo passa a contar para o financeiro) é o elemento que mais quer
atenção nesta linha do tempo, por isso vive num cartão claro com
profundidade (fundo `#f5f2f8`, sombra roxa suave) em vez de badge
escuro translúcido como os restantes 5 passos, criando contraste real
contra o fundo `bg-black` da secção (ver secção 7.3 do guia geral).

### Elemento visual de assinatura desta página: "Ondas Concêntricas"

Fundo animado exclusivo desta secção: anéis concêntricos em `accent`
(#a94fc4), a expandir lentamente a partir do ícone do terminal MetaBox
(passo 1 da linha do tempo) e a desvanecer-se em opacidade à medida
que crescem, como o sinal de um leitor NFC a emitir. Um novo anel
nasce a cada poucos segundos, criando um ritmo contínuo e discreto,
sugerindo "o dispositivo está sempre a emitir, sempre a registar".

- Densidade baixa, nunca compete com o texto ou com a linha do tempo
- `IntersectionObserver`, cap de 30fps, `prefers-reduced-motion`
  remove a animação e mostra o ícone estático
- Implementação sugerida: SVG com `<animate>` ou CSS `@keyframes`
  (mais leve do que canvas para este efeito específico, por ser um
  padrão geométrico simples e repetitivo)

## 4. Funcionalidades em detalhe

Baseado em `metabox.js` (já existente) + capítulo 3.7 e 4.3 do documento:

1. **Terminal físico de assiduidade** — dispositivo IoT proprietário,
   registo de entradas/saídas via cartão ou tag NFC.
2. **Portal Kiosk do colaborador** — interface no próprio ecrã da
   MetaBox; o colaborador consulta autonomamente as suas escalas
   futuras e o histórico de picagens do mês, sem precisar de perguntar
   a ninguém.
3. **Validação inteligente de horas** — cruza picagens em tempo real
   com os turnos planeados no RH, sinalizando desvios automaticamente
   (atraso, saída antecipada, hora extra).
4. **Gestão de tokens** — cada colaborador tem um código de acesso
   próprio, atribuído e geríve através do MetaSenior; um colaborador só
   pode ter um token ativo por período.
5. **Transmissão automática a cada 30 minutos** — sem intervenção
   manual, sem exportação/importação de ficheiros.

## 5. Prova visual

### Imagem 1 — Render do hardware
- **Onde entra:** hero, ao lado do `MetaBoxMock` já existente (ou substituindo-o, dependendo da fidelidade do mockup atual)
- **Proporção:** 1:1 ou 4:5
- **Prompt para IA de imagem:**
  "Product photography style render, a sleek modern NFC time-clock terminal device mounted on a wall, matte black casing with a subtle deep purple (#5b0073) accent light strip, small display screen showing a minimal UI, soft studio lighting with gentle reflections, dark neutral background, premium industrial design aesthetic similar to a smart intercom or access control device, high detail, no visible brand logos or text"
- **Alt text:** "Terminal físico MetaBox montado na parede, com ecrã e leitor NFC"

### Imagem 2 — Fotografia documental de uso
- **Onde entra:** secção 2 ou junto à linha do tempo
- **Proporção:** 4:5
- **Prompt para IA de imagem:**
  "Documentary-style photo, a caregiver in a Portuguese senior care facility tapping an NFC card against a wall-mounted time-clock terminal, natural indoor corridor lighting, authentic candid moment, realistic healthcare facility setting, muted warm colors, photojournalistic style, not staged"
- **Alt text:** "Colaboradora a registar o ponto com cartão NFC num terminal MetaBox"

## 6. Vídeo

- **`fila-picagem-ponto.mp4`** já existe nos assets do projeto e já é
  usado no `StatsStrip` da home — reutilizar aqui, na secção "Como
  funciona", como prova de que o registo é rápido e sem fila real
  (contraponto visual à ideia de "fila" no nome do ficheiro — vale a
  pena confirmar se o vídeo mostra o processo fluido; se mostrar
  literalmente uma fila de pessoas à espera, considerar gravar um
  novo vídeo mais alinhado com "sem fricção").

## 7. FAQ específica do módulo

- **"A MetaBox faz algum cálculo de salário sozinha?"**
  Não. A MetaBox só regista presença. Todos os cálculos, validações e
  decisões acontecem no MetaSenior ERP — a separação existe
  precisamente para reduzir erros e manter rastreabilidade clara.
- **"O que acontece se um colaborador esquecer de bater a saída?"**
  O registo fica incompleto (só entrada ou só saída registada) e
  aparece sinalizado no Controlo de Ponto para verificação manual
  antes da validação final.
- **"Um colaborador pode ter mais do que um token ao mesmo tempo?"**
  Não — apenas um token ativo por período, evitando ambiguidade nos
  registos.

## 8. UX Writing (microcopy)

- Botão CTA hero: `Ver preços do hardware`
- Botão CTA secundário: `Ver como a validação funciona`
- Badges da linha do tempo: `Normal`, `Incumprimento de Horário`, `Hora Extra`, `Sem Dados`
- Tooltip do passo "Controlo de Ponto": `Aqui só se consulta — nada é decidido ainda`
- Tooltip do passo "Validação": `A partir daqui, o registo impacta financeiro e faturação`
- CTA final: `Falar com a nossa equipa sobre a MetaBox`

## 9. CTA final

- **H2:** "Prova de presença que resiste a qualquer disputa"
- **Corpo:** "Veja o hardware e a validação automática em ação, com os dados da sua própria operação."
- Botões: `Agendar Demonstração` + `Ver preços do hardware`

## 10. Notas técnicas de implementação

- Estender `src/data/metabox.js` com os novos campos (`hero`,
  `painPoints`, `timeline`, `faq`) — a estrutura atual só cobre
  `metabox` + `metaboxFeatures`, insuficiente para a página completa.
- Criar `MetaBoxTimeline.jsx` (o componente de "scrollytelling"
  horizontal descrito na secção 3) — pode ser puro SVG + CSS
  transitions, sem necessidade de biblioteca externa.
- Reaproveitar `MetaBoxMock.jsx` existente ou substituí-lo pela imagem
  1 acima, dependendo do nível de fidelidade já atingido no mock atual.
- O bloco `bg-black` já usado no `ModuleDetailPage.jsx` para
  `isMetabox` deve manter-se — está alinhado com o tom "hardware
  premium" pretendido.
