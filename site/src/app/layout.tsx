import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stary Mwaba — Visual Artist",
  description:
    "Stary Mwaba is a Zambian visual artist whose paintings, installations, and mixed-media works foreground the little narratives of ordinary people. Working from his studios in Kitwe and Lusaka, Mwaba creates powerful portraits using acrylic on perforated newspaper.",
  keywords: [
    "Stary Mwaba",
    "Zambian artist",
    "contemporary art",
    "Copperbelt",
    "Black Mountain",
    "perforated newspaper",
    "African art",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="bg-cream text-charcoal" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
