# MAXOL Sp. z o.o. — Dziennik procesu projektowego

> Kroki procesu, wymagania, rekomendacje i decyzje. Utworzono: 2026-10-11 · Ostatnia aktualizacja: 2026-10-11 (Krok 1)

## 1. Informacje o projekcie
| Pole | Wartość |
|---|---|
| Klient | MAXOL Sp. z o.o., Suchedniów (woj. świętokrzyskie) |
| Obecna strona | https://maxol.pl/ (Joomla) |
| Cel projektu | Nowa, szybka strona usługowo-handlowa zoptymalizowana pod SEO; cała treść i SEO edytowalne w Sanity |
| Technologia | Astro (statyczny HTML) + Sanity (CMS, Studio pod /studio) + hosting statyczny (Vercel) + webhook |
| Konwersja | do ustalenia (obecnie: formularz „Zamawiam kontakt” z województwem/powiatem + telefon) |
| Grupa docelowa | do potwierdzenia — wg researchu B2B: hurt, podhurt, sklepy motoryzacyjne/przemysłowe, stacje paliw i SKP, warsztaty, transport, rolnictwo, zakłady przemysłowe |
| Status | Etap 1 zakończony, Etap 2 (wywiad) w toku |

### 1.1 Profil firmy
- Dystrybutor olejów i środków smarnych. **Autoryzowany dystrybutor: ORLEN OIL i Castrol** (certyfikaty PDF na /o-nas). Grupa Amtra (chemia/kosmetyki samochodowe) — „autoryzowany dystrybutor” wg podstrony oferty.
- W ofercie także: Shell, Total/Elf, Mobil, Quator (osobna podstrona marki).
- Własne Centrum Dystrybucji w Suchedniowie, własna flota ciężarowa i dostawcza, **własne linie rozlewcze** (konfekcja olejów i płynów), magazyny półproduktów i wyrobów gotowych.
- Usługi dla przemysłu: „gospodarka smarowa”, doradztwo techniczne w doborze środków smarnych.
- Zatrudnienie: 30+ osób, w tym 10 w dziale handlowym; 4 przedstawicieli terenowych.
- Zasięg: 7 województw — świętokrzyskie, mazowieckie, lubelskie, podkarpackie, małopolskie, łódzkie, śląskie.
- Klienci: „ponad 1200” (o-nas).
- Historia: „35 lat doświadczenia” (o-nas, meta), „ponad 30 lat” (strona główna). Spółka w KRS od 2016 r. (kapitał wniesiony aportem — prawdopodobnie przekształcenie wcześniejszej działalności) → do potwierdzenia.

### 1.2 Oferta (podstrony /oferta/…)
| Kategoria | Treść na starej stronie | Marki |
|---|---|---|
| Oleje dla motoryzacji | osobowe, ciężarowe, motocykle; syntetyczne/półsyntetyczne/mineralne | ORLEN OIL, Castrol, Shell, Total, Elf, Quator, Mobil |
| Oleje dla rolnictwa | ciągniki, kombajny, maszyny do zbioru | j.w. |
| Oleje dla przemysłu | zakłady, huty, fabryki; doradztwo techniczne | ORLEN OIL, Castrol, Shell, Total, Mobil, Quator |
| Smary | plastyczne, uniwersalne, wysokotemperaturowe, wodoodporne | Orlen, Castrol |
| Płyny chłodnicze | glikol etylenowy i propylenowy | m.in. ORLEN OIL |
| Chemia samochodowa, kosmetyki i akcesoria | preparaty czyszczące, woski, pielęgnacja wnętrza, akcesoria | Amtra |
| Opakowania | butelki z tworzyw z dozownikiem 1 L i 0,5 L (+ ryciny PDF) — dla chemii gospodarczej, motoryzacji, ogrodnictwa | — |
| Quator (podstrona marki) | oleje dla motoryzacji i przemysłu, „mniejsze zużycie paliwa i emisja” | Quator |
| Promocje | **pusta** — tylko nagłówek i 1 zdanie | — |
| Pliki do pobrania | katalogi PDF: ORLEN OIL, Castrol, Shell, Quator; Total bez pliku | — |
| Dobierz olej | 4 linki do zewnętrznych doborników (Castrol, Orlen Oil, Total-Elf, Shell) | — |

### 1.3 Grupa docelowa (wg researchu)
Hurt i podhurt, sklepy motoryzacyjne i przemysłowe, stacje paliw i stacje kontroli pojazdów, warsztaty, firmy transportowe, gospodarstwa rolne, zakłady przemysłowe. Komunikacja na stronie mieszana: B2B („Co zyska Twoja firma”) i B2C („daj swojemu autu to, co najlepsze”).

