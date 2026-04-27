"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#a-propos", label: "À propos" },
  { href: "#creations", label: "Créations" },
  { href: "#galerie", label: "Galerie" },
  { href: "#avis", label: "Avis" },
  { href: "#visiter", label: "Visiter" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 inset-x-0 z-50 bg-white border-b ${
        scrolled ? "border-[var(--border)]" : "border-transparent"
      } py-6`}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 relative">

        <div className="flex flex-col items-center gap-4">
          <a href="#top" className="block text-center max-w-full px-12 md:px-0">
            <div className="leading-none font-bold uppercase tracking-[0.18em] md:tracking-[0.22em] text-[var(--ink)] text-[22px] sm:text-[28px] md:text-[44px]">
              L'EMPREINTE <span className="text-[var(--olive)]">FLORALE</span>
            </div>
            <div className="mt-2 text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[var(--ink-soft)]">
              Fleuriste artisan
            </div>
          </a>

          <nav className="hidden md:block w-full relative">
            <ul className="flex items-center justify-center gap-10 lg:gap-14">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[12px] uppercase tracking-[0.22em] text-[var(--ink)] hover:text-[var(--olive)] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-7 text-[12px] uppercase tracking-[0.22em] text-[var(--ink)]">
              <a
                href="https://www.instagram.com/lempreinte_florale"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-[var(--olive)] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="tel:+33618987132" className="hover:text-[var(--olive)] transition-colors tabular-nums">
                06 18 98 71 32
              </a>
              <a
                href="https://maps.google.com/?q=4+avenue+Vauban+66660+Port-Vendres"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Voir l'adresse sur Google Maps"
                className="hover:text-[var(--olive)] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </a>
            </div>
          </nav>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-px bg-[var(--ink)] transition-transform ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[var(--ink)] transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-[var(--ink)] transition-transform ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 mx-6 border-t border-[var(--border)] pt-6 pb-6">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-xl text-[var(--ink)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-[var(--border)] flex flex-col gap-4 text-[15px] text-[var(--ink)]">
            <a href="tel:+33618987132" className="inline-flex items-center gap-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
              </svg>
              06 18 98 71 32
            </a>
            <a
              href="https://maps.google.com/?q=4+avenue+Vauban+66660+Port-Vendres"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              4 av. Vauban — Port-Vendres
            </a>
            <a
              href="https://www.instagram.com/lempreinte_florale"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-3"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
