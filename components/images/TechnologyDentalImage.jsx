import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function TechnologyDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dh2.png"
      alt="Technology"
      className={className}
      priority={true}
    />
  )
}
