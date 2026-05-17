"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Phone, ClipboardList, Heart, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Phone,
    title: "Contact Us",
    description:
      "Reach out by phone, email, or our online form. Our care coordinators are available 24/7 to answer your questions and begin the intake process.",
    details: [
      "Free initial consultation",
      "No obligation assessment",
      "Available 24/7",
      "Bilingual support available",
    ],
    color: "from-blue-600 to-blue-700",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Care Assessment",
    description:
      "A licensed care coordinator visits your home to conduct a comprehensive assessment, understand your needs, and develop a personalized care plan.",
    details: [
      "In-home assessment",
      "Personalized care plan",
      "Insurance verification",
      "Caregiver matching",
    ],
    color: "from-sky-500 to-sky-600",
    lightColor: "bg-sky-50",
    textColor: "text-sky-600",
  },
  {
    step: "03",
    icon: Heart,
    title: "Begin Personalized Care",
    description:
      "Your matched caregiver begins providing care — often within 24–48 hours. We monitor quality continuously and adjust the care plan as your needs evolve.",
    details: [
      "Care starts in 24–48 hours",
      "Ongoing quality monitoring",
      "Regular care plan reviews",
      "Family communication updates",
    ],
    color: "from-emerald-500 to-emerald-600",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="process"
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-50/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4" aria-hidden="true" />
            Simple Process
          </div>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Getting Started Is{" "}
            <span className="gradient-text">Simple</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve made the process of starting home health care as easy and
            stress-free as possible. Three steps to compassionate care.
          </p>
        </motion.div>

        {/* Steps */}
        <div ref={ref} className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-gradient-to-r from-blue-200 via-sky-300 to-emerald-200 z-0" aria-hidden="true" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex justify-center lg:justify-start mb-8 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl shadow-blue-500/20`}
                  >
                    <step.icon className="w-7 h-7 text-white" aria-hidden="true" />
                    {/* Step number badge */}
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-blue-100 flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">{step.step}</span>
                    </div>
                    {/* Pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.8 }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30`}
                    />
                  </motion.div>

                  {/* Arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-8 z-20">
                      <ArrowRight className="w-5 h-5 text-blue-300" aria-hidden="true" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2.5" role="list">
                    {step.details.map((detail, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: i * 0.2 + j * 0.08 + 0.4 }}
                        className="flex items-center gap-2.5 text-sm text-slate-700"
                      >
                        <div className={`w-5 h-5 rounded-full ${step.lightColor} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle className={`w-3 h-3 ${step.textColor}`} aria-hidden="true" />
                        </div>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-3xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100">
            <div className="text-left">
              <div className="font-bold text-slate-900 mb-1">Ready to get started?</div>
              <div className="text-slate-600 text-sm">Care can begin within 24–48 hours of your first call.</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex-shrink-0 flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 whitespace-nowrap"
            >
              Start Today
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
