import Navbar from "@/components/Navbar";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Contact Us | Remmy Moore Home Health Care Agency",
  description: "Get in touch with Remmy Moore Home Health Care Agency. Call us at (800) 000-0000 or fill out our contact form for a free consultation.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
