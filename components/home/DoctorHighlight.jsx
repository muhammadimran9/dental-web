import Link from 'next/link'
import Button from '../ui/Button'
import DoctorImage from './DoctorImage'
import DoctorInfo from './DoctorInfo'

export default function DoctorHighlight() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <DoctorImage />
          <DoctorInfo />
        </div>
      </div>
    </section>
  )
}
