import LegalLayout from '@/components/legal/LegalLayout'

export const metadata = {
  title: 'Privacy Policy | DentalCare Dubai',
  description: 'Privacy Policy for DentalCare Dubai. Learn how we collect, use, and protect your personal information.'
}

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="January 2024">
      <h2>1. Information We Collect</h2>
      <p>We collect information you provide directly to us when you book appointments, contact us, or use our services:</p>
      <ul>
        <li>Personal information (name, email, phone number)</li>
        <li>Medical and dental history</li>
        <li>Appointment details and preferences</li>
        <li>Payment information</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide dental services and treatment</li>
        <li>Schedule and manage appointments</li>
        <li>Process payments</li>
        <li>Send appointment reminders and updates</li>
        <li>Improve our services</li>
      </ul>

      <h2>3. Information Sharing</h2>
      <p>We do not sell or rent your personal information. We may share your information with:</p>
      <ul>
        <li>Healthcare providers involved in your treatment</li>
        <li>Insurance companies for claims processing</li>
        <li>Service providers who assist our operations</li>
        <li>Legal authorities when required by law</li>
      </ul>

      <h2>4. Data Security</h2>
      <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Request corrections to your data</li>
        <li>Request deletion of your data</li>
        <li>Opt-out of marketing communications</li>
      </ul>

      <h2>6. Contact Us</h2>
      <p>For privacy-related questions, contact us at:</p>
      <p>Email: privacy@dentalcaredubai.com<br/>Phone: +971 4 123 4567</p>
    </LegalLayout>
  )
}
