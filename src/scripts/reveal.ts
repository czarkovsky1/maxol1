// Subtelny wjazd elementów przy przewijaniu. Elementy z jednej grupy (selektora)
// pojawiają się po kolei. Bez JS i przy „ogranicz ruch” wszystko jest widoczne od razu
// (style: .js-reveal [data-reveal] w global.css).
export function initReveal(selectors: string[]) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const els: HTMLElement[] = [];
  selectors.forEach((sel) =>
    document.querySelectorAll<HTMLElement>(sel).forEach((el, i) => {
      el.dataset.reveal = '';
      el.style.setProperty('--reveal-delay', `${Math.min(i, 3) * 0.12}s`);
      els.push(el);
    }),
  );
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }),
    { threshold: 0.15 },
  );
  els.forEach((el) => io.observe(el));
}
