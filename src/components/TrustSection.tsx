"use client";

import {
  Shield,
  Award,
  Lock,
  UserCheck,
  BadgeCheck,
  Stethoscope,
} from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your health information is protected with the highest standards of privacy.",
  },
  {
    icon: Award,
    title: "Licensed Agency",
    description: "Fully licensed, bonded, and insured operating with full regulatory compliance.",
  },
  {
    icon: UserCheck,
    title: "Vetted Caregivers",
    description: "Every caregiver undergoes thorough background checks and drug screening.",
  },
  {
    icon: BadgeCheck,
    title: "Medicare Accepted",
    description: "We work with Medicaid, Medicare, and private pay to ensure accessibility.",
  },
  {
    icon: Stethoscope,
    title: "Certified Staff",
    description: "Our team includes licensed nurses and certified nursing assistants.",
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "Committed to delivering high-quality, compassionate home health care to local families.",
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="py-24 bg-white" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="trust-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Trust & Credibility
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We hold ourselves to the highest standards of care and compliance because your family deserves nothing less.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustItems.map((item, i) => (
            <div key={i} className="p-8 rounded-xl bg-slate-50 border border-slate-100 group hover:border-blue-600 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-12 rounded-2xl bg-slate-900 text-white text-center">
          <Lock className="w-12 h-12 text-blue-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Fully Accredited & Committed</h3>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Our agency meets and exceeds all state and federal requirements for home health care delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
