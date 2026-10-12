// Spis treści: podświetla link do rozdziału, który jest właśnie czytany.
// Linki: <a data-toc-link="id-naglowka">, nagłówki: elementy z tym id.
export function initToc(root: HTMLElement | null) {
  if (!root || !('IntersectionObserver' in window)) return;
  const links = [...root.querySelectorAll<HTMLAnchorElement>('[data-toc-link]')];
  const heads = links.map((l) => document.getElementById(l.dataset.tocLink!)).filter(Boolean) as HTMLElement[];
  const setActive = (id: string) =>
    links.forEach((l) => {
      const on = l.dataset.tocLink === id;
      l.classList.toggle('is-active', on);
      if (on) l.setAttribute('aria-current', 'true');
      else l.removeAttribute('aria-current');
    });
  const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), {
    rootMargin: '-20% 0px -70% 0px',
  });
  heads.forEach((h) => io.observe(h));
}
