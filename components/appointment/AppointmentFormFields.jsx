import FormField from '../FormField'
import MessageField from '../MessageField'
import NameField from '../NameField'
import PhoneField from '../PhoneField'
import EmailField from '../EmailField'
import DateField from '../DateField'

export default function AppointmentFormFields({ register, errors }) {
  return (
    <div className="space-y-6">
      <NameField register={register} errors={errors} />
      <PhoneField register={register} errors={errors} />
      <EmailField register={register} errors={errors} />
      <DateField register={register} errors={errors} />
      <MessageField register={register} errors={errors} />
    </div>
  )
}
