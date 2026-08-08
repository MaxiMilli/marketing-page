import { Cta } from "@/components/sections/cta";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonial } from "@/components/sections/testimonial";
import { faq, site } from "@/lib/site";

/** Strukturierte Daten für Google — Organisation + FAQ-Rich-Result. */
function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.legalName,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      address: site.locations.map((location) => ({
        "@type": "PostalAddress",
        streetAddress: location.street,
        postalCode: location.postalCode,
        addressLocality: location.city,
        addressCountry: "CH",
      })),
      areaServed: site.locations.map((location) => location.city),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Testimonial />
      <Faq />
      <Cta />
    </>
  );
}
