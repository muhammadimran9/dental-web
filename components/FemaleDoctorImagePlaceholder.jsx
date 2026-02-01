export default function FemaleDoctorImagePlaceholder({ name, className = "w-full h-full object-cover" }) {
  return (
    <img 
      src={`https://images.unsplash.com/photo-1559839734-49b5a9d3c534?w=400&h=400&fit=crop&crop=face&auto=format`}
      alt={`Dr. ${name}`}
      className={className}
    />
  )
}
