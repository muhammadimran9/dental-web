import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function HeartDentalImage({ className = "w-8 h-8" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/sh2.png"
      alt="Compassion"
      className={className}
      priority={true}
    />
  )
}
