import { useEffect, useRef, useState } from 'react';
import { triggerTeachEgg } from '../lib/eggs';

const COMMANDS = ['whoami', 'skills --top', 'contact', 'teach'] as const;
type Cmd = (typeof COMMANDS)[number];

const OUTPUTS: Record<string, string> = {
  'whoami':
    'Rifky Ariya Pratama — full-stack dev, AI engineer, programming instructor. 6y IT, 5y teaching. Semarang, ID.',
  'skills --top':
    'TypeScript · Python · React · React Native · Django · Cellpose · Docker …(full toolbox in § about)',
  'contact': 'rifkyariya42@gmail.com · +6285878611239 · github.com/rif42',
  'teach': '500+ sessions and counting. The chalkboard is mightier than the sword.',
};

interface Line {
  cmd: string;
  out: string;
}

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([{ cmd: 'whoami', out: OUTPUTS['whoami'] }]);
  const playedRef = useRef(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let id = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting || playedRef.current) return;
        playedRef.current = true;
        const full = OUTPUTS['whoami'];
        setLines([{ cmd: 'whoami', out: '' }]);
        let i = 0;
        id = window.setInterval(() => {
          i += 1;
          setLines([{ cmd: 'whoami', out: full.slice(0, i) }]);
          if (i >= full.length) window.clearInterval(id);
        }, 24);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      window.clearInterval(id);
    };
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const run = (cmd: Cmd) => {
    if (cmd === 'teach') triggerTeachEgg();
    playedRef.current = true;
    setLines((prev) => [...prev, { cmd, out: OUTPUTS[cmd] }]);
  };

  return (
    <div ref={boxRef} className="mt-10 overflow-hidden rounded-lg border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2.5">
        <span aria-hidden="true" className="flex gap-1.5">
          <i className="block h-3 w-3 rounded-full bg-[#ff5f57]" />
          <i className="block h-3 w-3 rounded-full bg-[#febc2e]" />
          <i className="block h-3 w-3 rounded-full bg-[#28c840]" />
        </span>
        <p className="ml-2 font-mono text-xs text-muted">rifky@semarang:~</p>
      </div>
      <div
        ref={scrollRef}
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        className="max-h-64 space-y-3 overflow-y-auto px-4 py-4 font-mono text-[13px] leading-relaxed"
      >
        {lines.map((l, i) => (
          <div key={i}>
            <p className="text-ink">
              <span aria-hidden="true" className="mr-2 text-accent">
                $
              </span>
              {l.cmd}
            </p>
            <p className="mt-1 text-muted">
              {l.out}
              {i === lines.length - 1 && playedRef.current && l.out.length < OUTPUTS[l.cmd]?.length ? (
                <span aria-hidden="true" className="type-caret ml-1 inline-block h-[1em] w-[8px] translate-y-[2px] bg-accent" />
              ) : null}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 border-t border-line px-4 py-3">
        {COMMANDS.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => run(c)}
            className="inline-flex min-h-[44px] items-center rounded border border-line px-3 font-mono text-[13px] text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
