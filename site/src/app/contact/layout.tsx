import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Stary Mwaba",
  description:
    "Get in touch with Zambian visual artist Stary Mwaba. Studios in Kitwe and Lusaka, Zambia.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
