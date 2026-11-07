import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Teaching from './components/Teaching';
import Playground from './components/Playground';
import Contact from './components/Contact';
import Toaster from './components/Toaster';
import ScrollProgress from './components/ScrollProgress';
import Spotlight from './components/Spotlight';
import { initEggs } from './lib/eggs';
import { celebrate } from './lib/confetti';
import { toast } from './lib/toast';

function Footer() {
  const taps = useRef<number[]>([]);

  const onBadgeTap = () => {
    const now = Date.now();
    taps.current = [...taps.current, now].filter((t) => now - t < 3000);
    if (taps.current.length >= 6) {
      taps.current = [];
      void celebrate(false);
      toast('Persistence unlocked: footer checked, no bugs graded.');
    }
  };

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-prose flex-col gap-3 px-6 py-8 font-mono text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>Built with chalk dust, Vite &amp; Tailwind — no backend was harmed.</p>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onBadgeTap}
            aria-label="Version badge — tap six times for a surprise"
            className="inline-flex min-h-[44px] items-center rounded border border-line px-2.5 py-1 text-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            v2.0-fun
          </button>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded text-muted transition-all hover:-translate-y-1 hover:text-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            ^ top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useEffect(() => initEggs(), []);

  return (
    <div className="min-h-screen bg-bg font-sans text-ink antialiased">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Spotlight />
      <Navbar />
      <main className="relative mx-auto max-w-prose px-6">
        <div aria-hidden="true" className="texture-grid pointer-events-none fixed inset-0 -z-10" />
        <div aria-hidden="true" className="texture-noise pointer-events-none fixed inset-0 -z-10" />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Teaching />
        <Playground />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
