"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  CreditCard,
  FileCheck,
  Wallet,
  UserPlus,
  CheckCircle,
  Phone,
  ArrowRight,
  Baby,
  Users,
  Heart,
} from "lucide-react";

const coverageOptions = [
  {
    icon: FileCheck,
    title: "Medicaid",
    subtitle: "Accepted",
    description:
      "We are a certified Medicaid provider. If you or your loved one qualifies for Medicaid, we handle the verification and authorization process for you.",
    features: [
      "Medicaid waiver programs accepted",
      "We verify eligibility for you",
      "No out-of-pocket costs for eligible clients",
      "Continuous care coordination",
    ],
    color: "from-blue-600 to-blue-700",
    badge: "Most Common",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: CreditCard,
    title: "Medicare",
    subtitle: "Accepted",
    description:
      "Medicare Part A and Part B home health benefits are accepted. Our team ensures all documentation meets Medicare requirements for seamless coverage.",
    features: [
      "Medicare Part A & B accepted",
      "Skilled nursing covered",
      "Physical therapy covered",
      "Full documentation support",
    ],
    color: "from-sky-500 to-sky-600",
    badge: "Federal Benefit",
    badgeColor: "bg-sky-100 text-sky-700",
  },
  {
    icon: Wallet,
    title: "Private Pay",
    subtitle: "Welcome",
    description:
      "Flexible private pay options for clients who prefer to pay directly. We offer transparent pricing with no hidden fees and customizable care packages.",
    features: [
      "Transparent, flat-rate pricing",
      "Flexible scheduling options",
      "No long-term contracts required",
      "Customizable care packages",
    ],
    color: "from-violet-500 to-violet-600",
    badge: "Flexible",
    badgeColor: "bg-violet-100 text-violet-700",
  },
  {
    icon: UserPlus,
    title: "Self-Sponsored",
    subtitle: "Available",
    description:
      "Self-sponsored clients are warmly welcomed. Whether funded by family, trusts, or personal savings, we provide the same exceptional level of care.",
    features: [
      "Family-funded care accepted",
      "Trust and estate funding welcome",
      "Same quality of care guaranteed",
      "Personalized billing arrangements",
    ],
    color: "from-emerald-500 to-emerald-600",
    badge: "All Welcome",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
];

const ageGroups = [
  { icon: Baby, label: "Newborns & Infants", range: "0–2 years" },
  { icon: Users, label: "Children & Teens", range: "3–17 years" },
  { icon: Heart, label: "Adults", range: "18–64 years" },
  { icon: Users, label: "Seniors", range: "65–100+ years" },
];

export default function CoverageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="coverage"
      className="py-24 animated-gradient relative overflow-hidden"
      aria-labelledby="coverage-heading"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 text-blue-600 text-sm font-semibold mb-6 shadow-sm">
            <CheckCircle className="w-4 h-4" aria-hidden="true" />
            Client Eligibility & Coverage
          </div>
          <h2
            id="coverage-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            We Accept{" "}
            <span className="gradient-text">All Clients</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No matter how you plan to pay for care, we have a solution. We work
            with all major insurance programs and welcome private clients of all ages.
          </p>
        </motion.div>

        {/* Coverage Cards */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {coverageOptions.map((option, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, boxShadow: "0 24px 60px rgba(37,99,235,0.15)" }}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-400 cursor-default"
            >
              {/* Card header */}
              <div className={`bg-gradient-to-br ${option.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div className="text-2xl font-bold">{option.title}</div>
                  <div className="text-white/80 text-sm font-medium">{option.subtitle}</div>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${option.badgeColor} text-xs font-semibold mb-4`}>
                  {option.badge}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  {option.description}
                </p>
                <ul className="space-y-2" role="list">
                  {option.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Age Groups */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-blue-50 mb-12"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Care for Every Age
            </h3>
            <p className="text-slate-600">
              From newborns to centenarians — we provide compassionate care at every stage of life.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {ageGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center mx-auto mb-4 shadow-md">
                  <group.icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div className="font-bold text-slate-900 text-sm mb-1">{group.label}</div>
                <div className="text-blue-600 text-xs font-semibold">{group.range}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-700 font-medium mb-6 text-lg">
            Not sure if you qualify? Let us help you find out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+1-800-000-0000"
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30"
            >
              <Phone className="w-5 h-5" />
              Call for Free Eligibility Check
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-colors"
            >
              Request Information
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
