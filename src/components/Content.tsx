import React, { useEffect, useRef } from "react";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Content({
  setActiveSection,
}: {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) {
  const aboutRef      = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const skillsRef     = useRef<HTMLElement>(null);
  const projectsRef   = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-35% 0px -35% 0px", threshold: 0 }
    );

    const refs = [aboutRef, experienceRef, skillsRef, projectsRef];
    refs.forEach((r) => { if (r.current) observer.observe(r.current); });
    return () => refs.forEach((r) => { if (r.current) observer.unobserve(r.current); });
  }, [setActiveSection]);

  return (
    <main className="flex-1 min-w-0 md:pt-0 pt-12 md:pl-12 lg:pl-16">
      <section id="about"      ref={aboutRef}      className="md:pt-20 scroll-mt-20">
        <About />
      </section>
      <section id="experience" ref={experienceRef} className="scroll-mt-20">
        <Experience />
      </section>
      <section id="skills"     ref={skillsRef}     className="scroll-mt-20">
        <Skills />
      </section>
      <section id="projects"   ref={projectsRef}   className="scroll-mt-20">
        <Projects />
      </section>
    </main>
  );
}
