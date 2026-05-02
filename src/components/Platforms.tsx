import SectionLabel from "./SectionLabel";
import PlatformCard from "./PlatformCard";

const PLATFORMS = [
  {
    title: "National Portal of India",
    url: "india.gov.in",
    image: "/npi.png",
    description:
      "India's official national web portal — a single gateway to government services, schemes, and information for citizens across the country. I own both the frontend architecture and backend API design, alongside a real-time data pipeline integrating 20+ government APIs.",
    role: "Full Stack · End-to-end ownership",
    technologies: ["Next.js", "React", "Apache Kafka", "PostgreSQL", "Apache Iceberg", "Trino"],
    highlights: [
      { value: "3.5M+", label: "monthly visitors" },
      { value: "7M+",   label: "pageviews / month" },
    ],
  },
  {
    title: "UPSC Online",
    url: "upsconline.nic.in",
    image: "/upsc.png",
    description:
      "Online portal for the Union Public Service Commission handling Civil Services applications, status tracking, admit card workflows, and exam notices — serving hundreds of thousands of applicants each cycle under strict high-availability requirements.",
    role: "Full Stack · Angular + FastAPI",
    technologies: ["Angular", "FastAPI", "MongoDB", "Redis", "Docker", "Kubernetes"],
    highlights: [
      { value: "900K+", label: "applicants / cycle" },
    ],
  },
];

export default function Platforms() {
  return (
    <div className="py-20 border-t border-[#e2ddd4]">
      <SectionLabel number="03" label="Platforms" />
      <p className="text-[13px] text-[#a09890] font-mono -mt-4 mb-8">
        Production systems built at Keen &amp; Able Technologies
      </p>

      <div>
        {PLATFORMS.map((p, i) => (
          <PlatformCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}
