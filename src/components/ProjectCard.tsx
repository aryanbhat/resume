import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handlePseudoAnchor } from "../utils/navigationHandler";

interface Props {
  title: string;
  content: string;
  image: string;
  link: string;
  githubLink: string;
  technologies: string[];
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectCard = ({
  title,
  content,
  image,
  link,
  githubLink,
  technologies,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <div
      className={`flex flex-col gap-3 group transition-all duration-300 ease-in-out ${
        isHovered ? "scale-105 z-10" : "scale-100 z-0"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative p-4 rounded-lg">
        <div className="flex gap-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="w-fit flex items-center gap-2 text-base font-medium hover:text-teal-300 focus-visible:text-teal-300 group/link"
          >
            <h1>{title}</h1>
            <FontAwesomeIcon
              icon={faArrowRight}
              size="sm"
              className="transition-transform group-hover/link:translate-x-3 group-hover/link:-translate-y-2 group-hover/link:-rotate-45"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={githubLink}
            className="transition-all hover:text-teal-300 hover:rotate-45"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <h1 className="text-sm text-slate-400 leading-normal mt-2">
          {content}
        </h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((elem, idx) => (
            <div
              key={idx}
              className="text-xs bg-teal-400/10 text-teal-300 px-3 py-1 rounded-xl"
            >
              {elem}
            </div>
          ))}
        </div>
        <img
          src={image}
          alt={title}
          onClick={() => {
            handlePseudoAnchor(link, true);
          }}
          className="cursor-pointer mt-4 transition-all w-48 md:w-72 object-cover rounded-md border-slate-600 border-2 group-hover:border-slate-400"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
