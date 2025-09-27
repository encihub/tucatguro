import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-dvh grid grid-rows-[auto,1fr,auto]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
