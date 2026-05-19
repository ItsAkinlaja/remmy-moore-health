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
  /** Height of hero section in viewport height (default: 45) */
  height?: "40" | "45" | "50";
  /** Optional dark overlay opacity (default: 0.5) */
  overlayOpacity?: number;
  /** Optional text color (default: white) */
  textColor?: string;
}

export default function PageHero({
  title,
  image,
  subtitle,
  height = "45",
  overlayOpacity = 0.5,
  textColor = "white",
}: PageHeroProps) {
  const heightClass = {
    "40": "h-[40vh]",
    "45": "h-[45vh]",
    "50": "h-[50vh]",
  }[height];

  return (
    <div className="w-full">
      {/* Breadcrumb - positioned absolutely above hero */}
      <div className="relative z-10 bg-white border-b border-slate-100">
        <Breadcrumb />
      </div>

      {/* Hero Section */}
      <div className={`relative w-full ${heightClass} overflow-hidden bg-slate-900`}>
        {/* Background Image */}
        <Image
          src={image}
          alt={title}
          fill
          priority
          className="object-cover absolute inset-0"
          sizes="100vw"
        />

        {/* Dark Overlay with gradient for better text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"
          style={{ opacity: overlayOpacity }}
        />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight drop-shadow-lg"
              style={{ color: textColor }}
            >
              {title}
            </h1>

            {/* Subtitle */}
            {subtitle && (
              <p
                className="text-lg sm:text-xl lg:text-2xl font-medium drop-shadow-md opacity-95"
                style={{ color: textColor }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Decorative gradient bottom fade for visual polish */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 hover:opacity-10 transition-opacity duration-300" />
      </div>
    </div>
  );
}
