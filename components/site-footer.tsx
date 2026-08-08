import Link from "next/link";
import { footerLinks, nav, site } from "@/lib/site";
import { Container } from "./ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-paper-2">
      <Container>
        <div className="grid gap-12 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-headline font-extrabold">
              {site.name}
              <span className="text-signal">.</span>
            </p>
            <p className="mt-6 max-w-sm text-balance text-ink-soft">
              {site.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="label mb-6 text-ink-soft">Seite</p>
            <ul className="space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="underline-offset-4 hover:text-signal-deep hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label mb-6 text-ink-soft">Standorte</p>
            <div className="grid gap-8 sm:grid-cols-2">
              {site.locations.map((location) => (
                <address key={location.city} className="not-italic">
                  <p className="font-bold">{location.city}</p>
                  <p className="mt-2 text-ink-soft">
                    {location.street}
                    <br />
                    {location.postalCode} {location.city}
                  </p>
                  <a
                    href={`tel:${location.phone.replace(/\s/g, "")}`}
                    className="mt-2 inline-block underline-offset-4 hover:text-signal-deep hover:underline"
                  >
                    {location.phone}
                  </a>
                </address>
              ))}
            </div>

            <p className="mt-8 border-t border-rule pt-6">
              <a
                href={`mailto:${site.email}`}
                className="underline-offset-4 hover:text-signal-deep hover:underline"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-rule py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="label text-ink-soft">
            © {new Date().getFullYear()} {site.legalName}
          </p>
          <ul className="flex gap-8">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="label text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
