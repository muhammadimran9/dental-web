import LegalLayout from '@/components/legal/LegalLayout'

export const metadata = {
  title: 'Refund Policy | DentalCare Dubai',
  description: 'Refund and cancellation policy for DentalCare Dubai services.'
}

export default function RefundPolicy() {
  return (
    <LegalLayout title="Refund / Return Policy" lastUpdated="January 2024">
      <h2>1. Appointment Cancellations</h2>
      <p>We understand that schedules change. Our cancellation policy is as follows:</p>
      <ul>
        <li><strong>24+ hours notice:</strong> Full refund of any advance payment</li>
        <li><strong>Less than 24 hours:</strong> 50% cancellation fee applies</li>
        <li><strong>No-show:</strong> Full appointment fee charged</li>
      </ul>

      <h2>2. Treatment Refunds</h2>
      <p>Refunds for completed treatments are evaluated on a case-by-case basis:</p>
      <ul>
        <li>Refunds may be issued for unsatisfactory results</li>
        <li>Must be reported within 7 days of treatment</li>
        <li>Requires evaluation by our dental team</li>
        <li>Cosmetic procedures have different terms</li>
      </ul>

      <h2>3. Payment Refund Process</h2>
      <ul>
        <li>Refund requests must be submitted in writing</li>
        <li>Processing time: 7-14 business days</li>
        <li>Refunds issued to original payment method</li>
        <li>Administrative fees may apply</li>
      </ul>

      <h2>4. Insurance Claims</h2>
      <ul>
        <li>Insurance refunds processed per your policy</li>
        <li>We assist with claim submissions</li>
        <li>Patient responsible for denied claims</li>
        <li>Pre-authorization recommended</li>
      </ul>

      <h2>5. Non-Refundable Items</h2>
      <p>The following are non-refundable:</p>
      <ul>
        <li>Consultation fees</li>
        <li>Diagnostic services (X-rays, scans)</li>
        <li>Custom dental appliances once fabricated</li>
        <li>Completed treatments</li>
      </ul>

      <h2>6. Contact for Refunds</h2>
      <p>To request a refund, contact us at:<br/>Email: billing@dentalcaredubai.com<br/>Phone: +971 4 123 4567</p>
    </LegalLayout>
  )
}
