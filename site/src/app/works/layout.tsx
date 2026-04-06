import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works — Stary Mwaba",
  description:
    "Gallery of paintings and mixed-media works by Zambian artist Stary Mwaba. Acrylic on perforated newspaper, canvas, and mixed media.",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
