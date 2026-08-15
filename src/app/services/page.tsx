import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export const metadata = {
  title: "Home Health Care Services in Rockmart, GA | Remmy Moore",
  description:
    "Skilled nursing, ADL assistance, elderly care, pediatric home care, and more — serving Rockmart, GA (30153), Cedartown, and Polk County. Medicaid & Medicare accepted. Call (678) 599-4557.",
  alternates: {
    canonical: "https://www.remmymoorehealth.com/services",
  },
  openGraph: {
    title: "Home Health Care Services – Rockmart & Polk County, GA",
    description:
      "Full range of in-home health care services in Rockmart, GA. Skilled nursing, personal care, ADL, elderly and pediatric care. Medicaid & Medicare accepted.",
    url: "https://www.remmymoorehealth.com/services",
  },
};

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Our Services"
        subtitle="Comprehensive Care for Every Need"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=600&fit=crop"
      />
      <ServicesSection showAllButton={false} />
      <ProcessSection />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
