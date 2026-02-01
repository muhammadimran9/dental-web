export default function Card({ children, className = '', hover = true }) {
  const hoverClass = hover ? 'hover:shadow-card' : ''
  
  return (
    <div className={`card ${hoverClass} ${className}`}>
      {children}
    </div>
  )
}