### 1.4 Dane kontaktowe i rejestrowe (źródło + data weryfikacji)
**Rejestr (KRS API + biała lista MF, 2026-10-11) — zgodne ze stroną:**
- MAXOL SPÓŁKA Z OGRANICZONĄ ODPOWIEDZIALNOŚCIĄ, ul. Zagórska 20B, 26-130 Suchedniów (pow. skarżyski)
- KRS 0000609016 (Sąd Rejonowy w Kielcach, X Wydział KRS), NIP 6631871210, REGON 363158866
- Kapitał zakładowy 4 945 000,00 zł; w KRS od 21.03.2016; status VAT: czynny; PKD przeważające 46.90.Z

**Kontakt (strona /kontakt, 2026-10-11):**
| Dział | Telefon | E-mail |
|---|---|---|
| Ogólny / dział handlowy | +48 881 852 852, 41 25 46 011, 41 25 46 006, 41 25 46 007 | biuro@maxol.pl |
| Księgowość | 41 25 46 010 | ksiegowosc@maxol.pl |
| Magazyn | 41 25 46 005 | magazyn@maxol.pl |
| Przedstawiciel: Artur Miernik | 695 090 001 | amiernik@maxol.pl |
| Przedstawiciel: Kamil Kąpała | 695 090 002 | kkapala@maxol.pl |
| Przedstawiciel: Michał Guldon | 695 090 003 | mguldon@maxol.pl |
| Przedstawiciel: Adam Szewczyk | 695 090 004 | aszewczyk@maxol.pl |
Kontakt RODO w klauzuli formularza: mbujnowski@maxol.pl.

### 1.5 Audyt obecnej strony (2026-10-11)
**Identyfikacja:** logo — kropla oleju z literą „M”, granat ok. `#0A4A7C` + żółty ok. `#FAD900`, podpis „PARTNER W OLEJACH”. Fonty: Jost (bold/regular/thin), miejscami Poppins i Aleo (self-hosted, wiele krojów). Styl: szablon agencyjny, ciemne zdjęcia warsztatowe, dużo bieli.

**Technika i SEO:**
- ✅ HTTPS, viewport, `lang="pl-PL"`, unikalne title i description na każdej podstronie, sitemap (com_osmap), WebP.
- ❌ Brak JSON-LD (LocalBusiness, Organization, BreadcrumbList), brak Open Graph, brak canonical.
- ❌ robots.txt to domyślny plik Joomli; dodatkowo blokuje /polityka-prywatnosci/.
- ❌ Alty niskiej jakości: „ikona”, „wycieraczki” przy olejach przemysłowych, „opakowania” przy smarach, „olej napędowy” przy Quatorze.
- ❌ H1 na stronie głównej „Jesteśmy liderem…” jest dopiero pod formularzem; hero nie ma nagłówka z frazą.
- ❌ E-maile zaciemnione przez JS (bez JS ich nie widać).
- ⚠️ Joomla + jQuery/Bootstrap 3 + wiele krojów fontów → zbędny JS/CSS (wydajność do zmierzenia).
- ⚠️ Captcha w formularzach.

**Treść i UX:**
- ❌ **Niespójne liczby:** liczniki na stronie głównej „30+ lat / 5000+ asortyment / 9000+ stałych odbiorców biznesowych” vs /o-nas „35 lat / ponad 1200 Klientów”.
- ❌ Logotypy marek niespójne: w nagłówku ORLEN OIL + **LOTOS** (marka wycofana/połączona z Orlen), w sekcji USP Petronas + Lotos, w stopce Orlen + Castrol. Autoryzacja potwierdzona certyfikatami tylko dla Orlen i Castrol.
- ❌ „Promocje” — pusta podstrona; „Total” w plikach bez katalogu.
- ❌ Ogólnikowe teksty („liderem jakości”, „wielokrotnie nagradzani”, „doceniani w plebiscytach”) bez dowodów (jakie nagrody?).
- ⚠️ Formularz na stronie głównej dobrze wymyślony dla B2B (województwo + powiat → przedstawiciel), ale stoi nad H1 i dominuje w hero.
- ⚠️ Mocne wyróżniki (własne linie rozlewcze, flota, CD, 7 województw, 4 przedstawicieli) schowane w jednym akapicie na /o-nas.
- ⚠️ Mieszany ton B2B/B2C.

