import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
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
      <PageHero
        title="Insurance & Coverage"
        subtitle="We Work with Most Insurance Plans"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
      />
      <CoverageSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
