import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/legal-page";
import { headquarters, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung der ${site.legalName}.`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <LegalPage title="Datenschutzerklärung" updated="Platzhalter">
      <p>
        <strong>Achtung:</strong> Dieser Text ist ein Gerüst, keine
        Rechtsberatung. Vor dem Go-live an die tatsächliche Datenverarbeitung
        anpassen (revDSG, bei EU-Bezug auch DSGVO) und juristisch prüfen lassen.
      </p>

      <h2>Verantwortliche Stelle</h2>
      <p>
        {site.legalName}, {headquarters.street}, {headquarters.postalCode}{" "}
        {headquarters.city}. Anfragen zum Datenschutz an{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Server-Logfiles</h2>
      <p>
        Beim Aufruf dieser Website werden technisch notwendige Daten
        verarbeitet: IP-Adresse, Zeitpunkt, aufgerufene Seite, Browser und
        Betriebssystem. Diese Daten dienen dem sicheren Betrieb und werden nicht
        mit anderen Quellen zusammengeführt.
      </p>

      <h2>Kontaktaufnahme</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre
        Angaben zur Bearbeitung der Anfrage und für allfällige Anschlussfragen.
      </p>

      <h2>Hosting</h2>
      <p>
        Diese Website wird bei einem Drittanbieter gehostet. Dabei fallen die
        oben genannten Verbindungsdaten an. Anbieter und Serverstandort hier
        konkret benennen.
      </p>

      <h2>Cookies und Analyse</h2>
      <p>
        Aktuell setzt diese Seite keine Analyse- oder Marketing-Cookies. Wird
        ein Analyse-Tool ergänzt, sind Zweck, Anbieter, Speicherdauer und
        Widerspruchsmöglichkeit hier zu beschreiben — und je nach Tool ein
        Consent-Banner nötig.
      </p>

      <h2>Ihre Rechte</h2>
      <ul>
        <li>Auskunft über die zu Ihrer Person bearbeiteten Daten</li>
        <li>Berichtigung unrichtiger Daten</li>
        <li>Löschung, soweit keine Aufbewahrungspflicht besteht</li>
        <li>Herausgabe oder Übertragung Ihrer Daten</li>
      </ul>
      <p>
        Zur Ausübung genügt eine Nachricht an{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalPage>
  );
}
