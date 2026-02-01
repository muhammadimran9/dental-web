import FormField from './FormField'

export default function PhoneField({ register, errors }) {
  return (
    <FormField
      id="phone"
      label="Phone Number *"
      type="tel"
      placeholder="(123) 456-7890"
      register={register('phone', { required: 'Phone number is required' })}
      error={errors.phone?.message}
    />
  )
}
