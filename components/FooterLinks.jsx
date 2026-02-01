import Link from 'next/link'

export default function FooterLinks() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className="hover:text-primary transition-colors">
            Services
          </Link>
        </li>
        <li>
          <Link href="/doctors" className="hover:text-primary transition-colors">
            Our Team
          </Link>
        </li>
      </ul>
    </div>
  )
}
