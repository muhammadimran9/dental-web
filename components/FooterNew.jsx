import Link from 'next/link'
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from './ui/IconsNew'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <FooterAbout />
          <FooterLinks />
          <FooterServices />
          <FooterContact />
        </div>
        <FooterBottom />
      </div>
    </footer>
  )
}

function FooterAbout() {
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">DC</span>
        </div>
        <span className="text-lg font-bold">DentalCare</span>
      </div>
      <p className="text-gray-300 text-sm">
        World-class dental care in Dubai Healthcare City. 
        DHA licensed clinic serving UAE residents since 2008.
      </p>
    </div>
  )
}

function FooterLinks() {
  const links = [
    { href: '/about', label: 'About Us' },
    { href: '/doctors', label: 'Our Team' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterServices() {
  const services = [
    { href: '/services/general-dentistry', label: 'General Dentistry' },
    { href: '/services/cosmetic-dentistry', label: 'Cosmetic Dentistry' },
    { href: '/services/dental-implants', label: 'Dental Implants' },
    { href: '/services/orthodontics', label: 'Orthodontics' },
  ]

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Services</h3>
      <ul className="space-y-2">
        {services.map((service) => (
          <li key={service.href}>
            <Link 
              href={service.href}
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              {service.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function FooterContact() {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <PhoneIcon className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">+971 4 123 4567</span>
        </div>
        <div className="flex items-center gap-3">
          <MailIcon className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">info@dentalcaredubai.ae</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPinIcon className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">Dubai Healthcare City</span>
        </div>
        <div className="flex items-center gap-3">
          <ClockIcon className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">Mon-Sat: 9AM-8PM</span>
        </div>
      </div>
    </div>
  )
}

function FooterBottom() {
  return (
    <div className="border-t border-gray-800 mt-8 pt-8 text-center">
      <p className="text-gray-400 text-sm">
        © 2024 DentalCare Dubai. All rights reserved. 
        DHA Licensed Clinic • Dubai Healthcare City
      </p>
    </div>
  )
}
