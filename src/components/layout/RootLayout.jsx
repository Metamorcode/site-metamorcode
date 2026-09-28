import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollManager from "@/components/ScrollManager";
import Seo from "@/components/Seo";

export default function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Seo />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
