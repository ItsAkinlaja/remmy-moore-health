"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, X, MessageSquare, Calendar } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    window.location.href = '/contact';
    setExpanded(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <div
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
          role="complementary"
          aria-label="Quick contact options"
        >
          {/* Expanded options */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-2"
              >
                <motion.a
                  whileHover={{ scale: 1.05, x: -4 }}
                  href="tel:+1-800-000-0000"
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-800 font-semibold text-sm hover:border-blue-200 transition-colors"
                  aria-label="Call us at (800) 000-0000"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  Call (800) 000-0000
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05, x: -4 }}
                  onClick={scrollToContact}
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-800 font-semibold text-sm hover:border-blue-200 transition-colors"
                  aria-label="Schedule care"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  Schedule Care
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, x: -4 }}
                  onClick={scrollToContact}
                  className="flex items-center gap-3 px-5 py-3 bg-white rounded-2xl shadow-xl border border-slate-100 text-slate-800 font-semibold text-sm hover:border-blue-200 transition-colors"
                  aria-label="Send a message"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  Send a Message
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setExpanded(!expanded)}
            className="relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-sky-500 shadow-2xl shadow-blue-500/40 flex items-center justify-center emergency-pulse"
            aria-label={expanded ? "Close contact options" : "Open contact options"}
            aria-expanded={expanded}
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-7 h-7 text-white" aria-hidden="true" />
                </motion.div>
              ) : (
                <motion.div
                  key="phone"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-7 h-7 text-white" aria-hidden="true" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Notification dot */}
            {!expanded && (
              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white"
                aria-hidden="true"
              />
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
