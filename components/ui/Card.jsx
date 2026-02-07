import { designSystem } from '@/lib/designSystem'

export default function Card({
  children,
  hover = false,
  className = '',
  ...props
}) {
  const baseClasses = 'bg-white rounded-xl shadow-md border border-gray-100'
  
  const hoverClasses = hover ? 'hover:shadow-lg hover:transform hover:-translate-y-1 transition-all duration-300' : ''
  
  const classes = `${baseClasses} ${hoverClasses} ${className}`

  return (
    <div
      className={classes}
      {...props}
    >
      {children}
    </div>
  )
}
