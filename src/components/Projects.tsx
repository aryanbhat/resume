import ProjectCard from "./ProjectCard";
import projects from "../Json/project.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Projects = () => {
  return (
    <div className=" pt-20 w-full ">
      <h1 className=" text-sm text-slate-200 uppercase font-bold tracking-widest">
        Projects
      </h1>
      <div className=" pt-10 flex flex-col gap-14">
        {projects.map((elem, idx) => {
          return (
            <ProjectCard
              key={idx}
              title={elem.title}
              content={elem.content}
              image={elem.image}
              link={elem.link}
              githubLink={elem.githubLink}
              technologies={elem.technologies}
            />
          );
        })}
      </div>
      <a
        className=" w-fit transition-colors group mt-10 flex align-center items-center gap-2 resume hover:text-teal-300 focus-visible:text-teal-300 "
        href="https://github.com/aryanbhat?tab=repositories"
        target="_blank"
      >
        <p className=" text-base font-medium">View Full Projects Archive</p>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="sm"
          className=" transition-transform group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:-rotate-45 "
        />
      </a>
    </div>
  );
};

export default Projects;
