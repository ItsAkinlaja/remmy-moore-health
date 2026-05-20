"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    category: "Insurance & Payment",
    question: "Do you accept Medicaid?",
    answer: "Yes, we are a certified Medicaid provider. Our team will verify your eligibility and handle all necessary documentation.",
  },
  {
    category: "Insurance & Payment",
    question: "Do you accept Medicare?",
    answer: "Yes, we accept Medicare Part A and Part B home health benefits for skilled nursing and other clinical services.",
  },
  {
    category: "Insurance & Payment",
    question: "What if I don't have insurance?",
    answer: "We welcome private pay clients and offer transparent, competitive pricing with no hidden fees.",
  },
  {
    category: "Caregiver Qualifications",
    question: "How are your caregivers screened?",
    answer: "All caregivers undergo comprehensive criminal background checks, drug screening, and reference verification.",
  },
  {
    category: "Caregiver Qualifications",
    question: "Are your caregivers licensed?",
    answer: "Yes. Our team includes RNs, LPNs, and CNAs who maintain current state-required licenses and certifications.",
  },
  {
    category: "Scheduling & Services",
    question: "How quickly can care begin?",
    answer: "In most cases, care can begin within 24–48 hours of your initial inquiry and assessment.",
  },
  {
    category: "Scheduling & Services",
    question: "What hours are services available?",
    answer: "We offer flexible scheduling including part-time, full-time, overnight, and 24-hour live-in care support.",
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section id="faq" className="py-24 bg-slate-50" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find quick answers about our home health care services and insurance coverage.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                activeCategory === cat ? "bg-blue-600 text-white" : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-white border border-slate-200 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-2">Still have questions?</h3>
          <p className="text-slate-600 mb-6">Our care coordinators are available to help you find the answers you need.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+16785994557" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
              Call Us Now
            </a>
            <a href="/contact" className="bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-200 transition-colors">
              Send a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
