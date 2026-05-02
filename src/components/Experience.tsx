import SectionLabel from "./SectionLabel";
import ExperienceCard from "./ExperienceCard";
import Experiences from "../Json/experience.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  return (
    <div className="py-20 border-t border-[#e2ddd4]">
      <SectionLabel number="02" label="Experience" />

      <div>
        {Experiences.map((exp, idx) => (
          <ExperienceCard
            key={idx}
            timePeriod={exp.timePeriod}
            Designation={exp.Designation}
            companyName={exp.companyName}
            location={exp.location}
            bullets={exp.bullets}
            technologies={exp.technologies}
            companyLink={exp.companyLink}
          />
        ))}
      </div>

      <a
        href="https://drive.google.com/file/d/1iRCpuaXjQKTgXVkiUWCHjnByW5izl5nG/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#a09890] hover:text-[#c47d10] transition-colors duration-200"
      >
        <span>View full résumé</span>
        <FontAwesomeIcon icon={faArrowRight} className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
