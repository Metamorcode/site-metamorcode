import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router não rola automaticamente até um #hash ao navegar entre
 * páginas. Este componente corrige isso: sempre que a rota muda, se houver
 * hash na URL, rola suavemente até o elemento com esse id; caso contrário,
 * volta ao topo.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      // pequeno delay para garantir que a página já renderizou
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
