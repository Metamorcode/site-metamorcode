# MetaSenior ERP — por Metamorcode

Landing page institucional/comercial do MetaSenior ERP.
Vite + React + React Router + Tailwind CSS v4 + shadcn/ui + lucide-react.

## Como rodar

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build   # gera em dist/
```

## Mapa do site

- `/` — Home: visão geral do produto (Hero com vídeo, números, menu-filtro
  dos módulos estilo Sage, automações, testemunho, roadmap, sobre, CTA final)
- `/modulos-e-solucoes` — índice dos 4 módulos + MetaBox (IoT)
- `/modulos-e-solucoes/:slug` — página de cada módulo/MetaBox
- `/roadmap/:slug` — página de cada item do roadmap de inovação
- `/precos` — Preços e Planos (calculadora + campanhas sazonais)
- `/empresa` — sobre a Metamorcode
- `/suporte` — FAQ (`#faq`) + Contacte-nos (`#contacto`)
- `/blog` — artigos (ainda não está no menu principal)

## Estrutura

```
src/
 ├── assets/             → logo, vídeo do hero (ondas roxas) + poster
 ├── data/
 │    ├── modules.js      → os 4 módulos core (nome, tagline, descrição, bullets)
 │    ├── metabox.js      → dados do hardware MetaBox
 │    ├── automations.js  → WhatsApp API + TOConline
 │    ├── roadmap.js      → produtos futuros (Life, Predict, Watch, Sensor)
 │    ├── seasons.js      → campanhas sazonais
 │    └── faq.js          → perguntas frequentes
 ├── lib/
 │    └── pricing.js      → regras de cálculo da mensalidade
 ├── components/
 │    ├── Reveal.jsx       → wrapper de fade+slide-up ao rolar a página
 │    ├── ScrollManager.jsx → rola até #hash ao navegar entre páginas
 │    ├── ui/               → componentes shadcn/ui
 │    ├── layout/           → Header, Footer, RootLayout
 │    └── sections/         → Hero, StatsStrip, ModuleTabsSection (menu-filtro),
 │                            MetaBoxMock, MiniDashboardMock, BiChart, RateTable,
 │                            AutomationsSection, PricingSection, SeasonToast,
 │                            Testimonial, EcosystemGrid, AboutTeaser, FinalCTA
 └── pages/
      ├── Home.jsx
      ├── ModulesIndex.jsx      → /modulos-e-solucoes
      ├── ModuleDetailPage.jsx  → /modulos-e-solucoes/:slug e /roadmap/:slug
      ├── PricingPage.jsx       → /precos
      ├── Empresa.jsx
      ├── Blog.jsx
      └── SupportPage.jsx       → /suporte
```

## Onde editar o quê

- **Cores da marca** → `src/index.css` (bloco `@theme`). `--color-primary` é o
  roxo extraído do logótipo; `--color-surface` é o cinza escuro moderno que
  substitui o antigo `#F8FAFC`.
- **Textos dos módulos** → `src/data/modules.js`
- **Menu-filtro da Home** → `src/components/sections/ModuleTabsSection.jsx`
  (o mapa `visuals` associa cada módulo a um componente visual)
- **Regras de preço** → `src/lib/pricing.js`
- **Campanhas sazonais** → `src/data/seasons.js`
- **FAQ** → `src/data/faq.js`

## Animações

- `Reveal` — fade + slide-up ao entrar na viewport (IntersectionObserver).
  Nota: capturas de "página inteira" via devtools/automação podem não
  disparar o scroll real e mostrar seções ainda invisíveis — isso é esperado
  e não afeta a navegação normal do utilizador.
- `hero-breathe` — leve zoom orgânico (não usado no hero atual, disponível em `index.css`)
- Transições suaves em todos os hovers de cards/botões, e `scroll-behavior: smooth` global.

## Formulário de contacto

Está em `/suporte`, dentro de `src/components/sections/ContactForm.jsx`.
Atualmente só simula o envio — ligue a um serviço como Formspree, EmailJS, ou
uma API própria.
