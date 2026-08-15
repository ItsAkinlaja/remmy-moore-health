import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Client Testimonials | Home Health Care in Rockmart, GA – Remmy Moore",
  description:
    "Read real reviews from families in Rockmart, GA who trust Remmy Moore Home Health Care Agency LLC. See why we maintain a 98% client satisfaction rate across Polk County.",
  alternates: {
    canonical: "https://remmymoorehealthcare.com/testimonials",
  },
  openGraph: {
    title: "Client Testimonials – Remmy Moore Home Health Care, Rockmart GA",
    description:
      "Hear from families in Rockmart and Polk County, GA who rely on Remmy Moore for compassionate home health care.",
    url: "https://remmymoorehealthcare.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Client Testimonials"
        subtitle="Hear from Families We've Helped"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop"
      />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
