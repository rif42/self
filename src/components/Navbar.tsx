import { useEffect, useState } from 'react';
import { Moon, Sun, FileText } from 'lucide-react';

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'projects', label: 'projects' },
  { id: 'teaching', label: 'teaching' },
  { id: 'contact', label: 'contact' },
];

const THEME_KEY = 'rifky-portfolio-theme';

function getInitialTheme(): 'dark' | 'light' {
  if (typeof window === 'undefined') return 'dark';
  const stored = window.localStorage.getItem(THEME_KEY);
  return stored === 'light' ? 'light' : 'dark';
}

export default function Navbar() {
  const [active, setActive] = useState<string>('');
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem(THEME_KEY, theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0f0d' : '#fafaf9');
  }, [theme]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-prose items-center justify-between gap-4 px-6">
        <a
          href="#top"
          className="font-mono text-sm font-semibold text-ink hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
        >
          ~/rifky
        </a>
        <nav aria-label="Sections" className="min-w-0 flex-1 overflow-x-auto">
          <ul className="flex items-center gap-5 font-mono text-[13px]">
            {LINKS.map((l) => (
              <li key={l.id} className="shrink-0">
                <a
                  href={`#${l.id}`}
                  aria-current={active === l.id ? 'true' : undefined}
                  className={`min-h-[44px] inline-flex items-center transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent ${
                    active === l.id ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="/RifkyAriya-Resume-new.md"
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded border border-accent px-3 font-mono text-[13px] text-accent transition-colors hover:bg-accent hover:text-bg focus-visible:outline-2 focus-visible:outline-accent"
          >
            <FileText size={14} />
            resume
          </a>
        </div>
      </div>
    </header>
  );
}
