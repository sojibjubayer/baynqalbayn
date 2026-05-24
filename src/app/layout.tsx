// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bayn Qalbayn Cafe & Restaurant | Doha Qatar",
  description:
    "Bayn Qalbayn Cafe & Restaurant beside National Museum, Doha. View menu, order on WhatsApp, reserve a table, and get directions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}