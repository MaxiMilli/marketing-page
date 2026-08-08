import { cta } from "@/lib/site";
import { Container } from "../ui/container";

export function Cta() {
  return (
    <section id="kontakt" className="bg-signal text-white">
      <Container>
        <div className="grid gap-12 py-24 md:grid-cols-12 md:py-32">
          <h2 className="text-headline font-extrabold text-balance md:col-span-7">
            {cta.headline}
          </h2>

          <div className="md:col-span-5">
            <p className="text-xl leading-relaxed text-pretty text-white/85">
              {cta.body}
            </p>

            <div className="mt-10 flex flex-col gap-px bg-white/30">
              <a
                href={cta.primary.href}
                className="group flex items-center justify-between gap-4 bg-signal px-6 py-6 transition-colors hover:bg-white hover:text-signal-deep"
              >
                <span className="label">{cta.primary.label}</span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href={cta.secondary.href}
                className="group flex items-center justify-between gap-4 bg-signal px-6 py-6 transition-colors hover:bg-white hover:text-signal-deep"
              >
                <span className="label">{cta.secondary.label}</span>
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
