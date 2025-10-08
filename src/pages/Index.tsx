import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Results from "@/components/Results";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Skills />
      <Process />
      <Projects />
      <Results />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
