import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience } from '../data/content';

function chip(company: string): string {
  if (company.includes('LeWagon')) return 'LW';
  if (company.includes('Agung Putra')) return 'APU';
  if (company.includes('Handyman')) return 'HK';
  if (company.includes('Cetta')) return 'CE';
  if (company.includes('Timedoor')) return 'TA';
  if (company.includes('Metapals') || company.includes('Kindred')) return 'MK';
  return 'LF';
}

export default function Experience() {
  if (!experience.length) return null;
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-20 py-20">
      <SectionHeading index="02" label="experience" />
      <ol className="grid gap-4">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.dates}`}>
            <Reveal delay={Math.min(i * 60, 300)}>
              <article className="rounded border border-line bg-surface p-5">
                <div className="flex items-center justify-between gap-3">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-9 min-w-[2.5rem] items-center justify-center rounded bg-accent px-2 font-display text-sm font-bold text-bg"
                  >
                    {chip(job.company)}
                  </span>
                  <p className="font-mono text-[13px] text-muted">{job.dates}</p>
                </div>
                <h3 className="mt-3 font-medium text-ink">
                  {job.role} · <span className="text-accent">{job.company}</span>
                </h3>
                <p className="mt-1 font-mono text-[13px] text-muted">{job.location}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                {job.shipped && (
                  <p className="mt-3 font-mono text-[13px] text-accent">
                    <span className="text-muted">shipped:</span> {job.shipped}
                  </p>
                )}
                {job.links && job.links.length > 0 && (
                  <p className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[13px]">
                    {job.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[44px] items-center gap-1 text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
                      >
                        {l.label} <ExternalLink size={13} aria-hidden="true" />
                      </a>
                    ))}
                  </p>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
