# Maxol — strona WWW (Astro + Sanity)

Nowa strona hurtowni olejów i smarów MAXOL Sp. z o.o. (Suchedniów).
Frontend: [Astro](https://astro.build) (statyczny HTML), docelowo treści z [Sanity](https://www.sanity.io).

Przebieg projektu, decyzje i lista „do uzupełnienia”: [PROCES_PROJEKTOWY.md](PROCES_PROJEKTOWY.md).

## Uruchomienie

Wymagany Node.js 22.12 lub nowszy.

```bash
npm install
npm run dev
```

Podgląd: http://localhost:4321

| Komenda | Działanie |
|---|---|
| `npm run dev` | serwer deweloperski z podglądem na żywo |
| `npm run build` | wersja produkcyjna do folderu `dist/` |
| `npm run preview` | podgląd wersji produkcyjnej |
| `npx astro check` | sprawdzenie typów i błędów |

## Struktura

```
src/
  pages/            podstrony (index = strona główna, o-nas = plac zabaw z hero three.js)
  layouts/          szkielet strony (head, nagłówek, pasek mobilny)
  components/
    blocks/         bloki sekcji (hero, partnerzy, zasięg, oferta, …) — 1 blok = 1 komponent
    BlockRenderer   zamienia listę bloków na komponenty
  data/             treści przykładowe w kształcie przyszłych dokumentów Sanity
  scripts/liquid/   hero z kroplą oleju (three.js + shader)
  styles/           zmienne (kolory, fonty, odstępy) i style globalne
  assets/           obrazy (optymalizowane automatycznie przez Astro)
public/             pliki serwowane bez zmian (wideo, favicon)
```

## Hosting

Vercel wykrywa Astro automatycznie: build `npm run build`, katalog wyjściowy `dist`.
