import EmergencyContent from './EmergencyContent'
import EmergencySchedule from './EmergencySchedule'

export default function EmergencyCare() {
  return (
    <section className="section-padding bg-red-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <EmergencyContent />
          <EmergencySchedule />
        </div>
      </div>
    </section>
  )
}
