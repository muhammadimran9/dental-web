import FormField from './FormField'

export default function DateField({ register, errors }) {
  return (
    <FormField
      id="preferredDate"
      label="Preferred Date *"
      type="date"
      register={register('preferredDate', { required: 'Preferred date is required' })}
      error={errors.preferredDate?.message}
      min={new Date().toISOString().split('T')[0]}
    />
  )
}
