import FadeIn from "./FadeIn";

const items = [
  {
    title: "Bouquet sur-mesure",
    desc: "Composition du jour, fleurs choisies une à une — à partir de 50 €",
  },
  {
    title: "Mariages & cérémonies",
    desc: "Bouquets de mariée, arches, centres de table — sur devis",
  },
  {
    title: "Hommages floraux",
    desc: "Coussins, raquettes, gerbes — composés avec retenue",
  },
];

export default function Creations() {
  return (
    <section id="creations" className="pb-20 md:pb-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.12}>
              <article className="text-center md:text-left">
                <h3 className="font-bold uppercase tracking-[0.05em] text-[var(--ink)] text-[16px]">
                  {item.title}
                </h3>
                <span className="block w-12 h-0.5 bg-[var(--ink)] mt-4 mx-auto md:mx-0" />
                <p className="mt-4 text-[var(--ink-soft)] text-[15px]">
                  {item.desc}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
