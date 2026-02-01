export default function FooterContact() {
  return (
    <div>
      <h4 className="font-semibold mb-4">Contact</h4>
      <ul className="space-y-2 text-sm text-gray-300">
        <li>123 Main Street</li>
        <li>City, State 12345</li>
        <li>
          <a href="tel:+1234567890" className="hover:text-primary transition-colors">
            (123) 456-7890
          </a>
        </li>
        <li>
          <a href="mailto:info@dentalcare.com" className="hover:text-primary transition-colors">
            info@dentalcare.com
          </a>
        </li>
      </ul>
    </div>
  )
}
