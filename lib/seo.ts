// SEO-friendly metadata generator
export function generateMetadata({ 
  title, 
  description, 
  keywords, 
  canonical,
  ogImage = '/images/og-image.jpg'
}) {
  return {
    title,
    description,
    keywords,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
      locale: 'en_AE',
      siteName: 'DentalCare Dubai'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

// Structured data for local business
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Dentist',
  name: 'DentalCare Dubai',
  image: 'https://dental-web-app.netlify.app/images/clinic.jpg',
  '@id': 'https://dental-web-app.netlify.app',
  url: 'https://dental-web-app.netlify.app',
  telephone: '+971-4-123-4567',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dubai Healthcare City',
    addressLocality: 'Dubai',
    addressRegion: 'Dubai',
    postalCode: '00000',
    addressCountry: 'AE'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.2048,
    longitude: 55.2708
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '17:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '16:00'
    }
  ],
  sameAs: [
    'https://www.facebook.com/dentalcaredubai',
    'https://www.instagram.com/dentalcaredubai',
    'https://twitter.com/dentalcaredubai'
  ]
}
