"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, ArrowRight, Heart, Shield } from "lucide-react";

export default function CTABanner() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-sky-300/20 blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
              <Heart className="w-10 h-10 text-white fill-white" aria-hidden="true" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-white/20"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="cta-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Your Loved Ones Deserve{" "}
          <span className="text-sky-200">Compassionate Care</span>{" "}
          at Home
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Don&apos;t wait to get the care your family needs. Our team is ready to
          help you navigate options, verify insurance, and begin care — often
          within 24 hours.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.97 }}
            href="tel:+1-800-000-0000"
            className="flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-xl text-base"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call (800) 000-0000
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="flex items-center gap-3 px-8 py-4 bg-white/15 backdrop-blur-sm border-2 border-white/40 text-white font-bold rounded-2xl hover:bg-white/25 transition-all text-base"
          >
            <Calendar className="w-5 h-5" aria-hidden="true" />
            Schedule a Free Assessment
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToContact}
            className="flex items-center gap-3 px-8 py-4 bg-sky-400/30 backdrop-blur-sm border border-sky-300/40 text-white font-bold rounded-2xl hover:bg-sky-400/40 transition-all text-base"
          >
            Get Started
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </motion.button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-white/70 text-sm"
        >
          {[
            { icon: Shield, text: "HIPAA Compliant" },
            { icon: Heart, text: "Compassionate Care" },
            { icon: Phone, text: "24/7 Support" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-4 h-4 text-sky-300" aria-hidden="true" />
              {item.text}
            </div>
          ))}
        </motion.div>

        {/* Emergency note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm"
        >
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
          Emergency care coordination available — call us anytime
        </motion.div>
      </div>
    </section>
  );
}
