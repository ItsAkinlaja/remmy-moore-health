import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SynopsisSection from "@/components/SynopsisSection";
import TrustSection from "@/components/TrustSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "About Us | Home Health Care Agency in Rockmart, GA",
  description:
    "Learn about Remmy Moore Home Health Care Agency LLC, proudly serving Rockmart, Cedartown, and Polk County, GA. Skilled nursing, ADL support, and compassionate in-home care. Call (678) 599-4557.",
  alternates: {
    canonical: "https://www.remmymoorehealth.com/about",
  },
  openGraph: {
    title: "About Remmy Moore Home Health Care – Rockmart, GA",
    description:
      "Meet the team behind trusted home health care in Rockmart, GA. Serving Polk County and surrounding areas with skilled nursing and personal care.",
    url: "https://www.remmymoorehealth.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="About Us"
        subtitle="Trusted home healthcare one call away"
        image="https://ik.imagekit.io/scmchurch/cdc-XdErxxR6Xog-unsplash.jpg"
      />
      <SynopsisSection />
      <TrustSection />
      <WhyUsSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
