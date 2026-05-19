import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
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
      <PageHero
        title="Client Testimonials"
        subtitle="Hear from Families We've Helped"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop"
        height="60"
      />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
