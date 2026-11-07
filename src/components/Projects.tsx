import { ExternalLink, Github, Youtube } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { featuredProjects, otherProjects, type ProjectItem } from '../data/content';

function Card({ p }: { p: ProjectItem }) {
  return (
    <article className="rounded border border-line bg-surface p-5 transition-colors hover:border-accent">
      <h3 className="font-medium text-ink">{p.title}</h3>
      <p className="mt-1 font-mono text-[13px] text-muted">{p.context}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">{p.note}</p>
      <ul aria-label="Technologies" className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <li
            key={t}
            className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>
      <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[13px]">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Github size={14} aria-hidden="true" /> GitHub
          </a>
        )}
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <ExternalLink size={14} aria-hidden="true" /> {p.liveLabel ?? 'Live'}
          </a>
        )}
        {p.tutorial && (
          <a
            href={p.tutorial}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-1.5 text-accent underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Youtube size={14} aria-hidden="true" /> Tutorial
          </a>
        )}
      </p>
    </article>
  );
}

export default function Projects() {
  if (!featuredProjects.length && !otherProjects.length) return null;
  return (
    <section id="projects" aria-label="Projects" className="scroll-mt-20 py-20">
      <SectionHeading index="03" label="projects" />
      {featuredProjects.length > 0 && (
        <>
          <h3 className="mb-4 font-mono text-sm text-ink">featured</h3>
          <div className="grid gap-4">
            {featuredProjects.map((p) => (
              <Card key={p.title} p={p} />
            ))}
          </div>
        </>
      )}
      {otherProjects.length > 0 && (
        <>
          <h3 className="mb-4 mt-10 font-mono text-sm text-ink">other noteworthy</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {otherProjects.map((p) => (
              <Card key={p.title} p={p} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
