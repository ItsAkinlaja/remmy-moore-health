"use client";

import { Home, Phone, AlertCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section with 404 */}
      <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden bg-slate-900">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
          alt="404 Not Found"
          fill
          priority
          className="object-cover absolute inset-0"
          sizes="100vw"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />

        {/* Hero Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-8xl sm:text-9xl font-black text-white mb-4 drop-shadow-lg">
              404
            </h1>
            <p className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">
              Page Not Found
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 flex flex-col items-center justify-center pt-16 pb-24 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-2xl w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-10 h-10 text-blue-600" aria-hidden="true" />
          </div>

          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            We couldn't find that page
          </h2>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            It may have been moved, or the address was mistyped. Don't worry—we're here to help you get back on track.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href="tel:+16785994557"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 border-2 border-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Call Support
            </a>
          </div>

          {/* Suggested Pages */}
          <div>
            <p className="text-slate-500 font-semibold mb-6 text-sm">
              Or explore these popular pages:
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Our Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Insurance Coverage", href: "/coverage" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-4 rounded-xl bg-white border-2 border-slate-200 text-slate-600 text-sm font-bold hover:border-blue-600 hover:text-blue-600 hover:shadow-md transition-all text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
