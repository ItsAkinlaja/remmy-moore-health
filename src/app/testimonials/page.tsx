import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Client Testimonials | Remmy Moore Home Health Care Agency",
  description: "Read real stories from families who trust Remmy Moore for compassionate home health care. See why we have a 98% satisfaction rate.",
};

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <TestimonialsSection />
        <CTABanner />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
