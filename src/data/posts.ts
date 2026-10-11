// Wpisy blogowe. Docelowo dokumenty „Wpis blogowy” w Sanity (treść w Portable Text).
// TREŚĆ ROBOCZA: artykuły przygotowane jako szkice do weryfikacji przez Maxol
// (ogólna wiedza branżowa, bez konkretnych liczb i obietnic).

import imgSmary from '../assets/legacy/photo-offer-3.webp';
import imgRolnictwo from '../assets/legacy/photo-offer-4.webp';
import imgPlyny from '../assets/legacy/photo-offer-5.webp';

export const posts = [
  {
    slug: 'jak-dobrac-olej-do-ciagnika',
    title: 'Jak dobrać olej do ciągnika i kombajnu',
    excerpt: 'Na co patrzeć w normach i specyfikacjach producenta maszyny, żeby olej wytrzymał cały sezon.',
    image: { src: imgRolnictwo, alt: 'Olej wlewany z kanistra' },
    related: ['oleje-dla-rolnictwa', 'smary'],
    sections: [
      {
        paragraphs: [
          'Maszyny rolnicze pracują sezonowo, ale wtedy pracują intensywnie: długie godziny pod obciążeniem, kurz, wysoka temperatura, a potem miesiące przestoju. Dobrze dobrany olej ma znaczenie dla żywotności silnika, skrzyni i układu hydraulicznego.',
        ],
      },
      {
        heading: 'Zacznij od instrukcji producenta maszyny',
        paragraphs: [
          'Najważniejszym źródłem informacji jest instrukcja obsługi ciągnika lub kombajnu. Producent podaje w niej wymaganą klasę lepkości (np. według SAE) oraz normy jakościowe i aprobaty, które olej musi spełniać. Olej z odpowiednią aprobatą daje pewność, że został przebadany pod kątem danej konstrukcji.',
        ],
      },
      {
        heading: 'Silnik, przekładnia i hydraulika to różne potrzeby',
        paragraphs: [
          'W wielu maszynach rolniczych stosuje się oleje uniwersalne, które smarują jednocześnie przekładnię, hydraulikę i hamulce mokre. W innych potrzebne są osobne produkty do silnika i do układu przeniesienia napędu. Warto sprawdzić, które układy mają wspólny zbiornik oleju, a które oddzielny.',
        ],
      },
      {
        heading: 'Sezon i przestój',
        paragraphs: [
          'Przed sezonem warto skontrolować poziom i stan oleju, a po sezonie — zabezpieczyć maszynę na okres przestoju. Dobre oleje mają dodatki chroniące przed korozją, co ma znaczenie, gdy maszyna stoi miesiącami.',
          'Jeśli nie masz pewności, który produkt wybrać, przedstawiciel Maxol pomoże dobrać olej do konkretnej maszyny na podstawie jej modelu i specyfikacji.',
        ],
      },
    ],
  },
  {
    slug: 'glikol-etylenowy-czy-propylenowy',
    title: 'Glikol etylenowy czy propylenowy?',
    excerpt: 'Czym różnią się płyny chłodnicze na bazie obu glikoli i którego użyć w pojeździe lub maszynie.',
    image: { src: imgPlyny, alt: 'Kanistry płynu chłodniczego' },
    related: ['plyny-chlodnicze', 'oleje-dla-motoryzacji'],
    sections: [
      {
        paragraphs: [
          'Płyn chłodniczy chroni silnik przed przegrzaniem, zamarzaniem i korozją. Najczęściej produkuje się go na bazie jednego z dwóch glikoli: etylenowego albo propylenowego. Oba działają podobnie, ale różnią się właściwościami.',
        ],
      },
      {
        heading: 'Glikol etylenowy',
        paragraphs: [
          'To najczęściej stosowana baza płynów chłodniczych w samochodach i maszynach. Dobrze odbiera ciepło i skutecznie obniża temperaturę zamarzania. Jest jednak toksyczny, dlatego wymaga ostrożności przy przechowywaniu i utylizacji.',
        ],
      },
      {
        heading: 'Glikol propylenowy',
        paragraphs: [
          'Jest znacznie mniej toksyczny, dlatego wybiera się go tam, gdzie liczy się bezpieczeństwo ludzi i środowiska. Płyny na jego bazie stosuje się m.in. w wybranych pojazdach i instalacjach, w których kontakt płynu z otoczeniem jest bardziej prawdopodobny.',
        ],
      },
      {
        heading: 'Czy można je mieszać?',
        paragraphs: [
          'Płynów różnych typów nie należy mieszać bez sprawdzenia zaleceń producenta — oprócz glikolu liczą się też dodatki antykorozyjne, które mogą ze sobą nie współpracować. Najbezpieczniej jest stosować płyn zgodny z normą wskazaną przez producenta pojazdu lub maszyny.',
          'W ofercie Maxol są płyny na bazie obu glikoli. Pomożemy dobrać właściwy do Twojego pojazdu lub floty.',
        ],
      },
    ],
  },
  {
    slug: 'gospodarka-smarowa-w-zakladzie',
    title: 'Gospodarka smarowa w zakładzie: od czego zacząć',
    excerpt: 'Jak uporządkować dobór i harmonogram smarowania maszyn, żeby ograniczyć przestoje.',
    image: { src: imgSmary, alt: 'Smarowanie łożyska tocznego' },
    related: ['oleje-dla-przemyslu', 'smary'],
    sections: [
      {
        paragraphs: [
          'Gospodarka smarowa to uporządkowany sposób zarządzania olejami i smarami w zakładzie: od doboru produktów, przez harmonogram smarowania, po przechowywanie i kontrolę stanu środków smarnych. Dobrze prowadzona ogranicza awarie i nieplanowane przestoje.',
        ],
      },
      {
        heading: '1. Spis maszyn i punktów smarowania',
        paragraphs: [
          'Pierwszym krokiem jest lista maszyn i wszystkich punktów smarowania wraz z wymaganiami producentów: rodzajem środka, ilością i częstotliwością. Taka mapa pokazuje, ile różnych produktów jest naprawdę potrzebnych.',
        ],
      },
      {
        heading: '2. Ujednolicenie produktów',
        paragraphs: [
          'W wielu zakładach używa się więcej rodzajów olejów i smarów, niż to konieczne. Ograniczenie asortymentu tam, gdzie pozwalają na to wymagania maszyn, upraszcza zakupy, magazyn i zmniejsza ryzyko pomyłki przy smarowaniu.',
        ],
      },
      {
        heading: '3. Harmonogram i odpowiedzialność',
        paragraphs: [
          'Każdy punkt smarowania powinien mieć określony termin i osobę odpowiedzialną. Pomaga w tym prosty harmonogram oraz oznaczenie punktów smarowania kolorami lub etykietami.',
        ],
      },
      {
        heading: '4. Przechowywanie',
        paragraphs: [
          'Oleje i smary należy przechowywać w czystych, zamkniętych opakowaniach, z dala od wilgoci i zanieczyszczeń. Zanieczyszczony środek smarny może szybciej zużywać elementy maszyn niż jego brak.',
          'Maxol doradza firmom przemysłowym w doborze środków smarnych i prowadzeniu gospodarki smarowej. Skontaktuj się z nami, aby omówić potrzeby Twojego zakładu.',
        ],
      },
    ],
  },
];

export type Post = (typeof posts)[number];
