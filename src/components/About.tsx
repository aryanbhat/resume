import SectionLabel from "./SectionLabel";

const Hl = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#1c1916] font-semibold">{children}</span>
);

export default function About() {
  return (
    <div className="py-20 border-t border-[#e2ddd4]">
      <SectionLabel number="01" label="About" />

      <div className="grid md:grid-cols-[1fr_230px] gap-12 lg:gap-20">
        {/* Bio */}
        <div className="space-y-5 text-[15px] text-[#6b6560] leading-[1.85]">
          <p>
            Hey — I'm Aryan. Full-stack engineer with <Hl>2+ years</Hl> building
            government platforms that real people depend on. Currently at{" "}
            <a
              href="https://www.linkedin.com/company/keenable/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1c1916] font-semibold underline underline-offset-2 decoration-[#e2ddd4] hover:text-[#c47d10] hover:decoration-[#c47d10] transition-colors duration-200"
            >
              Keen &amp; Able Technologies
            </a>
            , where I own the <Hl>National Portal of India</Hl> end-to-end —
            frontend architecture, backend API design, and a real-time data
            pipeline that surfaces insights across 20+ integrated APIs.
          </p>
          <p>
            I'm strongest across <Hl>React</Hl>, <Hl>Next.js</Hl>, and{" "}
            <Hl>Angular</Hl> on the frontend, and <Hl>Node.js</Hl> and{" "}
            <Hl>FastAPI</Hl> on the backend. I've designed production-grade
            streaming pipelines with <Hl>Kafka → Iceberg → Trino</Hl> and led
            a POC migrating legacy PostgreSQL to an open lakehouse, significantly
            reducing operational memory footprint.
          </p>
          <p>
            Outside work I play football{" "}
            <span className="football-hover text-[#1c1916] font-semibold cursor-pointer">
              (two national-level tournaments)
            </span>
            , strum guitar, and solve Rubik's cubes in under 30 seconds. I grew
            up across India — Jammu, Mumbai, Chhattisgarh, Gujarat — which gives
            me a pretty wide frame of reference.
          </p>
        </div>

        {/* Education */}
        <div>
          <p className="text-[10px] font-mono text-[#c8c0b6] uppercase tracking-widest mb-5">
            Education
          </p>
          <div className="space-y-6 border-l-2 border-[#e2ddd4] pl-5">
            <div>
              <p className="text-sm font-semibold text-[#1c1916] leading-snug">
                B.Tech Computer Science
              </p>
              <p className="text-xs text-[#6b6560] mt-1.5 leading-relaxed">
                Govt. College of Engineering &amp; Technology
              </p>
              <p className="text-xs text-[#6b6560]">CGPA 8.8 / 10</p>
              <p className="text-[11px] font-mono text-[#a09890] mt-2">2020 — 2024</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#1c1916] leading-snug">
                Higher Secondary
              </p>
              <p className="text-xs text-[#6b6560] mt-1.5 leading-relaxed">
                Army Public School Damana, Jammu
              </p>
              <p className="text-xs text-[#6b6560]">CGPA 9.5 / 10</p>
              <p className="text-[11px] font-mono text-[#a09890] mt-2">2018 — 2020</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
