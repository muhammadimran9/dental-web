import LegalLayout from '@/components/legal/LegalLayout'

export const metadata = {
  title: 'Cookie Policy | DentalCare Dubai',
  description: 'Cookie Policy for DentalCare Dubai. Learn how we use cookies on our website.'
}

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="January 2024">
      <h2>1. What Are Cookies</h2>
      <p>Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience and analyze website usage.</p>

      <h2>2. Types of Cookies We Use</h2>
      
      <h3>Essential Cookies</h3>
      <p>Required for the website to function properly:</p>
      <ul>
        <li>Session management</li>
        <li>Security features</li>
        <li>Load balancing</li>
      </ul>

      <h3>Analytics Cookies</h3>
      <p>Help us understand how visitors use our website:</p>
      <ul>
        <li>Page views and traffic sources</li>
        <li>User behavior patterns</li>
        <li>Website performance metrics</li>
      </ul>

      <h3>Functional Cookies</h3>
      <p>Remember your preferences:</p>
      <ul>
        <li>Language preferences</li>
        <li>Login information</li>
        <li>Form data</li>
      </ul>

      <h3>Marketing Cookies</h3>
      <p>Used for advertising purposes:</p>
      <ul>
        <li>Track advertising effectiveness</li>
        <li>Personalize ads</li>
        <li>Retargeting campaigns</li>
      </ul>

      <h2>3. Third-Party Cookies</h2>
      <p>We use third-party services that may set cookies:</p>
      <ul>
        <li>Google Analytics</li>
        <li>Social media platforms</li>
        <li>Payment processors</li>
      </ul>

      <h2>4. Managing Cookies</h2>
      <p>You can control cookies through:</p>
      <ul>
        <li>Browser settings</li>
        <li>Our cookie consent banner</li>
        <li>Third-party opt-out tools</li>
      </ul>

      <h2>5. Cookie Duration</h2>
      <ul>
        <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
        <li><strong>Persistent cookies:</strong> Remain for a set period</li>
      </ul>

      <h2>6. Disabling Cookies</h2>
      <p>You can disable cookies in your browser settings. Note that some website features may not function properly without cookies.</p>

      <h2>7. Contact Us</h2>
      <p>For questions about our cookie policy:<br/>Email: privacy@dentalcaredubai.com<br/>Phone: +971 4 123 4567</p>
    </LegalLayout>
  )
}
