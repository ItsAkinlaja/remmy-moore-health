"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Margaret T.",
    role: "Daughter of Client",
    text: "Remmy Moore has been an absolute blessing for our family. The caregiver treats my mother with such dignity and patience. I can finally sleep at night knowing she's in good hands.",
    initials: "MT",
  },
  {
    name: "James R.",
    role: "Post-Surgery Client",
    text: "After my hip surgery, I needed help at home. The skilled nurse was exceptional — professional, knowledgeable, and kind. The onboarding was fast and seamless.",
    initials: "JR",
  },
  {
    name: "Patricia L.",
    role: "Mother of Pediatric Client",
    text: "Finding the right agency was stressful until we found Remmy Moore. They matched us with a caregiver who truly understands my son's needs and has become like family.",
  },
  {
    name: "Robert K.",
    role: "Senior Client",
    text: "The caregivers are punctual, professional, and have become dear friends. We recommend them to everyone we know in the community.",
    initials: "RK",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-24 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Family Stories
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          <p className="text-lg text-slate-600">
            Real stories from real families who trust our care.
          </p>
        </div>

        <div className="relative bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100">
          <Quote className="w-12 h-12 text-blue-600/20 absolute top-8 left-8" />

          <div className="relative z-10">
            <p className="text-xl sm:text-2xl text-slate-900 font-medium leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                  {testimonials[current].initials || testimonials[current].name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonials[current].name}</div>
                  <div className="text-sm text-slate-500">{testimonials[current].role}</div>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={prev} className="p-2 rounded-full bg-white border border-slate-200 hover:border-blue-600 transition-colors">
                  <ChevronLeft className="w-5 h-5 text-slate-600" />
                </button>
                <button onClick={next} className="p-2 rounded-full bg-white border border-slate-200 hover:border-blue-600 transition-colors">
                  <ChevronRight className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
