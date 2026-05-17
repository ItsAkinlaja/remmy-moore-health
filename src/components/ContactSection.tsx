"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  User,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "(800) 000-0000",
    href: "tel:+1-800-000-0000",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@remmymoorehealthcare.com",
    href: "mailto:info@remmymoorehealthcare.com",
    color: "from-sky-500 to-sky-600",
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "Serving Our Local Community",
    href: null,
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: Clock,
    label: "Office Hours",
    value: "Mon–Fri: 8am–6pm | 24/7 Emergency",
    href: null,
    color: "from-emerald-500 to-emerald-600",
  },
];

const serviceOptions = [
  "Skilled Nursing",
  "Personal Care Assistance",
  "Elderly Care",
  "Pediatric Home Care",
  "Disability Support",
  "Companion Care",
  "Medication Assistance",
  "Post-Surgery Care",
  "Private Duty Care",
  "Respite Care",
  "Other / Not Sure",
];

const insuranceOptions = [
  "Medicaid",
  "Medicare",
  "Private Insurance",
  "Private Pay / Self-Pay",
  "Self-Sponsored",
  "Not Sure",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    insurance: "",
    message: "",
    preferredContact: "phone",
    urgency: "routine",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-blue-50/60 blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-sky-50/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            Get In Touch
          </div>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Start Your Care{" "}
            <span className="gradient-text">Journey Today</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Reach out to our care coordinators. We&apos;ll answer your questions,
            verify your insurance, and help you take the first step toward
            compassionate home care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                We&apos;re Here to Help
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our care coordinators are compassionate, knowledgeable, and
                ready to guide you through every step of the process.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-800 font-medium text-sm hover:text-blue-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-slate-800 font-medium text-sm">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick call CTA */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="tel:+1-800-000-0000"
              className="flex items-center justify-center gap-3 w-full py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call for Immediate Assistance
            </motion.a>

            {/* HIPAA note */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-green-50 border border-green-100">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-green-800 text-xs leading-relaxed">
                <strong>HIPAA Notice:</strong> All information shared with us is
                kept strictly confidential and protected in accordance with HIPAA
                regulations.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-100"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-green-600" aria-hidden="true" />
                </motion.div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  Message Received!
                </h3>
                <p className="text-slate-600 mb-6 max-w-sm">
                  Thank you for reaching out. A care coordinator will contact you
                  within 2 hours during business hours, or first thing the next
                  business day.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                  <Phone className="w-4 h-4" />
                  For urgent needs, call (800) 000-0000
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg"
                noValidate
                aria-label="Contact form"
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-sky-500 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Request a Free Consultation</h3>
                    <p className="text-slate-500 text-xs">We&apos;ll respond within 2 hours</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* First Name */}
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-slate-700 mb-2">
                      First Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Jane"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-slate-700 mb-2">
                      Last Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Smith"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" aria-hidden="true" />
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-2">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select a service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Insurance */}
                  <div>
                    <label htmlFor="insurance" className="block text-sm font-semibold text-slate-700 mb-2">
                      Insurance / Payment
                    </label>
                    <div className="relative">
                      <select
                        id="insurance"
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select insurance type...</option>
                        {insuranceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" aria-hidden="true" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                      Tell Us About Your Needs
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe the care needs, any medical conditions, preferred schedule, or any questions you have..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Urgency */}
                  <div className="sm:col-span-2">
                    <fieldset>
                      <legend className="block text-sm font-semibold text-slate-700 mb-3">
                        How soon do you need care?
                      </legend>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { value: "urgent", label: "Urgent (ASAP)" },
                          { value: "soon", label: "Within a week" },
                          { value: "routine", label: "Within a month" },
                          { value: "planning", label: "Just planning ahead" },
                        ].map((opt) => (
                          <label
                            key={opt.value}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border cursor-pointer transition-all text-sm font-medium ${
                              formData.urgency === opt.value
                                ? "border-blue-500 bg-blue-50 text-blue-700"
                                : "border-slate-200 text-slate-600 hover:border-blue-300"
                            }`}
                          >
                            <input
                              type="radio"
                              name="urgency"
                              value={opt.value}
                              checked={formData.urgency === opt.value}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {opt.label}
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="mt-6 w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" aria-hidden="true" />
                      Send Message & Request Consultation
                    </>
                  )}
                </motion.button>

                <p className="text-center text-slate-500 text-xs mt-4">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
                  Your information is protected and HIPAA compliant.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
