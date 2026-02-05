import Link from 'next/link'
import Button from './ui/ButtonNew'
import { MenuIcon, XIcon, ChevronDownIcon, CalendarIcon } from './ui/IconsNew'
import DropdownMenu from './DropdownMenu'
import MobileMenu from './MobileMenuProfessional'
import { aboutItems, serviceItems, feedbackItems } from './navigationConfig'

export default function Header() {
  return (
    <header className="w-full py-3 sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between lg:hidden">
          <MobileLogo />
          <MobileMenuButton />
        </div>
        <DesktopNav />
        <MobileMenu />
      </div>
    </header>
  )
}

function MobileLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-sm">DC</span>
      </div>
      <span className="text-sm font-bold text-gray-800">DentalCare</span>
    </Link>
  )
}

function MobileMenuButton() {
  return (
    <button className="p-2 rounded-lg hover:bg-gray-100">
      <MenuIcon className="h-8 w-8 text-blue-600" />
    </button>
  )
}

function DesktopNav() {
  return (
    <div className="hidden lg:flex w-full items-center justify-between">
      <DesktopLogo />
      <Navigation />
      <BookAppointmentButton />
    </div>
  )
}

function DesktopLogo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">DC</span>
      </div>
      <span className="text-lg font-bold text-gray-800">DentalCare Dubai</span>
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="flex items-center space-x-8 relative">
      <NavLink href="/" label="Home" active />
      <DropdownMenu title="About Us" items={aboutItems} />
      <DropdownMenu title="Services" items={serviceItems} />
      <NavLink href="/invisalign" label="Invisalign" />
      <DropdownMenu title="Patient Feedback" items={feedbackItems} />
      <NavLink href="/contact" label="Contact Us" />
      <NavLink href="/referral" label="Referral" />
    </nav>
  )
}

function NavLink({ href, label, active = false }) {
  return (
    <div className="pb-3">
      <a 
        className={`text-[15px] font-medium pb-1 border-b-2 ${
          active ? 'border-blue-400' : 'border-transparent hover:border-blue-400'
        }`}
        href={href}
      >
        {label}
      </a>
    </div>
  )
}

function BookAppointmentButton() {
  return (
    <Link href="/appointment" className="hidden lg:block">
      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 text-sm uppercase text-center rounded-md">
        <div className="inline-flex items-center justify-center gap-2">
          <CalendarIcon className="w-5 h-5" />
          <span className="text-sm">Book Appointment</span>
        </div>
      </Button>
    </Link>
  )
}
