# Remmy Moore Home Health Care Agency LLC

Ultra-premium, emotionally compelling healthcare website built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Multi-Page Professional Website

- **Homepage** (`/`) - Clean, simple hero section with compelling headline and CTAs
- **About** (`/about`) - Trust & credibility section + Why choose us
- **Services** (`/services`) - 10 service cards + 3-step process
- **Coverage** (`/coverage`) - Insurance & payment options for all ages
- **Testimonials** (`/testimonials`) - Client stories + CTA banner
- **FAQ** (`/faq`) - Filterable accordion with 12+ questions
- **Contact** (`/contact`) - Full contact form with validation
- **404 Page** - Branded error page

### Premium Components

- Sticky navigation with smooth transitions
- Full-screen parallax hero with animated stats
- Animated service cards with hover effects
- Interactive comparison tables
- Auto-playing testimonial carousel
- Floating contact button (persistent across all pages)
- Professional footer with social links
- Mobile-responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
remmy-moore-health/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── services/
│   │   │   └── page.tsx        # Services page
│   │   ├── coverage/
│   │   │   └── page.tsx        # Coverage page
│   │   ├── testimonials/
│   │   │   └── page.tsx        # Testimonials page
│   │   ├── faq/
│   │   │   └── page.tsx        # FAQ page
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact page
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage (Hero only)
│   │   ├── not-found.tsx       # 404 page
│   │   └── globals.css         # Global styles
│   └── components/
│       ├── Navbar.tsx          # Sticky navigation
│       ├── Hero.tsx            # Hero section
│       ├── TrustSection.tsx    # Trust & credentials
│       ├── ServicesSection.tsx # Services grid
│       ├── WhyUsSection.tsx    # Why choose us
│       ├── CoverageSection.tsx # Insurance coverage
│       ├── TestimonialsSection.tsx # Client testimonials
│       ├── ProcessSection.tsx  # 3-step process
│       ├── CTABanner.tsx       # Call-to-action banner
│       ├── FAQSection.tsx      # FAQ accordion
│       ├── ContactSection.tsx  # Contact form
│       ├── Footer.tsx          # Site footer
│       └── FloatingCTA.tsx     # Floating contact button
├── public/
│   └── images/                 # Place your images here
└── package.json
```

## 🎨 Customization

### Adding Your Hero Image

Place your hero background image at:
```
public/images/hero-bg.jpg
```

The hero section will automatically use it. Current fallback is a dark blue gradient.

### Updating Contact Information

Edit these files to update contact details:
- `src/components/Navbar.tsx` - Phone number in header
- `src/components/Hero.tsx` - Hero CTAs
- `src/components/ContactSection.tsx` - Contact form and info
- `src/components/Footer.tsx` - Footer contact details
- `src/components/FloatingCTA.tsx` - Floating button

### Navigation Structure

The site uses Next.js App Router with the following pages:
- `/` - Homepage (Hero section only)
- `/about` - About us (Trust + Why Us sections)
- `/services` - Services (Services + Process sections)
- `/coverage` - Insurance & Coverage
- `/testimonials` - Client testimonials + CTA
- `/faq` - Frequently asked questions
- `/contact` - Contact form

All navigation links are in `src/components/Navbar.tsx` and `src/components/Footer.tsx`.

### Changing Colors

The color scheme is defined in `src/app/globals.css`:
```css
:root {
  --primary: #2563eb;        /* Healthcare Blue */
  --primary-dark: #1d4ed8;
  --primary-light: #eff6ff;
  --accent: #0ea5e9;
  /* ... */
}
```

### Updating Metadata

Edit `src/app/layout.tsx` to update:
- Site title
- Meta description
- Open Graph images
- Keywords
- Canonical URL

## 🔧 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## ✅ Quality Checks

- ✅ Zero ESLint errors
- ✅ Zero TypeScript errors
- ✅ Production build passes
- ✅ Accessibility compliant (ARIA labels, semantic HTML)
- ✅ SEO optimized (metadata, Open Graph, Twitter cards)
- ✅ Mobile responsive
- ✅ Hydration warnings suppressed

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🎯 Performance

- Static site generation (SSG)
- Optimized images
- Code splitting
- Lazy loading
- Minimal JavaScript bundle

## 📄 License

Copyright © 2026 Remmy Moore Home Health Care Agency LLC. All rights reserved.

## 🤝 Support

For questions or support, contact:
- Phone: (800) 000-0000
- Email: info@remmymoorehealthcare.com

---

Built with ❤️ for compassionate home health care.
