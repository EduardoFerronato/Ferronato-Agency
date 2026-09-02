import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SiteScripts from "@/components/SiteScripts";

export default function Page() {
  return (
    <>
      <a href="#top" className="skip-link">
        Pular para o conteúdo
      </a>

      <Nav />

      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>

      <Footer />

      <SiteScripts />
    </>
  );
}
