import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import SynopsisSection from "@/components/SynopsisSection";
import TrustSection from "@/components/TrustSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "About Our Agency | Remmy Moore Home Health Care",
  description: "Discover Remmy Moore Home Health Care Agency. We provide a professional high-level synopsis of services including Skilled Nursing and ADL support. Trusted home healthcare is just one call away.",
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
