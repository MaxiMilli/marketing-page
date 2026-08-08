/**
 * Zentrale Inhalts- und Metadaten-Konfiguration.
 *
 * Alle Texte der Marketing-Page liegen hier, nicht in den Komponenten.
 * Wer nur Inhalte ändern will, muss ausschliesslich diese Datei anfassen.
 */

export const site = {
  name: "Code Crush",
  legalName: "Code Crush GmbH",
  /** Ohne trailing slash. In Produktion via NEXT_PUBLIC_SITE_URL überschreiben. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codecrush.ch",
  locale: "de_CH",
  tagline: "Software, die Ihr Geschäft trägt.",
  description:
    "Code Crush ist Ihr Entwicklungspartner für Web-Plattformen, Individualsoftware und Systemintegration. Aus der Schweiz, für Schweizer Unternehmen.",
  email: "hello@codecrush.ch",
  phone: "+41 44 000 00 00",
  address: {
    street: "Musterstrasse 1",
    postalCode: "8000",
    city: "Zürich",
    country: "Schweiz",
  },
} as const;

export const nav = [
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Vorgehen", href: "/#vorgehen" },
  { label: "Referenzen", href: "/#referenzen" },
  { label: "FAQ", href: "/#faq" },
] as const;

export const hero = {
  eyebrow: "Softwareentwicklung · Zürich",
  headline: ["Wir bauen", "Software, die", "hält."],
  lead: "Von der ersten Skizze bis zum Betrieb: Wir entwickeln Web-Plattformen und Individualsoftware für Unternehmen, die es ernst meinen — und bleiben danach an Bord.",
  primaryCta: { label: "Projekt besprechen", href: "/#kontakt" },
  secondaryCta: { label: "Leistungen ansehen", href: "/#leistungen" },
  stats: [
    { value: "12+", label: "Jahre Erfahrung" },
    { value: "60+", label: "Projekte ausgeliefert" },
    { value: "98%", label: "Kunden bleiben" },
  ],
} as const;

/** Ticker unter dem Hero. Reiner Text, wird zweimal gerendert. */
export const marqueeItems = [
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "PostgreSQL",
  "Laravel",
  "Kubernetes",
  "AWS",
  "Terraform",
  "Swiss Hosting",
] as const;

export const services = [
  {
    number: "01",
    title: "Web-Plattformen",
    summary:
      "Kundenportale, Buchungssysteme, Marktplätze. Skalierbar gebaut, sauber dokumentiert, ohne Vendor-Lock-in.",
    tags: ["Next.js", "API-Design", "Design-System"],
  },
  {
    number: "02",
    title: "Individualsoftware",
    summary:
      "Wenn Standard-Tools an ihre Grenzen kommen: Fachanwendungen, die genau Ihren Prozess abbilden statt umgekehrt.",
    tags: ["Fachanwendungen", "Automatisierung", "Migration"],
  },
  {
    number: "03",
    title: "Systemintegration",
    summary:
      "ERP, CRM, Zahlungs- und Logistikdienste sauber verbunden. Ein Datenstand statt sieben Excel-Listen.",
    tags: ["Schnittstellen", "ETL", "Monitoring"],
  },
  {
    number: "04",
    title: "Betrieb & Support",
    summary:
      "Wir übergeben nicht und verschwinden. Definierte Reaktionszeiten, Updates, Security-Patches — planbar im Monatspaket.",
    tags: ["SLA", "Wartung", "Weiterentwicklung"],
  },
] as const;

export const processSteps = [
  {
    step: "Schritt 1",
    title: "Verstehen",
    body: "Ein Workshop, in dem wir Ihren Prozess auseinandernehmen. Am Ende steht ein Scope, den beide Seiten gleich lesen.",
  },
  {
    step: "Schritt 2",
    title: "Schneiden",
    body: "Wir zerlegen das Vorhaben in Arbeitspakete mit fixem Preis. Sie sehen, was was kostet — vor dem ersten Commit.",
  },
  {
    step: "Schritt 3",
    title: "Bauen",
    body: "Zweiwöchentliche Releases auf einer echten Testumgebung. Kein Big Bang, keine Überraschung nach sechs Monaten.",
  },
  {
    step: "Schritt 4",
    title: "Begleiten",
    body: "Go-live ist der Anfang. Wir überwachen, patchen und entwickeln weiter — solange Sie uns wollen.",
  },
] as const;

export const testimonial = {
  quote:
    "Nach zwei gescheiterten Anläufen mit anderen Agenturen war unser Portal in vier Monaten live. Was uns überzeugt hat: Sie haben uns zweimal von Features abgeraten, die wir bezahlt hätten.",
  author: "Platzhalter Name",
  role: "Leitung Digital, Platzhalter AG",
} as const;

export const faq = [
  {
    question: "Was kostet ein Projekt bei Ihnen?",
    answer:
      "Kleinere Vorhaben starten bei rund CHF 5'000, grössere Plattformen bewegen sich im fünf- bis sechsstelligen Bereich. Sie erhalten vorab ein Angebot mit Arbeitspaketen und Preis pro Paket — keine offene Rechnung.",
  },
  {
    question: "Wie lange dauert es bis zum Go-live?",
    answer:
      "Ein klar geschnittenes MVP steht typischerweise in acht bis zwölf Wochen. Grössere Plattformen liefern wir in Etappen aus, sodass Sie früh produktiv arbeiten können.",
  },
  {
    question: "Arbeiten Sie auch an bestehendem Code weiter?",
    answer:
      "Ja. Wir starten in dem Fall mit einem Code-Review und einer Einschätzung, was tragfähig ist und was ersetzt gehört — bevor wir eine Zeile ändern.",
  },
  {
    question: "Wem gehört der Code?",
    answer:
      "Ihnen. Sie erhalten das vollständige Repository, die Infrastruktur-Definition und die Dokumentation. Ein Wechsel des Dienstleisters bleibt jederzeit möglich.",
  },
  {
    question: "Wo werden die Daten gehostet?",
    answer:
      "Auf Wunsch ausschliesslich in der Schweiz oder der EU. Wir klären Hosting und Datenschutz vor Projektstart, nicht danach.",
  },
] as const;

export const cta = {
  headline: "Erzählen Sie uns, was hakt.",
  body: "Ein 30-minütiges Gespräch, kostenlos und unverbindlich. Danach wissen Sie, ob wir passen — und was Ihr Vorhaben ungefähr kostet.",
  primary: { label: `Mail an ${site.email}`, href: `mailto:${site.email}` },
  secondary: { label: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
} as const;

export const footerLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;
