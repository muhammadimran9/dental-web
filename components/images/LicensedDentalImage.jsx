import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function LicensedDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/dh5.png"
      alt="DHA Licensed"
      className={className}
      priority={true}
    />
  )
}
