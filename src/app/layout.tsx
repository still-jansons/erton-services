import type { Metadata } from "next";
import { arimo, heebo } from "@/styles/fonts";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
  title: "Erton services",
  description: "Erton services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heebo.variable} ${arimo.variable}`}>
      <body className={`overflow-x-hidden bg-primary-light`}>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
