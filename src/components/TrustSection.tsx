"use client";

import { motion, type Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Award,
  CheckCircle,
  Lock,
  UserCheck,
  BadgeCheck,
  Star,
  Stethoscope,
} from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "Your health information is protected with the highest standards of privacy and security.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Award,
    title: "Licensed Agency",
    description: "Fully licensed, bonded, and insured home health care agency operating with full regulatory compliance.",
    color: "from-sky-500 to-sky-600",
    bg: "bg-sky-50",
  },
  {
    icon: UserCheck,
    title: "Background-Checked Caregivers",
    description: "Every caregiver undergoes thorough background checks, drug screening, and credential verification.",
    color: "from-indigo-500 to-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: BadgeCheck,
    title: "Medicaid & Medicare Accepted",
    description: "We accept Medicaid, Medicare, private pay, and self-sponsored clients — care for everyone.",
    color: "from-blue-600 to-sky-500",
    bg: "bg-blue-50",
  },
  {
    icon: Stethoscope,
    title: "Certified Professionals",
    description: "Our team includes licensed nurses, certified nursing assistants, and trained personal care aides.",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: Star,
    title: "Years of Excellence",
    description: "Over a decade of delivering compassionate, high-quality home health care to families in our community.",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="trust"
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="trust-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-blue-50 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-sky-50 blur-3xl opacity-60" />
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
            <Lock className="w-4 h-4" aria-hidden="true" />
            Trust & Credibility
          </div>
          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Why Families Trust{" "}
            <span className="gradient-text">Remmy Moore</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We hold ourselves to the highest standards of care, compliance, and
            compassion — because your family deserves nothing less.
          </p>
        </motion.div>

        {/* Trust grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(37,99,235,0.12)" }}
              className="group relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:border-blue-100 transition-all duration-300 cursor-default"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-7 h-7 text-white" aria-hidden="true" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r from-blue-600 to-sky-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-sky-600 p-8 sm:p-12 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          <div className="relative">
            <div className="flex justify-center mb-4">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Fully Accredited. Fully Committed.
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our agency meets and exceeds all state and federal requirements for
              home health care delivery. Your family is in safe, professional hands.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
