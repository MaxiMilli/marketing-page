import { services } from "@/lib/site";
import { Section, SectionLabel } from "../ui/section";

export function Services() {
  return (
    <Section id="leistungen">
      <SectionLabel index="01">Leistungen</SectionLabel>

      <h2 className="max-w-4xl text-headline font-extrabold text-balance">
        Vier Dinge, die wir wirklich können
      </h2>

      <ul className="mt-16 border-t border-rule">
        {services.map((service) => (
          <li
            key={service.number}
            className="group border-b border-rule transition-colors duration-300 hover:bg-ink hover:text-paper"
          >
            <div className="grid gap-6 px-2 py-10 md:grid-cols-12 md:items-baseline md:px-4">
              <span className="label text-signal md:col-span-1">
                {service.number}
              </span>

              <h3 className="text-3xl font-extrabold tracking-tight md:col-span-4 md:text-4xl">
                {service.title}
              </h3>

              <p className="text-lg leading-relaxed text-pretty text-ink-soft transition-colors group-hover:text-paper-3 md:col-span-5">
                {service.summary}
              </p>

              <ul className="flex flex-wrap gap-2 md:col-span-2 md:justify-end">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="label border border-rule px-3 py-2 text-ink-soft transition-colors group-hover:border-ink-soft group-hover:text-paper-3"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
