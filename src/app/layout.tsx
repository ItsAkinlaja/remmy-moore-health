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
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: {
    default: "Remmy Moore Home Health Care Agency LLC",
    template: "%s | Remmy Moore Home Health Care Agency LLC",
  },
  description: "Compassionate, professional home health care services. Accepting Medicaid, Medicare, and private pay. Skilled nursing, personal care, elderly care, and more.",
  keywords: ["home health care", "Remmy Moore", "skilled nursing", "personal care", "elderly care", "pediatric home care", "Medicaid", "Medicare"],
  authors: [{ name: "Remmy Moore Home Health Care Agency LLC" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://remmymoorehealthcare.com",
    siteName: "Remmy Moore Home Health Care Agency LLC",
    title: "Remmy Moore Home Health Care Agency LLC",
    description: "Professional home health care services delivered with compassion and dignity.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Remmy Moore Home Health Care Agency LLC Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remmy Moore Home Health Care Agency LLC",
    description: "Compassionate home health care services.",
    images: ["/logo.png"],
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
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-slate-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
