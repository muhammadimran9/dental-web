import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function ExperienceDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dh1.png"
      alt="Experience"
      className={className}
      priority={true}
    />
  )
}
