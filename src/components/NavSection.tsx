import { SECTION_TYPES } from "../Enum/Section";
import { scrollToSection } from "../utils/navigationHandler";

interface NavSectionProps {
  activeSection: string;
}

export default function NavSection(
  { activeSection }: NavSectionProps = { activeSection: "" }
) {
  const navItems = [
    { type: SECTION_TYPES.ABOUT,      label: "About"      },
    { type: SECTION_TYPES.EXPERIENCE, label: "Experience" },
    { type: SECTION_TYPES.SKILLS,     label: "Skills"     },
    { type: SECTION_TYPES.PROJECTS,   label: "Projects"   },
  ];

  return (
    <nav className="hidden md:flex flex-col gap-0.5">
      {navItems.map((item) => {
        const active = activeSection === item.type;
        return (
          <button
            key={item.type}
            onClick={() => scrollToSection(item.type)}
            className="flex items-center gap-3 py-1.5 group text-left bg-transparent border-none outline-none w-fit"
          >
            {/* Indicator line */}
            <span
              className={`block h-px transition-all duration-300 ${
                active
                  ? "w-8 bg-[#e8a84c]"
                  : "w-4 bg-[#2a2a2a] group-hover:w-6 group-hover:bg-[#3a3835]"
              }`}
            />
            <span
              className={`text-[11px] font-mono uppercase tracking-widest transition-colors duration-300 ${
                active
                  ? "text-[#e8a84c]"
                  : "text-[#3a3835] group-hover:text-[#5a5854]"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
