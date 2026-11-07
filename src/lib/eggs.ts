import { celebrate } from './confetti';
import { toast } from './toast';

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const SECRET = '+500 XP — you found the teacher\u2019s secret';

function loveLetter() {
  console.log(
    '%c Psst… Teacher of the Year debugs here. Hire me → rifkyariya42@gmail.com ',
    'background:#34d399;color:#0a0f0d;font-weight:bold',
  );
  console.log(' ___________\n/ TEACH x500+ /\n ----------');
}

export function triggerTeachEgg() {
  void celebrate(true);
  toast(SECRET);
}

export function initEggs() {
  loveLetter();
  let konamiPos = 0;
  let teachPos = 0;

  const onKey = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    konamiPos = key === KONAMI[konamiPos] ? konamiPos + 1 : key === KONAMI[0] ? 1 : 0;
    if (konamiPos === KONAMI.length) {
      konamiPos = 0;
      triggerTeachEgg();
      return;
    }
    teachPos = 'teach'[teachPos] === key ? teachPos + 1 : 'teach'[0] === key ? 1 : 0;
    if (teachPos === 5) {
      teachPos = 0;
      triggerTeachEgg();
    }
  };

  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}
