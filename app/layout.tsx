import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Enemmän tarjouspyyntöjä, vähemmän säätöä | LVI-asiakashankinta",
  description:
    "Systemaattinen asiakashankintajärjestelmä LVI-yrityksille, jotka haluavat enemmän oikeanlaisia tarjouspyyntöjä ilman raskasta markkinointikoneistoa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
