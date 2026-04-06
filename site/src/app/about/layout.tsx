import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Stary Mwaba",
  description:
    "Stary Mwaba obtained a Master of Fine Art Degree at Rhodes University. Working from BlackMountain Studios, Kitwe and Studio Ibexhill, Lusaka.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
