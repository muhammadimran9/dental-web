export default function Button({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const baseClasses = 'font-semibold py-3 px-6 rounded-lg transition-all duration-300'
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-soft hover:shadow-card',
    secondary: 'bg-secondary hover:bg-secondary-light text-white shadow-soft hover:shadow-card',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
  }

  const selectedVariant = variantClasses[variant] || variantClasses.primary

  return (
    <button
      className={`${baseClasses} ${selectedVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
