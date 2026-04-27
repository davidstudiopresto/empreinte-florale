const items = [
  "Bouquets de saison",
  "Mariages",
  "Compositions sur mesure",
  "Plantes & arrangements",
  "Cérémonies",
  "Abonnements",
  "Cadeaux & cartes",
];

export default function Marquee() {
  return (
    <div className="border-y border-[var(--line)] bg-[var(--ivory)] overflow-hidden py-6">
      <div className="flex gap-16 marquee-track whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display italic text-[28px] md:text-[36px] text-[var(--ink-soft)] flex items-center gap-16"
          >
            {item}
            <span className="text-[var(--terracotta)]">✿</span>
          </span>
        ))}
      </div>
    </div>
  );
}
