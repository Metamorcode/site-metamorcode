import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE = "https://metamorcode.com";

const DEFAULT = {
  title: "MetaSenior | Escalas, ponto e pagamentos para ERPIs e apoio domiciliário",
  description:
    "MetaSenior junta escalas, registo de ponto (MetaBox) e cálculo de pagamentos num só sistema para ERPIs, apoio domiciliário e equipas por turnos.",
};

const PAGES = {
  "/modulos-e-solucoes": {
    title: "Módulos e soluções | MetaSenior",
    description:
      "Escalas e RH, financeiro e billing, tesouraria e MetaBox: conheça os módulos do MetaSenior para equipas por turnos.",
  },
  "/modulos-e-solucoes/rh-escalas": {
    title: "Escalas dinâmicas e RH | MetaSenior",
    description:
      "Crie escalas semanais sem conflitos, com bloqueio automático por férias, faltas e baixas médicas.",
  },
  "/modulos-e-solucoes/financeiro-billing": {
    title: "Financeiro e billing | MetaSenior",
    description:
      "Valores a pagar calculados automaticamente a partir da escala e da assiduidade: feriados, turnos noturnos e vários locais.",
  },
  "/modulos-e-solucoes/tesouraria-opex": {
    title: "Tesouraria e despesas | MetaSenior",
    description: "Controle despesas e pagamentos da operação num único painel.",
  },
  "/precos": {
    title: "Preços e planos | MetaSenior",
    description: "Um valor fixo mensal, sempre à vista. Veja quanto custa o MetaSenior para o tamanho da sua equipa.",
  },
  "/empresa": {
    title: "Empresa | Metamorcode",
    description: "Quem somos: a Metamorcode, no Porto, cria software de gestão para equipas por turnos e cuidados seniores.",
  },
  "/blog": {
    title: "Blog | Metamorcode",
    description: "Artigos sobre gestão de escalas, assiduidade e operação em ERPIs e apoio domiciliário.",
  },
  "/suporte": {
    title: "Suporte e contacto | Metamorcode",
    description: "Fale com a equipa Metamorcode ou agende uma demonstração do MetaSenior.",
  },
};

function setMeta(selector, attr, value) {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname !== "/" ? pathname.replace(/\/+$/, "") : "/";
    const page = PAGES[path] ?? DEFAULT;
    const url = SITE + (path === "/" ? "/" : path);

    document.title = page.title;
    setMeta('meta[name="description"]', "content", page.description);
    setMeta('meta[property="og:title"]', "content", page.title);
    setMeta('meta[property="og:description"]', "content", page.description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('link[rel="canonical"]', "href", url);
  }, [pathname]);

  return null;
}
