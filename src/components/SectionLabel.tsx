interface Props {
  number: string;
  label: string;
}

export default function SectionLabel({ number, label }: Props) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="text-[11px] font-mono text-[#c47d10] tabular-nums shrink-0">{number}</span>
      <div className="h-px flex-1 bg-[#e2ddd4]" />
      <span className="text-[11px] font-mono text-[#c8c0b6] uppercase tracking-[0.18em] shrink-0">{label}</span>
    </div>
  );
}
