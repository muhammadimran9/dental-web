import FormField from './FormField'

export default function NameField({ register, errors }) {
  return (
    <FormField
      id="name"
      label="Full Name *"
      type="text"
      placeholder="John Doe"
      register={register('name', { required: 'Name is required' })}
      error={errors.name?.message}
    />
  )
}
