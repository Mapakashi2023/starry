import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Black Mountain Foundation — Stary Mwaba",
  description:
    "Empowering young people in Zambia's Copperbelt mining communities through art, education, and environmental advocacy.",
};

export default function FoundationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
