import type { ReactNode } from "react";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={diagonal ? "diagonal" : ""}
    >
      <path d="M4 12h15M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
export function Button({
  href,
  children,
  light = false,
  outline = false,
}: {
  href: string;
  children: ReactNode;
  light?: boolean;
  outline?: boolean;
}) {
  return (
    <a
      className={`button ${light ? "button-light" : ""} ${outline ? "button-outline" : ""}`}
      href={href}
      {...(href.startsWith("https://")
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
      <Arrow diagonal />
    </a>
  );
}
export function Wordmark() {
  return (
    <a href="#home" className="wordmark" aria-label="Klinik Dr Sophia Y home">
      <span>KLINIK</span>
      <strong>
        Dr Sophia Y<span className="wordmark-dot">.</span>
      </strong>
    </a>
  );
}
