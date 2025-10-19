'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function TermsPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='pt-32 pb-12 lg:pt-40 lg:pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <div className='w-[60px] h-[4px] bg-[#ffc000] rounded-[2px] mb-8'></div>
          <h1 className='font-black text-5xl lg:text-[72px] leading-tight lg:leading-[72px] text-black tracking-tight lg:tracking-[-2.16px] mb-6'>
            Terms of Use
          </h1>
          <p className='text-[#5b5a78] text-lg lg:text-xl max-w-3xl'>
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className='py-12 lg:py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px] max-w-4xl'>
          <div className='space-y-12'>
            {/* Introduction */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Agreement to Terms
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                These Terms of Use constitute a legally binding agreement between you and ConvertLeadsApp ("we," "us," or "our") concerning your access to and use of our website and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
              </p>
            </div>

            {/* User Accounts */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                User Accounts
              </h2>
              <div className='space-y-4'>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  When you create an account with us, you must provide accurate, complete, and current information. You are responsible for:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring your account information remains accurate and up to date</li>
                </ul>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, false, or misleading.
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Services
              </h2>
              <div className='space-y-4'>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  ConvertLeadsApp provides web development services, including but not limited to:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  <li>Custom website design and development</li>
                  <li>SEO optimization and implementation</li>
                  <li>Analytics integration and tracking</li>
                  <li>Website maintenance and support</li>
                  <li>Technical consulting services</li>
                </ul>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                </p>
              </div>
            </div>

            {/* Free Plan Terms */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Free Plan Terms
              </h2>
              <div className='space-y-4'>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  Our Free plan is subject to the following conditions:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  <li>Available to qualified small businesses as determined by our eligibility criteria</li>
                  <li>Limited to the features and services specified in the Free plan tier</li>
                  <li>Domain registration and renewal fees are charged separately</li>
                  <li>We reserve the right to modify or discontinue the Free plan at any time</li>
                  <li>Conversion to a paid plan may be required for continued service</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Intellectual Property Rights
              </h2>
              <div className='space-y-4'>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  <strong>Our Property:</strong> All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are owned by ConvertLeadsApp and are protected by international copyright, trademark, and other intellectual property laws.
                </p>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  <strong>Your Content:</strong> For websites we develop for you, you retain ownership of your content, including text, images, and other materials you provide. You grant us a license to use your content solely for the purpose of providing our services.
                </p>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  <strong>Code and Development:</strong> The underlying code, frameworks, and technical implementation we create remain our intellectual property, unless otherwise specified in a separate written agreement.
                </p>
              </div>
            </div>

            {/* Prohibited Activities */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Prohibited Activities
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-3'>
                You agree not to:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <li>Use our services for any illegal or unauthorized purpose</li>
                <li>Violate any laws, regulations, or third-party rights</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Interfere with or disrupt our services or servers</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Collect or harvest information from our services using automated means</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Use our services to send spam or unsolicited communications</li>
              </ul>
            </div>

            {/* Payment Terms */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Payment and Billing
              </h2>
              <div className='space-y-4'>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  For paid services:
                </p>
                <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  <li>Fees are quoted in USD unless otherwise specified</li>
                  <li>Payment is due as specified in your service agreement</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We reserve the right to change our fees with 30 days' notice</li>
                  <li>Late payments may result in service suspension or termination</li>
                  <li>You are responsible for all applicable taxes</li>
                </ul>
              </div>
            </div>

            {/* Warranties and Disclaimers */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Warranties and Disclaimers
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-3'>
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT:
              </p>
              <ul className='list-disc pl-6 space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <li>Our services will be uninterrupted, secure, or error-free</li>
                <li>The results obtained from using our services will be accurate or reliable</li>
                <li>Any errors or defects will be corrected</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Limitation of Liability
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CONVERTLEADSAPP SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF OUR SERVICES.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Indemnification
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                You agree to indemnify, defend, and hold harmless ConvertLeadsApp and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of our services, your violation of these Terms, or your violation of any third-party rights.
              </p>
            </div>

            {/* Termination */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Termination
              </h2>
              <div className='space-y-4'>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these Terms.
                </p>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  Upon termination, your right to use our services will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Governing Law
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of our services shall be resolved in the courts of Singapore.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Changes to Terms
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice before the new terms take effect. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className='bg-[#f9f9fa] rounded-[32px] p-8 lg:p-12'>
              <h2 className='font-bold text-2xl lg:text-[36px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.08px] mb-4'>
                Contact Us
              </h2>
              <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px] mb-4'>
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className='space-y-2 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <p><strong>Email:</strong> legal@convertleadsapp.com</p>
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
