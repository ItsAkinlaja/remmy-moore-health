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
        subtitle="We Work with All Insurance Plans"
          image="https://ik.imagekit.io/scmchurch/patty-brito-Y-3Dt0us7e0-unsplash.jpg"
      />
      <CoverageSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
