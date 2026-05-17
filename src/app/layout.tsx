import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2563eb" },
    { media: "(prefers-color-scheme: dark)", color: "#1d4ed8" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://remmymoorehealthcare.com"),
  title: "Remmy Moore Home Health Care Agency LLC | Compassionate Home Health Care",
  description:
    "Remmy Moore Home Health Care Agency LLC provides compassionate, professional home health care services. Accepting Medicaid, Medicare, and private pay. Skilled nursing, personal care, elderly care, pediatric care, and more.",
  keywords: [
    "home health care",
    "Remmy Moore",
    "Medicaid home care",
    "Medicare home care",
    "skilled nursing",
    "personal care assistance",
    "elderly care",
    "pediatric home care",
    "disability support",
    "companion care",
    "post-surgery care",
    "respite care",
    "private duty care",
  ],
  authors: [{ name: "Remmy Moore Home Health Care Agency LLC" }],
  creator: "Remmy Moore Home Health Care Agency LLC",
  publisher: "Remmy Moore Home Health Care Agency LLC",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remmymoorehealthcare.com",
    siteName: "Remmy Moore Home Health Care Agency LLC",
    title: "Remmy Moore Home Health Care Agency LLC | Compassionate Home Health Care",
    description:
      "Professional, compassionate home health care services. Accepting Medicaid, Medicare, and private pay clients of all ages.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Remmy Moore Home Health Care Agency LLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remmy Moore Home Health Care Agency LLC",
    description:
      "Compassionate home health care services. Accepting Medicaid, Medicare, and private pay.",
    images: ["/og-image.jpg"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=yes" />
        <link rel="canonical" href="https://remmymoorehealthcare.com" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
