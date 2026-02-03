import Link from 'next/link'
import { navLinks } from './navConfig'

export default function DesktopNavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <div key={link.href} className="group relative">
          <Link
            href={link.href}
            className="text-gray-600 hover:text-blue-400 transition-colors font-medium"
          >
            {link.label}
          </Link>
          {/* Example dropdown for demonstration */}
          {link.subLinks && (
            <div className="absolute left-0 top-full hidden group-hover:block bg-white shadow-md mt-2">
              {link.subLinks.map((subLink) => (
                <Link
                  key={subLink.href}
                  href={subLink.href}
                  className="block px-4 py-2 text-gray-600 hover:text-blue-400 hover:bg-gray-100"
                >
                  {subLink.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
      <Link href="/appointment" className="btn-primary">
        Book Appointment
      </Link>
    </div>
  )
}
