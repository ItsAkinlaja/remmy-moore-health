"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
} from "lucide-react";

const primaryPhone = "678 599 4557";
const primaryPhoneHref = "tel:+16785994557";
const contactEmail = "Remmymoore90@gmail.com";
const contactEmailHref = "mailto:Remmymoore90@gmail.com";
const contactAddress = "170 Shady Lane, Rockmart, GA 30153";

// Custom social icons as SVGs
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const services = [
  "Skilled Nursing",
  "Activities of Daily Living (ADL)",
  "Elderly Care",
  "Pediatric Home Care",
  "Disability Support",
  "Companion Care",
  "Medication Assistance",
  "Post-Surgery Care",
  "Private Duty Care",
  "Respite Care",
];

import Link from "next/link";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Coverage & Eligibility", href: "/coverage" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: LinkedInIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "Twitter / X", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative border-t border-slate-800" role="contentinfo">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="relative w-36 h-36">
                <Image
                  src="https://ik.imagekit.io/scmchurch/ChatGPT_Image_May_20__2026__06_07_45_AM-removebg-preview.png"
                  alt="Remmy Moore Home Health Care Agency LLC logo"
                  fill
                  sizes="144px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Compassionate, professional home health care for every age and
              every stage of life. Accepting Medicaid, Medicare, and private pay.
            </p>

            {/* Social links */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                  aria-label={social.label}
                  role="listitem"
                >
                  <social.icon className="w-4 h-4" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3" role="list">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3" role="list">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href="/services"
                    className="text-slate-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-flex items-center gap-1 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href={primaryPhoneHref}
                className="flex items-start gap-3 group"
                aria-label={`Call us at ${primaryPhone}`}
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600/40 transition-colors">
                  <Phone className="w-4 h-4 text-blue-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Phone</div>
                  <div className="text-slate-300 text-sm group-hover:text-white transition-colors">
                    {primaryPhone}
                  </div>
                </div>
              </a>

              <a
                href={contactEmailHref}
                className="flex items-start gap-3 group"
                aria-label="Email us"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-600/20 flex items-center justify-center flex-shrink-0 group-hover:bg-sky-600/40 transition-colors">
                  <Mail className="w-4 h-4 text-sky-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Email</div>
                  <div className="text-slate-300 text-sm group-hover:text-white transition-colors break-all">
                    {contactEmail}
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-violet-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Service Area</div>
                  <div className="text-slate-300 text-sm">{contactAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-600/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 mb-0.5">Office Hours</div>
                  <div className="text-slate-300 text-sm">
                    Mon–Fri: 8:00am – 6:00pm
                    <br />
                    <span className="text-green-400 font-medium">24/7 Emergency Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["Medicaid", "Medicare", "Private Pay"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-full bg-blue-900/50 border border-blue-700/50 text-blue-300 text-xs font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-slate-500 text-xs text-center sm:text-left">
              &copy; {currentYear} Remmy Moore Home Health Care Agency LLC. All rights reserved.
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
              <a href="/privacy" className="hover:text-white transition-colors flex items-center gap-1">
                Privacy Policy
              </a>
              <span className="text-slate-700" aria-hidden="true">|</span>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-slate-700" aria-hidden="true">|</span>
              <a href="/accessibility" className="hover:text-white transition-colors flex items-center gap-1">
                <Shield className="w-3 h-3" aria-hidden="true" />
                Accessibility
              </a>
              <span className="text-slate-700" aria-hidden="true">|</span>
              <span className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-500" aria-hidden="true" />
                HIPAA Compliant
              </span>
            </div>
          </div>

          {/* Accessibility statement */}
          <div className="mt-4 text-center">
            <p className="text-slate-600 text-xs">
              Remmy Moore Home Health Care Agency LLC is committed to ensuring digital accessibility
              for people with disabilities. We continually improve the user experience for everyone.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
