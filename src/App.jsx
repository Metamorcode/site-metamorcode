import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";
import Home from "@/pages/Home";
import ModulesIndex from "@/pages/ModulesIndex";
import ModuleDetailPage from "@/pages/ModuleDetailPage";
import PricingPage from "@/pages/PricingPage";
import Empresa from "@/pages/Empresa";
import Blog from "@/pages/Blog";
import SupportPage from "@/pages/SupportPage";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="modulos-e-solucoes" element={<ModulesIndex />} />
          <Route path="modulos-e-solucoes/:slug" element={<ModuleDetailPage />} />
          <Route path="roadmap/:slug" element={<ModuleDetailPage />} />
          <Route path="precos" element={<PricingPage />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="blog" element={<Blog />} />
          <Route path="suporte" element={<SupportPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
