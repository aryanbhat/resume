interface Props {
  timePeriod: string;
  Designation: string;
  companyName: string;
  location: string;
  bullets: string[];
  technologies: string[];
  companyLink: string;
}

export default function ExperienceCard({
  timePeriod,
  Designation,
  companyName,
  location,
  bullets,
  technologies,
  companyLink,
}: Props) {
  return (
    <div className="group py-8 border-b border-[#e2ddd4] first:border-t">
      <div className="flex flex-col md:grid md:grid-cols-[150px_1fr] md:gap-10">

        {/* Date */}
        <div className="mb-4 md:mb-0 md:pt-0.5 shrink-0">
          <p className="text-[11px] font-mono text-[#a09890] leading-relaxed">{timePeriod}</p>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[15px] font-semibold text-[#1c1916] group-hover:text-[#c47d10] transition-colors duration-200 leading-snug">
                {Designation}
              </h3>
              <p className="text-xs font-mono text-[#a09890] mt-1">
                {companyName} · {location}
              </p>
            </div>
            <a
              href={companyLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#d5cec3] hover:text-[#c47d10] transition-colors duration-200 shrink-0 mt-0.5 text-sm"
              aria-label={`Visit ${companyName}`}
            >
              ↗
            </a>
          </div>

          {/* Bullets — metrics live here, in context */}
          <ul className="mt-4 space-y-2.5">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-[13px] text-[#6b6560] leading-relaxed">
                <span className="text-[#c47d10]/50 shrink-0 mt-0.5 select-none">·</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Tech tags */}
          <div className="mt-5 flex flex-wrap gap-1.5">
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
