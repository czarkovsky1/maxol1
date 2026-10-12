// Marki w ofercie. Docelowo dokumenty „Marka” w Sanity (logo, opis, katalog PDF,
// dobornik producenta, certyfikat). Jedno źródło dla strony głównej, /marki,
// /dobierz-olej i bocznej karty na podstronach kategorii.
// Przynależność marek do kategorii wynika z pola `brands` w services.ts.
import type { ImageMetadata } from 'astro';
import logoOrlen from '../assets/legacy/logo-orlen-stopka.webp';
import logoCastrol from '../assets/legacy/logo-castrol-stopka.webp';
import certOrlen from '../assets/legacy/certyfikat-orlen.jpg';
import certCastrol from '../assets/legacy/certyfikat-castrol.webp';
import { services } from './services';

// Katalogi i certyfikaty: tymczasowo linki do starej strony, docelowo pliki w Sanity
const CATALOGS = 'https://maxol.pl/images/pdf';
const CERTS = 'https://maxol.pl/images/design/pdf';

export interface Brand {
  slug: string;
  name: string;
  /** nazwy, pod którymi marka występuje w kategoriach oferty */
  aliases: string[];
  partner?: boolean;
  logo?: { src: ImageMetadata; alt: string };
  text: string;
  catalog?: { href: string; size: string };
  finder?: { href: string; text: string };
  certificate?: { href: string; size: string; image: ImageMetadata; alt: string };
}

export const brands: Brand[] = [
  {
    slug: 'orlen-oil',
    name: 'ORLEN OIL',
    aliases: ['ORLEN OIL'],
    partner: true,
    logo: { src: logoOrlen, alt: 'ORLEN OIL' },
    text: 'Oleje silnikowe, przemysłowe i rolnicze, smary oraz płyny eksploatacyjne polskiego producenta.',
    catalog: { href: `${CATALOGS}/katalog-orlen.pdf`, size: '6,1 MB' },
    finder: {
      href: 'https://www.orlenoil.pl/pl/naszaoferta/strony/dobierz-olej.aspx',
      text: 'Dobór olejów ORLEN OIL do samochodów osobowych, ciężarowych, maszyn rolniczych i motocykli.',
    },
    certificate: { href: `${CERTS}/cert-orlen.pdf`, size: '1 MB', image: certOrlen, alt: 'Certyfikat autoryzowanego dystrybutora ORLEN OIL dla Maxol' },
  },
  {
    slug: 'castrol',
    name: 'Castrol',
    aliases: ['Castrol'],
    partner: true,
    logo: { src: logoCastrol, alt: 'Castrol' },
    text: 'Oleje i smary Castrol dla motoryzacji, transportu, rolnictwa i przemysłu.',
    catalog: { href: `${CATALOGS}/katalog-castrol.pdf`, size: '7,8 MB' },
    finder: {
      href: 'https://www.castrol.com/pl_pl/poland/home/product-finder.html',
      text: 'Wyszukiwarka produktów Castrol: wskaż pojazd lub maszynę, a otrzymasz rekomendowane oleje i płyny.',
    },
    certificate: { href: `${CERTS}/cert-castrol.pdf`, size: '590 kB', image: certCastrol, alt: 'Certyfikat autoryzowanego dystrybutora Castrol dla Maxol' },
  },
  {
    slug: 'shell',
    name: 'Shell',
    aliases: ['Shell'],
    text: 'Oleje silnikowe i środki smarne Shell dla motoryzacji, rolnictwa i przemysłu.',
    catalog: { href: `${CATALOGS}/katalog-shell.pdf`, size: '1,8 MB' },
    finder: {
      href: 'https://www.shell.pl/klienci/fuels-oils-and-coolants/oleje-silnikowe-i-srodki-smarne/dobierz-olej-do-silnika-shell-lubematch.html',
      text: 'Shell LubeMatch — dobór olejów silnikowych i środków smarnych Shell.',
    },
  },
  {
    slug: 'total-elf',
    name: 'Total / Elf',
    aliases: ['Total', 'Elf'],
    text: 'Oleje TotalEnergies i Elf dla motoryzacji i rolnictwa; Total także dla przemysłu.',
    finder: {
      href: 'https://lubconsult.totalenergies.com/dobierz-olej',
      text: 'Narzędzie TotalEnergies Lubconsult do doboru olejów Total i Elf.',
    },
  },
  {
    slug: 'mobil',
    name: 'Mobil',
    aliases: ['Mobil'],
    text: 'Oleje Mobil dla motoryzacji, rolnictwa i przemysłu.',
  },
  {
    slug: 'quator',
    name: 'Quator',
    aliases: ['Quator'],
    text: 'Oleje smarujące o wysokiej wydajności dla motoryzacji i przemysłu.',
    catalog: { href: `${CATALOGS}/katalog-quator.pdf`, size: '3,2 MB' },
  },
  {
    slug: 'amtra',
    name: 'Amtra',
    aliases: ['Amtra'],
    text: 'Chemia, kosmetyki i akcesoria samochodowe. Maxol jest autoryzowanym dystrybutorem grupy Amtra.',
  },
];

/** Kategorie oferty, w których występuje marka (kolejność jak w ofercie). */
export const brandCategories = (brand: Brand) => services.filter((s) => s.brands.some((b) => brand.aliases.includes(b)));

/** Marki występujące w danej kategorii (kolejność jak na liście marek, bez duplikatów Total/Elf). */
export const categoryBrands = (serviceBrands: readonly string[]) => brands.filter((b) => b.aliases.some((a) => serviceBrands.includes(a)));
