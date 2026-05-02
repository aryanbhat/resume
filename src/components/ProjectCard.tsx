import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  content: string;
  image: string;
  link: string;
  githubLink: string;
  technologies: string[];
}

export default function ProjectCard({ title, content, image, link, githubLink, technologies }: Props) {
  return (
    <div className="group py-8 border-b border-[#e2ddd4] first:border-t">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">

        {/* Image */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-label={`Open ${title}`}
          className="shrink-0 block overflow-hidden rounded border border-[#e2ddd4] group-hover:border-[#c8c0b6] transition-colors duration-300"
        >
          <img
            src={image}
            alt={title}
            className="w-[130px] sm:w-[175px] aspect-video object-cover scale-100 group-hover:scale-[1.04] transition-transform duration-500"
          />
        </a>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-3">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[15px] font-semibold text-[#1c1916] group-hover:text-[#c47d10] transition-colors duration-200 leading-snug"
            >
              {title}
              <span className="ml-1.5 text-sm text-[#d5cec3] group-hover:text-[#c47d10] transition-colors duration-200">
                ↗
              </span>
            </a>
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onClick={(e) => e.stopPropagation()}
              className="shrink-0 text-[#d5cec3] hover:text-[#6b6560] transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>

          <p className="text-[13px] text-[#6b6560] leading-[1.8] mb-5">{content}</p>

          <div className="flex flex-wrap gap-1.5">
            {technologies.map((t, i) => (
              <span
                key={i}
                className="text-[11px] font-mono px-2 py-0.5 bg-[#f0ece4] border border-[#e2ddd4] text-[#8a8278] hover:text-[#6b6560] hover:border-[#c8c0b6] transition-colors duration-200 rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
