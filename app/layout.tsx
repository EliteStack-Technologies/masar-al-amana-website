import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Masar Al Amana Typing Center - Professional Government & Business Services in UAE",
  description: "Leading typing center in UAE offering company formation, visa services, PRO services, Emirates ID, attestation, and complete government documentation across all Emirates.",
  keywords: "typing center UAE, PRO services, visa services, company formation, Emirates ID, attestation services, Dubai typing center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
