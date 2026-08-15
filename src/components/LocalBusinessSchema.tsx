/**
 * LocalBusinessSchema — injects JSON-LD structured data for Google local search.
 * Renders a <script type="application/ld+json"> tag in the <head> area.
 * Use this in layout.tsx so it appears on every page.
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://www.remmymoorehealth.com/#organization",
    name: "Remmy Moore Home Health Care Agency LLC",
    alternateName: "Remmy Moore Health Care",
    description:
      "Compassionate, professional home health care services in Rockmart, GA and surrounding Polk County. Accepting Medicaid, Medicare, and private pay. Skilled nursing, ADL assistance, elderly care, pediatric care, and more.",
    url: "https://www.remmymoorehealth.com",
    telephone: "+16785994557",
    email: "info@remmymoorehealth.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.remmymoorehealth.com/logo.png",
      width: 200,
      height: 60,
    },
    image: "https://ik.imagekit.io/scmchurch/ChatGPT%20Image%20Jul%2026,%202026,%2007_04_14%20PM.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "170 Shady Lane",
      addressLocality: "Rockmart",
      addressRegion: "GA",
      postalCode: "30153",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0021,
      longitude: -85.0463,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Rockmart",
        "@id": "https://www.wikidata.org/wiki/Q1002694",
      },
      {
        "@type": "County",
        name: "Polk County",
        containedInPlace: {
          "@type": "State",
          name: "Georgia",
        },
      },
      {
        "@type": "City",
        name: "Cedartown",
      },
      {
        "@type": "City",
        name: "Aragon",
      },
      {
        "@type": "City",
        name: "Taylorsville",
      },
      {
        "@type": "City",
        name: "Dallas",
      },
      {
        "@type": "County",
        name: "Paulding County",
      },
      {
        "@type": "County",
        name: "Floyd County",
      },
      {
        "@type": "City",
        name: "Rome",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    paymentAccepted: "Medicaid, Medicare, Private Insurance, Private Pay",
    currenciesAccepted: "USD",
    hasMap: "https://maps.google.com/?q=170+Shady+Lane+Rockmart+GA+30153",
    sameAs: [],
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 34.0021,
        longitude: -85.0463,
      },
      geoRadius: "80467", // ~50 miles in meters
    },
    knowsAbout: [
      "Home Health Care",
      "Skilled Nursing",
      "Activities of Daily Living",
      "Elderly Care",
      "Pediatric Home Care",
      "Medicaid Home Health",
      "Medicare Home Health",
      "Personal Care Services",
      "Companion Care",
      "Post-Hospital Care",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Health Care Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Skilled Nursing",
            description:
              "Licensed nursing care provided in the comfort of your home in Rockmart, GA.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Activities of Daily Living (ADL) Assistance",
            description:
              "Help with bathing, dressing, grooming, and other daily activities.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Elderly Care",
            description:
              "Compassionate in-home care for seniors and elderly individuals.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pediatric Home Care",
            description:
              "Specialized home health care services for children and pediatric patients.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Medicaid & Medicare Home Health",
            description:
              "Home health care fully covered under Georgia Medicaid and Medicare plans.",
          },
        },
      ],
    },
    founder: {
      "@type": "Person",
      name: "Remmy Moore",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
