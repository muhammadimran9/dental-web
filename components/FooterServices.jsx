import Link from 'next/link'

export default function FooterServices() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Services</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>
          <Link href="/services/general-dentistry" className="hover:text-primary transition-colors">
            General Dentistry
          </Link>
        </li>
        <li>
          <Link href="/services/cosmetic-dentistry" className="hover:text-primary transition-colors">
            Cosmetic Dentistry
          </Link>
        </li>
        <li>
          <Link href="/services/dental-implants" className="hover:text-primary transition-colors">
            Dental Implants
          </Link>
        </li>
        <li>
          <Link href="/services/teeth-whitening" className="hover:text-primary transition-colors">
            Teeth Whitening
          </Link>
        </li>
      </ul>
    </div>
  )
}
