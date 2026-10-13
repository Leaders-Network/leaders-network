import Navbar from '@/components/layout/Navbar'
import FooterReveal from '@/components/layout/FooterReveal'
import React from 'react'

export default function PrivacyPolicyPage() {
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
                Privacy Policy
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
                  1. Introduction
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Leaders Network ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any capacity. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </section>

              {/* Information We Collect */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  2. Information We Collect
                </h2>
                
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  2.1 Personal Information
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Professional information (job title, company, industry experience)</li>
                  <li>Resume and career-related documents</li>
                  <li>Communication preferences and history</li>
                  <li>Information provided through forms, surveys, or customer support interactions</li>
                </ul>

                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  2.2 Technical Information
                </h3>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  We automatically collect certain technical information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Device information and operating system</li>
                  <li>Website usage patterns and analytics data</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              {/* How We Use Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process job applications and recruitment activities</li>
                  <li>To communicate with you about our services, updates, and opportunities</li>
                  <li>To personalize your experience on our website</li>
                  <li>To analyze website usage and optimize performance</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To prevent fraud and ensure security</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  4. How We Share Your Information
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li><strong>With Client Companies:</strong> For recruitment purposes, with your explicit consent</li>
                  <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in our operations</li>
                  <li><strong>Legal Compliance:</strong> When required by law or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </section>

              {/* Data Security */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* Data Retention */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  6. Data Retention
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              {/* Your Rights */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  7. Your Rights and Choices
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  Depending on your location and applicable law, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your data in a structured format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw previously given consent</li>
                </ul>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  To exercise these rights, please contact us at <a href="mailto:eleadersnetworkng1@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">eleadersnetworkng1@gmail.com</a>.
                </p>
              </section>

              {/* Cookies */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  8. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie preferences through your browser settings.
                </p>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Types of Cookies We Use:
                </h3>
                <ul className="list-disc pl-6 text-gray-600 dark:text-white/80 mb-6 space-y-2">
                  <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage patterns</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
              </section>

              {/* Third-Party Links */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  9. Third-Party Links
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </section>

              {/* Children's Privacy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  10. Children's Privacy
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
                </p>
              </section>

              {/* International Transfers */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  11. International Data Transfers
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
                </p>
              </section>

              {/* Changes to Policy */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  12. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              {/* Contact Information */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  13. Contact Us
                </h2>
                <p className="text-gray-600 dark:text-white/80 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
            </div>
          </div>
        </main>
      </div>
      <FooterReveal />
    </div>
  )
}