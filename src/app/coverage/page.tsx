import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import CoverageSection from "@/components/CoverageSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Medicaid & Medicare Home Health Coverage in Rockmart, GA | Remmy Moore",
  description:
    "Remmy Moore Home Health Care accepts Medicaid, Medicare, private insurance, and private pay in Rockmart, GA and Polk County. Find out if you qualify — call (678) 599-4557.",
  alternates: {
    canonical: "https://www.remmymoorehealth.com/coverage",
  },
  openGraph: {
    title: "Insurance & Coverage – Home Health Care Rockmart, GA",
    description:
      "Medicaid, Medicare, private insurance, and self-pay accepted. Home health care coverage for all ages in Rockmart and Polk County, GA.",
    url: "https://www.remmymoorehealth.com/coverage",
  },
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
