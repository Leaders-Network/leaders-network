import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import React from 'react'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Page content sits above the footer */}
      <div className="relative z-10 bg-white dark:bg-dark-950 transition-colors duration-300">
        <Navbar />
        <main className="pt-20">
          <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                Terms of Service
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-white/70">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none prose-gray dark:prose-invert">
              {/* Introduction */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Welcome to Leaders Network. These Terms of Service ("Terms") govern your use of our website, services, and any related applications (collectively, the "Services") operated by Leaders Network ("we," "our," or "us"). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree with any part of these terms, you may not access or use our Services.
                </p>
              </section>

              {/* Services Description */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. Description of Services
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  Leaders Network provides professional recruiting, consulting, and talent acquisition services. Our services include but are not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>Executive recruitment and placement services</li>
                  <li>Talent acquisition consulting</li>
                  <li>Career development and coaching</li>
                  <li>Industry expertise and advisory services</li>
                  <li>Custom software development and IT consulting</li>
                  <li>Data analysis and business intelligence solutions</li>
                </ul>
              </section>

              {/* User Accounts */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. User Accounts and Registration
                </h2>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  3.1 Account Creation
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  3.2 Account Security
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              {/* User Conduct */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. User Conduct and Responsibilities
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  By using our Services, you agree to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Provide accurate and truthful information</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not engage in any fraudulent, deceptive, or harmful activities</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not distribute malware, spam, or other harmful content</li>
                  <li>Maintain professional and respectful communication</li>
                </ul>
              </section>

              {/* Intellectual Property */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Intellectual Property Rights
                </h2>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  5.1 Our Intellectual Property
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  The Services and their original content, features, and functionality are and will remain the exclusive property of Leaders Network and its licensors. The Services are protected by copyright, trademark, and other laws.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  5.2 User Content
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  By submitting content to our Services (such as resumes, professional information, or communications), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute such content for the purpose of providing our Services.
                </p>
              </section>

              {/* Service Availability */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Service Availability and Modifications
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  We reserve the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>Modify, suspend, or discontinue any part of our Services at any time</li>
                  <li>Update these Terms as necessary to reflect changes in our Services</li>
                  <li>Refuse service to anyone for any reason at any time</li>
                  <li>Remove or modify content that violates these Terms</li>
                </ul>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  We will make reasonable efforts to notify users of significant changes to our Services.
                </p>
              </section>

              {/* Payment Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Payment Terms and Refunds
                </h2>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  7.1 Service Fees
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  Fees for our services are established through individual service agreements. Payment terms, schedules, and refund policies will be specified in your service contract.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  7.2 Late Payments
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  Late payments may be subject to interest charges and service suspension as outlined in individual service agreements.
                </p>
              </section>

              {/* Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Privacy and Data Protection
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Your privacy is important to us. Please review our <a href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>, which explains how we collect, use, and protect your information. By using our Services, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>
              </section>

              {/* Disclaimers */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. Disclaimers and Warranties
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  <strong>DISCLAIMER:</strong> Our Services are provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>The accuracy, completeness, or reliability of our Services</li>
                  <li>That our Services will meet your specific requirements</li>
                  <li>That our Services will be uninterrupted or error-free</li>
                  <li>That defects will be corrected</li>
                  <li>Specific employment outcomes or placements</li>
                </ul>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. Limitation of Liability
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEADERS NETWORK SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Business interruption or loss of revenue</li>
                  <li>Personal or professional reputational harm</li>
                  <li>Failure to secure employment or complete transactions</li>
                </ul>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Our total liability shall not exceed the amount paid by you for our Services in the twelve (12) months preceding the claim.
                </p>
              </section>

              {/* Indemnification */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  11. Indemnification
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  You agree to defend, indemnify, and hold harmless Leaders Network, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney fees) arising from your use of our Services, violation of these Terms, or infringement of any rights of another party.
                </p>
              </section>

              {/* Termination */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  12. Termination
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  Either party may terminate the service relationship at any time with appropriate notice as specified in individual service agreements. We reserve the right to suspend or terminate your access to our Services immediately if you violate these Terms.
                </p>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Upon termination, your right to use our Services will cease immediately, but provisions regarding intellectual property, disclaimers, limitation of liability, and indemnification shall survive termination.
                </p>
              </section>

              {/* Governing Law */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  13. Governing Law and Dispute Resolution
                </h2>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  13.1 Governing Law
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  13.2 Dispute Resolution
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  Any disputes arising from these Terms or our Services shall be resolved through:
                </p>
                <ol className="list-decimal pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>Good faith negotiation between the parties</li>
                  <li>Mediation, if negotiation fails</li>
                  <li>Binding arbitration, if mediation fails</li>
                </ol>
              </section>

              {/* Severability */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  14. Severability and Entire Agreement
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect.
                </p>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  These Terms, together with our Privacy Policy and any service-specific agreements, constitute the entire agreement between you and Leaders Network regarding our Services.
                </p>
              </section>

              {/* Changes to Terms */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  15. Changes to These Terms
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  We reserve the right to update these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of our Services after any changes constitutes acceptance of the updated Terms.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  16. Contact Information
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-gray-50 dark:bg-white/5 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                  <div className="space-y-2 text-gray-600 dark:text-white/80">
                    <p><strong className="text-gray-900 dark:text-white">Leaders Network</strong></p>
                    <p>Email: <a href="mailto:eleadersnetworkng1@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">eleadersnetworkng1@gmail.com</a></p>
                    <p>Phone: <a href="tel:+2347087013213" className="text-blue-600 dark:text-blue-400 hover:underline">(234) 708-701-3213</a></p>
                    <p>Address: Suite 213 Block A 2-4 sura shopping complex, Lagos Island Lagos</p>
                  </div>
                </div>
              </section>

              {/* Acknowledgment */}
              <section className="mb-12">
                <div className="bg-blue-50 dark:bg-blue-500/10 rounded-lg p-6 border border-blue-200 dark:border-blue-500/20">
                  <p className="text-blue-900 dark:text-blue-100 leading-relaxed">
                    <strong>Acknowledgment:</strong> By using Leaders Network's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. These Terms constitute a legally binding agreement between you and Leaders Network.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}