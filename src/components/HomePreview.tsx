"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CreditCard,
  HelpCircle,
  ArrowRight,
  Shield,
  Heart,
} from "lucide-react";

const stats = [
  { value: "500+", label: "Families Served" },
  { value: "Licensed", label: "Professional Team" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Care Support" },
];

const links = [
  {
    href: "/about",
    icon: Shield,
    title: "About Our Agency",
    description: "Licensed, insured, and committed to the highest standards of home health care.",
  },
  {
    href: "/coverage",
    icon: CreditCard,
    title: "Insurance & Coverage",
    description: "We accept Medicare, Medicaid, and all private insurance plans for all ages.",
  },
  {
    href: "/faq",
    icon: HelpCircle,
    title: "Common Questions",
    description: "Find answers about our services, caregivers, and how to get started today.",
  },
];

export default function HomePreview() {
  return (
    <section className="py-24 bg-white" aria-label="Quick links">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24 border-y border-slate-100 py-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {links.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={item.href} className="group block h-full p-8 rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/5 transition-all">
                <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  <item.icon className="w-6 h-6 text-slate-600 group-hover:text-blue-600 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex items-center gap-2 text-sm font-bold text-blue-600">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-24 text-center p-12 rounded-3xl border border-slate-100 bg-slate-50">
          <Heart className="w-12 h-12 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Dedicated to Your Well-being</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Experience the difference of personalized care. Our team is ready to provide the support you need to thrive at home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              Contact Us Today
            </Link>
            <Link href="/testimonials" className="px-8 py-3.5 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-colors">
              Success Stories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
