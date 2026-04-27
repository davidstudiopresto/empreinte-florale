"use client";

const reviews = [
  {
    name: "Camille L.",
    rating: 5,
    date: "Septembre 2025",
    text: "Jérémy a su capter exactement ce qu'on voulait pour notre mariage. Bouquet sublime, attention au détail incroyable. Je recommande les yeux fermés.",
  },
  {
    name: "Marc D.",
    rating: 5,
    date: "Juillet 2025",
    text: "Toujours un plaisir de passer commande. Compositions originales, fleurs d'une fraîcheur impeccable, et un vrai sens de l'écoute.",
  },
  {
    name: "Sophie R.",
    rating: 5,
    date: "Juin 2025",
    text: "Beaucoup d'écoute et un vrai sens de la composition. L'Empreinte Florale est devenu mon fleuriste de référence à Port-Vendres.",
  },
  {
    name: "Élodie M.",
    rating: 5,
    date: "Mars 2025",
    text: "Pour les obsèques de ma mère, le travail de Jérémy était d'une délicatesse rare. Merci infiniment pour cet accompagnement précieux.",
  },
  {
    name: "Thomas P.",
    rating: 5,
    date: "Février 2025",
    text: "Un fleuriste passionné qui prend le temps de comprendre ce qu'on cherche. Le bouquet était exactement à l'image de ce que j'avais imaginé.",
  },
  {
    name: "Marine A.",
    rating: 5,
    date: "Décembre 2024",
    text: "Travail artisanal d'une qualité rare. La décoration florale de notre baptême était magnifique et à la hauteur de l'événement.",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} étoiles sur 5`} className="inline-flex gap-0.5 text-[var(--olive)]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < n ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.2">
          <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
        </svg>
      ))}
    </span>
  );
}

export default function Reviews() {
  const doubled = [...reviews, ...reviews];

  return (
    <section id="avis" className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center mb-14">
          <h2 className="font-bold uppercase text-[var(--ink)] text-[28px] md:text-[40px] tracking-[0.04em] leading-[1.15]">
            Ce qu'ils en disent
          </h2>
          <div className="mt-8 inline-flex items-center gap-4">
            <span className="text-[56px] md:text-[68px] leading-none font-bold text-[var(--ink)]">
              5,0
            </span>
            <div className="flex flex-col items-start gap-2">
              <Stars n={5} />
              <span className="text-[11px] uppercase tracking-[0.28em] text-[var(--ink-soft)]">
                22 avis · Google
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex gap-6 marquee-track">
          {doubled.map((r, i) => (
            <article
              key={i}
              className="shrink-0 w-[320px] md:w-[400px] bg-white border border-[var(--border)] rounded-2xl p-8 md:p-10 flex flex-col"
            >
              <Stars n={r.rating} />
              <p className="mt-6 text-[var(--ink)] leading-[1.7] text-[16px] flex-1 font-light">
                « {r.text} »
              </p>
              <footer className="mt-8 pt-6 border-t border-[var(--border)] flex items-baseline justify-between">
                <span className="text-[var(--ink)] text-[15px]">{r.name}</span>
                <span className="text-[10px] uppercase tracking-[0.24em] text-[var(--ink-soft)]">
                  {r.date}
                </span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
