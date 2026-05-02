import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LINKS = [
  { href: "https://github.com/aryanbhat",                                                          icon: faGithub,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/aryan-bhat/",                                               icon: faLinkedin, label: "LinkedIn" },
  { href: "https://x.com/AryanBh97594879",                                                         icon: faXTwitter, label: "X"        },
  { href: "mailto:aryanbhat324@gmail.com",                                                          icon: faEnvelope, label: "Email"    },
  { href: "https://drive.google.com/file/d/1iRCpuaXjQKTgXVkiUWCHjnByW5izl5nG/view?usp=sharing",  icon: faFile,     label: "Résumé"   },
];

export default function Links() {
  return (
    <div className="flex items-center gap-6">
      {LINKS.map(({ href, icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[#c8c0b6] hover:text-[#1c1916] transition-colors duration-200"
        >
          <FontAwesomeIcon icon={icon} className="text-base" />
        </a>
      ))}
    </div>
  );
}
