import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
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
      <div className="pt-24">
        <Breadcrumb />
        <FAQSection />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
