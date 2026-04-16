import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Chess Ascend League | Construim ecosistemul de șah din România",
  description:
    "Alătură-te mișcării care transformă șahul în România. Comunitate, evenimente, parteneriate și o viziune pe termen lung pentru cluburi fizice de șah.",
  keywords: [
    "șah",
    "chess",
    "România",
    "comunitate",
    "turnee",
    "evenimente",
    "Iași",
    "Brașov",
  ],
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Chess Ascend League | Construim ecosistemul de șah din România",
    description:
      "Alătură-te mișcării care transformă șahul în România. Comunitate, evenimente, parteneriate.",
    type: "website",
    images: ["/logo.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c1917",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${inter.variable} ${playfair.variable} bg-background`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
