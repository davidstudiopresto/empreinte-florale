"use client";

export default function Newsletter() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-bold uppercase text-[var(--ink)] text-[24px] md:text-[34px] tracking-[0.05em] leading-[1.25]">
          Cultiver le lien
        </h2>
        <p className="mt-6 text-[var(--ink)] text-[17px] leading-relaxed max-w-md mx-auto">
          Une lettre rare, à chaque changement de saison — pour les nouvelles
          fleurs et les rendez-vous de l'atelier.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            required
            placeholder="votre adresse e-mail"
            className="flex-1 bg-white border border-[var(--border)] px-5 py-4 text-[14px] text-[var(--ink)] placeholder:text-[var(--ink-soft)] focus:outline-none focus:border-[var(--olive)]"
          />
          <button
            type="submit"
            className="bg-[var(--ink)] text-white px-8 py-4 text-[12px] uppercase tracking-[0.26em] hover:bg-[var(--olive)] transition-colors font-bold"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </section>
  );
}
