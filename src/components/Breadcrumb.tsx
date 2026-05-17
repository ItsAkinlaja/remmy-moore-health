"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const labels: Record<string, string> = {
  about:        "About Us",
  services:     "Services",
  coverage:     "Coverage",
  testimonials: "Testimonials",
  faq:          "FAQ",
  contact:      "Contact",
};

export default function Breadcrumb() {
  const pathname = usePathname();

  // Don't render on homepage
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);

  // Build cumulative hrefs
  const crumbs = segments.map((seg, i) => ({
    label: labels[seg] ?? seg.charAt(0).toUpperCase() + seg.slice(1),
    href:  "/" + segments.slice(0, i + 1).join("/"),
    isLast: i === segments.length - 1,
  }));

  return (
    <nav
      aria-label="Breadcrumb"
      className="w-full bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol
          className="flex items-center gap-1 py-3 text-sm"
          role="list"
        >
          {/* Home */}
          <li className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-1 text-slate-400 hover:text-blue-600
                         transition-colors duration-150 font-medium"
              aria-label="Home"
            >
              <Home className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>

          {crumbs.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-1">
              <ChevronRight
                className="w-3.5 h-3.5 text-slate-300 flex-shrink-0"
                aria-hidden="true"
              />
              {crumb.isLast ? (
                <span
                  className="text-slate-700 font-semibold"
                  aria-current="page"
                >
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-slate-400 hover:text-blue-600
                             transition-colors duration-150 font-medium"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
