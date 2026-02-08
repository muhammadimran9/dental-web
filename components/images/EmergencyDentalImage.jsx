import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function EmergencyDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dh7.png"
      alt="Emergency"
      className={className}
      priority={true}
    />
  )
}
