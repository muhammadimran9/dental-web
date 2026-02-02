import CheckCircleIcon from '../icons/CheckCircleIcon'

const steps = [
  { number: '1', title: 'Choose Date & Time', description: 'Select your preferred appointment slot' },
  { number: '2', title: 'Fill Quick Form', description: 'Provide your contact and service details' },
  { number: '3', title: 'Get Confirmation', description: 'Receive instant confirmation via SMS/Email' },
]

export default function ProcessSteps() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Booking in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            Quick and easy appointment scheduling
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-accent/30 -translate-x-8"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
