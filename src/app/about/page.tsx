import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
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
      <div className="pt-24">
        <Breadcrumb />
        <TrustSection />
        <WhyUsSection />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
