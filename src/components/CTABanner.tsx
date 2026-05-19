"use client";

import { Phone, Calendar, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-24 bg-blue-600 relative overflow-hidden" aria-labelledby="cta-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Heart className="w-12 h-12 text-white mx-auto mb-8 opacity-50" />

        <h2 id="cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Your Loved Ones Deserve <br />
          <span className="text-blue-100">Compassionate Care at Home</span>
        </h2>

        <p className="text-xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
          Don&apos;t wait to get the care your family needs. Our team is ready to help you navigate options, verify insurance, and begin care.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+1-800-000-0000" className="flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            <Phone className="w-5 h-5" />
            Call (800) 000-0000
          </a>

          <Link href="/contact" className="flex items-center gap-3 px-8 py-4 bg-blue-700 text-white font-bold rounded-lg border border-blue-500 hover:bg-blue-800 transition-colors">
            <Calendar className="w-5 h-5" />
            Request Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
