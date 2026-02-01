import Link from 'next/link'
import { navLinks } from './navConfig'

export default function DesktopNavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-primary transition-colors font-medium"
        >
          {link.label}
        </Link>
      ))}
      <Link href="/appointment" className="btn-primary">
        Book Appointment
      </Link>
    </div>
  )
}
