import { useEffect, useRef } from 'react';
import { Brain, Code2, Database, HeartHandshake, LayoutTemplate, Wrench } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { annotateRevealed } from '../lib/annotate';
import { skillGroups } from '../data/content';

const ICONS = [Code2, LayoutTemplate, Database, Brain, Wrench, HeartHandshake];

export default function About() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) annotateRevealed(ref.current);
  }, []);

  if (!skillGroups.length) return null;
  return (
    <section id="about" aria-label="About" ref={ref} className="scroll-mt-20 py-20">
      <SectionHeading index="01" label="about" />
      <div className="space-y-4 leading-relaxed text-muted">
        <Reveal>
          <p>
            I&apos;m Rifky Ariya Pratama, a full stack developer and{' '}
            <span data-annotate="underline">AI engineer</span> based in Semarang,
            Indonesia. Over 6 years in IT — from legacy React Native upgrades to LLM-powered
            platforms — I&apos;ve learned to thrive in challenging startup environments where
            ownership matters more than titles.
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p>
            Alongside engineering, I&apos;ve spent 5 years teaching programming and English to kids
            and adults — <span data-annotate="highlight">500+ sessions</span> at Timedoor Academy,
            AI automation at LeWagon, university lecturing at APU, and English at Cetta. Teaching
            forces clarity; it made me a better engineer. I&apos;m fluent in English (TOEFL 647,{' '}
            <a
              href="https://app.smalltalk2.me/reports/css6vir9jpcudura2e30"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
            >
              C1+ speaking
            </a>
            ).
          </p>
        </Reveal>
      </div>

      <h3 className="mb-4 mt-10 font-mono text-sm text-ink">skills</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const Icon = ICONS[gi % ICONS.length];
          return (
            <Reveal key={group.label} delay={Math.min(gi * 60, 300)}>
              <div className="h-full rounded border border-line bg-surface p-4">
                <p className="mb-3 flex items-center gap-2 font-mono text-[13px] font-medium text-ink">
                  <Icon size={15} aria-hidden="true" className="text-accent" />
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="sticker bg-bg px-2.5 py-1 font-mono text-[13px] text-ink"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <h3 className="mb-4 mt-10 font-mono text-sm text-ink">education</h3>
      <div className="rounded border border-line bg-surface p-4">
        <p className="font-medium text-ink">Dian Nuswantoro University</p>
        <p className="mt-1 font-mono text-[13px] text-muted">
          Bachelor of Information Technology · GPA 3.67/4.00
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Research: “Assessing Lecturer Competency in Hybrid Learning Environments Using Decision
          Support System Approach Based on Student Feedback Questionnaire” (2023–2024)
        </p>
      </div>

      <p className="mt-6 font-mono text-[13px] text-muted">certifications: TOEFL 647 · TOEIC 970</p>
    </section>
  );
}
