import './globals.css'
import dynamic from 'next/dynamic'
import Header from '@/components/HeaderProfessional'
import ContactHeader from '@/components/ContactHeader'
import StickyAppointmentButton from '@/components/StickyAppointmentButton'
import { siteMetadata } from '@/components/metadata/SiteMetadata'
import { StructuredData } from '@/components/metadata/StructuredData'
import { HeadScripts } from '@/components/layout/HeadScripts'
import { ServiceWorkerScript, AnalyticsScript } from '@/components/layout/BodyScripts'

// Lazy load non-critical components
const Footer = dynamic(() => import('@/components/Footer'))
const GulfStickyButtons = dynamic(() => import('@/components/GulfStickyButtons'))

export const metadata = siteMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1E40AF" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DentalCare" />
        <link rel="canonical" href="https://dental-web-app.netlify.app" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <HeadScripts />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <ContactHeader />
        <Header />
        <main id="main-content" role="main">{children}</main>
        <Footer />
        <StickyAppointmentButton />
        <GulfStickyButtons />
        <ServiceWorkerScript />
        <AnalyticsScript />
      </body>
    </html>
  )
}
