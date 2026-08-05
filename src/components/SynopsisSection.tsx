"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Heart, ShieldCheck, UserPlus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const highLevelServices = [
  {
    title: "Clinical Excellence",
    description: "Professional Skilled Nursing and medication management delivered by licensed RNs and LPNs.",
    icon: ShieldCheck,
  },
  {
    title: "ADL Support",
    description: "Expert assistance with Activities of Daily Living, including bathing, dressing, and nutritional support.",
    icon: Heart,
  },
  {
    title: "Specialized Care",
    description: "Dedicated programs for seniors, pediatric clients, and individuals with disabilities.",
    icon: UserPlus,
  },
  {
    title: "Family Peace of Mind",
    description: "24/7 care coordination and respite services to support family caregivers.",
    icon: CheckCircle2,
  },
];

export default function SynopsisSection() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
              Our Agency at a Glance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Comprehensive Care Tailored to <br />
              <span className="text-blue-600 font-semibold">Every Stage of Life.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              At Remmy Moore Home Health Care, we provide a high-level continuum of care that bridges the gap between hospital and home. Our mission is to deliver clinical excellence with the warmth and dignity every individual deserves.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {highLevelServices.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
                Explore Full Services
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all">
                Request a Consultation
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://ik.imagekit.io/scmchurch/cdc-LbUOh89q4Es-unsplash.jpg"
                alt="Compassionate Care"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-sky-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