## 1A. Struktura strony głównej (zaakceptowana 2026-10-11)
| # | Sekcja (blok) | Zawartość | CTA | Tło |
|---|---|---|---|---|
| — | Nawigacja | pasek pomocniczy (tel., e-mail, katalogi) + logo, O NAS · OFERTA · MARKI · DOBIERZ OLEJ · BLOG · KONTAKT; przezroczysta na hero → biała sticky | Zapytaj o ofertę | — |
| 1 | Hero | wideo pełnoekranowe, H1 na dole po lewej, 1 zdanie, pauza wideo, strzałka | Zapytaj o ofertę + Zobacz ofertę | wideo |
| 2 | Partnerzy i liczby | ORLEN OIL + Castrol „Autoryzowany dystrybutor”; 35 lat · 9000+ · 5000+ · 7 województw | — | biel |
| 3 | Oferta | 6 kart kategorii + Opakowania | Więcej → | jasna szarość |
| 4 | Dla kogo | przemysł · transport i floty · warsztaty i sklepy · rolnictwo | Zapytaj o ofertę dla… | biel |
| 5 | Zaplecze Maxol | CD, flota, linie rozlewcze, doradztwo, przedstawiciele | Zapytaj o ofertę | granat |
| 6 | Jak współpracujemy | 4 kroki | Zapytaj o ofertę | biel |
| 7 | Marki w ofercie | ORLEN OIL, Castrol (karty + katalog), pozostałe monochromatycznie | Pobierz katalog | szarość |
| 8 | Dobierz olej | linki do doborników | Dobierz olej | żółty pasek |
| 9 | Wiedza / blog | 3 wpisy | Zobacz wszystkie | biel |
| 10 | FAQ | 5–6 pytań | Zadzwoń | szarość |
| 11 | Kontakt | formularz z województwem + kafelki | Wyślij zapytanie | biel |
| — | Stopka | logo, menu, NAP, ORLEN OIL + Castrol, dane rejestrowe KSH, polityki | — | granat |
| — | Pasek mobilny | Zadzwoń · Zapytaj o ofertę | — | — |
Pominięte (brak danych): opinie, realizacje → „do uzupełnienia”.

## 1B. Kolory i logo
Obecne: granat `#0A4A7C` (dominujący), żółty `#FAD900` (akcent w „M” i kropli). Dokładne HEX do potwierdzenia z księgi znaku, jeśli istnieje.

## 1C. Kierunek wizualny (styl, referencje, typografia, zdjęcia)
**Charakter:** solidny, rzeczowy, profesjonalny — nie premium. Odbiorcy: przemysł, B2B, warsztaty.
**Kolory:** wyłącznie z logo Maxol — granat `#0A4A7C`, żółty `#FAD900` (+ biel, szarości). Kontrast policzony: granat/żółty 6,56:1 ✅, biały/granat 9,2:1 ✅, **biały/żółty 1,4:1 ❌** → na żółtym przycisku zawsze granatowy tekst.
**Logo:** przenosimy obecne (potrzebna wersja SVG/PNG wysokiej jakości od klienta; tymczasowo logo.webp ze starej strony).

### Referencja: orlen.pl (analiza 2026-10-11)
| Element | Na orlen.pl | Co przenosimy |
|---|---|---|
| Hero | Pełnoekranowe wideo (autoplay, muted, loop, poster), ogromne H1 (84 px / 800) białe, wyrównane do lewej w dolnej części, pod nim jeden pełny przycisk CTA (wersaliki) | ✅ Układ 1:1: wideo na pełen ekran, H1 na dole po lewej, CTA; dodajemy drugi przycisk (obrys) i przycisk pauzy wideo (dostępność) |
| Nawigacja | Na hero przezroczysta (logo + lupa + hamburger); po przewinięciu biała, sticky: logo w kwadracie po lewej, główne pozycje WERSALIKAMI w 2 liniach, nad nimi mały pasek pomocniczy (Grupa ORLEN · Kontakt · język), cienka czerwona linia na dole | ✅ Przezroczysta na wideo → biała po przewinięciu; pasek pomocniczy (telefon, e-mail, katalogi); wersaliki; cienka **żółta** linia zamiast czerwonej; dokładamy przycisk CTA |
| Typografia | Orlen Sans (firmowy, niedostępny), bardzo grube nagłówki 800, H2 sekcji ~49 px, H3 kart ~37 px, nadtytuły małe wersaliki | ✅ Mocny grotesk z Google Fonts o podobnym charakterze, wagi 700–800, nadtytuły małe wersaliki |
| Karty | Duże karty z białym tłem i ramką, nadtytuł kategorii, gruby tytuł, krótki tekst, przycisk z obrysem „WIĘCEJ” lub link „Więcej →” | ✅ Karty oferty i wpisów w tym stylu |
| Rytm sekcji | Hero → duże karty 2-kolumnowe naprzemiennie ze zdjęciem → lista aktualności z datami w 4 kolumnach + „Zobacz wszystkie” → sekcje tematyczne zdjęcie + karta tekstu | ✅ Naprzemienność kart i list, dużo bieli, wyraźne nagłówki sekcji |
| Stopka | Jasnoszara, kolumny linków, ikony social, linia prawna | ✅ Układ kolumn; dodajemy dane rejestrowe (KSH) i logotypy ORLEN OIL + Castrol |

