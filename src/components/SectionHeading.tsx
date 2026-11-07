interface Props {
  index: string;
  label: string;
}

export default function SectionHeading({ index, label }: Props) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className="font-mono text-sm text-accent">
        {index}. {label}
      </span>
      <span aria-hidden="true" className="h-px flex-1 bg-line" />
    </div>
  );
}
