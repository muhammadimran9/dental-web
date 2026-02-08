import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function PhoneDentalImage({ className = "w-6 h-6" }) {
  return (
    <OptimizedDentalImage
      src="/components/images/whatsapp.png"
      alt="Phone"
      className={className}
      priority={false}
    />
  )
}
