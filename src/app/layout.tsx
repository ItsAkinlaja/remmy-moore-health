import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://remmymoorehealthcare.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Home Health Care in Rockmart GA | Remmy Moore Home Health Care Agency",
    template: "%s | Remmy Moore Home Health Care – Rockmart, GA",
  },
  description:
    "Remmy Moore Home Health Care Agency LLC serves Rockmart, GA and Polk County with compassionate in-home care. Skilled nursing, ADL assistance, elderly & pediatric care. Medicaid & Medicare accepted. Call (678) 599-4557.",
  keywords: [
    "home health care Rockmart GA",
    "home health care Polk County Georgia",
    "home health care near me Rockmart",
    "skilled nursing Rockmart GA",
    "ADL assistance Rockmart Georgia",
    "elderly care Rockmart GA",
    "pediatric home care Rockmart",
    "Medicaid home health Georgia",
    "Medicare home health Rockmart",
    "in-home care Cedartown GA",
    "home health aide Polk County",
    "Remmy Moore Home Health Care",
    "personal care services Rockmart",
    "home health agency Georgia",
    "30153 home health care",
  ],
  authors: [{ name: "Remmy Moore Home Health Care Agency LLC" }],
  creator: "Remmy Moore Home Health Care Agency LLC",
  publisher: "Remmy Moore Home Health Care Agency LLC",
  category: "Healthcare",
  classification: "Home Health Care Services",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Remmy Moore Home Health Care Agency LLC",
    title: "Home Health Care in Rockmart, GA | Remmy Moore Home Health Care Agency",
    description:
      "Serving Rockmart, Cedartown, and Polk County GA with professional home health care. Skilled nursing, ADL, elderly & pediatric care. Medicaid & Medicare accepted.",
    images: [
      {
        url: "https://ik.imagekit.io/scmchurch/ChatGPT%20Image%20Jul%2026,%202026,%2007_04_14%20PM.png",
        width: 1200,
        height: 630,
        alt: "Remmy Moore Home Health Care Agency – Rockmart, GA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Health Care in Rockmart GA | Remmy Moore Home Health Care",
    description:
      "Compassionate home health care in Rockmart, GA. Medicaid & Medicare accepted. Call (678) 599-4557.",
    images: ["https://ik.imagekit.io/scmchurch/ChatGPT%20Image%20Jul%2026,%202026,%2007_04_14%20PM.png"],
  },
  verification: {
    // Add your Google Search Console verification token here once you have it:
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
  other: {
    // Geo meta tags — strong local SEO signal
    "geo.region": "US-GA",
    "geo.placename": "Rockmart, Georgia",
    "geo.position": "34.0021;-85.0463",
    ICBM: "34.0021, -85.0463",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="format-detection" content="telephone=yes" />
        {/* Canonical domain without www */}
        <link rel="canonical" href={baseUrl} />
        {/* JSON-LD Local Business structured data */}
        <LocalBusinessSchema />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-slate-900`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
