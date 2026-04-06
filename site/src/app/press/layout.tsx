import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press — Stary Mwaba",
  description:
    "Press coverage and media features on Zambian artist Stary Mwaba, including BBC, CNN African Voices, and more.",
};

export default function PressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
