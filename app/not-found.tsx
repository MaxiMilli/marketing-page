import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container>
      <div className="flex min-h-[60vh] flex-col justify-center py-24">
        <p className="label text-signal">Fehler 404</p>
        <h1 className="mt-8 text-display font-extrabold">
          Nicht gefunden<span className="text-signal">.</span>
        </h1>
        <p className="mt-8 max-w-md text-xl text-pretty text-ink-soft">
          Diese Seite gibt es nicht (mehr). Vielleicht hilft der Weg zurück auf
          die Startseite.
        </p>
        <div className="mt-10">
          <Button href="/">Zur Startseite</Button>
        </div>
      </div>
    </Container>
  );
}
