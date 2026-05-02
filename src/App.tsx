import { useEffect, useState } from "react";
import "./App.css";
import CursorFollower from "./components/CursorFollower";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Platforms from "./components/Platforms";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const SECTIONS = ["about", "experience", "platforms", "skills", "projects"];

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CursorFollower />
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        <div className="mx-auto max-w-screen-lg px-6 md:px-12 lg:px-16">
          <Hero />
          <section id="about"      className="scroll-mt-16"><About /></section>
          <section id="experience" className="scroll-mt-16"><Experience /></section>
          <section id="platforms"  className="scroll-mt-16"><Platforms /></section>
          <section id="skills"     className="scroll-mt-16"><Skills /></section>
          <section id="projects"   className="scroll-mt-16"><Projects /></section>
          <footer className="py-12 border-t border-[#e2ddd4] flex items-center justify-between">
            <p className="text-[11px] font-mono text-[#c8c0b6]">Aryan Bhat · {new Date().getFullYear()}</p>
            <p className="text-[11px] font-mono text-[#c8c0b6]">Built with React + Vite</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
