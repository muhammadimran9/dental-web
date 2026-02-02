import WhatsAppIcon from '../icons/WhatsAppIcon'

export default function StickyWhatsApp() {
  return (
    <a
      href="https://wa.me/1234567890?text=Hi! I need to book a dental appointment."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50"
    >
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  )
}
