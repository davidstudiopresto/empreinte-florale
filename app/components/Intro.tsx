import FadeIn from "./FadeIn";

export default function Intro() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <FadeIn className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-bold uppercase text-[var(--ink)] text-[24px] md:text-[34px] tracking-[0.05em] leading-[1.25]">
          L'Empreinte Florale, atelier de Jérémy
        </h2>
        <p className="mt-6 text-[var(--ink)] text-[17px] md:text-[19px] leading-relaxed max-w-2xl mx-auto">
          Bouquets sur-mesure, mariages, hommages floraux et décorations d'événement —
          composés à la main, à Port-Vendres, avec ce qu'il faut de soin et de saison.
        </p>
      </FadeIn>
    </section>
  );
}
