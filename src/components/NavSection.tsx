import { SECTION_TYPES } from "../Enum/Section";
import { scrollToSection } from "../utils/navigationHandler";

interface NavSectionProps {
  activeSection: string;
}

export default function Component(
  { activeSection }: NavSectionProps = { activeSection: "" }
) {
  const navItems = [
    { type: SECTION_TYPES.ABOUT, label: "About" },
    { type: SECTION_TYPES.EXPERIENCE, label: "Experience" },
    { type: SECTION_TYPES.PROJECTS, label: "Projects" },
  ];

  return (
    <nav className="hidden flex-col gap-3 mb-16 md:flex">
      {navItems.map((item) => (
        <div
          key={item.type}
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection(item.type)}
        >
          <span
            className={`
              h-[1px] block transition-all duration-300 ease-in-out
              ${
                activeSection === item.type
                  ? "bg-white w-16"
                  : "bg-slate-500 w-8"
              }
            `}
          />
          <span
            className={`
              group-hover:text-white transition-colors duration-300
              ${
                activeSection === item.type
                  ? "text-white font-medium"
                  : "text-slate-500"
              }
            `}
          >
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}
