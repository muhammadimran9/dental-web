import { ClockIcon, PhoneIcon, MapPinIcon } from './ui/IconsNew'

export default function ContactHeader() {
  return (
    <div className="w-full border-b border-gray-300 bg-gray-100">
      <div className="container-custom flex flex-col lg:flex-row justify-between items-center py-4">
        <div className="hidden lg:block">
          <Logo />
        </div>
        <ContactInfo />
      </div>
    </div>
  )
}

function Logo() {
  return (
    <a href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">DC</span>
      </div>
      <span className="text-lg font-bold text-gray-800">DentalCare Dubai</span>
    </a>
  )
}

function ContactInfo() {
  return (
    <div className="flex flex-wrap lg:flex-row gap-4 md:gap-6 mt-4 md:mt-0">
      <OpeningHours />
      <PhoneContact />
      <LocationLink />
    </div>
  )
}

function OpeningHours() {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-blue-800 p-2 rounded">
        <ClockIcon className="text-white h-3 w-3 md:h-5 md:w-5" />
      </div>
      <div>
        <span className="text-xs text-gray-500">Opening Time</span>
        <br />
        <span className="text-sm md:text-sm">Mon - Thu 8:30 - 20:00 | Fri 8:30 - 17:00</span>
      </div>
    </div>
  )
}

function PhoneContact() {
  return (
    <a href="tel:+97141234567" className="flex items-center gap-2">
      <div className="bg-blue-800 p-2 rounded">
        <PhoneIcon className="text-white h-3 w-3 md:h-5 md:w-5" />
      </div>
      <div>
        <span className="text-xs text-gray-500">Phone</span>
        <br />
        <span className="text-sm md:text-sm">+971 4 123 4567</span>
      </div>
    </a>
  )
}

function LocationLink() {
  return (
    <a 
      href="https://maps.app.goo.gl/wtqznxrT44FBifxQ6" 
      target="_blank"
      rel="noopener noreferrer"
      className="hidden lg:flex items-center gap-2"
    >
      <div className="bg-blue-800 p-2 rounded">
        <MapPinIcon className="text-white h-5 w-5" />
      </div>
      <div>
        <span className="text-xs text-gray-500">Location</span>
        <br />
        <span className="text-sm md:text-sm">Dubai Healthcare City</span>
      </div>
    </a>
  )
}
