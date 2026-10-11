// Strona główna jako lista bloków. Docelowo dokument „Strona” w Sanity
// z polem `blocks` (tablica bloków, każdy z `_type` i `_key`).
// Zdjęcia: tymczasowo ze starej strony maxol.pl (do wymiany).

import heroPoster from '../assets/hero/hero-poster.jpg';
// Zdjęcie przykładowe AI (Higgsfield) — docelowo prawdziwe Centrum Dystrybucji klienta
import imgFacilities from '../assets/generated/zaplecze-ai.jpg';
import logoOrlen from '../assets/legacy/logo-orlen-stopka.webp';
import logoCastrol from '../assets/legacy/logo-castrol-stopka.webp';

// Katalogi PDF: tymczasowo linki do starej strony, docelowo pliki w Sanity
const CATALOGS = 'https://maxol.pl/images/pdf';
import imgMoto from '../assets/legacy/photo-offer.webp';
import imgChemia from '../assets/legacy/photo-offer-1.webp';
import imgPrzemysl from '../assets/legacy/photo-offer-2.webp';
import imgSmary from '../assets/legacy/photo-offer-3.webp';
import imgRolnictwo from '../assets/legacy/photo-offer-4.webp';
import imgPlyny from '../assets/legacy/photo-offer-5.webp';
// Zdjęcie przykładowe wygenerowane AI (Higgsfield) — do zastąpienia zdjęciem klienta
import imgOpakowania from '../assets/generated/opakowania-ai.jpg';

// Docelowo: dokumenty typu „Usługa” (kategorie oferty), wybierane referencją.
export const services = [
  {
    slug: 'oleje-dla-przemyslu',
    title: 'Oleje dla przemysłu',
    excerpt: 'Oleje do maszyn w zakładach produkcyjnych, hutach i fabrykach, z doradztwem w doborze.',
    image: { src: imgPrzemysl, alt: 'Olej przelewany z beczki' },
  },
  {
    slug: 'oleje-dla-motoryzacji',
    title: 'Oleje dla motoryzacji',
    excerpt: 'Oleje silnikowe do aut osobowych, ciężarowych i motocykli: syntetyczne, półsyntetyczne i mineralne.',
    image: { src: imgMoto, alt: 'Tłoki silnika smarowane olejem' },
  },
  {
    slug: 'oleje-dla-rolnictwa',
    title: 'Oleje dla rolnictwa',
    excerpt: 'Oleje do ciągników, kombajnów i maszyn żniwnych, na intensywny sezon i okres przestoju.',
    image: { src: imgRolnictwo, alt: 'Olej wlewany z kanistra' },
  },
  {
    slug: 'smary',
    title: 'Smary',
    excerpt: 'Smary plastyczne: uniwersalne, wysokotemperaturowe i wodoodporne, dla motoryzacji i przemysłu.',
    image: { src: imgSmary, alt: 'Smarowanie łożyska tocznego' },
  },
  {
    slug: 'plyny-chlodnicze',
    title: 'Płyny chłodnicze',
    excerpt: 'Płyny na bazie glikolu etylenowego i propylenowego do samochodów i maszyn.',
    image: { src: imgPlyny, alt: 'Kanistry płynu chłodniczego ORLEN OIL Petrygo' },
  },
  {
    slug: 'kosmetyki-i-chemia-samochodowa',
    title: 'Chemia samochodowa',
    excerpt: 'Chemia, kosmetyki i akcesoria Amtra do mycia, ochrony i pielęgnacji pojazdów.',
    image: { src: imgChemia, alt: 'Nakładanie powłoki ochronnej na lakier samochodu' },
  },
  {
    slug: 'opakowania',
    title: 'Opakowania',
    excerpt: 'Butelki z tworzyw z dozownikiem, 1 l i 0,5 l, dla branży chemicznej, motoryzacyjnej i ogrodniczej.',
    image: { src: imgOpakowania, alt: 'Butelki 1 l i 0,5 l z komorą dozującą' },
  },
];

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
        { src: logoOrlen, alt: 'ORLEN OIL, autoryzowany dystrybutor' },
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
          text: 'Oleje ORLEN OIL, Castrol i innych marek, chemia i kosmetyki samochodowe Amtra oraz pomoc w doborze oleju do konkretnego pojazdu.',
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
        { title: 'Dostajesz ofertę', text: 'Dobieramy produkty ORLEN OIL, Castrol i innych marek do Twoich zastosowań.' },
        { title: 'Dowozimy towar', text: 'Zamówienie dostarczamy własną flotą z Centrum Dystrybucji w Suchedniowie.' },
      ],
      cta: { label: 'Wyślij zapytanie', href: '#kontakt' },
    },
    {
      _type: 'brands',
      _key: 'brands',
      heading: 'Marki w naszej ofercie',
      text: 'Jako autoryzowany dystrybutor ORLEN OIL i Castrol dostarczamy oryginalne produkty z pełną dokumentacją. Pobierz aktualne katalogi.',
      featured: [
        {
          name: 'ORLEN OIL',
          logo: { src: logoOrlen, alt: 'ORLEN OIL, autoryzowany dystrybutor' },
          text: 'Oleje silnikowe, przemysłowe i rolnicze, smary oraz płyny eksploatacyjne polskiego producenta.',
          catalog: { href: `${CATALOGS}/katalog-orlen.pdf`, size: '6,1 MB' },
        },
        {
          name: 'Castrol',
          logo: { src: logoCastrol, alt: 'Castrol, autoryzowany dystrybutor' },
          text: 'Oleje i smary Castrol dla motoryzacji, transportu, rolnictwa i przemysłu.',
          catalog: { href: `${CATALOGS}/katalog-castrol.pdf`, size: '7,8 MB' },
        },
      ],
      othersHeading: 'Pozostałe marki w ofercie',
      others: [
        { name: 'Shell', catalog: { href: `${CATALOGS}/katalog-shell.pdf`, size: '1,8 MB' } },
        { name: 'Total / Elf' },
        { name: 'Mobil' },
        { name: 'Quator', catalog: { href: `${CATALOGS}/katalog-quator.pdf`, size: '3,2 MB' } },
        { name: 'Amtra' },
      ],
    },
  ],
} as const;
