import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "FAQ – Home Health Care Questions Answered | Rockmart, GA",
  description:
    "Common questions about home health care in Rockmart, GA. Learn about Medicaid & Medicare coverage, caregiver qualifications, how to get started, and what to expect from Remmy Moore Home Health Care.",
  alternates: {
    canonical: "https://www.remmymoorehealth.com/faq",
  },
  openGraph: {
    title: "Home Health Care FAQ – Rockmart & Polk County, GA",
    description:
      "Get answers about home health care services, insurance, and eligibility in Rockmart, GA. Remmy Moore Home Health Care Agency LLC.",
    url: "https://www.remmymoorehealth.com/faq",
  },
};

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find Answers to Your Questions"
        image="https://ik.imagekit.io/scmchurch/national-cancer-institute-tl447mekwuQ-unsplash.jpg?updatedAt=1778872749039"
      />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