**Sponsorzy:** logotypy ORLEN OIL i Castrol obowiązkowo — co najmniej w stopce; pozostałe marki w sekcjach pod hero (nie w nagłówku).
**Hero:** wideo wygenerowane w Higgsfield, dopasowane do marki (przykładowe, AI — do ewentualnej zamiany na prawdziwe ujęcia).

## 2. Status kroków
| # | Krok | Status | Data |
|---|---|---|---|
| 0 | Start, ustalenie procesu (skill + Astro/Sanity) | ✅ | 2026-10-11 |
| 1 | Research starej strony | ✅ | 2026-10-11 |
| 2 | Wywiad z projektantem (fonty: Archivo; zdjęcia/logo — częściowo) | ✅ | 2026-10-11 |
| 3 | Struktura strony głównej | ✅ | 2026-10-11 |
| 4 | Budowa sekcji (komponenty Astro, dane przykładowe) | 🔄 porcja 1/4 | 2026-10-11 |
| 5 | Przegląd całości | ⏳ | |
| T1 | Schematy Sanity + Studio /studio | ⏳ | |
| T2 | Podłączenie bloków i podstron do Sanity (GROQ, dynamiczne trasy) | ⏳ | |
| T3 | SEO techniczne (Seo, JSON-LD, sitemap, robots, przekierowania) | ⏳ | |
| T4 | Wdrożenie (GitHub, Vercel, webhook, domena) | ⏳ | |
| 6 | Opis projektu + instrukcja panelu dla klienta | ⏳ | |

Legenda: ⏳ Oczekuje · 🔄 W toku · ✅ Zakończone · ⛔ Wstrzymane

## 3. Wymagania
### 3.1 Funkcjonalne
| ID | Wymaganie | Źródło / krok | Priorytet |
|---|---|---|---|
| WF-01 | Cała treść edytowalna w Sanity (Studio pod /studio), strona budowana z bloków (dodawanie, kolejność) | Brief | Wysoki |
| WF-02 | Typy dokumentów: strona, usługa/kategoria oferty, wpis blogowy, ustawienia globalne (singleton), przekierowanie 301 | Brief | Wysoki |
| WF-03 | Dynamiczne trasy z edytowalnym slugiem | Brief | Wysoki |
| WF-04 | Przebudowa strony po publikacji treści (webhook Sanity → Vercel) | Brief | Wysoki |
| WF-05 | Zachowanie adresów lub przekierowania 301 ze starych URL-i (/oferta/…, /o-nas, /kontakt itd.) | Krok 1 | Wysoki |
| WF-06 | Katalogi PDF do pobrania (zarządzane w Sanity) | Krok 1 | Średni |
| WF-07 | Kontakt do 4 przedstawicieli (prawdopodobnie wg regionu) | Krok 1 | Średni |

### 3.2 Niefunkcjonalne (dostępność, wydajność, SEO, wygląd)
| ID | Wymaganie | Źródło / krok | Priorytet |
|---|---|---|---|
| WN-01 | Statyczny HTML, JS tylko tam, gdzie potrzebny; animacje w CSS | Brief | Wysoki |
| WN-02 | Obiekt `seo` w każdym dokumencie (title ≤60, description ≤160, canonical, noindex, OG) + komponent `<Seo />` z wartościami zapasowymi | Brief | Wysoki |
| WN-03 | JSON-LD: Service, LocalBusiness, FAQPage, BreadcrumbList | Brief | Wysoki |
| WN-04 | Sitemap bez stron noindex, robots.txt | Brief | Wysoki |
| WN-05 | Wymagany alt przy każdym obrazie; H1 jako osobne pole | Brief | Wysoki |
| WN-06 | Bardzo dobre Core Web Vitals, zoptymalizowane obrazy | Brief | Wysoki |
| WN-07 | Linki wewnętrzne jako referencje między dokumentami | Brief | Wysoki |

