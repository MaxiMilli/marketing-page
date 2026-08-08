# CLAUDE.md

Marketing-Page der Code Crush GmbH. Statische Next.js-Seite, Deployment auf Vercel.

## Befehle

```bash
npm run dev        # Dev-Server auf http://localhost:3000
npm run build      # Production-Build (muss vor jedem Push grün sein)
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
```

Nach inhaltlichen oder strukturellen Änderungen immer `npm run build` laufen lassen —
das ist derselbe Schritt, an dem Vercel scheitern würde.

## Stack

- **Next.js 16**, App Router, React 19, alles Server Components
- **Tailwind CSS v4** — Konfiguration ausschliesslich per CSS in `app/globals.css`.
  Es gibt **keine** `tailwind.config.js` und es soll auch keine geben.
- **TypeScript** strict, Pfad-Alias `@/*` zeigt auf das Projekt-Root
- **next/font** lädt Archivo (Sans) und IBM Plex Mono selbst-gehostet
- Keine UI-Library, keine Animations-Library, keine CMS-Anbindung

## Struktur

```
app/
  layout.tsx          Fonts, Metadata, Header/Footer, Skip-Link
  page.tsx            Startseite: setzt die Sektionen zusammen + JSON-LD
  globals.css         Design-Tokens (@theme), Basis-Styles, Utilities
  sitemap.ts          Routen hier ergänzen, wenn eine Seite dazukommt
  robots.ts
  not-found.tsx
  impressum/          Platzhaltertext, muss vor Go-live ersetzt werden
  datenschutz/        Platzhaltertext, muss vor Go-live ersetzt werden
components/
  site-header.tsx     Einzige Client-Komponente (Mobile-Menü)
  site-footer.tsx
  sections/           Je eine Datei pro Sektion der Startseite
  ui/                 Container, Section, Button, LegalPage
lib/
  site.ts             Sämtliche Texte, Navigation, Kontaktdaten
```

## Arbeitsregeln

**Inhalte gehören in `lib/site.ts`, nicht in Komponenten.** Wenn ein Text
geändert werden soll, ist das eine Änderung an dieser einen Datei. Neue Sektion
= neuer Export in `lib/site.ts` + neue Datei unter `components/sections/`.

**Farben und Schriftgrössen kommen aus `@theme` in `app/globals.css`.** Keine
Hex-Werte und keine `text-[42px]`-Ad-hoc-Werte in Komponenten. Wenn ein Token
fehlt, wird es in `@theme` ergänzt.

**Server Components sind der Default.** `"use client"` nur, wenn eine Komponente
wirklich State oder Browser-APIs braucht. Aktuell trifft das nur auf
`site-header.tsx` zu.

**Kein `tailwind.config.js` anlegen.** Tailwind v4 wird über CSS konfiguriert.
Vorschläge aus älteren Tutorials, eine JS-Config anzulegen, sind hier falsch.

## Commit & Push nach jeder Änderung

**Sobald eine Änderung fertig umgesetzt und verifiziert ist, wird sie committed
und nach `origin main` gepusht — ohne Rückfrage.** Das ist die Standarderwartung
in diesem Repo, nicht die Ausnahme.

Der Push auf `main` löst bei Vercel einen Production-Deploy aus. Jeder Commit
geht also direkt online, ohne Review-Schritt dazwischen. Daraus folgt die
Reihenfolge, die nicht abgekürzt wird:

1. Änderung umsetzen
2. `npm run build` — muss grün sein
3. Ergebnis prüfen (bei sichtbaren Änderungen im Browser anschauen)
4. `git add` der betroffenen Dateien, committen, `git push`

**Ein roter Build wird nie gepusht.** Scheitert Schritt 2 oder 3, wird der
Fehler behoben, bevor überhaupt committed wird.

Weitere Regeln:

- Direkt auf `main`, kein Feature-Branch. Das ist hier bewusst so.
- Commit-Messages auf Deutsch, knapp und im Imperativ — „Standorte auf Chur und
  Bern umstellen", nicht „updates".
- Ein Commit pro abgeschlossener Änderung, nicht ein Sammelcommit am Ende einer
  langen Session.
- Nicht committen, wenn die Arbeit unfertig ist oder noch eine offene Frage an
  den Nutzer hängt. Dann erst fragen, dann fertigstellen, dann pushen.
- `.env`-Dateien und Secrets gehören nie in einen Commit; die `.gitignore` deckt
  das ab und wird nicht aufgeweicht.

## Design-Sprache

Swiss Typographic: warmes Papierweiss, tiefschwarze Schrift, ein einziges
Signalrot als Akzent. Strenges 12-Spalten-Raster, Haarlinien als Trenner,
Mono-Labels in Versalien für Meta-Informationen, sehr grosse fette Headlines mit
enger Laufweite.

Der Akzent bleibt Akzent — Rot ist für CTAs, Ziffern und einzelne Satzzeichen
reserviert, nicht für Flächen quer über die Seite. Eine zweite Akzentfarbe wird
nicht eingeführt.

Kontrast: `--color-signal` erreicht 4.6:1 auf Papier und 5.1:1 gegen Weiss. Wer
den Farbwert ändert, prüft beide Werte neu. Für kleine Fliesstexte auf Papier
`--color-signal-deep` verwenden.

Bewegung: ein gestaffelter Reveal beim Laden des Heros (`.stagger`), der Ticker
und Hover-States. Mehr nicht. `prefers-reduced-motion` ist in `globals.css`
global abgehandelt und darf nicht umgangen werden.

## Sprache

Deutsche Texte, Schweizer Rechtschreibung: **ss statt ß**, "Grösse", "muss",
"ausserdem". Zahlen mit Apostroph als Tausendertrennzeichen (CHF 5'000).
Ansprache per Sie. Nüchterner Ton, konkrete Aussagen statt Superlative —
"in acht bis zwölf Wochen live" schlägt "blitzschnelle Umsetzung".

## Deployment

Vercel, Framework-Preset Next.js, keine Sonderkonfiguration nötig. Remote ist
`origin` (github.com/MaxiMilli/marketing-page), Production-Branch ist `main` —
jeder Push dorthin deployt. Siehe „Commit & Push nach jeder Änderung".

Einzige Environment Variable: `NEXT_PUBLIC_SITE_URL` (siehe `.env.example`).
Sie steuert `metadataBase`, Canonical-URLs und die Sitemap. Ohne sie fällt die
Seite auf `https://codecrush.ch` zurück, was in Preview-Deployments falsche
Canonicals erzeugt.

## Offene Punkte

- Impressum und Datenschutz sind Platzhalter und brauchen echte Firmendaten
  sowie eine juristische Prüfung
- Standorte in `lib/site.ts` (Chur als Hauptsitz, Bern als Zweitstandort) sind
  mit Platzhalter-Adressen und -Telefonnummern hinterlegt; der erste Eintrag
  gilt als Hauptsitz und landet in Impressum, Datenschutz und JSON-LD
- Referenz-Zitat und Kennzahlen im Hero sind erfunden — vor Go-live durch echte
  ersetzen oder entfernen
- Kein OG-Image hinterlegt; `app/opengraph-image.tsx` oder eine statische Datei
  ergänzen
- Kein Favicon; `app/icon.svg` ergänzen
- Kein Kontaktformular — der CTA verlinkt auf mailto und tel
