export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "DentalCare Dubai",
    "description": "Top-rated dental clinic in Dubai Healthcare City. Expert dentists, advanced technology, comprehensive dental services.",
    "url": "https://dental-web-app.netlify.app",
    "telephone": "+971-4-123-4567",
    "email": "info@dentalcaredubai.com",
    "priceRange": "$$-$$$",
    "image": "https://dental-web-app.netlify.app/images/clinic-exterior.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Healthcare City, Block 3",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "123456",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2267,
      "longitude": 55.2962
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.facebook.com/dentalcaredubai",
      "https://www.instagram.com/dentalcaredubai",
      "https://twitter.com/dentalcaredubai",
      "https://www.linkedin.com/company/dentalcaredubai"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Dentistry",
            "description": "Comprehensive dental checkups, cleanings, and preventive care"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Dentistry",
            "description": "Teeth whitening, veneers, and smile makeover treatments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Dental Implants",
            "description": "Permanent tooth replacement with advanced implant technology"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Orthodontics",
            "description": "Braces, Invisalign, and teeth straightening solutions"
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
