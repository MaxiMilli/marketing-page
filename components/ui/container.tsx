import type { ReactNode } from "react";

/**
 * Einheitliche horizontale Begrenzung. Wird von allen Sektionen genutzt,
 * damit Inhalt und Trennlinien auf derselben Kante sitzen.
 */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[86rem] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
