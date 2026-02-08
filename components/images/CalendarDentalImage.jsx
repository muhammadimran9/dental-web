import OptimizedDentalImage from '../ui/OptimizedDentalImage'

export default function CalendarDentalImage({ className = "w-6 h-6" }) {
  return (
    <OptimizedDentalImage
      src="/components/images/dh8.png"
      alt="Calendar"
      className={className}
      priority={false}
    />
  )
}
