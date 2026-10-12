// Pomocnicze funkcje tekstowe (czas budowania strony, bez JS w przeglądarce).

/** Kotwica z polskiego tekstu: „Glikol etylenowy” → „glikol-etylenowy”. */
export const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ł/g, 'l')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

/** Szacowany czas czytania w minutach (ok. 200 słów na minutę). */
export const readingMinutes = (texts: readonly string[]) => Math.max(1, Math.ceil(texts.join(' ').split(/\s+/).length / 200));

/** Polska odmiana liczebnika: plural(3, ['kategoria', 'kategorie', 'kategorii']) → „3 kategorie”. */
export const plural = (n: number, [one, few, many]: readonly [string, string, string]) => {
  const word = n === 1 ? one : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? few : many;
  return `${n} ${word}`;
};
