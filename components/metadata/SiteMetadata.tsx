export const siteMetadata = {
  title: {
    default: 'Best Dental Clinic in Dubai | DHA Licensed Dentist | DentalCare Dubai',
    template: '%s | DentalCare Dubai - Premium Dental Services'
  },
  description: 'Top-rated dental clinic in Dubai Healthcare City. Expert dentists, advanced technology, DHA licensed. Cosmetic dentistry, implants, orthodontics. Book your appointment today!',
  keywords: 'dental clinic Dubai, best dentist Dubai, DHA licensed dentist, cosmetic dentistry Dubai, dental implants Dubai, teeth whitening Dubai, orthodontics Dubai, emergency dental care Dubai, pediatric dentist Dubai, root canal Dubai',
  authors: [{ name: 'DentalCare Dubai' }],
  creator: 'DentalCare Dubai',
  publisher: 'DentalCare Dubai',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dental-web-app.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Best Dental Clinic in Dubai | DHA Licensed | DentalCare Dubai',
    description: 'Top-rated dental clinic in Dubai. Expert dentists, advanced technology, comprehensive dental services. Book your appointment today!',
    url: 'https://dental-web-app.netlify.app',
    siteName: 'DentalCare Dubai',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DentalCare Dubai - Premium Dental Clinic',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Dental Clinic in Dubai | DentalCare Dubai',
    description: 'Top-rated dental clinic in Dubai. DHA licensed, expert dentists, advanced technology.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
}
