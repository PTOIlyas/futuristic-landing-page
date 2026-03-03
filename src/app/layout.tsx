import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/sections";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "Site",
    template: "%s | site",
  },
  description: "site",
  metadataBase: new URL("https://segwaypowersports.kz"),
  openGraph: {
    title: "Segway Powersports",
    description: "Официальный дилер Segway Powersports",
    url: "https://segwaypowersports.kz",
    siteName: "Segway Powersports",
    locale: "ru_KZ",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body className={`font-sans antialiased`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}