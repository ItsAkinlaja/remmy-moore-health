import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Insurance & Coverage | Remmy Moore Home Health Care Agency",
  description: "We accept Medicaid, Medicare, private insurance, and private pay. Learn about our coverage options and client eligibility for all ages.",
};

export default function CoveragePage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <Breadcrumb />
        <CoverageSection />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
