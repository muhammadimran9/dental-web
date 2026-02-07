import { designSystem } from '@/lib/designSystem'

export default function Input({
  label,
  error,
  required = false,
  className = '',
  ...props
}) {
  const baseClasses = 'w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
  
  const errorClasses = error ? 'border-red-500 focus:ring-red-500' : ''
  
  const classes = `${baseClasses} ${errorClasses} ${className}`

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        className={classes}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
