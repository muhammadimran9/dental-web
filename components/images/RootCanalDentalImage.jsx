import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function RootCanalDentalImage({ className = "w-12 h-12" }) {
  return (
    <OptimizedDentalImage
      src="/dental-images/2.png"
      alt="Root Canal Treatment"
      className={className}
      priority={true}
    />
  )
}
