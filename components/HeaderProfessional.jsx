import MobileLogo from './header/MobileLogo'
import MobileMenuButton from './header/MobileMenuButton'
import DesktopLogo from './header/DesktopLogo'
import Navigation from './header/Navigation'
import BookAppointmentButton from './header/BookAppointmentButton'
import MobileMenu from './MobileMenuProfessional'

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

function DesktopNav() {
  return (
    <div className="hidden lg:flex w-full items-center justify-between">
      <DesktopLogo />
      <Navigation />
      <BookAppointmentButton />
    </div>
  )
}
