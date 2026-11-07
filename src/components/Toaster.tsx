import { useEffect, useState } from 'react';

interface ToastItem {
  id: number;
  msg: string;
}

let nextId = 1;

export default function Toaster() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    const onToast = (e: Event) => {
      const msg = (e as CustomEvent<string>).detail;
      const id = nextId++;
      setToasts((t) => [...t, { id, msg }]);
      window.setTimeout(() => {
        setToasts((t) => t.filter((item) => item.id !== id));
      }, 3000);
    };
    window.addEventListener('rifky:toast', onToast);
    return () => window.removeEventListener('rifky:toast', onToast);
  }, []);

  if (!toasts.length) return null;

  return (
    <div aria-live="polite" className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 space-y-2">
      {toasts.map((t) => (
        <p
          key={t.id}
          className="toast-pop whitespace-nowrap rounded border-2 border-ink bg-surface px-4 py-2 font-mono text-[13px] text-ink shadow-sticker"
        >
          {t.msg}
        </p>
      ))}
    </div>
  );
}
