import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Teaching from './components/Teaching';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-bg font-sans text-ink antialiased">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <Navbar />
      <main className="mx-auto max-w-prose px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Teaching />
        <Contact />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-prose flex-col gap-1 px-6 py-8 font-mono text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Rifky Ariya Pratama</p>
          <p>Built with React + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}
