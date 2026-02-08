import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function LightbulbDentalImage({ className = "w-8 h-8" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/sh3.png"
      alt="Innovation"
      className={className}
      priority={true}
    />
  )
}
