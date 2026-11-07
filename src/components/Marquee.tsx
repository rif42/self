export default function Marquee({ items }: { items: string[] }) {
  const row = items.join(' ✦ ');
  return (
    <div className="-mx-1 overflow-hidden py-3">
      <div className="-rotate-1 overflow-hidden border-y border-line bg-surface py-2">
        <div className="marquee-track flex w-max whitespace-nowrap font-mono text-[13px] text-muted">
          <span className="pr-8">{row}&nbsp;✦&nbsp;</span>
          <span aria-hidden="true" className="pr-8">
            {row}&nbsp;✦&nbsp;
          </span>
        </div>
      </div>
    </div>
  );
}
