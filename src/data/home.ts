// Strona główna jako lista bloków. Docelowo dokument „Strona” w Sanity
// z polem `blocks` (tablica bloków, każdy z `_type` i `_key`).
// Zdjęcia: tymczasowo ze starej strony maxol.pl (do wymiany).

import heroPoster from '../assets/hero/hero-poster.jpg';
// Zdjęcie przykładowe AI (Higgsfield) — docelowo prawdziwe Centrum Dystrybucji klienta
import imgFacilities from '../assets/generated/zaplecze-ai.jpg';
import logoOrlen from '../assets/legacy/logo-orlen-stopka.webp';
import logoCastrol from '../assets/legacy/logo-castrol-stopka.webp';
import { brands } from './brands';

export { services } from './services';
import { services } from './services';
import { posts } from './posts';

export const homePage = {
  title: 'Strona główna',
  blocks: [
    {
      _type: 'hero',
      _key: 'hero',
      heading: 'Oleje i smary dla przemysłu, transportu i warsztatów',
      text: 'Hurtowa dystrybucja środków smarnych z Suchedniowa. Dowozimy własną flotą do firm w siedmiu województwach.',
      primaryCta: { label: 'Zapytaj o ofertę', href: '#kontakt' },
      secondaryCta: { label: 'Zobacz ofertę', href: '#oferta' },
      video: '/video/hero-draft.mp4',
      poster: { src: heroPoster, alt: '' },
    },
    {
      _type: 'partners',
      _key: 'partners',
      heading: 'Autoryzowany dystrybutor ORLEN\u00A0OIL i\u00A0Castrol',
      text: 'Kupujesz u źródła: oryginalne produkty z pełną dokumentacją techniczną i wsparciem w doborze. Obok dwóch głównych partnerów mamy w ofercie także Shell, Total, Elf, Mobil, Quator i Amtra.',
      link: { label: 'Certyfikaty dystrybutora', href: '/o-nas#certyfikaty' },
      logos: [
        { src: logoOrlen, alt: 'ORLEN\u00A0OIL, autoryzowany dystrybutor' },
        { src: logoCastrol, alt: 'Castrol, autoryzowany dystrybutor' },
      ],
    },
    {
      _type: 'reach',
      _key: 'reach',
      heading: 'Zasięg i skala działania',
      sentence: [
        { text: 'Od ' },
        { text: '35 lat', stat: true },
        { text: ' zaopatrujemy ' },
        { text: '9000+ firm', stat: true },
        { text: ' w ' },
        { text: '7 województwach', stat: true },
        { text: '. W naszym Centrum Dystrybucji czeka na nie ' },
        { text: '5000+ produktów', stat: true },
        { text: '.' },
      ],
      regions: ['świętokrzyskie', 'mazowieckie', 'lubelskie', 'podkarpackie', 'małopolskie', 'łódzkie', 'śląskie'],
      hubLabel: 'Centrum Dystrybucji w Suchedniowie',
    },
    {
      _type: 'offerPanels',
      _key: 'offer',
      anchor: 'oferta',
      heading: 'Oferta dla każdej branży',
      text: 'Środki smarne, płyny eksploatacyjne i opakowania od sprawdzonych producentów. Dobierzemy produkty do Twoich maszyn i pojazdów.',
      items: services,
    },
    {
      _type: 'industries',
      _key: 'industries',
      heading: 'Zaopatrujemy firmy z\u00A0czterech branż',
      text: 'Każda branża ma u nas dopasowany asortyment i przedstawiciela handlowego, który pomoże dobrać produkty i warunki współpracy.',
      cta: { label: 'Zapytaj o ofertę', href: '#kontakt' },
      items: [
        {
          title: 'Przemysł',
          audience: 'Zakłady produkcyjne, huty, fabryki',
          text: 'Oleje przemysłowe i smary do maszyn pracujących w ciężkich warunkach. Doradzamy w doborze środków smarnych i prowadzeniu gospodarki smarowej.',
          links: [
            { label: 'Oleje dla przemysłu', href: '/oferta/oleje-dla-przemyslu' },
            { label: 'Smary', href: '/oferta/smary' },
          ],
        },
        {
          title: 'Transport i floty',
          audience: 'Firmy transportowe i floty pojazdów',
          text: 'Oleje silnikowe do samochodów ciężarowych i dostawczych oraz płyny eksploatacyjne. Dostawy realizujemy własną flotą.',
          links: [
            { label: 'Oleje dla motoryzacji', href: '/oferta/oleje-dla-motoryzacji' },
            { label: 'Płyny chłodnicze', href: '/oferta/plyny-chlodnicze' },
          ],
        },
        {
          title: 'Hurt, sklepy i warsztaty',
          audience: 'Hurtownie, sklepy motoryzacyjne, warsztaty, stacje paliw i SKP',
          text: 'Oleje ORLEN\u00A0OIL, Castrol i innych marek, chemia i kosmetyki samochodowe Amtra oraz pomoc w doborze oleju do konkretnego pojazdu.',
          links: [
            { label: 'Oleje dla motoryzacji', href: '/oferta/oleje-dla-motoryzacji' },
            { label: 'Chemia samochodowa', href: '/oferta/kosmetyki-i-chemia-samochodowa' },
            { label: 'Dobierz olej', href: '/dobierz-olej' },
          ],
        },
        {
          title: 'Rolnictwo',
          audience: 'Gospodarstwa rolne i usługi rolnicze',
          text: 'Oleje i smary do ciągników, kombajnów i maszyn żniwnych, na intensywny sezon i okres przestoju.',
          links: [
            { label: 'Oleje dla rolnictwa', href: '/oferta/oleje-dla-rolnictwa' },
            { label: 'Smary', href: '/oferta/smary' },
          ],
        },
      ],
    },
    {
      _type: 'facilities',
      _key: 'facilities',
      heading: 'Własne magazyny, flota i linie rozlewcze',
      text: 'Nie jesteśmy pośrednikiem bez zaplecza. Towar składujemy, konfekcjonujemy i dowozimy sami, więc odpowiadamy za cały proces dostawy.',
      image: { src: imgFacilities, alt: 'Magazyn z regałami beczek i kanistrów oleju, w bramie ciężarówka dostawcza' },
      items: [
        { title: 'Centrum Dystrybucji', text: 'Własne zaplecze magazynowe w Suchedniowie dla półproduktów i produktów gotowych.' },
        { title: 'Własna flota', text: 'Samochody ciężarowe i dostawcze, dzięki którym szybko realizujemy dostawy.' },
        { title: 'Linie rozlewcze', text: 'Konfekcja olejów i płynów na miejscu, we własnych liniach rozlewczych.' },
        { title: 'Doradztwo', text: 'Dział handlowy i czterech przedstawicieli w terenie, stale szkolonych w branży olejowej.' },
      ],
      cta: { label: 'Zapytaj o ofertę', href: '#kontakt' },
    },
    {
      _type: 'process',
      _key: 'process',
      heading: 'Jak zacząć współpracę',
      text: 'Od zapytania do pierwszej dostawy prowadzi Cię jeden przedstawiciel handlowy.',
      steps: [
        { title: 'Wysyłasz zapytanie', text: 'Przez formularz lub telefonicznie. Podaj województwo, a odezwie się przedstawiciel z Twojego regionu.' },
        { title: 'Omawiamy potrzeby', text: 'Rozmawiamy o maszynach, pojazdach, ilościach i częstotliwości dostaw.' },
        { title: 'Dostajesz ofertę', text: 'Dobieramy produkty ORLEN\u00A0OIL, Castrol i innych marek do Twoich zastosowań.' },
        { title: 'Dowozimy towar', text: 'Zamówienie dostarczamy własną flotą z Centrum Dystrybucji w Suchedniowie.' },
      ],
      cta: { label: 'Wyślij zapytanie', href: '#kontakt' },
    },
    {
      _type: 'brands',
      _key: 'brands',
      heading: 'Marki w naszej ofercie',
      text: 'Jako autoryzowany dystrybutor ORLEN\u00A0OIL i Castrol dostarczamy oryginalne produkty z pełną dokumentacją. Pobierz aktualne katalogi.',
      featured: brands
        .filter((b) => b.partner)
        .map((b) => ({ name: b.name, logo: { src: b.logo!.src, alt: `${b.name}, autoryzowany dystrybutor` }, text: b.text, catalog: b.catalog })),
      othersHeading: 'Pozostałe marki w ofercie',
      others: brands.filter((b) => !b.partner).map((b) => ({ name: b.name, catalog: b.catalog })),
    },
    {
      _type: 'oilFinder',
      _key: 'oil-finder',
      heading: 'Szukasz oleju do konkretnego pojazdu?',
      text: 'Skorzystaj z doborników producentów albo zapytaj naszego doradcę.',
      links: brands.filter((b) => b.finder).map((b) => ({ label: b.name, href: b.finder!.href })),
      cta: { label: 'Zapytaj doradcę o dobór oleju', href: '#kontakt' },
    },
    {
      _type: 'articles',
      _key: 'articles',
      heading: 'Wiedza o olejach i smarach',
      text: 'Praktyczne poradniki dla warsztatów, flot, rolnictwa i przemysłu.',
      link: { label: 'Wszystkie artykuły', href: '/blog' },
      posts,
    },
    {
      _type: 'faq',
      _key: 'faq',
      heading: 'Najczęstsze pytania',
      text: 'Krótko o tym, jak wygląda współpraca z Maxol.',
      items: [
        {
          question: 'Na jakim obszarze dostarczacie towar?',
          answer: 'Obsługujemy firmy w siedmiu województwach: świętokrzyskim, mazowieckim, lubelskim, podkarpackim, małopolskim, łódzkim i śląskim. Dostawy realizujemy własną flotą. Jeśli działasz poza tym obszarem, zapytaj — sprawdzimy możliwości.',
        },
        {
          question: 'Jak złożyć zamówienie lub zapytanie?',
          answer: 'Wypełnij formularz poniżej albo zadzwoń pod numer 881 852 852. Po wybraniu województwa skontaktuje się z Tobą przedstawiciel handlowy z Twojego regionu.',
        },
        {
          question: 'Czy pomagacie dobrać olej lub smar?',
          answer: 'Tak. Doradzamy w doborze środków smarnych do pojazdów i maszyn, a firmom przemysłowym pomagamy w prowadzeniu gospodarki smarowej.',
        },
        {
          question: 'Jakie marki macie w ofercie?',
          answer: 'Jesteśmy autoryzowanym dystrybutorem ORLEN\u00A0OIL i Castrol. W ofercie mamy też produkty Shell, Total, Elf, Mobil i Quator oraz chemię samochodową Amtra.',
        },
        {
          question: 'Czy oferujecie konfekcję i opakowania?',
          answer: 'Mamy własne linie rozlewcze do konfekcji olejów i płynów. Sprzedajemy też butelki z tworzyw z dozownikiem o pojemności 1 l i 0,5 l.',
        },
      ],
    },
    {
      _type: 'contact',
      _key: 'contact',
      anchor: 'kontakt',
      heading: 'Zapytaj o ofertę',
      text: 'Opisz, czego potrzebujesz. Przedstawiciel z Twojego regionu przygotuje ofertę i odezwie się telefonicznie lub mailowo.',
      departments: [
        { name: 'Dział handlowy', phones: ['41 25 46 006', '41 25 46 007'], email: 'biuro@maxol.pl' },
        { name: 'Księgowość', phones: ['41 25 46 010'], email: 'ksiegowosc@maxol.pl' },
        { name: 'Magazyn', phones: ['41 25 46 005'], email: 'magazyn@maxol.pl' },
      ],
      reps: [
        { name: 'Artur Miernik', phone: '695 090 001', email: 'amiernik@maxol.pl' },
        { name: 'Kamil Kąpała', phone: '695 090 002', email: 'kkapala@maxol.pl' },
        { name: 'Michał Guldon', phone: '695 090 003', email: 'mguldon@maxol.pl' },
        { name: 'Adam Szewczyk', phone: '695 090 004', email: 'aszewczyk@maxol.pl' },
      ],
    },
  ],
} as const;
