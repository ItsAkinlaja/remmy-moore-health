"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787?auto=format&fit=crop&w=1200&q=80",
    alt: "Caregiver helping an older adult",
  },
  {
    src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80",
    alt: "Nurse at home",
  },
];

const highlights = [
  "Dignified support with Activities of Daily Living (ADL)",
  "Professional medical support at home",
  "Flexible scheduling for your convenience",
];

export default function HomepageVisualStory() {
  return (
    <section className="py-24 bg-white" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 id="story-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              Professional Care, <br />
              <span className="text-blue-600 font-semibold">Right Where You Belong.</span>
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              At Remmy Moore, we believe home is more than just a place — it&apos;s where healing happens best. Our dedicated team brings hospital-grade expertise with the warmth of a neighbor.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span className="text-base font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3.5 text-white font-semibold transition-colors hover:bg-blue-700">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+16785994557" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-slate-700 font-semibold hover:bg-slate-50 transition-colors">
                <Phone className="w-4 h-4" />
                Contact Us
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-12">
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-sm">
                <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" />
              </div>
              <div className="h-24 bg-blue-50 rounded-2xl" />
            </div>
            <div className="space-y-4">
              <div className="h-32 bg-slate-50 rounded-2xl" />
              <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-sm">
                <Image src={images[1].src} alt={images[1].alt} fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
