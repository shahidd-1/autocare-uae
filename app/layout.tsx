import type { Metadata, Viewport } from "next";
import { Inter, Manrope, Cairo } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400","500","600","700","800","900"], variable: "--font-arabic" });

export const metadata: Metadata = {
  title: "M2E Avenue Auto Car Detailing — Premium Car Care UAE",
  description: "Premium automotive care, detailing and protection across Dubai and Abu Dhabi.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} ${cairo.variable}`}>{children}</body>
    </html>
  );
}