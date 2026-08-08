import { faq } from "@/lib/site";
import { Section, SectionLabel } from "../ui/section";

export function Faq() {
  return (
    <Section id="faq" className="bg-paper-2">
      <SectionLabel index="04">FAQ</SectionLabel>

      <div className="grid gap-12 md:grid-cols-12">
        <h2 className="text-headline font-extrabold text-balance md:col-span-4">
          Häufig gefragt
        </h2>

        {/* details/summary: Accordion ohne JavaScript, voll zugänglich */}
        <div className="border-t border-rule md:col-span-8">
          {faq.map((item) => (
            <details
              key={item.question}
              name="faq"
              className="group border-b border-rule"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 text-xl font-bold tracking-tight text-pretty transition-colors hover:text-signal-deep md:text-2xl">
                {item.question}
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-signal transition-transform duration-300 group-open:rotate-45"
                >
                  ＋
                </span>
              </summary>
              <p className="max-w-2xl pb-8 text-lg leading-relaxed text-pretty text-ink-soft">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
