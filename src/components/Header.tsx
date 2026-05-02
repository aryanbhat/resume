import { useEffect, useState } from "react";
import { scrollToSection } from "../utils/navigationHandler";

const NAV = [
  { id: "about",      label: "About"      },
  { id: "experience", label: "Experience" },
  { id: "platforms",  label: "Platforms"  },
  { id: "skills",     label: "Skills"     },
  { id: "projects",   label: "Projects"   },
];

export default function Header({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#faf7f2]/92 backdrop-blur-md border-b border-[#e2ddd4]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-screen-lg px-6 md:px-12 lg:px-16 flex items-center justify-between h-14">
        <a
          href="/"
          className="text-sm font-bold tracking-tight text-[#1c1916] hover:text-[#c47d10] transition-colors duration-200"
        >
          AB
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-[11px] font-mono uppercase tracking-widest transition-colors duration-200 bg-transparent border-none cursor-pointer ${
                activeSection === id
                  ? "text-[#c47d10]"
                  : "text-[#a09890] hover:text-[#1c1916]"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <a
          href="https://drive.google.com/file/d/1iRCpuaXjQKTgXVkiUWCHjnByW5izl5nG/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden text-[11px] font-mono uppercase tracking-widest text-[#a09890] hover:text-[#c47d10] transition-colors duration-200"
        >
          Résumé ↗
        </a>
      </div>
    </header>
  );
}
