"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardList, Heart } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Initial Inquiry",
    description: "Contact us via phone or our online form. We're here 24/7 to answer your questions and listen to your needs.",
  },
  {
    icon: ClipboardList,
    title: "Home Assessment",
    description: "A licensed nurse visits your home to conduct a clinical assessment and create a customized care plan.",
  },
  {
    icon: Heart,
    title: "Begin Care",
    description: "We match you with a compatible caregiver and start services, typically within 24–48 hours.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A simple, professional process to get the care your family deserves.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 relative z-10">
                <step.icon className="w-8 h-8 text-blue-600" aria-hidden="true" />
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to start the conversation?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Our care coordinators are standing by to help you navigate your options and find the best fit for your family.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+16785994557" className="bg-white text-blue-600 px-8 py-3.5 rounded-lg font-bold hover:bg-blue-50 transition-colors">
              Call 678 599 4557
            </a>
            <a href="/contact" className="bg-blue-700 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-blue-800 transition-colors border border-blue-500">
              Request Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
