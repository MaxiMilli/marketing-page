import type { ReactNode } from "react";
import { Container } from "./container";

/**
 * Layout für Textseiten (Impressum, Datenschutz, AGB).
 * Die Typografie kommt aus lokalen Selektoren statt aus @tailwindcss/typography,
 * damit das Projekt ohne Zusatz-Plugin auskommt.
 */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <Container>
      <div className="grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <header className="md:col-span-4">
          <h1 className="text-headline font-extrabold text-balance">{title}</h1>
          <p className="label mt-6 text-ink-soft">Stand: {updated}</p>
        </header>

        <div
          className="space-y-6 text-lg leading-relaxed text-pretty text-ink-soft md:col-span-7 md:col-start-6
            [&_a]:text-signal-deep [&_a]:underline [&_a]:underline-offset-4
            [&_h2]:mt-14 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:tracking-tight [&_h2]:text-ink
            [&_li]:pl-1 [&_strong]:font-bold [&_strong]:text-ink
            [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
        >
          {children}
        </div>
      </div>
    </Container>
  );
}
