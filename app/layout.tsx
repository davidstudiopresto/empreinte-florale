import type { Metadata, Viewport } from "next";
import { Mona_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import InstagramFab from "./components/InstagramFab";

const mona = Mona_Sans({
  variable: "--font-mona",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "L'Empreinte Florale — Fleuriste artisan à Port-Vendres",
  description:
    "L'Empreinte Florale, atelier de Jérémy à Port-Vendres. Bouquets sur-mesure, mariages, hommages floraux. Compositions sensibles, fleurs de saison choisies avec soin.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${mona.variable} ${cormorant.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[var(--ink)]">
        {children}
        <InstagramFab />
      </body>
    </html>
  );
}
