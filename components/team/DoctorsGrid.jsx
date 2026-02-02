import Card from '../Card'
import DoctorCard from './DoctorCard'
import { doctors } from '../doctorsConfig'

export default function DoctorsGrid() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <DoctorsGridList doctors={doctors} />
      </div>
    </section>
  )
}

function DoctorsGridList({ doctors }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {doctors.map((doctor, index) => (
        <DoctorCard key={index} {...doctor} />
      ))}
    </div>
  )
}
