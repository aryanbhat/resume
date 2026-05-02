interface Props {
  title: string;
  url: string;
  image: string;
  description: string;
  role: string;
  technologies: string[];
  highlights: { label: string; value: string }[];
}

export default function PlatformCard({
  title,
  url,
  image,
  description,
  role,
  technologies,
  highlights,
}: Props) {
  const href = `https://${url}`;

  return (
    <div className="group py-10 border-b border-[#e2ddd4] first:border-t">
      {/* Browser chrome mockup */}
      <div className="rounded-md overflow-hidden border border-[#e2ddd4] group-hover:border-[#c8c0b6] transition-colors duration-300 shadow-sm">
        {/* Chrome bar */}
        <div className="bg-[#f0ece4] border-b border-[#e2ddd4] px-4 py-2.5 flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e2ddd4]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e2ddd4]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#e2ddd4]" />
          </div>
          {/* URL bar */}
          <div className="flex-1 flex items-center gap-2 bg-[#faf7f2] border border-[#e2ddd4] rounded px-3 py-1">
            <span className="text-[#c8c0b6] text-[10px]">🔒</span>
            <span className="text-[11px] font-mono text-[#8a8278]">{url}</span>
          </div>
          {/* Visit link */}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-[11px] font-mono text-[#a09890] hover:text-[#c47d10] transition-colors duration-200 shrink-0"
          >
            Visit ↗
          </a>
        </div>

        {/* Screenshot */}
        <a href={href} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={title}
            className="w-full aspect-video object-cover object-top scale-100 group-hover:scale-[1.01] transition-transform duration-700"
          />
        </a>
      </div>

      {/* Info row below screenshot */}
      <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
        <div className="flex-1 min-w-0">
          {/* Title + role */}
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-[15px] font-semibold text-[#1c1916] group-hover:text-[#c47d10] transition-colors duration-200">
              {title}
            </h3>
            <span className="text-[11px] font-mono text-[#a09890]">{role}</span>
          </div>

          <p className="text-[13px] text-[#6b6560] mt-2 leading-relaxed max-w-xl">
            {description}
          </p>

          {/* Tech tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {technologies.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono px-2 py-0.5 bg-[#f0ece4] border border-[#e2ddd4] text-[#8a8278] rounded-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights — the numbers, understated */}
        <div className="flex gap-5 sm:gap-6 sm:shrink-0 sm:flex-col sm:items-end">
          {highlights.map(({ label, value }) => (
            <div key={label} className="sm:text-right">
              <p className="text-base font-bold text-[#1c1916] tabular-nums leading-none">{value}</p>
              <p className="text-[11px] font-mono text-[#a09890] mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
