import { designSystem } from '@/lib/designSystem'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 focus:ring-4 focus:ring-offset-0'
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  }

  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-blue-200',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 shadow hover:shadow-md transform hover:-translate-y-0.5 focus:ring-gray-200',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transform hover:-translate-y-0.5 focus:ring-blue-200',
  }

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed transform-none' : ''

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${className}`

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
