import ExperienceCard from "./ExperienceCard";
import Experiences from "../Json/experience.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Experience = () => {
  return (
    <div className="w-full pt-20">
      <h1 className=" text-sm text-slate-200 uppercase font-bold tracking-widest">
        Experience
      </h1>
      <div className=" flex flex-col gap-10 mt-10">
        {Experiences.map((elem, idx) => {
          return (
            <ExperienceCard
              key={idx}
              timePeriod={elem.timePeriod}
              Designation={elem.Designation}
              companyName={elem.companyName}
              content={elem.content}
              technologies={elem.technologies}
              companyLink={elem.companyLink}
            />
          );
        })}
      </div>
      <a
        className=" w-fit transition-colors group mt-10 flex align-center items-center gap-2 resume hover:text-teal-300 focus-visible:text-teal-300 "
        href="https://drive.google.com/file/d/1AcWhDO2SWrkOYMZL0PBwCqiIhKWaZpds/view?usp=sharing"
        target="_blank"
      >
        <p className=" text-base font-medium">View Full Résume</p>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="sm"
          className=" transition-transform group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:-rotate-45 "
        />
      </a>
    </div>
  );
};

export default Experience;
