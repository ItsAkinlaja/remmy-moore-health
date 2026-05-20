"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, X, MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex flex-col gap-2"
              >
                <a
                  href="tel:+16785994557"
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-xl border border-slate-200 text-slate-900 font-bold text-sm hover:border-blue-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  Call 678 599 4557
                </a>

                <a
                  href="/contact"
                  className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg shadow-xl border border-slate-200 text-slate-900 font-bold text-sm hover:border-blue-600 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  Send Message
                </a>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setExpanded(!expanded)}
            className="w-14 h-14 rounded-full bg-blue-600 shadow-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
            aria-label="Contact Options"
          >
            {expanded ? <X className="w-6 h-6" /> : <Phone className="w-6 h-6" />}
          </button>
        </div>
      )}
    </AnimatePresence>
  );
}
