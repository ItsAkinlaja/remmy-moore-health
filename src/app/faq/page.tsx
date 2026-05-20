import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "FAQ | Remmy Moore Home Health Care Agency",
  description: "Frequently asked questions about our home health care services, insurance coverage, caregiver qualifications, and how to get started.",
};

export default function FAQPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find Answers to Your Questions"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
      />
      <FAQSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
