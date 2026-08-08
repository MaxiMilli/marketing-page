import { processSteps } from "@/lib/site";
import { Section, SectionLabel } from "../ui/section";

export function Process() {
  return (
    <Section id="vorgehen" className="bg-paper-2">
      <SectionLabel index="02">Vorgehen</SectionLabel>

      <div className="grid gap-10 md:grid-cols-12">
        <h2 className="text-headline font-extrabold text-balance md:col-span-6">
          Kein Blindflug
        </h2>
        <p className="text-xl leading-relaxed text-pretty text-ink-soft md:col-span-5 md:col-start-8">
          Vier Etappen, an denen Sie jederzeit sehen, wo Ihr Budget steht und
          was als Nächstes entsteht.
        </p>
      </div>

      <ol className="mt-16 grid gap-px border border-rule bg-rule md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((phase, i) => (
          <li key={phase.title} className="relative bg-paper-2 p-8 lg:p-10">
            <span className="label text-ink-soft">{phase.step}</span>

            <p
              aria-hidden
              className="mt-8 text-7xl font-extrabold tracking-tighter text-rule tabular-nums"
            >
              {String(i + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-4 text-2xl font-extrabold tracking-tight">
              {phase.title}
            </h3>
            <p className="mt-4 leading-relaxed text-pretty text-ink-soft">
              {phase.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
