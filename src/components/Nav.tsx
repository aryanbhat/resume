import Links from "./Links";
import NavSection from "./NavSection";

const Nav = ({ activeSection }: { activeSection: string }) => {
  return (
    <aside className="w-full md:w-[340px] lg:w-[380px] md:fixed md:top-0 md:h-screen md:flex md:flex-col md:justify-between md:py-20 shrink-0">

      {/* Identity block */}
      <div>
        <a href="/" className="block group">
          <h1 className="text-[2.75rem] lg:text-5xl font-bold tracking-tight text-[#e8e4dc] leading-[1.05] group-hover:text-[#e8a84c] transition-colors duration-300">
            Aryan<br />Bhat
          </h1>
        </a>

        <div className="mt-4 flex items-center gap-2">
          {/* Amber status dot */}
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#e8a84c] animate-pulse" />
          <p className="text-xs font-mono text-[#5a5854] uppercase tracking-widest">
            Full Stack Engineer
          </p>
        </div>

        <p className="mt-4 text-sm text-[#5a5854] leading-relaxed max-w-[280px]">
          2+ years building government platforms at scale.
          End-to-end: DB schema to production.
        </p>

        {/* Key stat — tasteful, single line */}
        <div className="mt-5 border-l-2 border-[#e8a84c]/30 pl-3">
          <p className="text-xs font-mono text-[#e8a84c]/70">
            3.5M+ monthly users · NPI
          </p>
        </div>
      </div>

      {/* Nav links */}
      <NavSection activeSection={activeSection} />

      {/* Social links */}
      <Links />
    </aside>
  );
};

export default Nav;
