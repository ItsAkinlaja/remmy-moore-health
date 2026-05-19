import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
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
      <div className="pt-24">
        <Breadcrumb />
        <ServicesSection showAllButton={false} />
        <ProcessSection />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
