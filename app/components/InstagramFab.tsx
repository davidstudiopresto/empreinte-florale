export default function InstagramFab() {
  return (
    <a
      href="https://www.instagram.com/lempreinte_florale"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram L'Empreinte Florale"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-[var(--ink)] text-white shadow-md hover:bg-[var(--olive)] transition-colors"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    </a>
  );
}
