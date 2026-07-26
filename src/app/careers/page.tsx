import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import {
  Users,
  Heart,
  Clock,
  ShieldCheck,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Careers | Remmy Moore Home Health Care Agency",
  description: "Join our team of compassionate caregivers and healthcare professionals. Make a difference every day at Remmy Moore Home Health Care.",
};

const benefits = [
  {
    title: "Supportive Culture",
    description: "Join a family-oriented team that values and supports every member.",
    icon: Users,
  },
  {
    title: "Meaningful Work",
    description: "Positively impact the lives of our clients and their families every single day.",
    icon: Heart,
  },
  {
    title: "Flexible Scheduling",
    description: "We offer various shifts and schedules to help you maintain a work-life balance.",
    icon: Clock,
  },
  {
    title: "Professional Growth",
    description: "Ongoing training and opportunities to advance your healthcare career.",
    icon: ShieldCheck,
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <PageHero
        title="Careers"
        subtitle="Make a Difference Every Day"
        image="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1200&h=600&auto=format&fit=crop"
      />

      {/* Intro Section */}
      <section className="py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Join Our Team: Make a Difference Every Day
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10">
            At Remmy Moore Home Health Care, we are passionate about providing compassionate and high-quality in-home care services that improve the lives of our clients and their families. We believe that our dedicated caregivers are at the heart of what we do. If you&apos;re a caring professional looking for a fulfilling career in home healthcare, we&apos;d love for you to join our team.
          </p>
          <Link
            href="/contact?service=Employment%20Inquiry"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
          >
            Submit Your Interest
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Work with Remmy Moore?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We invest in our people because we know that a happy, supported team provides the best care for our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image & Text Section */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://ik.imagekit.io/scmchurch/image.png"
                alt="Healthcare professional smiling"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A Fulfilling Career Path</h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                Whether you are a seasoned nurse or a compassionate entry-level aide, Remmy Moore offers a path to growth. We provide the tools, training, and support you need to excel in your role and advance in your career.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Competitive compensation packages",
                  "Comprehensive health benefits for eligible staff",
                  "Continuous professional education and training",
                  "A work environment built on respect and dignity"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact?service=Employment%20Inquiry"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
              >
                Join our family today
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section — no openings */}
      <section className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-bold mb-4">Current Opportunities</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              We&apos;re always on the lookout for exceptional talent to join our growing team.
            </p>
          </div>

          {/* Empty state */}
          <div className="max-w-xl mx-auto text-center border border-white/10 rounded-2xl px-8 py-16">
            <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-7 h-7 text-slate-400" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              No Open Positions at This Time
            </h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              We don&apos;t have any active job postings right now, but we&apos;re always interested in hearing from passionate healthcare professionals. Send us your details and we&apos;ll reach out when a role opens up.
            </p>
            <Link
              href="/contact?service=Employment%20Inquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
            >
              Submit Your Interest
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Stay Connected</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
            There are no open positions at the moment, but we&apos;d still love to hear from you.
            Drop us a message and we&apos;ll keep you in mind when a role becomes available.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact?service=Employment%20Inquiry"
              className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-500/30 transition-all active:scale-[0.98] w-full sm:w-auto"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </main>
  );
}
