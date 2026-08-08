"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";
import { Container } from "./ui/container";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-8">
          <Link
            href="/"
            className="flex items-baseline gap-2 text-lg font-extrabold tracking-tight"
            onClick={() => setOpen(false)}
          >
            {site.name}
            <span className="text-signal" aria-hidden>
              ●
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
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
          </nav>

          <Link
            href="/#kontakt"
            className="label hidden border border-ink px-5 py-3 transition-colors hover:bg-ink hover:text-paper md:inline-block"
          >
            Kontakt
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="label border border-ink px-4 py-3 md:hidden"
          >
            {open ? "Schliessen" : "Menü"}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Hauptnavigation mobil"
          className="border-t border-rule md:hidden"
        >
          <Container>
            <ul className="flex flex-col py-2">
              {[...nav, { label: "Kontakt", href: "/#kontakt" }].map((item) => (
                <li key={item.href} className="border-b border-rule-soft last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-5 text-2xl font-bold tracking-tight"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      )}
    </header>
  );
}
