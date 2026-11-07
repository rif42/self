import { useEffect, useState } from 'react';
import { Github, Mail, MapPin, Phone } from 'lucide-react';
import { socials } from '../data/content';
import Terminal from './Terminal';
import Marquee from './Marquee';

const ROLES = ['Full Stack Developer', 'AI Engineer', 'Programming Instructor'];

function useTypewriter() {
  const [text, setText] = useState(ROLES[0]);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      return;
    }
    let role = 0;
    let char = ROLES[0].length;
    let deleting = true;
    let id = 0;
    const step = () => {
      const current = ROLES[role];
      if (deleting) {
        char -= 1;
        setText(current.slice(0, char));
        if (char === 0) {
          deleting = false;
          role = (role + 1) % ROLES.length;
          id = window.setTimeout(step, 350);
          return;
        }
        id = window.setTimeout(step, 35);
      } else {
        char += 1;
        const next = ROLES[role];
        setText(next.slice(0, char));
        if (char === next.length) {
          deleting = true;
          id = window.setTimeout(step, 1600);
          return;
        }
        id = window.setTimeout(step, 70);
      }
    };
    id = window.setTimeout(step, 1600);
    return () => window.clearTimeout(id);
  }, []);

  return { text, reduced };
}

export default function Hero() {
  const { text } = useTypewriter();

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-x-clip pb-20 pt-16 sm:pt-24">
      <div aria-hidden="true" className="hero-glow pointer-events-none absolute -top-10 left-1/2 -z-10 h-64 w-[min(36rem,100vw)] max-w-none -translate-x-1/2 rounded-full opacity-60 blur-3xl" style={{ background: 'radial-gradient(closest-side, var(--accent-soft), transparent)' }} />
      <p className="mb-6 inline-flex items-center gap-2 font-mono text-[13px] text-muted">
        <span aria-hidden="true" className="status-dot inline-block h-2 w-2 rounded-full bg-accent" />
        ● now: teaching AI automation @ LeWagon, Bali
      </p>
      <h1 className="overflow-hidden font-display text-[clamp(2.75rem,8vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-ink">
        <span className="block">Rifky Ariya</span>
        <span className="block text-accent">Pratama</span>
      </h1>
      <p className="mt-3 min-h-[1.75rem] font-mono text-sm text-accent sm:text-base" aria-live="polite">
        {text}
        <span aria-hidden="true" className="type-caret ml-1 inline-block h-[1em] w-[9px] translate-y-[3px] bg-accent" />
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
      <Terminal />
      <div className="mt-10">
        <Marquee
          items={[
            '500+ sessions taught',
            'teacher of the year',
            'full-stack',
            'ai engineer',
            'shipped to production',
            'startup-proof',
          ]}
        />
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
