import { hero } from "@/lib/site";
import { Button } from "../ui/button";
import { Container } from "../ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Rasterlinien im Hintergrund — Swiss-Grid als Textur, nicht als Deko */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden md:block"
      >
        <Container className="h-full">
          <div className="grid h-full grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-l border-rule-soft last:border-r" />
            ))}
          </div>
        </Container>
      </div>

      <Container>
        <div className="stagger relative pt-20 pb-16 md:pt-32 md:pb-24">
          <p className="label flex items-center gap-4 text-ink-soft">
            <span className="inline-block size-2 bg-signal" aria-hidden />
            {hero.eyebrow}
          </p>

          <h1 className="mt-10 text-display font-extrabold">
            {hero.headline.map((line, i) => (
              <span key={line} className="block">
                {line}
                {i === hero.headline.length - 1 && (
                  <span className="text-signal">.</span>
                )}
              </span>
            ))}
          </h1>

          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <p className="text-xl leading-relaxed text-pretty text-ink-soft md:col-span-6 md:col-start-7 md:text-2xl">
              {hero.lead}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </Button>
          </div>

          <dl className="mt-20 grid grid-cols-1 border-t border-rule sm:grid-cols-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-rule py-8 sm:border-b-0 sm:border-r sm:pr-8 sm:last:border-r-0 sm:[&:not(:first-child)]:pl-8"
              >
                <dt className="label text-ink-soft">{stat.label}</dt>
                <dd className="mt-3 text-5xl font-extrabold tracking-tighter tabular-nums">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
