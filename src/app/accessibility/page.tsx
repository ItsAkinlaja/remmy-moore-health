import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Accessibility Statement",
};

export default function AccessibilityPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 pb-24 px-4 max-w-4xl mx-auto">
        <Breadcrumb />
        <h1 className="text-4xl font-bold mt-12 mb-8">Accessibility Statement</h1>
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Remmy Moore Home Health Care Agency LLC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Conformance Status</h2>
          <p>The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. We strive to conform to WCAG 2.1 level AA standards.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Feedback</h2>
          <p>We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers by contacting us.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
