export default function DoctorImagePlaceholder({ name, className = "w-full h-full object-cover" }) {
  return (
    <img 
      src={`https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face&auto=format`}
      alt={`Dr. ${name}`}
      className={className}
    />
  )
}
