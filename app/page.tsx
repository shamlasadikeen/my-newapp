import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] px-3 py-3 text-white md:px-6 md:py-6">
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-[30px] border border-yellow-400/10 bg-[#070707] shadow-[0_0_80px_rgba(255,215,0,0.06)]">
        <Navbar />
        <Hero />
        <Services />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}