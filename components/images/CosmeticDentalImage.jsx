import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function CosmeticDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dental-veneers.jpg"
      alt="Cosmetic Dentistry"
      className={className}
      priority={true}
    />
  )
}
