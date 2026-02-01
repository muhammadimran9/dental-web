import NavLinks from './NavLinks'

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  if (!isMenuOpen) return null

  return (
    <div className="md:hidden py-4 border-t">
      <NavLinks isMobile={true} />
    </div>
  )
}
