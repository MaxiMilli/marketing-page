import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Kontaktangaben der ${site.legalName}.`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <LegalPage title="Impressum" updated="Platzhalter">
      <p>
        <strong>Achtung:</strong> Diese Seite ist ein Platzhalter. Angaben vor
        dem Go-live durch die tatsächlichen Firmendaten ersetzen und juristisch
        prüfen lassen.
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>
        {site.legalName}
        <br />
        {site.address.street}
        <br />
        {site.address.postalCode} {site.address.city}
        <br />
        {site.address.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Telefon: {site.phone}
      </p>

      <h2>Handelsregister</h2>
      <p>
        UID: CHE-000.000.000
        <br />
        Eingetragen im Handelsregister des Kantons Zürich.
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität wird keine Gewähr
        übernommen. Für Inhalte externer Links sind ausschliesslich deren
        Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Sämtliche Inhalte dieser Website sind urheberrechtlich geschützt. Eine
        Verwendung ausserhalb der gesetzlichen Schranken bedarf der
        schriftlichen Zustimmung der {site.legalName}.
      </p>
    </LegalPage>
  );
}
