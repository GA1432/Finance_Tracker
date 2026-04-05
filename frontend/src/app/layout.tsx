import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Sovereign Ledger | Financial Management",
  description:
    "An institutional-grade financial management environment for the discerning professional. Track wealth, manage budgets, and achieve financial sovereignty.",
  keywords: ["finance", "budget", "wealth management", "investment tracker"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}
