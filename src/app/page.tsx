import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HomepageVisualStory from "@/components/HomepageVisualStory";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import HomePreview from "@/components/HomePreview";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <div id="main-content">
        <Hero />
        <HomepageVisualStory />
        <ServicesSection limit={4} />
        <ProcessSection />
        <HomePreview />
      </div>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
