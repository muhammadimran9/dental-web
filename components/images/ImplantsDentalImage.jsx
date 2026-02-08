import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function ImplantsDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/1.png"
      alt="Dental Implants"
      className={className}
      priority={true}
    />
  )
}
