// Ustawienia globalne. Docelowo: singleton „Ustawienia” w Sanity.
// Teraz dane przykładowe w kształcie przyszłego dokumentu.

export const siteSettings = {
  companyName: 'Maxol',
  legalName: 'MAXOL Sp. z o.o.',
  tagline: 'Partner w olejach',
  phone: { display: '881 852 852', href: 'tel:+48881852852' },
  phoneOffice: { display: '41 25 46 011', href: 'tel:+48412546011' },
  email: 'biuro@maxol.pl',
  address: {
    street: 'ul. Zagórska 20B',
    postalCode: '26-130',
    city: 'Suchedniów',
  },
  // Dane rejestrowe (KRS i biała lista MF, sprawdzone 2026-10-11) — wymagane w stopce (art. 206 KSH)
  registry: {
    fullName: 'MAXOL Spółka z ograniczoną odpowiedzialnością',
    court: 'Sąd Rejonowy w Kielcach, X Wydział Gospodarczy KRS',
    krs: '0000609016',
    nip: '6631871210',
    regon: '363158866',
    capital: '4 945 000,00 zł',
  },
};

export const mainNav = [
  { label: 'Strona główna', href: '/strona-glowna' },
  { label: 'O nas', href: '/o-nas' },
  { label: 'Oferta', href: '/oferta' },
  { label: 'Marki', href: '/marki' },
  { label: 'Dobierz olej', href: '/dobierz-olej' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
];

export const utilityNav = [
  { label: 'Katalogi PDF', href: '/marki#katalogi' },
  { label: 'Kontakt', href: '/kontakt' },
];

// Na stronach głównych przycisk przewija do formularza (#kontakt), na podstronach prowadzi do /kontakt
export const primaryCta = { label: 'Zapytaj o ofertę', href: '/kontakt' };

// Indeksowanie w Google: wyłączone, dopóki strona nie wystartuje na docelowej domenie.
// Przy publikacji: ustaw w Vercelu zmienną PUBLIC_ALLOW_INDEXING=true
// i usuń nagłówek X-Robots-Tag z vercel.json.
export const allowIndexing = import.meta.env.PUBLIC_ALLOW_INDEXING === 'true';
