import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { teachingRows } from '../data/content';

export default function Teaching() {
  if (!teachingRows.length) return null;
  return (
    <section id="teaching" aria-label="Teaching" className="scroll-mt-20 py-20">
      <SectionHeading index="04" label="teaching" />
      <p className="mb-6 leading-relaxed text-muted">
        Teaching is my differentiator — 5 years across programming and English, from kids to
        professionals. Each row is one verifiable proof point.
      </p>
      <ul className="divide-y divide-line rounded border border-line bg-surface">
        {teachingRows.map((row) => (
          <li key={row.org} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <p className="font-medium text-ink">
                {row.org} <span className="text-muted">· {row.role}</span>
              </p>
              <p className="mt-1 font-mono text-[13px] text-muted">{row.proof}</p>
            </div>
            {row.href && (
              <a
                href={row.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] shrink-0 items-center gap-1 font-mono text-[13px] text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {row.hrefLabel ?? 'link'} <ExternalLink size={13} aria-hidden="true" />
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
