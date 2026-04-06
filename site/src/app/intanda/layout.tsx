import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intanda Creative — Stary Mwaba",
  description:
    "A social enterprise using creativity and art to drive economic opportunity in Zambian communities.",
};

export default function IntandaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