## 4. Rekomendacje
| ID | Rekomendacja | Uzasadnienie | Krok | Status |
|---|---|---|---|---|
| R-01 | Ujednolicić liczby (lata, klienci, asortyment) i pokazywać tylko potwierdzone | Sprzeczne dane na starej stronie obniżają wiarygodność | 1 | Propozycja |
| R-02 | Pokazywać tylko marki z potwierdzoną współpracą; usunąć Lotos/Petronas, jeśli nieaktualne | Logotypy niespójne, Lotos to marka historyczna | 1 | Propozycja |
| R-03 | Wyeksponować wyróżniki: własne linie rozlewcze, flota, Centrum Dystrybucji, 7 województw, przedstawiciele | Konkretne przewagi zamiast ogólników „lider jakości” | 1 | Propozycja |
| R-04 | Główny przekaz B2B; ścieżka B2C (dobór oleju) jako poboczna | Model sprzedaży hurtowej, formularz z regionem | 1 | Do decyzji |
| R-05 | Zachować formularz z województwem → przypisanie do przedstawiciela, ale poza hero (lub uproszczony) | Dobry pomysł konwersyjny, obecnie przytłacza H1 | 1 | Propozycja |
| R-06 | Promocje: ukryć lub zasilać z Sanity (z datą ważności) | Pusta podstrona szkodzi | 1 | Do decyzji |
| R-07 | Zachować adresy /oferta/[slug] (lub 301) | Ciągłość SEO | 1 | Propozycja |
| R-08 | SEO lokalne: LocalBusiness z areaServed = 7 województw | Faktyczny zasięg dystrybucji | 1 | Propozycja |

## 5. Do sprawdzenia / potwierdzenia z klientem
- [x] ~~Liczby~~ → decyzja: 35 lat, 9000+ odbiorców, 5000+ produktów (warto i tak potwierdzić u klienta przed publikacją)
- [x] ~~Marki~~ → decyzja: ORLEN OIL + Castrol wyeksponowane, reszta jako inne marki; Lotos i Petronas pomijamy
- [ ] Jakie nagrody/plebiscyty („regularnie doceniani w plebiscytach”)?
- [ ] Przypisanie przedstawicieli do województw
- [ ] Czy oferta opakowań jest nadal aktualna
- [ ] Czy promocje będą realnie prowadzone
- [ ] Zdjęcia: własne (magazyn, flota, linie rozlewcze, zespół)?
- [ ] Księga znaku / dokładne kolory logo, wektorowe logo Maxol (SVG) — obecne webp 207×90 px jest za małe na ekrany retina
- [ ] Wektorowe logotypy ORLEN OIL i Castrol od sponsorów (z ich zasad użycia znaku) — tymczasowo pliki ze starej strony
- [ ] Zdjęcia kategorii oferty — tymczasowo ze starej strony (stockowe); docelowo własne lub nowe
- [ ] Zdjęcie do sekcji Zaplecze — tymczasowo kadr z wideo AI (miękki, 960 px); potrzebne prawdziwe zdjęcia Centrum Dystrybucji, floty i linii rozlewczych
- [ ] Zdjęcie Opakowań — wygenerowane AI (`src/assets/generated/opakowania-ai.jpg`), przykładowe; poprosić klienta o zdjęcie prawdziwych butelek
- [ ] Wideo hero: obecnie szkic AI 480p (przykładowy); w wersji Full HD poprosić o europejską ciężarówkę (w szkicu amerykański ciągnik)

