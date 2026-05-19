import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import TrustSection from "@/components/TrustSection";
import WhyUsSection from "@/components/WhyUsSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "About Us | Remmy Moore Home Health Care Agency",
  description: "Learn about Remmy Moore Home Health Care Agency - our credentials, certifications, and why families trust us for compassionate home health care.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="About Us"
        subtitle="Trusted Home Health Care Since 2015"
        image="https://images.unsplash.com/photo-1631217314830-acf6f1b2b735?w=1200&h=600&fit=crop"
        height="60"
      />
      <TrustSection />
      <WhyUsSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
