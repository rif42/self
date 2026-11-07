import { Github, Mail, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { socials } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="scroll-mt-20 py-20">
      <SectionHeading index="05" label="contact" />
      <h2 className="text-2xl font-bold text-ink sm:text-3xl">Get in touch</h2>
      <p className="mt-4 max-w-xl leading-relaxed text-muted">
        Currently open to roles in Web/Mobile development, Machine Learning/Data, and
        Teaching/Mentoring. My inbox is always open — I&apos;ll get back to you as soon as I
        can.
      </p>
      <div className="mt-8">
        <a
          href={`mailto:${socials.email}`}
          className="inline-flex min-h-[44px] items-center gap-2 rounded bg-accent px-6 py-3 font-mono text-sm font-medium text-bg transition-opacity hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Mail size={16} aria-hidden="true" /> {socials.email}
        </a>
      </div>
      <ul className="mt-8 space-y-1 font-mono text-sm text-muted">
        <li>
          <a
            href={`tel:${socials.phone}`}
            className="inline-flex min-h-[44px] items-center gap-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Phone size={15} aria-hidden="true" /> {socials.phone}
          </a>
        </li>
        <li>
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <Github size={15} aria-hidden="true" /> github.com/rif42
          </a>
        </li>
      </ul>
    </section>
  );
}
