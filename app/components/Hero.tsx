import Image from "next/image";

function Chevron() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative w-full">
      <div className="relative w-full h-[78vh] md:h-[88vh] overflow-hidden bg-[var(--ink)]">
        <Image
          src="/gallery/hero.jpg"
          alt="Composition florale signature"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative z-10 h-full flex items-center">
          <div className="mx-auto max-w-[1400px] w-full px-4 sm:px-6 md:px-10">
            <div className="max-w-[560px] bg-white p-6 sm:p-10 md:p-14 shadow-sm">
              <h1 className="font-bold text-[var(--ink)] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] leading-[1.05] tracking-[-0.005em] uppercase">
                Herbier vivant, fleurs de saison
              </h1>
              <span className="block w-12 h-0.5 bg-[var(--ink)] mt-6 sm:mt-8" />
              <a
                href="#creations"
                className="btn-arrow inline-flex items-center justify-between gap-4 sm:gap-6 mt-8 sm:mt-10 bg-[var(--ink)] text-white px-5 sm:px-8 py-4 sm:py-5 text-[11px] sm:text-[12px] uppercase tracking-[0.22em] sm:tracking-[0.26em] hover:bg-[var(--olive)] transition-colors w-full sm:min-w-[280px] sm:w-auto"
              >
                Découvrir les créations
                <Chevron />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
