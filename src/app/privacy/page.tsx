'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='pt-32 pb-12 lg:pt-40 lg:pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <div className='w-[60px] h-[4px] bg-[#ffc000] rounded-[2px] mb-8'></div>
          <h1 className='font-black text-5xl lg:text-[72px] leading-tight lg:leading-[72px] text-black tracking-tight lg:tracking-[-2.16px] mb-6'>
            Privacy Policy
          </h1>
          <p className='text-[#5b5a78] text-lg lg:text-xl max-w-3xl'>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className='py-12 lg:py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px] max-w-4xl'>
          <div className='space-y-12'>
            {/* Introduction */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Introduction
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                ConvertLeadsApp ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Information We Collect
              </h2>
              <div className='space-y-4'>
                <div>
                  <h3 className='font-semibold text-xl lg:text-[24px] text-[#1c1c37] mb-2'>
                    Personal Information
                  </h3>
                  <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-3'>
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                    <li>Name and contact information (email address, phone number)</li>
                    <li>Business information (company name, industry, website URL)</li>
                    <li>Account credentials</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communications you send to us</li>
                  </ul>
                </div>

                <div>
                  <h3 className='font-semibold text-xl lg:text-[24px] text-[#1c1c37] mb-2'>
                    Automatically Collected Information
                  </h3>
                  <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-3'>
                    When you visit our website, we automatically collect certain information about your device, including:
                  </p>
                  <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                    <li>IP address and browser type</li>
                    <li>Operating system and device information</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                    <li>Click-stream data</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                How We Use Your Information
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-3'>
                We use the information we collect to:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <li>Provide, maintain, and improve our services</li>
                <li>Process your transactions and manage your account</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate with you about products, services, and promotional offers</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Information Sharing and Disclosure
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-3'>
                We may share your information in the following circumstances:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, and hosting services.</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with a merger, acquisition, or sale of assets.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                <li><strong>Protection of Rights:</strong> We may disclose your information when we believe it is necessary to protect our rights, your safety, or the safety of others.</li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Data Security
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Your Rights and Choices
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-3'>
                Depending on your location, you may have the following rights:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
              </ul>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mt-4'>
                To exercise these rights, please contact us at privacy@convertleadsapp.com
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Cookies and Tracking Technologies
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                We use cookies and similar tracking technologies to collect and track information about your activities on our website. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Children's Privacy
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us immediately.
              </p>
            </div>

            {/* Changes to Privacy Policy */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Changes to This Privacy Policy
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            {/* Contact Information */}
            <div className='bg-[#f9f9fa] rounded-[32px] p-8 lg:p-12'>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Contact Us
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-4'>
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className='space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <p><strong>Email:</strong> privacy@convertleadsapp.com</p>
                <p><strong>US Address:</strong> 131 Continental Dr Suite 305, Newark, DE 19713</p>
                <p><strong>Singapore Address:</strong> 159 Sin Ming Road, Singapore 575625</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
