import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Finance APP",
  description: "App for managing your finances",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={` ${interFont.className}  antialiased`}>{children}</body>
    </html>
  );
}
