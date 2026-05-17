"use client";

import { motion, type Variants } from "framer-motion";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Stethoscope,
  Heart,
  Users,
  Baby,
  Accessibility,
  Coffee,
  Pill,
  Activity,
  UserCog,
  RefreshCw,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    description:
      "Licensed nurses provide medical care including wound care, medication management, IV therapy, and health monitoring in the comfort of your home.",
    color: "from-blue-500 to-blue-600",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    tag: "Medical",
  },
  {
    icon: Heart,
    title: "Personal Care Assistance",
    description:
      "Compassionate support with daily activities including bathing, grooming, dressing, and personal hygiene to maintain dignity and independence.",
    color: "from-rose-400 to-rose-500",
    lightColor: "bg-rose-50",
    textColor: "text-rose-500",
    tag: "Daily Living",
  },
  {
    icon: Users,
    title: "Elderly Care",
    description:
      "Specialized care programs designed for seniors, focusing on safety, comfort, cognitive engagement, and quality of life at home.",
    color: "from-amber-400 to-amber-500",
    lightColor: "bg-amber-50",
    textColor: "text-amber-600",
    tag: "Senior Care",
  },
  {
    icon: Baby,
    title: "Pediatric Home Care",
    description:
      "Gentle, specialized care for children with medical needs, developmental conditions, or chronic illnesses — delivered with warmth and expertise.",
    color: "from-sky-400 to-sky-500",
    lightColor: "bg-sky-50",
    textColor: "text-sky-600",
    tag: "Pediatric",
  },
  {
    icon: Accessibility,
    title: "Disability Support",
    description:
      "Empowering individuals with disabilities to live independently with personalized support, adaptive care, and community integration assistance.",
    color: "from-violet-500 to-violet-600",
    lightColor: "bg-violet-50",
    textColor: "text-violet-600",
    tag: "Support",
  },
  {
    icon: Coffee,
    title: "Companion Care",
    description:
      "Meaningful companionship, social engagement, light housekeeping, and emotional support to combat loneliness and promote well-being.",
    color: "from-emerald-400 to-emerald-500",
    lightColor: "bg-emerald-50",
    textColor: "text-emerald-600",
    tag: "Companionship",
  },
  {
    icon: Pill,
    title: "Medication Assistance",
    description:
      "Careful medication reminders, administration support, and coordination with healthcare providers to ensure proper medication adherence.",
    color: "from-indigo-500 to-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    tag: "Medical",
  },
  {
    icon: Activity,
    title: "Post-Surgery Care",
    description:
      "Comprehensive recovery support following surgery, including wound care, physical assistance, and monitoring for a safe, smooth recovery.",
    color: "from-teal-500 to-teal-600",
    lightColor: "bg-teal-50",
    textColor: "text-teal-600",
    tag: "Recovery",
  },
  {
    icon: UserCog,
    title: "Private Duty Care",
    description:
      "One-on-one dedicated care for clients requiring continuous, intensive support — available for short-term or long-term arrangements.",
    color: "from-blue-600 to-sky-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600",
    tag: "Private",
  },
  {
    icon: RefreshCw,
    title: "Respite Care",
    description:
      "Temporary relief for family caregivers, providing professional care so you can rest, recharge, and return refreshed for your loved one.",
    color: "from-cyan-500 to-cyan-600",
    lightColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    tag: "Family Support",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100 transition-all duration-400 cursor-default overflow-hidden"
    >
      {/* Background gradient on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/30 rounded-3xl"
      />

      <div className="relative">
        {/* Tag */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full ${service.lightColor} ${service.textColor} text-xs font-semibold mb-5`}>
          {service.tag}
        </div>

        {/* Icon */}
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className="w-7 h-7 text-white" aria-hidden="true" />
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">{service.description}</p>

        {/* Learn more */}
        <motion.button
          animate={{ x: hovered ? 4 : 0 }}
          className={`flex items-center gap-2 text-sm font-semibold ${service.textColor} group/btn`}
          aria-label={`Learn more about ${service.title}`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </motion.button>
      </div>

      {/* Bottom accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left`} />
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-24 bg-slate-50 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-sky-100/40 blur-3xl" />
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
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Our Services
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Comprehensive Care{" "}
            <span className="gradient-text">For Every Need</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From skilled medical care to compassionate companionship, we offer a
            full spectrum of home health services tailored to your unique situation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-slate-600 mb-5">
            Not sure which service is right for you?
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.querySelector("#contact");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all"
          >
            Talk to a Care Coordinator
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
