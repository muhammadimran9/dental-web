export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    "name": "DentalCare Dubai",
    "description": "World-class dental care in Dubai. Internationally trained dentists, state-of-the-art technology.",
    "url": "https://dental-web-app.netlify.app",
    "telephone": "+971 4 123 4567",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Healthcare City, Block 3",
      "addressLocality": "Dubai",
      "addressCountry": "AE",
      "postalCode": "123456"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2267",
      "longitude": "55.2962"
    },
    "openingHours": [
      "Mo-Fr 09:00-20:00",
      "Sa 09:00-18:00",
      "Su 00:00-00:00"
    ],
    "priceRange": "$$$",
    "image": "https://dental-web-app.netlify.app/images/clinic-exterior.jpg",
    "sameAs": [
      "https://www.facebook.com/dentalcaredubai",
      "https://www.instagram.com/dentalcaredubai"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "nameOfPart": "Dental Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "General Dentistry",
            "description": "Comprehensive dental care for the whole family"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Cosmetic Dentistry",
            "description": "Transform your smile with our cosmetic treatments"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Dental Implants",
            "description": "Permanent solution for missing teeth"
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
