import { allServices } from '../servicesConfig'
import ServiceCard from './ServiceCard'

export default function ServicesGrid({ services = allServices }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  )
}
