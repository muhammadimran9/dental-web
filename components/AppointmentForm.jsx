'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from './Button'
import Card from './Card'
import AppointmentFormFields from './AppointmentFormFields'
import FormMessages from './FormMessages'
import AlternativeContact from './AlternativeContact'
import FormHeader from './FormHeader'
import SubmitButton from './SubmitButton'
import { submitAppointment } from './appointmentUtils'

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const onSubmit = async (data) => {
    await submitAppointment(data, setIsSubmitting, setSubmitSuccess, setSubmitError, reset)
  }

  return (
    <section className="section-padding">
      <div className="container-custom max-w-2xl">
        <Card>
          <FormHeader />
          <FormMessages submitSuccess={submitSuccess} submitError={submitError} />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <AppointmentFormFields register={register} errors={errors} />
            <SubmitButton isSubmitting={isSubmitting} />
          </form>
          <AlternativeContact />
        </Card>
      </div>
    </section>
  )
}
