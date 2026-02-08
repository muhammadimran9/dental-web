import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function PediatricDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/3.png"
      alt="Pediatric Dentistry"
      className={className}
      priority={true}
    />
  )
}
