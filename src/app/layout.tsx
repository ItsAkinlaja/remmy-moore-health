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
  description: "Compassionate, professional home health care services. Accepting Medicaid, Medicare, and private pay. Skilled nursing, activities of daily living (ADL), elderly care, and more.",
  keywords: ["home health care", "Remmy Moore", "skilled nursing", "ADL", "Activities of Daily Living", "personal care", "elderly care", "pediatric home care", "Medicaid", "Medicare"],
  authors: [{ name: "Remmy Moore Home Health Care Agency LLC" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
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
        url: "https://ik.imagekit.io/scmchurch/ChatGPT%20Image%20May%2016,%202026,%2012_55_54%20PM%20(1).png?updatedAt=1779253324973",
        width: 1200,
        height: 630,
        alt: "Remmy Moore Home Health Care Agency - Social Share",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remmy Moore Home Health Care Agency LLC",
    description: "Compassionate home health care services.",
    images: ["https://ik.imagekit.io/scmchurch/ChatGPT%20Image%20May%2016,%202026,%2012_55_54%20PM%20(1).png?updatedAt=1779253324973"],
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
