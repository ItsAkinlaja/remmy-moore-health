import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses for faster load (Core Web Vitals)
  compress: true,

  // Power the sitemap and robots routes
  poweredByHeader: false,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "**",
      },
    ],
    // Serve modern image formats — improves page speed score
    formats: ["image/avif", "image/webp"],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security headers (also a mild ranking signal)
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
      {
        // Long-cache for static assets — better Core Web Vitals
        source: "/(.*)\\.(ico|svg|png|jpg|jpeg|gif|webp|avif|woff|woff2|ttf|otf|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect www to non-www (canonical consistency)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.remmymoorehealthcare.com" }],
        destination: "https://remmymoorehealthcare.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
