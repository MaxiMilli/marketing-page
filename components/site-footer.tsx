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
            <p className="label mb-6 text-ink-soft">Kontakt</p>
            <address className="space-y-3 not-italic">
              <p>
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
                <br />
                {site.address.country}
              </p>
              <p>
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 hover:text-signal-deep hover:underline"
                >
                  {site.email}
                </a>
                <br />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="underline-offset-4 hover:text-signal-deep hover:underline"
                >
                  {site.phone}
                </a>
              </p>
            </address>
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
