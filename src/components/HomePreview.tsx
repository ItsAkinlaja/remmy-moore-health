"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Stethoscope,
  CreditCard,
  Star,
  HelpCircle,
  Phone,
  ArrowRight,
  Heart,
  Shield,
  Users,
  CheckCircle,
} from "lucide-react";

/* ── Animated counter ─────────────────────────────────────────── */
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref   = useRef<HTMLSpanElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          const steps     = 60;
          const increment = target / steps;
          let   current   = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) { setCount(target); clearInterval(timer); }
            else                   { setCount(Math.floor(current)); }
          }, 2000 / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 500, suffix: "+",  label: "Families Served",    icon: Users       },
  { value: 10,  suffix: "+",  label: "Years of Care",      icon: Heart       },
  { value: 98,  suffix: "%",  label: "Satisfaction Rate",  icon: CheckCircle },
  { value: 100, suffix: "%",  label: "HIPAA Compliant",    icon: Shield      },
];

const pages = [
  {
    href:        "/about",
    icon:        Shield,
    label:       "About Us",
    headline:    "Why Families Trust Us",
    description: "Licensed, HIPAA-compliant, and background-checked caregivers with over a decade of compassionate service.",
    accent:      "bg-blue-600",
    light:       "bg-blue-50",
    text:        "text-blue-700",
    border:      "border-blue-100 hover:border-blue-200",
  },
  {
    href:        "/services",
    icon:        Stethoscope,
    label:       "Services",
    headline:    "10 Specialised Services",
    description: "Skilled nursing, personal care, elderly care, pediatric care, disability support, and more.",
    accent:      "bg-sky-600",
    light:       "bg-sky-50",
    text:        "text-sky-700",
    border:      "border-sky-100 hover:border-sky-200",
  },
  {
    href:        "/coverage",
    icon:        CreditCard,
    label:       "Coverage",
    headline:    "Medicaid & Medicare Accepted",
    description: "We accept Medicaid, Medicare, private insurance, and self-sponsored clients of all ages.",
    accent:      "bg-indigo-600",
    light:       "bg-indigo-50",
    text:        "text-indigo-700",
    border:      "border-indigo-100 hover:border-indigo-200",
  },
  {
    href:        "/testimonials",
    icon:        Star,
    label:       "Testimonials",
    headline:    "4.9 / 5 from 200+ Families",
    description: "Real stories from real families who trust Remmy Moore for professional home health care.",
    accent:      "bg-amber-500",
    light:       "bg-amber-50",
    text:        "text-amber-700",
    border:      "border-amber-100 hover:border-amber-200",
  },
  {
    href:        "/faq",
    icon:        HelpCircle,
    label:       "FAQ",
    headline:    "Common Questions Answered",
    description: "Insurance, caregiver qualifications, scheduling, and how to get started — all answered.",
    accent:      "bg-teal-600",
    light:       "bg-teal-50",
    text:        "text-teal-700",
    border:      "border-teal-100 hover:border-teal-200",
  },
  {
    href:        "/contact",
    icon:        Phone,
    label:       "Contact",
    headline:    "Care Starts in 24–48 Hours",
    description: "Our coordinators are available 24/7. Reach out and we will respond within 2 hours.",
    accent:      "bg-slate-700",
    light:       "bg-slate-50",
    text:        "text-slate-700",
    border:      "border-slate-200 hover:border-slate-300",
  },
];

export default function HomePreview() {
  return (
    <section className="bg-white" aria-label="Site overview">

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      {/* sits right below the hero fade, clean white background */}
      <div className="border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-100">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center justify-center
                           py-8 px-4 text-center cursor-default
                           group hover:bg-blue-50/40 transition-colors duration-200"
              >
                <s.icon
                  className="w-5 h-5 text-blue-400 mb-2.5 group-hover:text-blue-600 transition-colors"
                  aria-hidden="true"
                />
                <div className="text-2xl sm:text-3xl font-bold text-slate-900 leading-none mb-1 tabular-nums">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-xs text-slate-500 font-medium tracking-wide">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PAGE CARDS ──────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Explore Our Agency
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug max-w-lg">
            Everything you need, in one place.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pages.map((page, i) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link href={page.href} className="group block h-full">
                <div className={`relative h-full rounded-2xl p-6 border bg-white
                                 shadow-sm hover:shadow-md
                                 hover:-translate-y-1
                                 transition-all duration-250 ${page.border}`}>

                  {/* icon */}
                  <div className={`w-10 h-10 rounded-xl ${page.accent}
                                   flex items-center justify-center mb-4
                                   group-hover:scale-105 transition-transform duration-200`}>
                    <page.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>

                  {/* label */}
                  <div className={`inline-block px-2.5 py-0.5 rounded-md
                                   ${page.light} ${page.text}
                                   text-[11px] font-semibold uppercase tracking-wider mb-3`}>
                    {page.label}
                  </div>

                  <h3 className="text-base font-semibold text-slate-900 mb-2 leading-snug">
                    {page.headline}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    {page.description}
                  </p>

                  <div className={`flex items-center gap-1 text-sm font-semibold ${page.text}`}>
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA STRIP ───────────────────────────────────────── */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Ready to get started?
            </h2>
            <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
              Care can begin within 24–48 hours. Call us or submit a request and
              a coordinator will follow up within 2 hours.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+1-800-000-0000"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl
                           bg-blue-600 hover:bg-blue-700
                           text-white font-semibold text-sm
                           shadow-md shadow-blue-600/25
                           transition-colors duration-200"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call (800) 000-0000
              </motion.a>

              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl
                             bg-white text-slate-800 font-semibold text-sm
                             border border-slate-200 hover:border-slate-300
                             shadow-sm hover:shadow-md
                             transition-all duration-200"
                >
                  Request a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
