import './globals.css'
import Header from '@/components/HeaderProfessional'
import Footer from '@/components/Footer'
import GulfStickyButtons from '@/components/GulfStickyButtons'
import ContactHeader from '@/components/ContactHeaderNew'
import { siteMetadata } from '@/components/metadata/SiteMetadata'
import { StructuredData } from '@/components/metadata/StructuredData'
import { HeadScripts } from '@/components/layout/HeadScripts'
import { ServiceWorkerScript, AnalyticsScript } from '@/components/layout/BodyScripts'

export const metadata = siteMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <HeadScripts />
        <StructuredData />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <ContactHeader />
        <Header />
        <main>{children}</main>
        <Footer />
        <GulfStickyButtons />
        <ServiceWorkerScript />
        <AnalyticsScript />
      </body>
    </html>
  )
}
