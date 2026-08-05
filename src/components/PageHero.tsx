"use client";

import React from "react";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";

interface PageHeroProps {
  /** Page title to display on hero */
  title: string;
  /** Image URL for the hero background */
  image: string;
  /** Optional subtitle or description */
  subtitle?: string;
  /** Optional dark overlay opacity (default: 0.6) */
  overlayOpacity?: number;
  /** Optional text color (default: white) */
  textColor?: string;
}

export default function PageHero({
  title,
  image,
  subtitle,
  overlayOpacity = 0.6,
  textColor = "white",
}: PageHeroProps) {
  // Hero height: mobile 35vh, desktop 50vh
  const heightClass = "h-[35vh] md:h-[50vh]";

  return (
    <div className={`relative w-full ${heightClass} overflow-hidden bg-slate-900 pt-20 md:pt-24`}>
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover absolute inset-0"
        sizes="100vw"
      />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-slate-950"
        style={{ opacity: overlayOpacity }}
      />

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb inside Hero */}
          <div className="mb-6">
            <Breadcrumb variant="hero" />
          </div>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 leading-tight tracking-tight"
            style={{ color: textColor }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className="text-lg sm:text-xl lg:text-2xl font-medium opacity-90 max-w-2xl mx-auto"
              style={{ color: textColor }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Subtle bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  );
}
