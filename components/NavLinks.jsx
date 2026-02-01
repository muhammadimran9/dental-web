import Link from 'next/link'
import { navLinks } from './navConfig'
import MobileNavLinks from './MobileNavLinks'
import DesktopNavLinks from './DesktopNavLinks'

export default function NavLinks({ isMobile }) {
  return isMobile ? <MobileNavLinks /> : <DesktopNavLinks />
}
