export const siteMetadata = {
  title: {
    default: 'DentalCare Dubai - Premium Dental Services | DHA Licensed Clinic',
    template: '%s | DentalCare Dubai'
  },
  description: 'World-class dental care in Dubai Healthcare City. Internationally trained dentists, state-of-the-art technology. DHA licensed clinic serving UAE residents since 2008.',
  keywords: 'dental clinic Dubai, dentist Dubai, dental services Dubai, DHA licensed dentist, cosmetic dentistry Dubai, dental implants Dubai, emergency dental care Dubai',
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
    title: 'DentalCare Dubai - Premium Dental Services',
    description: 'World-class dental care in Dubai. Internationally trained dentists, state-of-the-art technology.',
    url: 'https://dental-web-app.netlify.app',
    siteName: 'DentalCare Dubai',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DentalCare Dubai - Premium Dental Services',
      },
    ],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DentalCare Dubai - Premium Dental Services',
    description: 'World-class dental care in Dubai. DHA licensed clinic serving UAE residents.',
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
