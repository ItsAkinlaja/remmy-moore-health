import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Our Services | Remmy Moore Home Health Care Agency",
  description: "Comprehensive home health care services including skilled nursing, personal care, elderly care, pediatric care, and more. Medicaid and Medicare accepted.",
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Care for Every Need"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop"
        height="45"
      />
      <ServicesSection showAllButton={false} />
      <ProcessSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