## 6. Decyzje
| Data | Decyzja | Uzasadnienie / źródło |
|---|---|---|
| 2026-10-11 | Ze skilla „Nowa strona” bierzemy proces projektowy (research, wywiad, struktura, budowa sekcji po 1–2, przegląd, opis); całą funkcjonalność realizujemy w Astro + Sanity zamiast makiety HTML pod WordPress | Projektant |
| 2026-10-11 | Sekcje budujemy od razu jako komponenty Astro z danymi przykładowymi, potem podłączamy Sanity | Projektant (akceptacja bloku 1) |
| 2026-10-11 | Komunikacja B2B; dobór oleju (B2C) jako ścieżka poboczna | Projektant — R-04 |
| 2026-10-11 | Główna konwersja: formularz zapytania z województwem (→ przedstawiciel), drugie CTA: telefon 881 852 852; formularz poza hero, w hero H1 z frazą | Projektant — R-05 |
| 2026-10-11 | Struktura: Główna, O nas, Kontakt, Oferta (6 kategorii + Opakowania), Marki (zamiast /quator i /pliki-do-pobrania, katalog PDF przy marce), Dobierz olej, Promocje ukryte, Blog od startu (2–3 wpisy) | Projektant |
| 2026-10-11 | Zachowujemy adresy /oferta/[slug]; 7 województw jako obszar działania | Projektant — R-07, R-08 |
| 2026-10-11 | Liczby: bierzemy wyższe wartości — **35 lat, 9000+ stałych odbiorców biznesowych, 5000+ produktów w asortymencie** | Projektant — R-01 |
| 2026-10-11 | **ORLEN OIL i Castrol obowiązkowo wyeksponowane** (sponsorzy projektu strony); pozostałe marki (Shell, Total/Elf, Mobil, Quator, Amtra) w strukturze jako „inne marki w ofercie” | Projektant — R-02 |
| 2026-10-11 | Referencja: orlen.pl — układ, typografia, hero z wideo, rytm sekcji, nawigacja | Projektant |
| 2026-10-11 | Styl solidny, rzeczowy, profesjonalny (nie premium); odbiorcy: przemysł, B2B, warsztaty | Projektant |
| 2026-10-11 | Kolory i logo z obecnej marki Maxol | Projektant |
| 2026-10-11 | ~~Hero dwukolumnowe ze zdjęciem~~ (nieaktualne) → hero pełnoekranowe z wideo jak na orlen.pl; nawigacja przezroczysta lub nie — wg kontrastu | Projektant |
| 2026-10-11 | Wideo hero generujemy w Higgsfield | Projektant (koszt do akceptacji) |
| 2026-10-11 | Struktura strony głównej zaakceptowana (sekcja 1A); font Archivo | Projektant |
| 2026-10-11 | **Bez nadtytułów (eyebrow) nad nagłówkami i bez kursywy w nagłówkach** — anty-slop | Projektant |
| 2026-10-11 | Pierwsza porcja: nawigacja + hero + partnerzy i liczby + oferta | Projektant |
| 2026-10-11 | Wideo: najpierw szkic 480p (24 kr.), Full HD dopiero na samym końcu projektu | Projektant |
| 2026-10-11 | ~~Liczby w rzędzie z liniami (border) w sekcji partnerów~~ (nieaktualne — „slop”) → osobny blok „Zasięg”: liczby wplecione w jedno duże zdanie + mapa Polski z 7 obsługiwanymi województwami i Suchedniowem, granatowe tło, liczby w żółtym | Projektant (krytyka), propozycja Claude |
| 2026-10-11 | Hero w three.js: pomysł A „Kropla” (kropla oleju liczona na żywo) + finał ze strugą do następnej sekcji; plac zabaw pod /o-nas (noindex) | Projektant |
| 2026-10-11 | Kształt kropli jak w logo: smukły, wklęsły dziubek (nie „jajko”); olej przezroczysty, złocisty jak miód (nie „żółtko”); drobne pęcherzyki powietrza | Projektant (uwagi w trakcie) |
| 2026-10-11 | Kropla wyrównana z blokiem tekstu (czubek = góra H1, dół = dół przycisków); blok tekstu + kropla wyżej (wyśrodkowane pod nawigacją) | Projektant |
| 2026-10-11 | Finał: kropla w całości spływa strugą i znika pod białą taflą następnej sekcji | Projektant |
| 2026-10-11 | Oferta: ~~karty 3×2 + pasek Opakowania + przycisk „Cała oferta”~~ (nieaktualne) → rozwijane panele (7 pionowych pasów), pierwszy otwarty: Oleje dla przemysłu | Projektant |
| 2026-10-11 | Zdjęcie Opakowań wygenerowane w Higgsfield (0,25 kr.) — przykładowe, do zastąpienia | Projektant |
| 2026-10-11 | Kolor nagłówków i wyróżnionych tekstów na jasnym tle: ~~#0A4A7C~~ → granat #062B49 (token `--c-heading`) | Projektant |
| 2026-10-11 | Tematy SEO (JSON-LD, OG, canonical itd.) odkładamy na koniec, po warstwie wizualnej; teraz: struktura strony głównej + wygląd | Projektant |

## 7. Otwarte pytania
- Strona główna: zostaje wideo czy przenosimy kroplę three.js z /o-nas? (decyzja po testach)

## 8. Dziennik kroków
### Krok 0 — Start (2026-10-11)
**Polecenie:** zbudować stronę headless Astro + Sanity wg skilla „Nowa strona”.
**Co zrobiono:** sprawdzono środowisko (Node v24.16.0, npm 11.13.0, git 2.50.1 — OK), wczytano skill, wskazano rozbieżności skilla z Astro/Sanity.
**Następne kroki:** research starej strony.

### Krok 1 — Research starej strony (2026-10-11)
**Polecenie:** stara strona https://maxol.pl/, pytania o klienta wyciągnąć z niej.
**Co zrobiono:** pobrano 17 podstron + robots.txt + sitemap, wyciągnięto treści, kontakty (e-maile odczytane w przeglądarce), dane rejestrowe zweryfikowane w API KRS i białej liście MF, próbkowano kolory logo, audyt SEO/UX.
**Ustalenia:** patrz 1.1–1.5.
**Wymagania / rekomendacje:** WF-05…07, R-01…R-08.
**Następne kroki:** wywiad (etap 2), blok 1: cel i konwersja.

### Krok 2a — Wywiad, blok 1: cel, odbiorcy, struktura (2026-10-11)
**Ustalenia:** wszystkie propozycje zaakceptowane (patrz Decyzje). Liczby: wyższe wartości. Marki: ORLEN OIL + Castrol jako sponsorzy. SEO techniczne na koniec.
**Następne kroki:** blok 2: styl i strony referencyjne, kolory.

