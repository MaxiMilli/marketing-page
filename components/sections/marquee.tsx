import { marqueeItems } from "@/lib/site";

export function Marquee() {
  // Zweimal gerendert: die Animation schiebt um -50%, dadurch nahtlose Schleife.
  const track = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-rule bg-ink py-5 text-paper">
      <ul
        className="flex w-max animate-marquee items-center gap-12"
        aria-label="Technologien, mit denen wir arbeiten"
      >
        {track.map((item, i) => (
          <li
            key={`${item}-${i}`}
            className="label flex shrink-0 items-center gap-12"
            aria-hidden={i >= marqueeItems.length}
          >
            {item}
            <span className="text-signal" aria-hidden>
              ✳
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
