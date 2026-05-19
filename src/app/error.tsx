"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service like Sentry
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 bg-slate-50">
        <div className="max-w-xl w-full text-center">
          <div className="w-20 h-20 rounded-2xl bg-red-50 flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-10 h-10 text-red-600" aria-hidden="true" />
          </div>

          <h1 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong</h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We apologize for the inconvenience. An unexpected error has occurred. Our team has been notified.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => reset()}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RefreshCcw className="w-4 h-4" />
              Try Again
            </button>
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 border border-slate-200 font-bold rounded-lg hover:bg-slate-50 transition-colors">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
