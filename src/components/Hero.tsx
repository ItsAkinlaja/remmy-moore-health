"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
  Shield,
  CheckCircle,
  Phone,
  ArrowRight,
  Award,
  Heart,
  ChevronDown,
} from "lucide-react";

const trustBadges = [
  { icon: Shield,       label: "HIPAA Compliant"    },
  { icon: CheckCircle,  label: "Licensed & Insured" },
  { icon: Award,        label: "Background Checked" },
  { icon: Heart,        label: "Medicaid & Medicare"},
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Remmy Moore Home Health Care — Hero"
      suppressHydrationWarning
    >
      {/* ── BACKGROUND ──────────────────────────────────────── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://ik.imagekit.io/scmchurch/mateo-hernandez-reyes-YgY1ITp8PMM-unsplash.jpg')",
          }}
          role="img"
          aria-label="Compassionate caregiver with patient at home"
        />

        {/* primary overlay — dark left, transparent right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/88 via-slate-900/65 to-slate-800/25" />

        {/* subtle blue cast on the left third */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-blue-950/30 to-transparent" />

        {/* top & bottom vignettes */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-slate-950/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </motion.div>

      {/* ── CONTENT ─────────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-28"
      >
        {/* max width keeps text tight and readable */}
        <div className="max-w-2xl">

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="text-[2.6rem] sm:text-5xl lg:text-6xl xl:text-[4rem]
                       font-extrabold text-white leading-[1.1] tracking-tight mb-5"
          >
            Compassionate Care,{" "}
            <span className="text-sky-300">Delivered at Home.</span>
          </motion.h1>

          {/* rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="h-px w-20 mb-7 origin-left bg-sky-400/60"
          />

          {/* sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg text-white/65 leading-relaxed mb-10 max-w-lg"
          >
            For every age, every stage of life. Our licensed caregivers bring
            professional, personalised care directly to your home — so your
            loved ones can thrive in comfort and dignity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl
                           bg-blue-600 hover:bg-blue-700
                           text-white font-semibold text-sm
                           shadow-lg shadow-blue-700/40
                           transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+16785994557"
              className="flex items-center gap-2 px-7 py-3.5 rounded-xl
                         bg-white/10 backdrop-blur-sm border border-white/20
                         text-white font-semibold text-sm
                         hover:bg-white/16 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>

          </motion.div>

          {/* trust badges — small, clean row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-2"
          >
            {trustBadges.map((badge, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full
                           bg-white/7 backdrop-blur-sm border border-white/12
                           text-white/70 text-xs font-medium"
              >
                <badge.icon className="w-3 h-3 text-sky-400 flex-shrink-0" aria-hidden="true" />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── SCROLL CUE ──────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5 text-white/30" aria-hidden="true" />
        </motion.div>
      </motion.div>
    </section>
  );
}
