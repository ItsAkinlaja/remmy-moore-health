import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-24 px-4 max-w-4xl mx-auto">
        <Breadcrumb />
        <h1 className="text-4xl font-bold mt-12 mb-8">Terms of Service</h1>
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
