"use client";

import { Home, Phone, AlertCircle } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 bg-slate-50">
        <div className="max-w-xl w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-10 h-10 text-blue-600" aria-hidden="true" />
          </div>

          <h1 className="text-8xl font-black text-slate-200 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Page Not Found</h2>

          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We couldn&apos;t find the page you&apos;re looking for. It may have been moved or the address was mistyped.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <a href="tel:+1-800-000-0000" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-colors">
              <Phone className="w-4 h-4" />
              Call Support
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4">
            {[
              { label: "Our Services", href: "/services" },
              { label: "About Us", href: "/about" },
              { label: "Insurance", href: "/coverage" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="p-4 rounded-xl bg-white border border-slate-100 text-slate-600 text-sm font-bold hover:border-blue-600 hover:text-blue-600 transition-all text-center"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
