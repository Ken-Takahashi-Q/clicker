import type { Metadata } from "next";
import { Geist, Mochiy_Pop_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const yuseiMagic = Mochiy_Pop_One({
  variable: "--font-mochiy-pop-one-regular",
  subsets: ["latin"],
  weight: "400",
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
        className={`${yuseiMagic.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
