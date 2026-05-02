import SectionLabel from "./SectionLabel";
import ProjectCard from "./ProjectCard";
import projects from "../Json/project.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {
  return (
    <div className="py-20 border-t border-[#e2ddd4]">
      <SectionLabel number="05" label="Projects" />

      <div>
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            content={p.content}
            image={p.image}
            link={p.link}
            githubLink={p.githubLink}
            technologies={p.technologies}
          />
        ))}
      </div>

      <a
        href="https://github.com/aryanbhat"
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-8 inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest text-[#a09890] hover:text-[#c47d10] transition-colors duration-200"
      >
        <span>More on GitHub</span>
        <FontAwesomeIcon icon={faArrowRight} className="text-[10px] transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
