import FadeIn from "./FadeIn";

const schedule = [
  ["Lundi", "Fermé"],
  ["Mardi", "09:00 — 12:30 · 15:00 — 19:00"],
  ["Mercredi", "09:00 — 12:30 · 15:00 — 19:00"],
  ["Jeudi", "09:00 — 12:30 · 15:00 — 19:00"],
  ["Vendredi", "09:00 — 12:30 · 15:00 — 19:00"],
  ["Samedi", "09:00 — 13:00 · 15:00 — 19:00"],
  ["Dimanche", "Sur rendez-vous"],
];

export default function Visit() {
  return (
    <section id="visiter" className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24">
        <FadeIn>
          <h2 className="font-bold uppercase text-[var(--ink)] text-[28px] md:text-[40px] tracking-[0.04em] leading-[1.15]">
            Pousser la porte de l'atelier
          </h2>
          <span className="block w-12 h-0.5 bg-[var(--ink)] mt-8" />
          <p className="mt-8 text-[var(--ink)] text-[17px] leading-[1.8] max-w-md">
            Du mardi au samedi, sur rendez-vous ou en boutique, pour parler
            fleurs, choisir un bouquet ou préparer un événement.
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--olive)] font-bold">
                Adresse
              </div>
              <a
                href="https://maps.google.com/?q=4+avenue+Vauban+66660+Port-Vendres"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-[var(--ink)] text-[17px] block hover:text-[var(--olive)] transition-colors"
              >
                L'Empreinte Florale
                <br />
                4 avenue Vauban — 66660 Port-Vendres
              </a>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-6">
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--olive)] font-bold">
                  Téléphone
                </div>
                <a href="tel:+33618987132" className="mt-2 text-[var(--ink)] text-[17px] block hover:text-[var(--olive)]">
                  06 18 98 71 32
                </a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--olive)] font-bold">
                  Email
                </div>
                <a
                  href="mailto:lempreinteflorale66@gmail.com"
                  className="mt-2 text-[var(--ink)] text-[17px] block hover:text-[var(--olive)]"
                >
                  lempreinteflorale66@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-[var(--olive)] font-bold">
                  Instagram
                </div>
                <a
                  href="https://www.instagram.com/lempreinte_florale"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-[var(--ink)] text-[17px] block hover:text-[var(--olive)]"
                >
                  @lempreinte_florale
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.instagram.com/lempreinte_florale"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-arrow inline-flex items-center gap-6 mt-12 bg-[var(--ink)] text-white px-8 py-5 text-[12px] uppercase tracking-[0.26em] hover:bg-[var(--olive)] transition-colors"
          >
            <span className="inline-flex items-center gap-3">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
              Suivre sur Instagram
            </span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="text-[11px] uppercase tracking-[0.36em] text-[var(--olive)] mb-6 font-bold">
            Horaires
          </div>
          <div className="border-t border-[var(--border)]">
            {schedule.map(([day, hours]) => (
              <div
                key={day}
                className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6 py-5 border-b border-[var(--border)]"
              >
                <span className="text-[var(--ink)] text-[17px]">{day}</span>
                <span className="text-[var(--ink-soft)] tabular-nums sm:text-right text-[14px] sm:text-[15px]">
                  {hours}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-[var(--ink-soft)]">
            Les jours fériés peuvent modifier ces horaires.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
