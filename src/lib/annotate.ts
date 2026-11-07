import { annotate } from 'rough-notation';

const COLORS = {
  dark: { highlight: '#facc15', underline: '#22d3ee', circle: '#22d3ee' },
  light: { highlight: '#fde68a', underline: '#dc2626', circle: '#dc2626' },
};

export function annotateRevealed(root: HTMLElement) {
  const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = root.querySelectorAll<HTMLElement>('[data-annotate]:not([data-done])');
  if (!targets.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const el = entry.target as HTMLElement;
        if (!entry.isIntersecting) continue;
        observer.unobserve(el);
        el.setAttribute('data-done', 'true');
        const type = (el.dataset.annotate ?? 'underline') as 'highlight' | 'underline' | 'circle';
        annotate(el, {
          type,
          color: COLORS[theme][type] ?? COLORS[theme].underline,
          animate: !reduced,
          strokeWidth: 2,
        }).show();
      }
    },
    { threshold: 0.6 },
  );
  targets.forEach((el) => observer.observe(el));
}
