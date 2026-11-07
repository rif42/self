export function toast(msg: string) {
  window.dispatchEvent(new CustomEvent('rifky:toast', { detail: msg }));
}
