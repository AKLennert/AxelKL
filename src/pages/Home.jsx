import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import ContactCta from "../components/ContactCta";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Work />
      <ContactCta />
    </>
  );
}
