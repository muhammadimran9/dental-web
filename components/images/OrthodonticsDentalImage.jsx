import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function OrthodonticsDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/4.png"
      alt="Orthodontics"
      className={className}
      priority={true}
    />
  )
}
