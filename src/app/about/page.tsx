'use client';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

/* eslint-disable @next/next/no-img-element */

// Team images
const imgTeam1 = '/images/linkedin-2.jpg';
const imgTeam2 = '/images/linkedin-3.jpeg';
const imgTeam3 = '/images/linkedin-4.jpeg';
const imgTeam4 = '/images/linkedin-1.jpg';

// Office image
const imgOffice =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='pt-32 pb-12 lg:pt-40 lg:pb-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <div className='w-[60px] h-[4px] bg-[#ffc000] rounded-[2px] mb-8'></div>
          <h1 className='font-black text-5xl lg:text-[72px] leading-tight lg:leading-[72px] text-black tracking-tight lg:tracking-[-2.16px] mb-6'>
            About Us
          </h1>
          <p className='text-[#5b5a78] text-lg lg:text-xl max-w-3xl leading-[1.6]'>
            Empowering small businesses with modern websites to drive sales.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className='py-12 lg:py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            <div>
              <h2 className='font-bold text-3xl lg:text-[48px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.44px] mb-6'>
                Our Story
              </h2>
              <div className='space-y-4 text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                <p>
                  ConvertLeadsApp was founded with a simple mission: to level
                  the playing field for small businesses in the digital world.
                  We recognized that while large corporations could afford
                  custom-coded, high-performance websites, small businesses were
                  stuck with bloated WordPress templates and drag-and-drop
                  builders.
                </p>
                <p>
                  Our founders, experienced web developers who had worked with
                  enterprise clients, saw an opportunity to bring
                  enterprise-level web development to small
                  businesses—completely free for qualified companies.
                </p>
                <p>
                  Today, we've helped over 190 small businesses transform their
                  online presence, generating over $200M in revenue for our
                  clients through high-converting, SEO-optimized websites.
                </p>
              </div>
            </div>
            <div className='relative w-full h-[400px] lg:h-[500px] rounded-[32px] lg:rounded-[64px] overflow-hidden'>
              <img
                src={imgOffice}
                alt='Our office'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className='py-12 lg:py-20 bg-[#f9f9fa]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <div className='max-w-4xl mx-auto text-center'>
            <h2 className='font-bold text-3xl lg:text-[48px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.44px] mb-6'>
              Our Mission
            </h2>
            <p className='text-[#5b5a78] text-lg lg:text-[24px] leading-[1.6] tracking-[-0.72px] italic'>
              "To democratize access to world-class web development, enabling
              every small business to compete online with the power of
              custom-coded, conversion-optimized websites."
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className='py-12 lg:py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <h2 className='font-bold text-3xl lg:text-[48px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.44px] mb-12 text-center'>
            Our Values
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                title: 'Quality First',
                description:
                  'We never compromise on code quality or performance. Every website we build is custom-coded for speed and conversions.',
              },
              {
                title: 'Transparency',
                description:
                  'No hidden fees, no surprises. We believe in honest communication and clear pricing for all our services.',
              },
              {
                title: 'Client Success',
                description:
                  'Your success is our success. We measure our performance by the results you achieve with your website.',
              },
              {
                title: 'Innovation',
                description:
                  'We stay ahead of web development trends to ensure your website uses the latest technologies and best practices.',
              },
            ].map((value, idx) => (
              <div key={idx} className='text-center'>
                <div className='w-16 h-16 bg-[#ffc000] rounded-[16px] flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white text-2xl font-bold'>
                    {idx + 1}
                  </span>
                </div>
                <h3 className='font-bold text-xl lg:text-[24px] text-[#1c1c37] mb-3'>
                  {value.title}
                </h3>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className='py-12 lg:py-20 bg-[#f9f9fa]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <h2 className='font-bold text-3xl lg:text-[48px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.44px] mb-6 text-center'>
            Meet Our Team
          </h2>
          <p className='text-[#5b5a78] text-lg lg:text-[20px] leading-[1.6] text-center mb-12 max-w-3xl mx-auto'>
            Our talented team brings together expertise in web development, UX
            design, SEO, and digital marketing to deliver exceptional results.
          </p>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto'>
            {[
              {
                name: 'Michael Tan',
                role: 'UX Designer',
                image: imgTeam1,
                bio: 'Crafting intuitive user experiences that convert visitors into customers.',
              },
              {
                name: 'Lisa Wong',
                role: 'Project Manager',
                image: imgTeam2,
                bio: 'Ensuring every project is delivered on time and exceeds expectations.',
              },
              {
                name: 'David Kim',
                role: 'Full Stack Developer',
                image: imgTeam3,
                bio: 'Building high-performance websites with clean, maintainable code.',
              },
              {
                name: 'Amanda Lee',
                role: 'Marketing Lead',
                image: imgTeam4,
                bio: 'Driving growth strategies that maximize your online presence.',
              },
            ].map((member, idx) => (
              <div key={idx} className='text-center'>
                <div className='w-full aspect-square rounded-[16px] overflow-hidden mb-4'>
                  <img
                    src={member.image}
                    alt={member.name}
                    className='w-full h-full object-cover grayscale'
                  />
                </div>
                <h3 className='font-bold text-base lg:text-[18px] text-[#1c1c37] mb-1'>
                  {member.name}
                </h3>
                <p className='font-semibold text-sm lg:text-[16px] text-[#ffc000] mb-2'>
                  {member.role}
                </p>
                <p className='text-[#5b5a78] text-xs lg:text-[14px] leading-[1.6] hidden md:block'>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className='py-12 lg:py-20'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <h2 className='font-bold text-3xl lg:text-[48px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.44px] mb-12 text-center'>
            By The Numbers
          </h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto'>
            {[
              { number: '190+', label: 'Small Businesses Served' },
              { number: '200+', label: 'Websites Launched' },
              { number: '$200M', label: 'Revenue Generated' },
              { number: '99%', label: 'Client Satisfaction' },
            ].map((stat, idx) => (
              <div key={idx} className='text-center'>
                <p className='font-medium text-4xl lg:text-[64px] text-[#ffc000] leading-tight tracking-tight lg:tracking-[-1.92px] mb-2'>
                  {stat.number}
                </p>
                <p className='text-[#5b5a78] text-sm lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className='py-12 lg:py-20 bg-[#f9f9fa]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px]'>
          <h2 className='font-bold text-3xl lg:text-[48px] text-[#1c1c37] leading-tight tracking-tight lg:tracking-[-1.44px] mb-12 text-center'>
            What Makes Us Different
          </h2>
          <div className='grid md:grid-cols-3 gap-8 max-w-5xl mx-auto'>
            {[
              {
                title: 'Custom-Coded Excellence',
                description:
                  'Unlike WordPress sites with bloated plugins, we write clean, optimized code from scratch for maximum performance.',
              },
              {
                title: 'Built-In Analytics',
                description:
                  'Every website includes comprehensive tracking and analytics so you can measure ROI and make data-driven decisions.',
              },
              {
                title: 'Continuous Optimization',
                description:
                  "We don't just build and abandon. We continuously monitor and optimize your website for better results.",
              },
            ].map((feature, idx) => (
              <div key={idx} className='bg-white rounded-[32px] p-8'>
                <h3 className='font-bold text-xl lg:text-[24px] text-[#1c1c37] mb-4'>
                  {feature.title}
                </h3>
                <p className='text-[#5b5a78] text-base lg:text-[18px] leading-[1.6] tracking-[-0.54px]'>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-12 lg:py-20 bg-gradient-to-br from-[#ffc000] to-[#ffb300]'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-[100px] text-center'>
          <h2 className='font-bold text-3xl lg:text-[48px] text-white leading-tight tracking-tight lg:tracking-[-1.44px] mb-6'>
            Ready to Join Our Success Stories?
          </h2>
          <p className='text-white text-lg lg:text-[20px] leading-[1.6] mb-8 max-w-2xl mx-auto'>
            Join 190+ small businesses that have transformed their online
            presence with ConvertLeadsApp
          </p>
          <button className='bg-white text-[#ffc000] font-bold text-base lg:text-[18px] px-12 py-4 rounded-[32px] hover:bg-gray-100 transition-colors tracking-[-0.54px]'>
            Get Started Free
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
