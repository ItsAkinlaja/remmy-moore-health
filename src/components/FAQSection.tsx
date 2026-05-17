"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    category: "Insurance & Payment",
    question: "Do you accept Medicaid?",
    answer:
      "Yes, we are a certified Medicaid provider and accept Medicaid for eligible clients. Our team will verify your Medicaid eligibility, handle all prior authorizations, and manage the paperwork so you can focus on care. We accept various Medicaid waiver programs as well.",
  },
  {
    category: "Insurance & Payment",
    question: "Do you accept Medicare?",
    answer:
      "Yes, we accept Medicare Part A and Part B home health benefits. Medicare typically covers skilled nursing care, physical therapy, occupational therapy, speech therapy, and home health aide services when ordered by a physician. Our team ensures all documentation meets Medicare requirements.",
  },
  {
    category: "Insurance & Payment",
    question: "What if I don't have insurance?",
    answer:
      "We welcome private pay and self-sponsored clients. We offer transparent, competitive pricing with no hidden fees. Our care coordinators will work with you to create a care plan that fits your budget. Payment plans and flexible arrangements are available.",
  },
  {
    category: "Insurance & Payment",
    question: "Do you accept private insurance?",
    answer:
      "Yes, we work with many private insurance plans. Contact us with your insurance information and we'll verify your benefits and coverage before care begins. We handle the billing and claims process on your behalf.",
  },
  {
    category: "Caregiver Qualifications",
    question: "How are your caregivers screened?",
    answer:
      "All caregivers undergo a comprehensive screening process including criminal background checks, sex offender registry checks, drug screening, reference verification, and credential verification. We only hire caregivers who meet our high standards for professionalism and compassion.",
  },
  {
    category: "Caregiver Qualifications",
    question: "Are your caregivers licensed and certified?",
    answer:
      "Yes. Our team includes Registered Nurses (RNs), Licensed Practical Nurses (LPNs), Certified Nursing Assistants (CNAs), and trained Personal Care Aides (PCAs). All clinical staff maintain current licenses and certifications as required by state regulations.",
  },
  {
    category: "Caregiver Qualifications",
    question: "Can I request a specific caregiver?",
    answer:
      "Absolutely. We believe in caregiver-client compatibility. We carefully match caregivers based on your loved one's needs, personality, and preferences. If you're not satisfied with a match, we'll work with you to find the right fit at no additional cost.",
  },
  {
    category: "Scheduling & Services",
    question: "How quickly can care begin?",
    answer:
      "In most cases, care can begin within 24–48 hours of your initial contact. For urgent situations, we do our best to expedite the process. Our streamlined intake and assessment process is designed to get care started as quickly as possible.",
  },
  {
    category: "Scheduling & Services",
    question: "What hours are services available?",
    answer:
      "We offer flexible scheduling including part-time, full-time, overnight, and 24-hour live-in care. Our care coordination team is available 24/7 to respond to needs and emergencies. We work around your schedule and your loved one's routine.",
  },
  {
    category: "Scheduling & Services",
    question: "Do you provide care for children?",
    answer:
      "Yes, we provide specialized pediatric home care for children of all ages, including infants. Our pediatric caregivers are trained to work with children who have medical needs, developmental conditions, or chronic illnesses. We serve clients from newborns to 100+ years old.",
  },
  {
    category: "Privacy & Compliance",
    question: "How do you protect my health information?",
    answer:
      "We are fully HIPAA compliant. All client health information is handled with strict confidentiality. Our staff receives regular HIPAA training, and we use secure systems for all health records and communications. Your privacy is our priority.",
  },
  {
    category: "Privacy & Compliance",
    question: "Are you licensed and insured?",
    answer:
      "Yes, Remmy Moore Home Health Care Agency LLC is fully licensed by the state, bonded, and insured. We carry comprehensive liability insurance and workers' compensation coverage. You can request proof of our credentials at any time.",
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredFaqs =
    activeCategory === "All"
      ? faqs
      : faqs.filter((f) => f.category === activeCategory);

  return (
    <section
      id="faq"
      className="py-24 bg-slate-50 relative overflow-hidden"
      aria-labelledby="faq-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" aria-hidden="true" />
            Frequently Asked Questions
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Questions?{" "}
            <span className="gradient-text">We Have Answers</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our services, insurance coverage,
            and how to get started with home health care.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="FAQ categories"
        >
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              role="tab"
              aria-selected={activeCategory === cat}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-3" role="list">
          <AnimatePresence initial={false}>
            {filteredFaqs.map((faq, i) => (
              <motion.div
                key={`${activeCategory}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:border-blue-100 transition-colors"
                role="listitem"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left group"
                  aria-expanded={openIndex === i}
                  aria-controls={`faq-answer-${i}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center mt-0.5">
                      <span className="text-blue-600 text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-blue-500 mb-1">{faq.category}</div>
                      <div className="font-semibold text-slate-900 group-hover:text-blue-700 transition-colors text-sm sm:text-base">
                        {faq.question}
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-50 flex items-center justify-center transition-colors"
                  >
                    <ChevronDown className="w-4 h-4 text-slate-500 group-hover:text-blue-600 transition-colors" aria-hidden="true" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      role="region"
                    >
                      <div className="px-6 pb-6 pl-[4.5rem]">
                        <div className="h-px bg-slate-100 mb-4" />
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center p-8 rounded-3xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-100"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-slate-600 text-sm mb-6">
            Our care coordinators are available 24/7 to answer any questions you may have.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              href="tel:+1-800-000-0000"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md shadow-blue-500/30 text-sm"
            >
              Call Us Now
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              onClick={() => {
                const el = document.querySelector("#contact");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl border border-blue-200 hover:border-blue-400 transition-colors text-sm"
            >
              Send a Message
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