### Krok 4a — Budowa: nawigacja, hero, partnerzy i liczby, oferta (2026-10-11)
**Polecenie:** zbudować nawigację i 3 pierwsze sekcje; bez nadtytułów i kursywy; wideo — szkic.
**Co zrobiono:**
- Projekt Astro 7 (szablon minimal, TypeScript strict), font Archivo self-hosted (@fontsource-variable, z polskimi znakami).
- Struktura pod Sanity: `src/data/site.ts` (przyszłe Ustawienia), `src/data/home.ts` (strona = lista bloków z `_type`/`_key`, usługi jako osobne obiekty), `BlockRenderer.astro` mapuje blok → komponent.
- Komponenty: `Header` (pasek pomocniczy + główny, przezroczysty na hero → biały z żółtą linią po przewinięciu, menu mobilne z obsługą Esc), `Hero` (wideo, kadr jako LCP, pauza, `prefers-reduced-motion`, oszczędzanie danych), `Partners` (ORLEN OIL + Castrol, 4 liczby), `OfferGrid` (6 kart + pasek Opakowania), `MobileCtaBar`.
- Wideo: Higgsfield Seedance 2.5, szkic 480p, 8 s, 16:9, bez dźwięku — 24 kredyty (saldo przed: 362,63). Plik `public/video/hero-draft.mp4` (2,2 MB).
- Obrazy przez `astro:assets` → automatycznie WebP w kilku rozmiarach (np. zdjęcie 142 kB → 35 kB).
**Kontrola jakości:** kontrasty policzone (sekcja 1C + biały na hero > 8:1 dzięki nakładce, --c-muted 7,1:1 / 6,45:1 na szarym); jedno H1; alty; focus widoczny; przyciski 52 px; zrzuty 1440 px i 375 px — brak poziomego przewijania; `astro check` 0 błędów; build OK; brak zewnętrznych plików JS.
**Następne kroki:** uwagi projektanta do porcji 1; decyzja wideo vs three.js; porcja 2: Dla kogo + Zaplecze Maxol.

### Krok 4b — Przeprojektowanie liczb (2026-10-11)
**Polecenie:** rząd liczb z liniami to typowy slop; znaleźć unikalne wzorce sekcji z liczbami.
**Research:** wyszukiwanie (Awwwards, galerie) dało mało konkretów dla branży; wykorzystano znane wzorce: liczby wplecione w zdanie (np. licznik w nagłówku stripe.com) i wizualizacja związana z treścią zamiast dekoracji.
**Co zrobiono:** nowy blok `Reach` — zdanie „Od 35 lat zaopatrujemy 9000+ firm w 7 województwach. W naszym Centrum Dystrybucji czeka na nie 5000+ produktów.” + mapa SVG (granice: github.com/ppatrzyk/polska-geojson, uproszczone, ~15 kB gzip), obsługiwane województwa podświetlają się kolejno przy przewijaniu (tylko CSS, scroll-driven animations; bez wsparcia — stan końcowy), pulsujący punkt Suchedniowa (wyłączony przy „ogranicz ruch”). Liczby usunięte z bloku Partnerzy. Kontrast: żółty na #062B49 ≈ 11:1, biel 72% na granacie > 7:1.
**Następne kroki:** akceptacja projektanta.

### Krok 4c — Poprawka animacji mapy (2026-10-11)
**Zgłoszenie:** województwa nie zapalały się przy przewijaniu (tylko pulsująca kropka).
**Przyczyna:** Chrome błędnie liczy pozycję elementów SVG dla CSS `animation-timeline: view()` — animacja od razu była w stanie końcowym.
**Poprawka:** mały skrypt (IntersectionObserver): gdy 45% mapy jest na ekranie, najpierw pojawia się punkt Suchedniowa, potem województwa zapalają się kolejno (od świętokrzyskiego, co 0,16 s). Bez JS / przy „ogranicz ruch” — od razu stan końcowy. Zweryfikowane w przeglądarce (stan początkowy → końcowy).

