"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Accessibility,
  ArrowRight,
  Baby,
  Coffee,
  Heart,
  Pill,
  Stethoscope,
  Users,
} from "lucide-react";

interface ServicesSectionProps {
  showAllButton?: boolean;
  limit?: number;
}

const services = [
  {
    icon: Stethoscope,
    title: "Skilled Nursing",
    description: "Licensed nurses providing wound care, medication management, and clinical health monitoring.",
    image: "https://ik.imagekit.io/scmchurch/cdc-LbUOh89q4Es-unsplash.jpg",
  },
  {
    icon: Heart,
    title: "Personal Care",
    description: "Gentle support with bathing, grooming, dressing, and daily hygiene with full dignity.",
    image: "https://ik.imagekit.io/scmchurch/maria-luisa-queiroz-KlBltbAwxWk-unsplash.jpg",
  },
  {
    icon: Users,
    title: "Elderly Care",
    description: "Safety and cognitive engagement focused care to help seniors thrive in their own homes.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&h=900&fit=crop",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    description: "Specialized, compassionate care for children with complex medical needs or chronic illnesses.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=900&fit=crop",
  },
  {
    icon: Accessibility,
    title: "Disability Support",
    description: "Adaptive care and daily assistance helping clients live independently in their community.",
    image: "https://ik.imagekit.io/scmchurch/ortopediatri-cocuk-ortopedi-akademisi-rXqfl7MKEJ4-unsplash.jpg",
  },
  {
    icon: Coffee,
    title: "Companion Care",
    description: "Friendly companionship, social engagement, and light housekeeping for emotional well-being.",
    image: "https://ik.imagekit.io/scmchurch/geralt-hospital-10222177_1920.jpg",
  },
  {
    icon: Pill,
    title: "Medication Help",
    description: "Professional reminders and coordination to ensure safe and accurate medication adherence.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1200&h=900&fit=crop",
  },
  {
    icon: Activity,
    title: "Post-Surgery",
    description: "Focused recovery support including clinical monitoring, wound care and physical assistance.",
    image: "https://ik.imagekit.io/scmchurch/sakarie-mustafe-hidig-pbznkLXhGmo-unsplash.jpg",
  },
];

export default function ServicesSection({ showAllButton = true, limit }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Our Care Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive home health care solutions designed for comfort, dignity, and independence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.slice(0, limit ?? services.length).map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 text-blue-600">
                  <service.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{service.description}</p>
                <Link href="/services" className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:underline">
                  Service Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {showAllButton && (
          <div className="mt-16 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
