import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Master Carpenter | Premium Carpentry Services in UAE",
  description:
    "Professional carpentry services in UAE. Custom furniture, shelving solutions, trim work, framing, and wood finishing by expert craftsmen. Where Wood Meets Craft.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} font-[family-name:var(--font-manrope)] bg-white dark:bg-background-dark text-text-dark dark:text-background-light`}
      >
        <FloatingWhatsApp />
        {children}
      </body>
    </html>
  );
}
