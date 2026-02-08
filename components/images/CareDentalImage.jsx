import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function CareDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dh3.png"
      alt="Patient Care"
      className={className}
      priority={true}
    />
  )
}
