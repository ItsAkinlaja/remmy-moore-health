"use client";

import { motion } from "framer-motion";
import { Heart, Home, Phone } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-100 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-sky-100 blur-3xl"
        />
        {/* Floating medical crosses */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className="absolute text-blue-200 text-4xl font-bold select-none"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            aria-hidden="true"
          >
            +
          </motion.div>
        ))}
      </div>

      <div className="relative text-center max-w-2xl mx-auto">
        {/* Animated heart icon */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center shadow-2xl shadow-blue-500/30">
              <Heart className="w-14 h-14 text-white fill-white" aria-hidden="true" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-sky-500 opacity-30"
              aria-hidden="true"
            />
          </div>
        </motion.div>

        {/* 404 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4"
        >
          <span className="text-8xl sm:text-9xl font-black gradient-text leading-none">
            404
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4"
        >
          Looks like this page needs care too.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="text-slate-600 text-lg mb-10 leading-relaxed"
        >
          The page you&apos;re looking for seems to have wandered off. Don&apos;t worry —
          our care team is still here for you. Let&apos;s get you back on track.
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 cursor-pointer"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              Return Home
            </motion.span>
          </Link>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="tel:+1-800-000-0000"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-lg border border-blue-100 hover:border-blue-300 transition-colors"
          >
            <Phone className="w-5 h-5" aria-hidden="true" />
            Call Us
          </motion.a>
        </motion.div>

        {/* Quick links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {[
            { label: "Our Services", href: "/#services" },
            { label: "Contact Us", href: "/#contact" },
            { label: "FAQ", href: "/#faq" },
            { label: "Coverage", href: "/#coverage" },
          ].map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-300 hover:text-blue-600 transition-colors shadow-sm"
            >
              {link.label}
            </Link>
          ))}
        </motion.div>

        {/* Brand footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-16 flex items-center justify-center gap-2 text-slate-400 text-sm"
        >
          <Heart className="w-4 h-4 text-blue-400 fill-blue-400" aria-hidden="true" />
          <span>Remmy Moore Home Health Care Agency LLC</span>
        </motion.div>
      </div>
    </div>
  );
}
