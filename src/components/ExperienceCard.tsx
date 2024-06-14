import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  timePeriod: string;
  Designation: string;
  companyName: string;
  content: string;
  technologies: string[];
  companyLink: string;
}

const ExperienceCard = ({
  timePeriod,
  Designation,
  companyName,
  content,
  technologies,
  companyLink,
}: Props) => {
  return (
    <div className=" w-full flex flex-col gap-2 ">
      <h1 className=" text-sm text-slate-400">{timePeriod}</h1>
      <a
        target="_blank"
        href={companyLink}
        className=" w-fit inline text-base font-medium hover:text-teal-300 focus-visible:text-teal-300 group "
      >
        {Designation} · {companyName}{" "}
        <FontAwesomeIcon
          icon={faArrowRight}
          size="sm"
          className=" transition-transform group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:-rotate-45 "
        />
      </a>
      <h1 className=" text-sm text-slate-400 leading-normal">{content}</h1>
      <div className=" flex flex-wrap gap-2 mt-2">
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
    </div>
  );
};

export default ExperienceCard;
