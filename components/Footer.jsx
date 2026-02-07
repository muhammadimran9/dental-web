import Link from 'next/link'
import FooterAbout from './FooterAbout'
import FooterLinks from './FooterLinks'
import FooterServices from './FooterServices'
import FooterContact from './FooterContact'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FooterAbout />
          <FooterLinks />
          <FooterServices />
          <FooterContact />
        </div>
        <FooterCopyright currentYear={currentYear} />
      </div>
    </footer>
  )
}

function FooterCopyright({ currentYear }) {
  return (
    <div className="border-t border-gray-700 mt-8 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>&copy; {currentYear} DentalCare Dubai. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link href="/legal/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          <Link href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
          <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
        </div>
      </div>
    </div>
  )
}
