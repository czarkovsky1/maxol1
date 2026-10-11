// Kategorie oferty. Docelowo dokumenty „Usługa” w Sanity (slug, H1, opis, SEO, marki).
// Treści i znaczniki SEO przeniesione ze starej strony maxol.pl (adresy /oferta/[slug] bez zmian).

// Zdjęcia stockowe z Unsplash (autorzy: src/assets/stock/STOCK.md)
import imgMoto from '../assets/stock/oferta-motoryzacja.jpg';
import imgChemia from '../assets/stock/oferta-chemia.jpg';
import imgPrzemysl from '../assets/stock/oferta-przemysl.jpg';
import imgSmary from '../assets/stock/oferta-smary.jpg';
import imgRolnictwo from '../assets/stock/oferta-rolnictwo.jpg';
import imgPlyny from '../assets/stock/oferta-plyny.jpg';
// Zdjęcie przykładowe wygenerowane AI (Higgsfield) — do zastąpienia zdjęciem klienta
import imgOpakowania from '../assets/generated/opakowania-ai.jpg';
import rycina500 from '../assets/legacy/butelka-500-rycina.webp';
import rycina1000 from '../assets/legacy/butelka-1000-rycina.webp';

const FILES = 'https://maxol.pl/images/design/pdf';

export const services = [
  {
    slug: 'oleje-dla-przemyslu',
    title: 'Oleje dla przemysłu',
    excerpt: 'Oleje do maszyn w zakładach produkcyjnych, hutach i fabrykach, z doradztwem w doborze.',
    image: { src: imgPrzemysl, alt: 'Zbliżenie przekładni z kołami zębatymi' },
    highlights: ['Zakłady produkcyjne, huty i fabryki', 'Ochrona przed zużyciem, korozją i skrajnymi temperaturami', 'Doradztwo techniczne w doborze środków smarnych'],
    seo: {
      title: 'Oleje przemysłowe z oferty Maxol – najwyższa jakość i osiągi',
      description: 'Oleje przemysłowe z oferty Maxol spełniają surowe normy branżowe, zapewniając niezawodną pracę maszyn i ich ochronę - są idealne dla przemysłu ciężkiego.',
    },
    body: [
      'Oferujemy szeroki wybór olejów przemysłowych, które zapewniają optymalną pracę urządzeń w zakładach produkcyjnych, hutach, fabrykach oraz innych gałęziach przemysłu ciężkiego. Nasze produkty, dostarczane przez czołowych producentów, takich jak ORLEN OIL, Castrol, Shell, Total, Mobil i Quator, spełniają rygorystyczne normy jakości i są dostosowane do pracy w najbardziej wymagających warunkach.',
      'Oleje przemysłowe w naszej ofercie to nie tylko smarowanie, ale również efektywna ochrona przed zużyciem, korozją i wpływem ekstremalnych temperatur.',
      'Zastosowanie odpowiednich olejów przemysłowych przekłada się na wyższą efektywność pracy maszyn, zmniejszenie zużycia energii oraz wydłużenie okresów międzyserwisowych.',
      'Działamy nie tylko jako dostawca, ale również jako doradca techniczny, pomagając naszym klientom w optymalizacji procesów produkcyjnych dzięki odpowiedniemu doborowi środków smarnych.',
    ],
    brands: ['ORLEN OIL', 'Castrol', 'Shell', 'Total', 'Mobil', 'Quator'],
  },
  {
    slug: 'oleje-dla-motoryzacji',
    title: 'Oleje dla motoryzacji',
    excerpt: 'Oleje silnikowe do aut osobowych, ciężarowych i motocykli: syntetyczne, półsyntetyczne i mineralne.',
    image: { src: imgMoto, alt: 'Mechanik wlewa olej do silnika samochodu' },
    highlights: ['Samochody osobowe, ciężarowe i motocykle', 'Oleje syntetyczne, półsyntetyczne i mineralne', 'Wsparcie w doborze oleju do pojazdu'],
    seo: {
      title: 'Wysokiej jakości oleje dla motoryzacji z oferty firmy Maxol',
      description: 'Oferujemy wysokiej jakości oleje silnikowe dla aut osobowych, ciężarowych i motocykli od Orlen, Castrol i Mobil. Gwarancja ochrony silnika i optymalnej pracy.',
    },
    body: [
      'W ofercie Maxol znajdziesz najwyższej jakości oleje silnikowe dedykowane dla samochodów osobowych, ciężarowych i motocykli. Współpracujemy z renomowanymi producentami zarówno krajowymi, jak i zagranicznymi, takimi jak ORLEN OIL, Castrol, Shell, Total, Elf, Quator czy Mobil, dzięki czemu możemy zaoferować szeroki wybór olejów spełniających najnowsze normy jakościowe i ekologiczne.',
      'Niezależnie od tego, czy potrzebujesz oleju syntetycznego, półsyntetycznego czy mineralnego, znajdziesz u nas produkt dostosowany do swoich potrzeb.',
      'Współpracujemy z klientami z sektora motoryzacyjnego, zapewniając produkty dopasowane do specyficznych wymagań technicznych pojazdów różnych marek. Dostarczamy oleje silnikowe o odpowiedniej lepkości i właściwościach, które zapewniają optymalne smarowanie silnika nawet w ekstremalnych warunkach.',
      'Klienci wybierający Maxol mogą liczyć na wsparcie w doborze najlepszego oleju dla swojego pojazdu.',
    ],
    brands: ['ORLEN OIL', 'Castrol', 'Shell', 'Total', 'Elf', 'Quator', 'Mobil'],
  },
  {
    slug: 'oleje-dla-rolnictwa',
    title: 'Oleje dla rolnictwa',
    excerpt: 'Oleje do ciągników, kombajnów i maszyn żniwnych, na intensywny sezon i okres przestoju.',
    image: { src: imgRolnictwo, alt: 'Kombajn podczas żniw o zachodzie słońca' },
    highlights: ['Ciągniki, kombajny i maszyny do zbioru plonów', 'Ochrona w sezonie i podczas przestoju', 'Mniej awarii i przestojów maszyn'],
    seo: {
      title: 'Niezawodne oleje dla maszyn rolniczych z oferty firmy Maxol',
      description: 'Oferujemy oleje smarujące dla maszyn rolniczych, takich jak ciągniki i kombajny. Produkty od czołowych producentów zapewniają wydajność przez cały sezon.',
    },
    body: [
      'W Maxol oferujemy oleje smarujące przeznaczone dla maszyn rolniczych, takich jak ciągniki, kombajny czy maszyny do zbioru plonów. Nasza oferta obejmuje produkty od takich producentów jak ORLEN OIL, Castrol, Shell, Total, Elf, Quator i Mobil, które zapewniają niezawodną pracę urządzeń w najbardziej wymagających warunkach.',
      'Stosowanie wysokiej jakości olejów to klucz do przedłużenia żywotności maszyn oraz zwiększenia ich efektywności operacyjnej.',
      'Doskonale wiemy, jak ważna jest niezawodność sprzętu rolniczego, dlatego oferujemy oleje zapewniające ochronę zarówno w okresie intensywnych prac polowych, jak i w sezonach mniej aktywnych. Wspieramy rolników, dostarczając produkty, które minimalizują awarie i przestoje.',
    ],
    brands: ['ORLEN OIL', 'Castrol', 'Shell', 'Total', 'Elf', 'Quator', 'Mobil'],
  },
  {
    slug: 'smary',
    title: 'Smary',
    excerpt: 'Smary plastyczne: uniwersalne, wysokotemperaturowe i wodoodporne, dla motoryzacji i przemysłu.',
    image: { src: imgSmary, alt: 'Łożysko toczne' },
    highlights: ['Smary plastyczne do wszelkich zastosowań', 'Uniwersalne, wysokotemperaturowe i wodoodporne', 'Motoryzacja, przemysł ciężki i rolnictwo'],
    seo: {
      title: 'Smary przemysłowe i motoryzacyjne z oferty firmy Maxol',
      description: 'W ofercie Maxol posiadamy smary dla przemysłu, motoryzacji i rolnictwa. Produkty od Orlen i Castrol zapewniają wydajność i odporność na czynniki zewnętrzne.',
    },
    body: [
      'W ofercie Maxol znajdziesz smary plastyczne przeznaczone do wszelkich zastosowań, od motoryzacji po przemysł ciężki i rolnictwo. Nasze smary zapewniają długotrwałą ochronę przed tarciem, wysoką odporność na temperatury oraz doskonałe właściwości ochronne.',
      'Stosowanie odpowiednich smarów minimalizuje tarcie oraz zużycie elementów mechanicznych, co przekłada się na dłuższą żywotność urządzeń. Oferujemy produkty o różnych właściwościach – od smarów uniwersalnych, po wyspecjalizowane smary wysokotemperaturowe i wodoodporne.',
      'Nasze smary znajdują zastosowanie zarówno w motoryzacji, jak i w przemyśle, gdzie minimalizacja przestojów i kosztów serwisowania jest kluczowa.',
    ],
    brands: ['ORLEN OIL', 'Castrol'],
  },
  {
    slug: 'plyny-chlodnicze',
    title: 'Płyny chłodnicze',
    excerpt: 'Płyny na bazie glikolu etylenowego i propylenowego do samochodów i maszyn.',
    image: { src: imgPlyny, alt: 'Zbiornik płynu chłodniczego w komorze silnika' },
    highlights: ['Na bazie glikolu etylenowego i propylenowego', 'Ochrona przed przegrzaniem, korozją i kamieniem', 'Samochody osobowe, ciężarowe i maszyny rolnicze'],
    seo: {
      title: 'Płyny chłodnicze z oferty Maxol – ochrona silnika i chłodzenia',
      description: 'Płyny chłodnicze z naszej oferty skutecznie chronią przed przegrzaniem i korozją. Są dobrym wyborem dla pojazdów osobowych, ciężarowych i maszyn rolniczych.',
    },
    body: [
      'Maxol oferuje bogaty wybór płynów chłodniczych, które są kluczowe dla prawidłowego działania układów chłodzenia w pojazdach i maszynach. Nasze produkty skutecznie chronią silniki przed przegrzaniem, a także zapobiegają korozji i osadzaniu się kamienia w układach chłodzenia.',
      'Oferujemy płyny chłodnicze zarówno na bazie glikolu etylenowego, jak i glikolu propylenowego, dostosowane do różnorodnych potrzeb naszych klientów – do samochodów osobowych, ciężarowych i maszyn rolniczych.',
      'Regularne stosowanie wysokiej jakości płynów chłodniczych minimalizuje ryzyko awarii układu chłodzenia, co bezpośrednio wpływa na wydłużenie żywotności silnika. Pomagamy dobrać płyn do wymagań konkretnego pojazdu lub maszyny.',
    ],
    brands: ['ORLEN OIL'],
  },
  {
    slug: 'kosmetyki-i-chemia-samochodowa',
    title: 'Chemia samochodowa',
    excerpt: 'Chemia, kosmetyki i akcesoria Amtra do mycia, ochrony i pielęgnacji pojazdów.',
    image: { src: imgChemia, alt: 'Ściereczka z mikrofibry na masce czarnego samochodu' },
    highlights: ['Autoryzowany dystrybutor grupy Amtra', 'Preparaty czyszczące, woski i pielęgnacja wnętrza', 'Akcesoria: ściereczki, gąbki, pędzle'],
    seo: {
      title: 'Chemia samochodowa i akcesoria w ofercie firmy Maxol',
      description: 'Proponujemy szeroką gamę chemii samochodowej i akcesoriów, oferując wysokiej jakości produkty. Sprawdź naszą ofertę i zadbaj o swój samochód z nami.',
    },
    h1: 'Chemia samochodowa, kosmetyki i akcesoria',
    ask: 'chemię samochodową', // forma do „Zapytaj o …”
    body: [
      'Maxol jest autoryzowanym dystrybutorem grupy Amtra, oferując szeroki wybór chemii samochodowej, kosmetyków do pielęgnacji pojazdów oraz niezbędnych akcesoriów. W ofercie znajdziesz preparaty czyszczące, woski, środki do pielęgnacji wnętrza oraz akcesoria, które pomogą zadbać o wygląd i stan techniczny pojazdu.',
      'To nie tylko standardowe środki do mycia i pielęgnacji, ale także zaawansowane preparaty do konserwacji oraz ochrony powierzchni. Kosmetyki samochodowe pozwalają utrzymać lakier w doskonałym stanie, chroniąc go przed czynnikami atmosferycznymi i uszkodzeniami mechanicznymi.',
      'Oferta obejmuje również akcesoria takie jak ściereczki, gąbki, pędzle oraz wiele innych narzędzi do pielęgnacji pojazdów. Doradzamy w doborze środków pielęgnacyjnych dostosowanych do indywidualnych potrzeb.',
    ],
    brands: ['Amtra'],
  },
  {
    slug: 'opakowania',
    title: 'Opakowania',
    excerpt: 'Butelki z tworzyw z dozownikiem, 1 l i 0,5 l, dla branży chemicznej, motoryzacyjnej i ogrodniczej.',
    image: { src: imgOpakowania, alt: 'Butelki 1 l i 0,5 l z komorą dozującą' },
    highlights: ['Butelki z dozownikiem 1 l i 0,5 l', 'Dla chemii gospodarczej, motoryzacji i ogrodnictwa', 'Ryciny techniczne do pobrania w PDF'],
    seo: {
      title: 'Opakowania do przechowywania i transportu olejów - Maxol',
      description: 'W ofercie posiadamy opakowania z tworzyw sztucznych z dozownikiem 1 l i 0,5 l. Zobacz ryciny techniczne naszych butelek.',
    },
    h1: 'Opakowania z tworzyw sztucznych',
    body: [
      'Zajmujemy się sprzedażą opakowań z tworzyw sztucznych dla branży chemii gospodarczej, motoryzacyjnej i ogrodniczej.',
      'W ofercie mamy wysokiej jakości butelki z dozownikiem o pojemności 1 l i 0,5 l. Poniżej znajdziesz ryciny techniczne obu opakowań do pobrania w PDF.',
    ],
    brands: [],
    drawings: [
      { title: 'Butelka 1000 ml', image: rycina1000, pdf: `${FILES}/butelka-1000-rycina.pdf`, size: '71 kB' },
      { title: 'Butelka 500 ml', image: rycina500, pdf: `${FILES}/butelka-500-rycina.pdf`, size: '99 kB' },
    ],
  },
];

export type Service = (typeof services)[number];
