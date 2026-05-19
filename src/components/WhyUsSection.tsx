"use client";

import {
  Heart,
  Clock,
  DollarSign,
  ClipboardList,
  Zap,
  FileText,
  CheckCircle,
  X,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Compassionate Caregivers",
    description: "Professionals who care deeply about dignity and building personal relationships.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Our coordination team is available day and night to respond to your needs.",
  },
  {
    icon: DollarSign,
    title: "Affordable Options",
    description: "Accepting Medicaid, Medicare, and private pay to ensure accessibility.",
  },
  {
    icon: ClipboardList,
    title: "Personalized Plans",
    description: "Customized care developed with input from families and healthcare providers.",
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    description: "Streamlined intake process where care often begins within 24–48 hours.",
  },
  {
    icon: FileText,
    title: "Insurance Assistance",
    description: "We handle the paperwork, authorizations, and coordination for you.",
  },
];

const comparisonData = [
  { feature: "Personalized Care Plans", us: true, others: false },
  { feature: "24/7 Availability", us: true, others: false },
  { feature: "Medicaid & Medicare Accepted", us: true, others: true },
  { feature: "Background-Checked Caregivers", us: true, others: true },
  { feature: "Fast 24–48hr Onboarding", us: true, others: false },
  { feature: "Insurance Navigation Support", us: true, others: false },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Why Families Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We go beyond basics to provide care that restores independence and brings peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {reasons.map((reason, i) => (
            <div key={i} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-blue-400 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{reason.title}</h3>
              <p className="text-slate-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">How We Compare</h3>
            <p className="text-slate-400">Excellence in every standard of care</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-8 py-4 font-bold text-slate-700">Feature</th>
                  <th className="px-8 py-4 text-center font-bold text-blue-600">Remmy Moore</th>
                  <th className="px-8 py-4 text-center font-bold text-slate-400">Other Agencies</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="px-8 py-4 text-slate-700 font-medium">{row.feature}</td>
                    <td className="px-8 py-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                    </td>
                    <td className="px-8 py-4 text-center">
                      {row.others ? (
                        <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
