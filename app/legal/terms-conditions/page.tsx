import LegalLayout from '@/components/legal/LegalLayout'

export const metadata = {
  title: 'Terms & Conditions | DentalCare Dubai',
  description: 'Terms and Conditions for using DentalCare Dubai services.'
}

export default function TermsConditions() {
  return (
    <LegalLayout title="Terms & Conditions" lastUpdated="January 2024">
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using DentalCare Dubai services, you accept and agree to be bound by these Terms and Conditions.</p>

      <h2>2. Services</h2>
      <p>DentalCare Dubai provides dental healthcare services including but not limited to:</p>
      <ul>
        <li>General dentistry</li>
        <li>Cosmetic dentistry</li>
        <li>Orthodontics</li>
        <li>Dental implants</li>
        <li>Emergency dental care</li>
      </ul>

      <h2>3. Appointments</h2>
      <ul>
        <li>Appointments must be booked in advance</li>
        <li>Cancellations require 24 hours notice</li>
        <li>Late cancellations may incur charges</li>
        <li>We reserve the right to reschedule appointments</li>
      </ul>

      <h2>4. Payment Terms</h2>
      <ul>
        <li>Payment is due at the time of service</li>
        <li>We accept cash, credit cards, and insurance</li>
        <li>Insurance claims are processed on your behalf</li>
        <li>You are responsible for any unpaid balance</li>
      </ul>

      <h2>5. Patient Responsibilities</h2>
      <ul>
        <li>Provide accurate medical history</li>
        <li>Follow treatment instructions</li>
        <li>Attend scheduled appointments</li>
        <li>Inform us of any changes to your health</li>
      </ul>

      <h2>6. Limitation of Liability</h2>
      <p>DentalCare Dubai is not liable for any indirect, incidental, or consequential damages arising from our services.</p>

      <h2>7. Contact Information</h2>
      <p>For questions about these terms, contact us at:<br/>Email: info@dentalcaredubai.com<br/>Phone: +971 4 123 4567</p>
    </LegalLayout>
  )
}
