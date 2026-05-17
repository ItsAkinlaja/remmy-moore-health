"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    name: "Margaret T.",
    role: "Daughter of Client",
    location: "Local Family",
    rating: 5,
    text: "Remmy Moore has been an absolute blessing for our family. My mother has dementia, and the caregiver assigned to her treats her with such dignity and patience. I can finally sleep at night knowing she's in good hands. The team is responsive, professional, and genuinely caring.",
    initials: "MT",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "James R.",
    role: "Post-Surgery Client",
    location: "Local Resident",
    rating: 5,
    text: "After my hip replacement surgery, I needed help at home for several weeks. The skilled nurse from Remmy Moore was exceptional — professional, knowledgeable, and kind. The onboarding was fast, and they handled all my Medicare paperwork. I couldn't have recovered as well without them.",
    initials: "JR",
    color: "from-sky-500 to-sky-600",
  },
  {
    name: "Patricia L.",
    role: "Mother of Pediatric Client",
    location: "Local Family",
    rating: 5,
    text: "My son has special needs and requires daily care. Finding the right agency was stressful until we found Remmy Moore. They matched us with a caregiver who truly understands his needs and has become like family. The personalized care plan they created has made a real difference in his quality of life.",
    initials: "PL",
    color: "from-violet-500 to-violet-600",
  },
  {
    name: "Robert & Susan K.",
    role: "Clients",
    location: "Local Couple",
    rating: 5,
    text: "Both my husband and I needed care after we both had health issues at the same time. Remmy Moore coordinated care for both of us simultaneously, which was incredible. The caregivers are punctual, professional, and have become dear friends. We recommend them to everyone we know.",
    initials: "RK",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Linda M.",
    role: "Daughter of Client",
    location: "Local Family",
    rating: 5,
    text: "My father was resistant to having a caregiver at first. Within a week of Remmy Moore starting, he was looking forward to his caregiver's visits. The companion care has reduced his loneliness dramatically. The agency is communicative, reliable, and truly puts clients first.",
    initials: "LM",
    color: "from-rose-400 to-rose-500",
  },
  {
    name: "David W.",
    role: "Medicaid Client",
    location: "Local Resident",
    rating: 5,
    text: "I was worried about affording care on Medicaid, but Remmy Moore made the entire process seamless. They handled all the paperwork, verified my eligibility, and started care quickly. The quality of care I receive is outstanding — I never feel like a second-class client because of my insurance.",
    initials: "DW",
    color: "from-amber-400 to-amber-500",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const itemsPerView = 3;
  const maxIndex = testimonials.length - itemsPerView;

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(next, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, current]);

  const visibleTestimonials = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-slate-50 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-blue-100/30 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-sky-100/30 blur-3xl" />
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
            Family Stories
          </div>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5 leading-tight"
          >
            Families Who Trust{" "}
            <span className="gradient-text">Our Care</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from real families. Hear how Remmy Moore has made a
            difference in the lives of those we serve.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-slate-700 font-semibold">4.9 out of 5</span>
            <span className="text-slate-500 text-sm">based on 200+ reviews</span>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          {/* Desktop: 3 cards */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleTestimonials.map((testimonial, i) => (
                <motion.div
                  key={`${current}-${i}`}
                  initial={{ opacity: 0, x: direction * 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -60 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="testimonial-card rounded-3xl p-7 border border-slate-100 shadow-md hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 cursor-default"
                >
                  <TestimonialCard testimonial={testimonial} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card */}
          <div className="lg:hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4 }}
                className="testimonial-card rounded-3xl p-7 border border-slate-100 shadow-md"
              >
                <TestimonialCard testimonial={testimonials[current]} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-2.5 bg-blue-600"
                      : "w-2.5 h-2.5 bg-slate-300 hover:bg-blue-300"
                  }`}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <>
      {/* Quote icon */}
      <div className="mb-5">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
          <Quote className="w-5 h-5 text-blue-600" aria-hidden="true" />
        </div>
      </div>

      {/* Stars */}
      <div className="mb-4">
        <StarRating rating={testimonial.rating} />
      </div>

      {/* Text */}
      <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 italic">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
          {testimonial.initials}
        </div>
        <div>
          <div className="font-bold text-slate-900 text-sm">{testimonial.name}</div>
          <div className="text-slate-500 text-xs">{testimonial.role}</div>
          <div className="text-blue-500 text-xs">{testimonial.location}</div>
        </div>
      </div>
    </>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200 fill-slate-200"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
