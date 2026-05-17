"use client";

import { motion, type Variants } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  Heart,
  Clock,
  DollarSign,
  ClipboardList,
  Zap,
  FileText,
  CheckCircle,
  X,
  ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Compassionate Caregivers",
    description:
      "Our caregivers are not just trained professionals — they genuinely care. We match each client with a caregiver who fits their personality, needs, and preferences.",
    color: "from-rose-400 to-rose-500",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Care doesn't follow a 9-to-5 schedule. Our team is available around the clock to respond to needs, emergencies, and questions — day or night.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: DollarSign,
    title: "Affordable Care Options",
    description:
      "We work with Medicaid, Medicare, private insurance, and private pay to ensure cost is never a barrier to receiving quality care.",
    color: "from-emerald-400 to-emerald-500",
  },
  {
    icon: ClipboardList,
    title: "Personalized Care Plans",
    description:
      "Every client receives a customized care plan developed with input from the client, family, and healthcare providers — tailored to their exact needs.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Zap,
    title: "Fast Onboarding",
    description:
      "We understand urgency. Our streamlined intake process means care can often begin within 24–48 hours of your initial contact.",
    color: "from-amber-400 to-amber-500",
  },
  {
    icon: FileText,
    title: "Insurance Assistance",
    description:
      "Our team handles the paperwork. We assist with Medicaid and Medicare verification, prior authorizations, and insurance coordination.",
    color: "from-sky-500 to-sky-600",
  },
];

const comparisonData = [
  { feature: "Personalized Care Plans", us: true, others: false },
  { feature: "24/7 Availability", us: true, others: false },
  { feature: "Medicaid & Medicare Accepted", us: true, others: true },
  { feature: "Background-Checked Caregivers", us: true, others: true },
  { feature: "Fast 24–48hr Onboarding", us: true, others: false },
  { feature: "Insurance Navigation Support", us: true, others: false },
  { feature: "HIPAA-Compliant Processes", us: true, others: true },
  { feature: "Caregiver Personality Matching", us: true, others: false },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function WhyUsSection() {
  const ref = useRef(null);
  const tableRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const tableInView = useInView(tableRef, { once: true, margin: "-100px" });

  return (
    <section
      id="why-us"
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="why-us-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-50/60 blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-sky-50/60 blur-3xl translate-y-1/2 -translate-x-1/2" />
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
            <ThumbsUp className="w-4 h-4" aria-hidden="true" />
            Why Families Choose Us
          </div>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Care That Goes{" "}
            <span className="gradient-text">Beyond the Basics</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t just provide care — we build relationships, restore
            independence, and bring peace of mind to families across our community.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(37,99,235,0.1)" }}
              className="group flex gap-5 p-7 rounded-3xl bg-white border border-slate-100 shadow-sm hover:border-blue-100 transition-all duration-300 cursor-default"
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${reason.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                <reason.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          ref={tableRef}
          initial={{ opacity: 0, y: 40 }}
          animate={tableInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-100"
        >
          <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">How We Compare</h3>
            <p className="text-white/80">See why families consistently choose Remmy Moore over other agencies</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full" role="table" aria-label="Comparison of Remmy Moore vs other agencies">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left px-6 py-4 text-slate-700 font-semibold text-sm" scope="col">Feature</th>
                  <th className="px-6 py-4 text-center" scope="col">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold">
                      <Heart className="w-4 h-4 fill-white" />
                      Remmy Moore
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-slate-500 font-semibold text-sm" scope="col">
                    Other Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={tableInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.07, duration: 0.5 }}
                    className={`border-b border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"} hover:bg-blue-50/30 transition-colors`}
                  >
                    <td className="px-6 py-4 text-slate-700 text-sm font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-green-600" aria-label="Yes" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center">
                        {row.others ? (
                          <div className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" aria-label="Yes" />
                          </div>
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
                            <X className="w-4 h-4 text-red-500" aria-label="No" />
                          </div>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
