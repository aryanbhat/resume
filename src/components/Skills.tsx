import SectionLabel from "./SectionLabel";

const GROUPS = [
  { cat: "Languages",        skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL"] },
  { cat: "Frontend",         skills: ["React", "Next.js", "Angular", "Redux Toolkit", "Tailwind CSS", "shadcn/ui", "Material UI"] },
  { cat: "Backend",          skills: ["Node.js", "Express.js", "FastAPI", "GraphQL", "WebSockets", "REST"] },
  { cat: "Databases",        skills: ["PostgreSQL", "MongoDB", "Firebase", "Firestore", "Elasticsearch", "Prisma"] },
  { cat: "Data & Streaming", skills: ["Apache Kafka", "Kafka Connect", "Apache Iceberg", "Trino", "Apache Superset"] },
  { cat: "DevOps & Tools",   skills: ["Docker", "Podman", "Kubernetes", "Git", "GCP", "Vercel", "Jira"] },
];

export default function Skills() {
  return (
    <div className="py-20 border-t border-[#e2ddd4]">
      <SectionLabel number="04" label="Skills" />

      <div>
        {GROUPS.map(({ cat, skills }) => (
          <div
            key={cat}
            className="flex flex-col md:grid md:grid-cols-[150px_1fr] md:gap-10 py-5 border-b border-[#e2ddd4] first:border-t group"
          >
            <p className="text-[10px] font-mono text-[#c8c0b6] uppercase tracking-widest mb-3 md:mb-0 md:pt-0.5 group-hover:text-[#a09890] transition-colors duration-200">
              {cat}
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-[13px] font-mono text-[#8a8278] hover:text-[#1c1916] transition-colors duration-200 cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
