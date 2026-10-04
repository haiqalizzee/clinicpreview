"use client";
import { useEffect, useState } from "react";
import { Wordmark } from "./ui";
import { SocialLinks } from "./social-links";
import { enquiry } from "@/lib/clinic";
const links = [
  ["Treatments", "#treatments"],
  ["About", "#about"],
  ["Locations", "#locations"],
  ["Operating Hours", "#operating-hours"],
];
export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);
  return (
    <header className="header">
      <div className="nav-inner">
        <div className="nav-brand">
          <Wordmark />
          <SocialLinks />
        </div>
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([name, href]) => (
            <a key={href} href={href}>
              {name}
            </a>
          ))}
        </nav>
        <a
          className="nav-book"
          aria-label="Book Appointment"
          href={enquiry()}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="nav-book-full">Book Appointment</span>
          <span className="nav-book-short">Book</span>{" "}
          <span aria-hidden="true">↗</span>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          <span /> <span />
        </button>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`mobile-nav ${open ? "is-open" : ""}`}
        inert={!open}
      >
        {links.map(([name, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {name}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
        <a
          href={enquiry()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Book Appointment <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
