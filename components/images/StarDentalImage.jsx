import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function StarDentalImage({ className = "w-8 h-8" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/sh1.png"
      alt="Excellence"
      className={className}
      priority={true}
    />
  )
}
