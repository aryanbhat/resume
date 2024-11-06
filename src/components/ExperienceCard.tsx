import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { handlePseudoAnchor } from "../utils/navigationHandler";

interface Props {
  timePeriod: string;
  Designation: string;
  companyName: string;
  content: string;
  technologies: string[];
  companyLink: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ExperienceCard = ({
  timePeriod,
  Designation,
  companyName,
  content,
  technologies,
  companyLink,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <div
      className={`w-full flex flex-col gap-2 transition-all duration-300 ease-in-out cursor-pointer ${
        isHovered ? "opacity-100 scale-105 z-10" : "opacity-100 scale-100 z-0"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        handlePseudoAnchor(companyLink, true);
      }}
    >
      <div
        className={`absolute inset-0 bg-white/5 backdrop-blur-sm rounded-lg transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative p-4 rounded-lg">
        <h1 className="text-sm text-slate-400">{timePeriod}</h1>
        <div className="w-fit inline text-base font-medium hover:text-teal-300 focus-visible:text-teal-300 group">
          {Designation} · {companyName}{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            size="sm"
            className="transition-transform group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:-rotate-45"
          />
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
      </div>
    </div>
  );
};

export default ExperienceCard;
