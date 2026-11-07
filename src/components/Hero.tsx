import { Github, Mail, MapPin, Phone } from 'lucide-react';
import { socials } from '../data/content';

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="pb-20 pt-16 sm:pt-24">
      <p className="mb-6 inline-flex items-center gap-2 font-mono text-[13px] text-muted">
        <span aria-hidden="true" className="status-dot inline-block h-2 w-2 rounded-full bg-accent" />
        Available for Web/Mobile, ML/Data, Teaching roles
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
        Rifky Ariya Pratama
      </h1>
      <p className="mt-3 font-mono text-sm text-accent sm:text-base">
        Full Stack Developer / AI Engineer / Programming Instructor
      </p>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
        6 years in IT + 5 years teaching programming &amp; English; thrives in startups with
        obsessive curiosity, relentless determination, and deep compassion.
      </p>
      <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[13px] text-muted">
        <span className="inline-flex items-center gap-1">
          <MapPin size={13} aria-hidden="true" /> {socials.location}
        </span>
        <span aria-hidden="true">·</span>
        <a href={`tel:${socials.phone}`} className="hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">
          {socials.phone}
        </a>
        <span aria-hidden="true">·</span>
        <a href={`mailto:${socials.email}`} className="hover:text-accent focus-visible:outline-2 focus-visible:outline-accent">
          {socials.email}
        </a>
        <span aria-hidden="true">·</span>
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          github.com/rif42
        </a>
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex min-h-[44px] items-center rounded bg-accent px-5 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          View my work →
        </a>
        <a
          href="#contact"
          className="inline-flex min-h-[44px] items-center rounded border border-line px-5 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          Get in touch →
        </a>
      </div>
      <div className="mt-8 flex items-center gap-2">
        <a
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Github size={20} />
        </a>
        <a
          href={`mailto:${socials.email}`}
          aria-label="Email Rifky"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Mail size={20} />
        </a>
        <a
          href={`tel:${socials.phone}`}
          aria-label="Call Rifky"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          <Phone size={20} />
        </a>
      </div>
    </section>
  );
}
