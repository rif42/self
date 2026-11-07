import { Copy } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { celebrate } from '../lib/confetti';
import { toast } from '../lib/toast';
import { socials } from '../data/content';

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(socials.email);
    toast('Copied — talk soon.');
    void celebrate(false);
  } catch {
    toast(socials.email);
  }
};

export default function Playground() {
  return (
    <section aria-label="Playground" className="scroll-mt-20 py-20">
      <SectionHeading index="06" label="playground" />
      <Reveal>
        <p className="mb-6 leading-relaxed text-muted">
          Three documented secrets. Finding them is the game — spoilers below, by design.
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-3">
        <Reveal delay={60}>
          <div className="flex h-full flex-col rounded border border-line bg-surface p-5">
            <p className="font-mono text-[13px] text-accent">01 · clipboard</p>
            <button
              type="button"
              onClick={copyEmail}
              className="mt-3 inline-flex min-h-[44px] items-center justify-center gap-2 rounded border border-line px-4 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
            >
              <Copy size={15} aria-hidden="true" /> copy the email
            </button>
            <p className="mt-3 font-mono text-xs text-muted">one click, zero typing</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex h-full flex-col rounded border border-line bg-surface p-5">
            <p className="font-mono text-[13px] text-accent">02 · keyboard</p>
            <p className="mt-3 font-display text-lg font-bold text-ink">
              type <code className="rounded bg-bg px-1.5 py-0.5 font-mono text-base text-accent">teach</code> anywhere
            </p>
            <p className="mt-3 font-mono text-xs text-muted">(desktop keyboards)</p>
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="flex h-full flex-col rounded border border-line bg-surface p-5">
            <p className="font-mono text-[13px] text-accent">03 · persistence</p>
            <p className="mt-3 font-display text-lg font-bold text-ink">
              tap the footer badge 6×
            </p>
            <p className="mt-3 font-mono text-xs text-muted">it likes the attention</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
