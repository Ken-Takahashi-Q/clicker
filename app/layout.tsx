import type { Metadata } from "next";
import { Geist, Sour_Gummy } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const sourGummy = Sour_Gummy({
  variable: "--font-sour-gummy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crochet counter",
  description: "Counting app by KenDou",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourGummy.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
