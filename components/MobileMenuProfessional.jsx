import Link from 'next/link'
import Button from './ui/ButtonNew'
import { XIcon, ChevronDownIcon, CalendarIcon } from './ui/IconsNew'
import { aboutItems, serviceItems, feedbackItems, contactItems } from './navigationConfig'

export default function MobileMenu() {
  return (
    <div className="fixed top-0 right-0 w-3/4 h-full bg-white transform transition-transform translate-x-full shadow-lg lg:hidden z-50">
      <div className="p-4">
        <MobileNavigation />
        <MobileBookButton />
      </div>
    </div>
  )
}

function MobileNavigation() {
  return (
    <nav className="mb-10">
      <MobileNavLink href="/" label="Home" />
      <MobileDropdown title="About Us" items={aboutItems} />
      <MobileDropdown title="Services" items={serviceItems} />
      <MobileNavLink href="/invisalign" label="Invisalign" />
      <MobileDropdown title="Patient Feedback" items={feedbackItems} />
      <MobileDropdown title="Contact" items={contactItems} />
    </nav>
  )
}

function MobileNavLink({ href, label }) {
  return (
    <a className="block py-3" href={href}>
      {label}
    </a>
  )
}

function MobileDropdown({ title, items }) {
  return (
    <div className="dropdown">
      <div className="flex items-center justify-between w-full py-3">
        <a href="#">{title}</a>
        <button>
          <ChevronDownIcon className="h-5 w-5 text-gray-600 transition-transform" />
        </button>
      </div>
    </div>
  )
}

function MobileBookButton() {
  return (
    <div className="flex justify-center">
      <Link href="/appointment">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm uppercase text-center rounded-md">
          <div className="inline-flex items-center justify-center gap-2">
            <CalendarIcon className="w-5 h-5" />
            <span className="text-sm">Book Appointment</span>
          </div>
        </Button>
      </Link>
    </div>
  )
}
