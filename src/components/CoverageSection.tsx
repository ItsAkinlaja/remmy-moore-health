"use client";

import {
  CreditCard,
  FileCheck,
  Wallet,
  UserPlus,
  CheckCircle,
  Baby,
  Users,
  Heart,
} from "lucide-react";

const coverageOptions = [
  {
    icon: FileCheck,
    title: "Medicaid",
    subtitle: "Accepted",
    description: "Certified Medicaid provider. We handle all verification and authorization processes for you.",
    features: ["Waiver programs accepted", "Eligibility verification", "No out-of-pocket costs", "Care coordination"],
  },
  {
    icon: CreditCard,
    title: "Medicare",
    subtitle: "Accepted",
    description: "Medicare Part A and Part B benefits accepted for skilled nursing and clinical services.",
    features: ["Part A & B accepted", "Skilled nursing", "Therapy services", "Documentation support"],
  },
  {
    icon: Wallet,
    title: "Private Pay",
    subtitle: "Welcome",
    description: "Flexible options for those who prefer to pay directly. Transparent pricing with no hidden fees.",
    features: ["Flat-rate pricing", "Flexible scheduling", "No long-term contracts", "Custom packages"],
  },
  {
    icon: UserPlus,
    title: "Self-Sponsored",
    subtitle: "Available",
    description: "Family-funded or trust-funded care is warmly welcomed with personalized arrangements.",
    features: ["Family-funded care", "Trust funding", "Quality guaranteed", "Flexible billing"],
  },
];

const ageGroups = [
  { icon: Baby, label: "Pediatrics", range: "0–17 years" },
  { icon: Heart, label: "Adults", range: "18–64 years" },
  { icon: Users, label: "Seniors", range: "65+ years" },
  { icon: Heart, label: "All Ages", range: "0–100+ years" },
];

export default function CoverageSection() {
  return (
    <section id="coverage" className="py-24 bg-white" aria-labelledby="coverage-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="coverage-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Insurance & Coverage
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We work with all major insurance programs and welcome private clients of all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {coverageOptions.map((option, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden group hover:border-blue-600 transition-colors">
              <div className="bg-slate-50 p-6 border-b border-slate-200 group-hover:bg-blue-50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4">
                  <option.icon className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{option.title}</h3>
                <p className="text-blue-600 text-sm font-bold uppercase tracking-wider">{option.subtitle}</p>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{option.description}</p>
                <ul className="space-y-3">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="p-12 rounded-3xl bg-slate-50 border border-slate-100 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-10">Care for Every Generation</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {ageGroups.map((group, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-4 text-blue-600">
                  <group.icon className="w-6 h-6" />
                </div>
                <div className="font-bold text-slate-900">{group.label}</div>
                <div className="text-sm text-slate-500">{group.range}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-700 font-bold mb-8 text-lg">Not sure if you qualify? Let us help.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+1-800-000-0000" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Check Your Eligibility
            </a>
            <a href="/contact" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold hover:bg-slate-50 transition-colors">
              Request Info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
