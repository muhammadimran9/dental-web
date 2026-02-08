import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function UserDentalImage({ className = "w-6 h-6" }) {
  return (
    <OptimizedDentalImage
      src="/components/images/dh9.png"
      alt="User"
      className={className}
      priority={false}
    />
  )
}
