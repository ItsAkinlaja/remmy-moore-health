import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomepageVisualStory from "@/components/HomepageVisualStory";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import HomePreview from "@/components/HomePreview";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata: Metadata = {
  title: "Home Health Care in Rockmart GA | Remmy Moore Home Health Care Agency",
  description:
    "Remmy Moore Home Health Care Agency LLC — trusted in-home care in Rockmart, GA (30153) and Polk County. Skilled nursing, ADL, elderly & pediatric care. Medicaid & Medicare accepted. Call (678) 599-4557.",
  alternates: {
    canonical: "https://remmymoorehealthcare.com",
  },
  openGraph: {
    title: "Home Health Care in Rockmart GA | Remmy Moore Home Health Care Agency",
    description:
      "Serving Rockmart, Cedartown, and all of Polk County with compassionate home health care. Medicaid & Medicare accepted.",
    url: "https://remmymoorehealthcare.com",
  },
};

export default function Home() {
  return (
    <main>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <div id="main-content">
        <Hero />
        <HomepageVisualStory />
        <ServicesSection limit={4} />
        <ProcessSection />
        <HomePreview />
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
