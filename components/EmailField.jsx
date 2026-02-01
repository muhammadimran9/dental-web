import FormField from './FormField'

export default function EmailField({ register, errors }) {
  return (
    <FormField
      id="email"
      label="Email Address *"
      type="email"
      placeholder="john@example.com"
      register={register('email', { 
        required: 'Email is required',
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: 'Invalid email address'
        }
      })}
      error={errors.email?.message}
    />
  )
}
