import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Terms of Service"
        subtitle="Please Read Our Terms Carefully"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
      />
      <div className="py-24 px-4 max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Use License</h2>
          <p>Permission is granted to temporarily view the materials on our website for personal, non-commercial transitory viewing only.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Medical Disclaimer</h2>
          <p>The content on this website is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
