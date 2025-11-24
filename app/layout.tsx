import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

// Get base URL from environment or use default
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

export const metadata: Metadata = {
  title: "Master Carpenter | Premium Carpentry Services in UAE",
  description:
    "Professional carpentry services in UAE. Custom furniture, shelving solutions, trim work, framing, and wood finishing by expert craftsmen. Where Wood Meets Craft.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Master Carpenter | Premium Carpentry Services in UAE",
    description:
      "Professional carpentry services in UAE. Custom furniture, shelving solutions, trim work, framing, and wood finishing by expert craftsmen. Where Wood Meets Craft.",
    url: baseUrl,
    siteName: "Master Carpenter UAE",
    images: [
      {
        url: `${baseUrl}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Master Carpenter - Premium Carpentry Services in UAE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Carpenter | Premium Carpentry Services in UAE",
    description:
      "Professional carpentry services in UAE. Custom furniture, shelving solutions, trim work, framing, and wood finishing by expert craftsmen.",
    images: [`${baseUrl}/opengraph-image.png`],
  },
  metadataBase: new URL(baseUrl),
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
