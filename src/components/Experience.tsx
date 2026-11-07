import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { experience } from '../data/content';

export default function Experience() {
  if (!experience.length) return null;
  return (
    <section id="experience" aria-label="Experience" className="scroll-mt-20 py-20">
      <SectionHeading index="02" label="experience" />
      <ol className="space-y-10">
        {experience.map((job) => (
          <li key={`${job.company}-${job.dates}`} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-6">
            <p className="font-mono text-[13px] text-muted">{job.dates}</p>
            <div>
              <h3 className="font-medium text-ink">
                {job.role} · <span className="text-accent">{job.company}</span>
              </h3>
              <p className="mt-1 font-mono text-[13px] text-muted">{job.location}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
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
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
