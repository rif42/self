import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { annotateRevealed } from '../lib/annotate';
import { teachingRows } from '../data/content';

const FLAVOR: Record<string, string> = {
  'Timedoor Academy': '500+ sessions across all ages — voted Teacher of the Year (MENA).',
  'LeWagon': 'Teaching pros to automate with make, n8n and OpenAI.',
  'Agung Putra University': 'Wrote SoTA-paper-based AI curriculum from scratch.',
  'Cetta English': 'English for all ages, in a relaxed room.',
};

export default function Teaching() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) annotateRevealed(ref.current);
  }, []);

  if (!teachingRows.length) return null;
  return (
    <section id="teaching" aria-label="Teaching" ref={ref} className="scroll-mt-20 py-20">
      <SectionHeading index="04" label="teaching" />
      <Reveal>
        <p className="mb-6 leading-relaxed text-muted">
          Teaching is my differentiator — 5 years across programming and English, from kids to
          professionals. Each row is one verifiable proof point.
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2">
        {teachingRows.map((row, i) => (
          <Reveal key={row.org} delay={Math.min(i * 60, 240)}>
            <article className="flex h-full flex-col rounded border border-line bg-surface p-5">
              <p className="font-display text-lg font-bold text-ink">
                {row.org} <span className="text-sm font-medium text-muted">· {row.role}</span>
              </p>
              <p className="mt-1 font-mono text-[13px] text-muted">{row.proof}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink">
                {row.org === 'Timedoor Academy' ? (
                  <>
                    500+ sessions across all ages — voted{' '}
                    <span data-annotate="circle">Teacher of the Year</span> (MENA).
                  </>
                ) : (
                  FLAVOR[row.org] ?? ''
                )}
              </p>
              {row.href && (
                <p className="mt-auto pt-3 font-mono text-[13px]">
                  <a
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-1 text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    {row.hrefLabel ?? 'link'} <ExternalLink size={13} aria-hidden="true" />
                  </a>
                </p>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