### Krok 4d — Hero w three.js: „Kropla” (2026-10-11)
**Polecenie:** popisowe hero w three.js na /o-nas (kopia strony głównej), pomysł A + finał ze strugą.
**Co zrobiono:**
- `src/pages/o-nas.astro` (kopia bloków strony głównej, blok `heroLiquid`, noindex), `src/components/blocks/HeroLiquid.astro`, `src/scripts/liquid/LiquidHero.ts` (three.js, fizyka sprężyn, kursor, przewijanie, adaptacyjna jakość), `src/scripts/liquid/liquid.frag` (shader).
- Rendering: raymarching pola odległości; kształt kropli z profilu: kula + wklęsły dziubek r(y)=A·(T−y)^K styczny do kuli, z płynnym przejściem (bez szwu w załamaniu). Materiał: IOR 1,47, pochłanianie Beer–Lamberta (złoto → bursztyn), do 3 odbić wewnętrznych ważonych Fresnelem, softboxy studyjne w odbiciach, dwie lampy za kroplą widoczne przez „soczewkę”, 16 drobnych pęcherzyków powietrza (analitycznie), ACES, ziarno, winieta.
- Interakcja: kropla przyciąga się do kursora, galaretowate kołysanie, kropelki odrywają się przy szybkim ruchu i zlewają z powrotem (smooth-min); bez myszy — łagodny ruch automatyczny.
- Przewijanie (sekcja 175 svh, scena sticky): wydłużenie kropli → struga spada → biała tafla następnej sekcji podnosi się z falami od miejsca uderzenia i złotą smugą → kropla opróżnia się, opada i znika pod taflą → czysta biel = początek sekcji partnerów. Tekst hero znika na początku przelewania.
- Wydajność: three.js ładowany dynamicznie po `load` + idle (136 kB gzip, tylko na /o-nas), raymarching tylko w obszarze kropli (AABB), DPR maks. 1,5 z automatycznym obniżaniem przy wolnych klatkach, pętla zatrzymana poza ekranem; M1: 60 fps.
- Dostępność: przycisk pauzy, `prefers-reduced-motion` → statyczny kadr bez przypinania, brak WebGL → granatowe tło CSS.
**Iteracje wg uwag:** płaska kula → materiał oleju; czarny czubek (TIR) → odbicia wewnętrzne; „jajko” → smukły dziubek jak w logo; „żółtko” → przezroczysty miodowy olej; bąbelki; obniżenie i wyrównanie z tekstem; całkowite spłynięcie w finale; podniesienie bloku hero.
**Do potwierdzenia:** czy kropla zastępuje wideo na stronie głównej.
**Następne kroki:** sekcja oferty (7 kafelków, bez przycisku „Cała oferta” i paska Opakowania).

### Krok 4e — Oferta: rozwijane panele (2026-10-11)
**Polecenie:** usunąć przycisk „Cała oferta” i pasek Opakowania; 7 kafelków, wszystkie ze zdjęciem; zaproponować układ.
**Propozycje:** bento / rozwijane panele / lista z podglądem → wybór projektanta: **rozwijane panele**, priorytet: Oleje dla przemysłu.
**Co zrobiono:** `OfferPanels.astro` (zastąpił `OfferGrid.astro`): desktop — 7 pasów z pionowymi nazwami, aktywny rozszerza się (flex-grow) i pokazuje zdjęcie, tytuł, opis, „Więcej →”; aktywacja najechaniem i klawiaturą (Tab); treść o stałej szerokości (bez przelewania w trakcie animacji). Telefon/tablet — lista kart rozwijanych dotknięciem (pierwsze dotknięcie rozwija, drugie przechodzi do podstrony). Bez JS pierwszy panel otwarty, wszystkie linki działają. Zdjęcie Opakowań: Higgsfield GPT Image 2.5, 0,25 kr.
**Poprawka po teście:** klik myszą w zwinięty panel od razu nawigował (fokus przy mousedown aktywował panel) → aktywacja z fokusu tylko dla `:focus-visible`.
**Następne kroki:** sekcja „Dla kogo” + „Zaplecze Maxol”.

### Krok 4f — Dla kogo + Zaplecze Maxol (2026-10-11)
**Polecenie:** kolejne sekcje wg planu; nagłówki ciemniejsze (granat).
**Co zrobiono:**
- Token `--c-heading: #062B49` (14,5:1 na bieli) dla nagłówków, linków ze strzałką i przycisków z obrysem.
- `Industries.astro` („Dla kogo”): po lewej przyklejony nagłówek + opis + CTA, po prawej 4 branże (przemysł, transport i floty, hurt/sklepy/warsztaty, rolnictwo) z grupą odbiorców, opisem i linkami do kategorii oferty (linki wewnętrzne → w Sanity referencje). Bez ikon w kółkach; treści wyłącznie z faktów ze starej strony.
- `Facilities.astro` („Zaplecze”): granatowa sekcja, zdjęcie (tymczasowo kadr z wideo AI, bez podpisu sugerującego, że to prawdziwy magazyn klienta), nagłówek-wyróżnik, 4 przewagi (CD, flota, linie rozlewcze, doradztwo), CTA.
**Kontrola:** desktop 1440 i telefon 375, brak przewijania w poziomie; `astro check` 0 błędów.
**Następne kroki:** Jak współpracujemy + Marki w ofercie.
