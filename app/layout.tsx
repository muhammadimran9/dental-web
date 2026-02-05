import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GulfStickyButtons from '@/components/GulfStickyButtons'
import ContactHeader from '@/components/ContactHeaderNew'

export const metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        
        {/* Viewport and mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DentalCare Dubai" />
        <meta name="application-name" content="DentalCare Dubai" />
        
        {/* Theme and appearance */}
        <meta name="theme-color" content="#1E40AF" />
        <meta name="msapplication-TileColor" content="#1E40AF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Icons */}
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for Dental Clinic */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <ContactHeader />
        <Header />
        <main>{children}</main>
        <Footer />
        <GulfStickyButtons />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
        
        {/* Analytics Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics or other analytics would go here
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </body>
    </html>
  )
}
