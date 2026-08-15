import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Remmy Moore Home Health Care Agency – Rockmart, GA",
  description:
    "Privacy policy for Remmy Moore Home Health Care Agency LLC, located at 170 Shady Lane, Rockmart, GA 30153. HIPAA-compliant care you can trust.",
  alternates: {
    canonical: "https://www.remmymoorehealth.com/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      <PageHero
        title="Privacy Policy"
        subtitle="Your Privacy is Our Priority"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
      />
      <div className="py-24 px-4 max-w-4xl mx-auto">
        <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
          <p>Last Updated: May 2024</p>
          <p>Remmy Moore Home Health Care Agency LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">Information We Collect</h2>
          <p>We may collect personal information such as your name, contact details, and health-related information when you use our services or contact us through our website.</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">HIPAA Compliance</h2>
          <p>As a healthcare provider, we strictly adhere to the Health Insurance Portability and Accountability Act (HIPAA) to ensure the security and confidentiality of your Protected Health Information (PHI).</p>
          <h2 className="text-2xl font-bold text-slate-900 mt-8">How We Use Your Information</h2>
          <p>Your information is used to provide home health services, communicate with you, and comply with legal obligations.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
