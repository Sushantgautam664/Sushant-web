import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AIPanel from "@/components/AIPanel";
import Terminal from "@/components/Terminal";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <FloatingButtons />
      <AIPanel />
      <Terminal />
    </main>
  );
}
