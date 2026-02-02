import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GulfStickyButtons from '@/components/GulfStickyButtons'

export const metadata = {
  title: 'DentalCare - Premium Dental Services Dubai',
  description: 'World-class dental care in Dubai. Internationally trained dentists, state-of-the-art technology. DHA licensed clinic serving UAE residents.',
  manifest: '/manifest.json',
  themeColor: '#1E40AF',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DentalCare Dubai',
  },
  icons: {
    icon: [
      { url: '/icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="DentalCare Dubai" />
        <meta name="application-name" content="DentalCare Dubai" />
        <meta name="msapplication-TileColor" content="#1E40AF" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <GulfStickyButtons />
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
      </body>
    </html>
  )
}
