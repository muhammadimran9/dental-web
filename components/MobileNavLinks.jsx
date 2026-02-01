import Link from 'next/link'
import { navLinks } from './navConfig'

export default function MobileNavLinks() {
  return (
    <div className="flex flex-col space-y-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-primary transition-colors font-medium"
        >
          {link.label}
        </Link>
      ))}
      <Link href="/appointment" className="btn-primary text-center">
        Book Appointment
      </Link>
    </div>
  )
}
