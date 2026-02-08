import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function CheckDentalImage({ className = "w-6 h-6" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/icon-7.png"
      alt="Check"
      className={className}
      priority={false}
    />
  )
}
