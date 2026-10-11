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
};

export const mainNav = [
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

export const primaryCta = { label: 'Zapytaj o ofertę', href: '#kontakt' };
