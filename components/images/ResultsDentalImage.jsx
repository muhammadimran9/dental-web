import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function ResultsDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dh4.png"
      alt="Results"
      className={className}
      priority={true}
    />
  )
}
