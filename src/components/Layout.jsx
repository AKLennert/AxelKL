import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import ScrollManager from "./ScrollManager";

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
