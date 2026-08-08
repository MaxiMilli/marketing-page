import type { ReactNode } from "react";
import { Container } from "./container";

/**
 * Sektions-Rahmen mit Hairline oben — hält den vertikalen Rhythmus der Seite
 * an einer Stelle statt in jeder Sektion einzeln.
 */
export function Section({
  id,
  children,
  className = "",
  bleed = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  /** true = ohne Container, Inhalt geht bis an den Viewport-Rand. */
  bleed?: boolean;
}) {
  return (
    <section
      id={id}
      className={`border-t border-rule py-20 md:py-32 ${className}`}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

/** Mono-Label + optionale Nummer, linksbündig über dem Sektionstitel. */
export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <p className="label mb-8 flex items-center gap-4 text-ink-soft">
      <span className="text-signal">{index}</span>
      <span className="h-px w-8 bg-rule" aria-hidden />
      {children}
    </p>
  );
}
