"use client";
import { useEffect } from "react";
export function Motion() {
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          gsap.to(".philosophy-heading", {
            scrollTrigger: {
              trigger: ".philosophy-layout",
              start: "top 150px",
              end: "bottom 650px",
              pin: ".philosophy-heading",
              pinSpacing: false,
            },
          });
        });
        cleanup = () => mm.revert();
      },
    );
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return null;
}
