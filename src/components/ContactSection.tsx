"use client";

import { useState, Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us 24/7",
    value: "678 599 4557",
    href: "tel:+16785994557",
    description: "Our care coordinators are always available to help."
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "Remmymoore90@gmail.com",
    href: "mailto:Remmymoore90@gmail.com",
    description: "We typically respond within 2 business hours."
  },
  {
    icon: MapPin,
    label: "Service Area",
    value: "170 Shady Lane, Rockmart, GA 30153",
    href: null,
    description: "Providing home health services throughout our local region."
  },
];

const serviceOptions = [
  "Skilled Nursing",
  "Activities of Daily Living (ADL)",
  "Elderly Care",
  "Pediatric Home Care",
  "Disability Support",
  "Companion Care",
  "Medication Assistance",
  "Post-Surgery Care",
  "Employment Inquiry",
  "Other / Not Sure",
];

export default function ContactSection() {
  return (
    <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading contact form...</div>}>
      <ContactFormWrapper />
    </Suspense>
  );
}

function ContactFormWrapper() {
  const searchParams = useSearchParams();
  const key = searchParams.toString();
  return <ContactFormContent key={key} />;
}

function ContactFormContent() {
  const searchParams = useSearchParams();

  // Use useMemo to avoid re-calculating on every render
  const initialValues = useMemo(() => {
    const service = searchParams.get("service");
    const role = searchParams.get("role");
    return {
      service: service && serviceOptions.includes(service) ? service : "",
      message: role ? `I am interested in applying for the ${role} position.` : "",
    };
  }, [searchParams]);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedService, setSelectedService] = useState(initialValues.service);
  const [message, setMessage] = useState(initialValues.message);

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName") || "").trim();
    const lastName = String(formData.get("lastName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const finalMessage = String(formData.get("message") || "").trim();

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setError("Email service is not configured yet. Please contact the site admin.");
      return;
    }

    if (!firstName || !lastName || !email || !phone || !finalMessage) {
      setLoading(false);
      setError("All required fields must be filled out.");
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          first_name: firstName,
          last_name: lastName,
          from_name: `${firstName} ${lastName}`,
          reply_to: email,
          phone,
          service,
          message: finalMessage,
          to_email: "Remmymoore90@gmail.com",
          to_phone: "678 599 4557",
          location: "170 Shady Lane, Rockmart, GA 30153",
        },
        { publicKey }
      );

      setSubmitted(true);
    } catch (submitError) {
      console.error("EmailJS submission error:", submitError);
      setError("There was an error sending your message. Please try again later or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left Column: Info & Trust */}
          <div className="space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
                <MessageSquare className="w-3 h-3" />
                Contact Our Agency
              </div>
              <h2 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Compassionate Help is <br />
                <span className="text-blue-600">Just a Message Away.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Whether you have questions about insurance, need to schedule an assessment, or simply want to learn more about our services, we&apos;re here for you.
              </p>
            </div>

            <div className="grid gap-8">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-xl font-bold text-slate-900">{item.value}</div>
                    )}
                    <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                  </div>
                </div>
              ))}

            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-lg font-bold">24/7 Availability</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Healthcare needs don&apos;t follow business hours. Our team is available around the clock for emergency coordination and support.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold text-blue-400 uppercase tracking-widest">
                  <CheckCircle className="w-4 h-4" />
                  HIPAA Compliant Agency
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-slate-50 p-8 sm:p-12 rounded-[2.5rem] border border-slate-100">
            {submitted ? (
              <div className="h-[500px] flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center mb-8 shadow-xl shadow-blue-500/20">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent</h3>
                <p className="text-slate-600 mb-8 max-w-xs mx-auto text-lg">
                  Thank you for reaching out. A care coordinator will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline flex items-center gap-2"
                >
                  Send another message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-slate-700 ml-1">First Name</label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="Jane"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-slate-700 ml-1">Last Name</label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Smith"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-bold text-slate-700 ml-1">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1">How can we help?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us a bit about your needs..."
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/5 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-500/20 active:scale-[0.98] transition-all disabled:opacity-70 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Your Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center px-4">
                  By clicking send, you agree to our privacy policy regarding the handling of your contact information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
