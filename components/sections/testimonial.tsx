import { testimonial } from "@/lib/site";
import { Section, SectionLabel } from "../ui/section";

export function Testimonial() {
  return (
    <Section id="referenzen">
      <SectionLabel index="03">Referenzen</SectionLabel>

      <figure className="grid gap-12 md:grid-cols-12">
        <span
          aria-hidden
          className="text-[8rem] leading-[0.6] font-extrabold text-signal md:col-span-2"
        >
          &ldquo;
        </span>

        <div className="md:col-span-10">
          <blockquote className="text-3xl leading-[1.15] font-extrabold tracking-tight text-balance md:text-5xl">
            {testimonial.quote}
          </blockquote>

          <figcaption className="mt-10 flex items-center gap-4 border-t border-rule pt-6">
            <span className="label">{testimonial.author}</span>
            <span className="h-px w-8 bg-rule" aria-hidden />
            <span className="label text-ink-soft">{testimonial.role}</span>
          </figcaption>
        </div>
      </figure>
    </Section>
  );
}
