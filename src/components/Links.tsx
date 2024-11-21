import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Links() {
  return (
    <div className="w-full flex gap-6 mt-6">
      <a href="https://github.com/aryanbhat" target="_blank">
        <FontAwesomeIcon
          icon={faGithub}
          className=" text-slate-400 hover:text-slate-100 hover:scale-110 cursor-pointer transition-all delay-100 ease-in-out "
          size="xl"
        />
      </a>
      <a href="https://www.linkedin.com/in/aryan-bhat/" target="_blank">
        <FontAwesomeIcon
          icon={faLinkedin}
          className=" text-slate-400 hover:text-slate-100 hover:scale-110 cursor-pointer transition-all delay-100 ease-in-out "
          size="xl"
        />
      </a>
      <a href="https://x.com/AryanBh97594879" target="_blank">
        <FontAwesomeIcon
          icon={faXTwitter}
          className=" text-slate-400 hover:text-slate-100 hover:scale-110  cursor-pointer transition-all delay-100 ease-in-out "
          size="xl"
        />
      </a>
      <a
        href="https://drive.google.com/file/d/1tfCf2TDygEE7liwmDxUp_RC8PRdKd6EC/view"
        target="_blank"
        className=" resume"
      >
        <FontAwesomeIcon
          icon={faFile}
          className=" text-slate-400 hover:text-slate-100 hover:scale-110  cursor-pointer transition-all delay-100 ease-in-out "
          size="xl"
        />
      </a>
    </div>
  );
}
