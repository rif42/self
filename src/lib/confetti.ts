const PALETTE = ['#34d399', '#22d3ee', '#f472b6', '#facc15'];

export async function celebrate(big = false) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Exception: lazy-load at interaction time so confetti stays out of the initial bundle.
  const { default: confetti } = await import('canvas-confetti');
  await confetti({
    particleCount: big ? 120 : 40,
    spread: big ? 100 : 60,
    ticks: big ? 200 : 90,
    colors: PALETTE,
    disableForReducedMotion: true,
  });
}
