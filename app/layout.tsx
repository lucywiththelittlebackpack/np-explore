import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Outfit } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "National Parks Explorer",
  description: "Explore the world's best national parks for wildlife and bird photography.",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
