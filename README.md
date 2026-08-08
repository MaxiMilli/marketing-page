# marketing-page

Marketing-Page der Code Crush GmbH — Next.js 16 (App Router), React 19,
Tailwind CSS v4, TypeScript. Deployment auf Vercel.

## Loslegen

```bash
npm install
npm run dev
```

Läuft auf http://localhost:3000.

## Befehle

| Befehl              | Zweck                                    |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Dev-Server                               |
| `npm run build`     | Production-Build (wie auf Vercel)        |
| `npm run start`     | Production-Build lokal starten           |
| `npm run typecheck` | TypeScript prüfen                        |
| `npm run lint`      | ESLint                                   |

## Inhalte ändern

Alle Texte, Navigationspunkte und Kontaktdaten liegen in
[`lib/site.ts`](lib/site.ts). Für Textänderungen reicht diese eine Datei.

Farben, Schriftgrössen und Abstände sind Design-Tokens im `@theme`-Block von
[`app/globals.css`](app/globals.css).

## Struktur

```
app/            Routen, Layout, Metadata, Sitemap, Robots
components/
  sections/     Sektionen der Startseite
  ui/           Container, Section, Button, LegalPage
lib/site.ts     Inhalte und Metadaten
```

## Deployment

Repository auf Vercel importieren, Framework-Preset **Next.js** — sonst nichts.

Environment Variable für Production setzen:

```
NEXT_PUBLIC_SITE_URL=https://codecrush.ch
```

Siehe [`.env.example`](.env.example).

## Vor dem Go-live

Impressum, Datenschutz, Kontaktdaten sowie die Kennzahlen und das Kundenzitat
sind Platzhalter. Die vollständige Liste steht in [`CLAUDE.md`](CLAUDE.md) unter
„Offene Punkte".
