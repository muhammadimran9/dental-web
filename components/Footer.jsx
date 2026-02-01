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
    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
      <p>&copy; {currentYear} DentalCare. All rights reserved.</p>
    </div>
  )
}
