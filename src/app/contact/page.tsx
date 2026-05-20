import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Clock, Phone, UserCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us | Remmy Moore Home Health Care Agency",
  description: "Get in touch with Remmy Moore Home Health Care Agency. Call us at (800) 000-0000 or fill out our contact form for a free consultation.",
};

const nextSteps = [
  {
    icon: Clock,
    title: "Quick Response",
    description: "Our care coordinators monitor messages 24/7. You can expect a response within 2 business hours."
  },
  {
    icon: Phone,
    title: "Care Consultation",
    description: "We'll discuss your specific needs, answer insurance questions, and explain our service options."
  },
  {
    icon: UserCheck,
    title: "Home Assessment",
    description: "If you're ready, we'll schedule a free, no-obligation in-home assessment with a licensed nurse."
  }
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Navbar />
      <PageHero
        title="Get in Touch"
        subtitle="We're Ready to Help. Let's Connect."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
      />
      <div className="pt-0">
        <ContactSection />

        {/* What Happens Next Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What Happens Next?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Once you reach out, we follow a simple, professional process to ensure you get the right care as quickly as possible.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {nextSteps.map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                  <div className="absolute top-0 right-0 p-4 text-4xl font-black text-slate-50 group-hover:text-blue-50 transition-colors">
                    0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <FloatingCTA />
    </main>
  );
}
