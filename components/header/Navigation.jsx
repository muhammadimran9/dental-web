import DropdownMenu from '../DropdownMenu'
import { aboutItems, serviceItems, feedbackItems, contactItems } from '../navigationConfig'

export default function Navigation() {
  return (
    <nav className="flex items-center space-x-8 relative">
      <NavLink href="/" label="Home" active />
      <DropdownMenu title="About Us" items={aboutItems} />
      <DropdownMenu title="Services" items={serviceItems} />
      <DropdownMenu title="Patient Feedback" items={feedbackItems} />
      <DropdownMenu title="Contact" items={contactItems} />
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
