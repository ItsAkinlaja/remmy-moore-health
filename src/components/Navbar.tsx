"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-blue-900/10 py-3"
            : "bg-transparent py-5"
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center group"
              aria-label="Remmy Moore Home Health Care Agency LLC - Home"
            >
              <motion.div whileHover={{ scale: 1.02 }}>
                <div className="relative w-24 h-24 sm:w-28 sm:h-28">
                  <Image
                    src="/logo.png"
                    alt="Remmy Moore Home Health Care Agency LLC logo"
                    fill
                    priority
                    sizes="(min-width: 640px) 112px, 96px"
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 ${
                    scrolled ? "text-slate-700" : "text-white/90 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+1-800-000-0000"
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                  scrolled ? "text-slate-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                }`}
                aria-label="Call us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>(800) 000-0000</span>
              </a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => window.location.href = '/contact'}
                className="px-5 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10"
              }`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl flex flex-col">
              <div className="flex items-center justify-between p-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16">
                      <Image
                        src="/logo.png"
                        alt="Remmy Moore Home Health Care Agency LLC logo"
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-6 space-y-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block w-full text-left px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-slate-100 space-y-3">
                <a
                  href="tel:+1-800-000-0000"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 text-slate-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  (800) 000-0000
                </a>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    window.location.href = '/contact';
                  }}
                  className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started Today
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
