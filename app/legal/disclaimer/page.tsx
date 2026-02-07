import LegalLayout from '@/components/legal/LegalLayout'

export const metadata = {
  title: 'Disclaimer | DentalCare Dubai',
  description: 'Legal disclaimer for DentalCare Dubai website and services.'
}

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="January 2024">
      <h2>1. Medical Disclaimer</h2>
      <p>The information provided on this website is for general informational purposes only and is not intended as medical advice. Always consult with a qualified healthcare professional for diagnosis and treatment.</p>

      <h2>2. No Doctor-Patient Relationship</h2>
      <p>Use of this website does not establish a doctor-patient relationship. A formal relationship is only established through in-person consultation and examination at our clinic.</p>

      <h2>3. Treatment Results</h2>
      <ul>
        <li>Results may vary between individuals</li>
        <li>Before/after photos are examples only</li>
        <li>No guarantee of specific outcomes</li>
        <li>Individual results depend on various factors</li>
      </ul>

      <h2>4. Website Content</h2>
      <p>While we strive for accuracy, we make no warranties about:</p>
      <ul>
        <li>Completeness or accuracy of information</li>
        <li>Availability of services mentioned</li>
        <li>Suitability for your specific needs</li>
        <li>Third-party content or links</li>
      </ul>

      <h2>5. External Links</h2>
      <p>Our website may contain links to external sites. We are not responsible for the content, privacy practices, or accuracy of external websites.</p>

      <h2>6. Professional Advice</h2>
      <p>Information on this website should not replace professional dental advice. Always seek the advice of your dentist or other qualified health provider with any questions.</p>

      <h2>7. Limitation of Liability</h2>
      <p>DentalCare Dubai shall not be liable for any damages arising from the use or inability to use this website or its content.</p>

      <h2>8. Changes to Disclaimer</h2>
      <p>We reserve the right to modify this disclaimer at any time. Continued use of the website constitutes acceptance of changes.</p>

      <h2>9. Contact Us</h2>
      <p>For questions about this disclaimer:<br/>Email: info@dentalcaredubai.com<br/>Phone: +971 4 123 4567</p>
    </LegalLayout>
  )
}
