import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Klinik Dr Sophia Y | Aesthetic & Wellness Care in Malaysia",
  description:
    "Discover personalised skin and aesthetic care at Klinik Dr Sophia Y. Find clinics in Shah Alam, Kota Damansara, Bangi, Jelatek and Seremban 2. Enquire via WhatsApp.",
  openGraph: {
    title: "Klinik Dr Sophia Y",
    description:
      "Let's Enhance Your Beauty With Us. Aesthetic & wellness care in Malaysia.",
    locale: "en_MY",
    type: "website",
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-MY">
      {/* Keep the body stacking baseline identical during SSR and hydration. */}
      <body style={{ zIndex: 0 }}>{children}</body>
    </html>
  );
}
