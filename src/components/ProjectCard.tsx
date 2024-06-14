import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  content: string;
  image: string;
  link: string;
  githubLink: string;
  technologies: string[];
}

const ProjectCard = ({
  title,
  content,
  image,
  link,
  githubLink,
  technologies,
}: Props) => {
  return (
    <div className="flex flex-col gap-3 group ">
      <div className="flex gap-8">
        <a
          target="_blank"
          href={link}
          className=" w-fit flex items-center gap-2 text-base font-medium hover:text-teal-300 focus-visible:text-teal-300 group/link "
        >
          <h1>{title}</h1>
          <FontAwesomeIcon
            icon={faArrowRight}
            size="sm"
            className=" transition-transform group-hover/link:translate-x-3 group-hover/link:-translate-y-2 group-hover/link:-rotate-45 "
          />
        </a>
        <a
          target="_blank"
          href={githubLink}
          className=" transition-all hover:text-teal-300 hover:rotate-45 "
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <h1 className=" text-sm text-slate-400 leading-normal">{content}</h1>
      <div className=" flex flex-wrap gap-2 ">
        {technologies.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="text-xs bg-teal-400/10 text-teal-300 px-3 py-1 rounded-xl "
            >
              {elem}
            </div>
          );
        })}
      </div>
      <img
        src={image}
        className=" mt-2 transition-all w-48 object-cover rounded-md border-slate-600 border-2 group-hover:border-slate-400 "
      />
    </div>
  );
};

export default ProjectCard;
