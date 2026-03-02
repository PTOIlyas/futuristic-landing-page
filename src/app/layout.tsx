import type { Metadata } from "next";
import "./globals.css";

export const metaData: Metadata = {
  title: "AI Finance Platform",
  description: "Next generation AI blockchain solution",
  openGraph: {
    title: "AI Finance Platform",
    description: "Next generation AI blockchain solution",
    images: ["/og.jpg"],
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
