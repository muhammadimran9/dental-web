export default function TreatmentProcess() {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
        Your Invisalign Journey
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        <ProcessStep 
          number={1}
          title="Consultation"
          description="Free consultation to assess your smile and discuss treatment goals."
        />
        <ProcessStep 
          number={2}
          title="3D Scan"
          description="Digital scan creates precise 3D model of your teeth."
        />
        <ProcessStep 
          number={3}
          title="Custom Plan"
          description="Personalized treatment plan with virtual preview of results."
        />
        <ProcessStep 
          number={4}
          title="Aligners"
          description="Receive your custom aligners and start your transformation."
        />
      </div>
    </section>
  )
}

function ProcessStep({ number, title, description }) {
  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
        {number}
      </div>
      <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
