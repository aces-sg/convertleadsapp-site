'use client';

import * as React from 'react';
import '@/lib/env';

export default function HomePage() {
  return (
    <main>
      <div className='relative h-[4525px] w-[1440px] overflow-hidden bg-neutral-50'>
        {/* Header / Navigation */}
        <div className='absolute left-[158px] top-[59px] justify-start'>
          <span className="font-['Poppins'] text-2xl font-bold text-blue-600">
            Digital{' '}
          </span>
          <span className="font-['Poppins'] text-2xl font-bold text-zinc-800">
            Spark
          </span>
        </div>

        <div className="absolute left-[546px] top-[67px] justify-start font-['Poppins'] text-sm font-medium text-zinc-800">
          Home
        </div>
        <div className="absolute left-[617px] top-[67px] justify-start font-['Poppins'] text-sm font-medium text-zinc-800">
          Services
        </div>
        <div className="absolute left-[705px] top-[67px] justify-start font-['Poppins'] text-sm font-medium text-zinc-800">
          About
        </div>
        <div className="absolute left-[777px] top-[67px] justify-start font-['Poppins'] text-sm font-medium text-zinc-800">
          Contact
        </div>
        <div className="absolute left-[864px] top-[67px] justify-start font-['Poppins'] text-sm font-medium text-zinc-800">
          Blog
        </div>

        <div className='absolute left-[1135px] top-[58px] h-9 w-32 rounded-[5px] bg-blue-600' />
        <div className="absolute left-[1157px] top-[66px] justify-start text-center font-['Poppins'] text-sm font-semibold text-white">
          Get a Demo
        </div>

        {/* Hero Section */}
        <div className="absolute left-[178px] top-[203px] w-[1084px] justify-start text-center font-['Poppins'] text-6xl font-semibold leading-[81px] text-zinc-800">
          Grow Your Brand with Digital Marketing
        </div>

        <div className="absolute left-[338px] top-[371px] w-[765px] justify-start text-center font-['Poppins'] text-sm font-light text-zinc-800">
          Transform your online presence with data-driven strategies designed to
          increase visibility, drive traffic, and deliver measurable results
          that fuel your business growth
        </div>

        {/* CTA Buttons */}
        <div className='absolute left-[502px] top-[438px] h-14 w-52 rounded-[5px] bg-blue-600' />
        <div className="absolute left-[556px] top-[453px] justify-start text-center font-['Poppins'] text-lg font-semibold text-white">
          Get Started
        </div>

        <div className='absolute left-[728px] top-[438px] h-14 w-52 rounded-[5px] border-2 border-zinc-800' />
        <div className="absolute left-[753px] top-[453px] justify-start text-center font-['Poppins'] text-lg font-semibold text-zinc-800">
          Free Consultation
        </div>

        {/* Avatar Section */}
        <div className='absolute left-[599px] top-[553px] h-16 w-16 rounded-full border-2 border-white bg-stone-300' />
        <div className='absolute left-[660px] top-[553px] h-16 w-16 rounded-full border-2 border-white bg-stone-300' />
        <div className='absolute left-[721px] top-[553px] h-16 w-16 rounded-full border-2 border-white bg-stone-300' />
        <div className='absolute left-[782px] top-[553px] h-16 w-16 rounded-full border-2 border-white bg-stone-300' />

        <div className="absolute left-[609px] top-[628px] w-56 justify-start text-center font-['Poppins'] text-[10px] font-light text-zinc-800">
          Explore our 430+ success project that help our clients business growth
          every year
        </div>

        {/* Stats Cards */}
        <div className='absolute left-[158px] top-[486px] h-40 w-64 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
        <div className="absolute left-[176px] top-[505px] w-56 justify-start font-['Poppins'] text-xs font-medium text-zinc-800">
          All email campaign sent
        </div>
        <div className="absolute left-[176px] top-[526px] w-56 justify-start font-['Poppins'] text-3xl font-semibold text-blue-600">
          +17.534
        </div>

        {/* Chart bars */}
        <div className='absolute left-[176px] top-[591px] h-8 w-5 bg-zinc-300' />
        <div className='absolute left-[211px] top-[607px] h-4 w-5 bg-zinc-300' />
        <div className='absolute left-[246px] top-[596px] h-7 w-5 bg-zinc-300' />
        <div className='absolute left-[281px] top-[579px] h-11 w-5 bg-zinc-300' />
        <div className='absolute left-[316px] top-[562px] h-16 w-5 bg-blue-600' />
        <div className='absolute left-[351px] top-[587px] h-9 w-5 bg-zinc-300' />
        <div className='absolute left-[386px] top-[579px] h-11 w-5 bg-zinc-300' />

        {/* Revenue Card */}
        <div className='absolute left-[1034px] top-[495px] h-24 w-56 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
        <div className="absolute left-[1048px] top-[508px] w-52 justify-start font-['Poppins'] text-xs font-medium text-zinc-800">
          Total revenue
        </div>
        <div className="absolute left-[1048px] top-[536px] h-11 w-52 justify-center font-['Poppins'] text-4xl font-semibold text-zinc-800">
          $735.374
        </div>
        <div className="absolute left-[1214px] top-[508px] w-9 justify-start text-right font-['Poppins'] text-xs font-medium text-zinc-800">
          +36%
        </div>
        <div className='absolute left-[1184px] top-[511px] h-3 w-6 outline outline-2 outline-offset-[-1px] outline-blue-600' />
        <div className='absolute left-[1202.78px] top-[511px] h-1.5 w-1.5 outline outline-2 outline-offset-[-1px] outline-blue-600' />

        {/* Services Section */}
        <div className='absolute left-[589px] top-[855px] w-64 justify-start text-center'>
          <span className="font-['Poppins'] text-4xl font-semibold text-blue-600">
            Our
          </span>
          <span className="font-['Poppins'] text-4xl font-semibold text-zinc-800">
            {' '}
            Services
          </span>
        </div>
        <div className="absolute left-[590px] top-[912px] w-64 justify-start text-center font-['Poppins'] text-sm font-light text-zinc-800">
          Tailored solutions for digital success
        </div>

        {/* Service Cards Row 1 */}
        <div className='absolute left-[158px] top-[968px] h-80 w-96 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
        <div className='absolute left-[533px] top-[968px] h-80 w-96 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
        <div className='absolute left-[907px] top-[968px] h-80 w-96 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />

        {/* Service 1 - SEO */}
        <div className='absolute left-[185px] top-[994px] h-10 w-10 rounded-full bg-violet-200' />
        <div className='absolute left-[194px] top-[1003px] h-5 w-5 bg-blue-600' />
        <div className='absolute left-[270px] top-[1034px] h-32 w-32 bg-blue-600' />
        <div className="absolute left-[185px] top-[1183px] w-72 justify-start font-['Poppins'] text-lg font-semibold text-zinc-800">
          SEO Optimization
        </div>
        <div className="absolute left-[185px] top-[1210px] w-72 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          Increase your website's visibility with our advanced SEO techniques
          that drive organic traffic and improve your rankings.
        </div>

        {/* Service 2 - Social Media */}
        <div className='absolute left-[559px] top-[994px] h-10 w-10 rounded-full bg-violet-200' />
        <div className='absolute left-[576.82px] top-[1009.67px] h-1.5 w-1.5 bg-blue-600' />
        <div className='absolute left-[568px] top-[1002px] h-3.5 w-6 bg-blue-600' />
        <div className='absolute left-[571.07px] top-[1015.35px] h-2.5 w-4 bg-blue-600' />
        <div className='absolute left-[634px] top-[1034px] h-32 w-24 bg-blue-600' />
        <div className='absolute left-[710.01px] top-[1055.06px] h-9 w-5 bg-blue-600' />
        <div className='absolute left-[714.33px] top-[1042.78px] h-10 w-16 bg-blue-600' />
        <div className='absolute left-[719.21px] top-[1052.38px] h-20 w-16 bg-blue-600' />
        <div className='absolute left-[758.02px] top-[1108.81px] h-3 w-2.5 bg-blue-600' />
        <div className='absolute left-[721.55px] top-[1100.02px] h-6 w-14 bg-blue-600' />
        <div className="absolute left-[559px] top-[1183px] w-72 justify-start font-['Poppins'] text-lg font-semibold text-zinc-800">
          Social Media Marketing
        </div>
        <div className="absolute left-[559px] top-[1210px] w-72 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          Boost engagement and build a loyal following on social media
          platforms. We create content that resonates.
        </div>

        {/* Service 3 - PPC */}
        <div className='absolute left-[933px] top-[994px] h-10 w-10 rounded-full bg-violet-200' />
        <div className='absolute left-[942px] top-[1003px] h-5 w-5 bg-blue-600' />
        <div className='absolute left-[1018px] top-[1034px] h-32 w-32 bg-blue-600' />
        <div className="absolute left-[933px] top-[1183px] w-72 justify-start font-['Poppins'] text-lg font-semibold text-zinc-800">
          Pay-Per-Click (PPC) Advertising
        </div>
        <div className="absolute left-[933px] top-[1210px] w-72 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          Get immediate results with targeted ads that place your brand in front
          of the right customers, optimizing for conversions.
        </div>

        {/* Service Cards Row 2 */}
        <div className='absolute left-[158px] top-[1317px] h-56 w-[538px] rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
        <div className='absolute left-[718px] top-[1317px] h-56 w-[544px] rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />

        {/* Service 4 - Content Marketing */}
        <div className='absolute left-[185px] top-[1341px] h-10 w-10 rounded-full bg-violet-200' />
        <div className='absolute left-[197px] top-[1350px] h-5 w-4 bg-blue-600' />
        <div className='absolute left-[548px] top-[1372px] h-28 w-28 bg-blue-600' />
        <div className="absolute left-[185px] top-[1431px] w-72 justify-start font-['Poppins'] text-lg font-semibold text-zinc-800">
          Content Marketing
        </div>
        <div className="absolute left-[185px] top-[1458px] w-80 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          Create compelling content that educates, informs, and converts
          visitors into customers with our expert copywriting services.
        </div>

        {/* Service 5 - Email Marketing */}
        <div className='absolute left-[748px] top-[1341px] h-10 w-10 rounded-full bg-violet-200' />
        <div className='absolute left-[757px] top-[1353px] h-4 w-5 bg-blue-600' />
        <div className='absolute left-[1202.23px] top-[1419.92px] h-16 w-8 bg-blue-600' />
        <div className='absolute left-[1130.53px] top-[1459.22px] h-8 w-24 bg-blue-600' />
        <div className='absolute left-[1124px] top-[1419.92px] h-16 w-8 bg-blue-600' />
        <div className='absolute left-[1133.25px] top-[1381px] h-20 w-24 bg-blue-600' />
        <div className="absolute left-[748px] top-[1431px] w-72 justify-start font-['Poppins'] text-lg font-semibold text-zinc-800">
          Email Marketing Campaigns
        </div>
        <div className="absolute left-[748px] top-[1458px] w-80 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          Engage your customers directly with personalized, well-crafted email
          campaigns that drive action and increase retention.
        </div>

        {/* Who We Are Section */}
        <div className='absolute left-[158px] top-[1741px] w-64 justify-start'>
          <span className="font-['Poppins'] text-4xl font-semibold text-blue-600">
            Who{' '}
          </span>
          <span className="font-['Poppins'] text-4xl font-semibold text-zinc-800">
            We Are
          </span>
        </div>

        <div className="absolute left-[907px] top-[1741px] w-96 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          We are a passionate team of digital marketers dedicated to delivering
          personalized strategies that align with your business goals
        </div>

        <div className='absolute left-[158px] top-[1807px] h-14 w-52 rounded-[5px] bg-blue-600' />
        <div className="absolute left-[215px] top-[1822px] justify-start text-center font-['Poppins'] text-lg font-semibold text-white">
          Read More
        </div>

        <div className="absolute left-[158px] top-[1895px] w-[510px] justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          At Digital Spark, we understand that every business is unique. That's
          why we take a customized approach to digital marketing. Our team
          combines cutting-edge tools, data-driven strategies, and industry
          expertise to help you achieve measurable success.
        </div>

        {/* Images */}
        <div className='absolute left-[158px] top-[2013px] h-96 w-[582px] rounded-2xl bg-stone-300' />
        <div className='absolute left-[695px] top-[1849px] h-96 w-[577px] rounded-2xl border-8 border-white bg-stone-300' />

        {/* Client Feedback Section */}
        <div className='absolute left-[158px] top-[2610px] w-80 justify-start'>
          <span className="font-['Poppins'] text-4xl font-semibold text-blue-600">
            Client{' '}
          </span>
          <span className="font-['Poppins'] text-4xl font-semibold text-zinc-800">
            Feedback
          </span>
        </div>
        <div className="absolute left-[158px] top-[2667px] w-80 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          See How We've Made a Difference for Our Clients
        </div>

        {/* Navigation arrows */}
        <div className='absolute left-[1146px] top-[2638px] h-10 w-14 rounded border-2 border-zinc-800' />
        <div className='absolute left-[1209px] top-[2638px] h-10 w-14 rounded bg-blue-600' />
        <div className='absolute left-[1185px] top-[2667px] h-4 w-6 outline outline-[3px] outline-offset-[-1.50px] outline-zinc-800' />
        <div className='absolute left-[1224px] top-[2649px] h-4 w-6 outline outline-[3px] outline-offset-[-1.50px] outline-white' />

        {/* Testimonial Cards */}
        <div className='absolute left-[158px] top-[2722px] h-80 w-96 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
        <div className='absolute left-[533px] top-[2722px] h-80 w-96 rounded-[10px] bg-blue-600 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />
        <div className='absolute left-[907px] top-[2722px] h-80 w-96 rounded-[10px] bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]' />

        {/* Testimonial 1 */}
        <div className='absolute left-[181px] top-[2744px] h-14 w-14 rounded-full bg-stone-300' />
        <div className="absolute left-[255px] top-[2746px] w-60 justify-start font-['Poppins'] text-2xl font-semibold text-blue-600">
          John Doe
        </div>
        <div className="absolute left-[255px] top-[2782px] w-60 justify-start font-['Poppins'] text-xs font-medium text-neutral-500">
          CEO of XYZ Corp
        </div>
        <div className="absolute left-[181px] top-[2824px] w-80 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          "Partnering with Digital Spark has been a game-changer for our
          business. Their tailored approach to SEO and PPC advertising has
          increased our website traffic and lead generation by over 300% in just
          six months. Their team's insights and dedication make them invaluable
          partners in our growth journey."
        </div>
        {/* Stars 1 */}
        <div className='absolute left-[181px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[211px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[241px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[271px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[301px] top-[3006px] h-6 w-6 bg-yellow-400' />

        {/* Testimonial 2 */}
        <div className='absolute left-[554px] top-[2744px] h-14 w-14 rounded-full bg-stone-300' />
        <div className="absolute left-[628px] top-[2751px] w-60 justify-start font-['Poppins'] text-lg font-semibold text-white">
          Jane Smith
        </div>
        <div className="absolute left-[628px] top-[2778px] w-60 justify-start font-['Poppins'] text-xs font-medium text-white">
          Marketing Director at ABC Ltd
        </div>
        <div className="absolute left-[555px] top-[2824px] w-80 justify-start font-['Poppins'] text-sm font-light text-white">
          "Digital Spark understands our brand and goals like no other. Their
          social media and content marketing strategies have not only expanded
          our online presence but also fostered stronger engagement with our
          audience. Thanks to their expertise, we're seeing consistent,
          measurable growth month after month."
        </div>
        {/* Stars 2 */}
        <div className='absolute left-[554px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[584px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[614px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[644px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[674px] top-[3006px] h-6 w-6 bg-yellow-400' />

        {/* Testimonial 3 */}
        <div className='absolute left-[926px] top-[2744px] h-14 w-14 rounded-full bg-stone-300' />
        <div className="absolute left-[1000px] top-[2751px] w-60 justify-start font-['Poppins'] text-lg font-semibold text-blue-600">
          Michael Chen
        </div>
        <div className="absolute left-[1000px] top-[2778px] w-60 justify-start font-['Poppins'] text-xs font-medium text-neutral-500">
          Founder of Start-Up Solutions
        </div>
        <div className="absolute left-[926px] top-[2824px] w-80 justify-start font-['Poppins'] text-sm font-light text-zinc-800">
          "I couldn't be happier with the results we've achieved with Digital
          Spark. Their data-driven approach to email marketing and targeted ads
          has significantly boosted our conversion rates. Our audience
          engagement has improved, and the ROI speaks for itself. I highly
          recommend them to any business looking to grow online!"
        </div>
        {/* Stars 3 */}
        <div className='absolute left-[926px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[956px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[986px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[1016px] top-[3006px] h-6 w-6 bg-yellow-400' />
        <div className='absolute left-[1046px] top-[3006px] h-6 w-6 bg-yellow-400' />

        {/* Pagination dots */}
        <div className='absolute left-[651px] top-[3113px] h-2.5 w-2.5 rounded-full bg-zinc-300' />
        <div className='absolute left-[668px] top-[3114px] h-2 w-16 rounded-[36px] bg-blue-600' />
        <div className='absolute left-[745px] top-[3113px] h-2.5 w-2.5 rounded-full bg-zinc-300' />
        <div className='absolute left-[762px] top-[3113px] h-2.5 w-2.5 rounded-full bg-zinc-300' />
        <div className='absolute left-[779px] top-[3113px] h-2.5 w-2.5 rounded-full bg-zinc-300' />

        {/* CTA Section */}
        <div className='absolute left-[158px] top-[3321px] w-[513px] justify-start'>
          <span className="font-['Poppins'] text-4xl font-semibold text-blue-600">
            Take
          </span>
          <span className="font-['Poppins'] text-4xl font-semibold text-zinc-800">
            {' '}
            the First Step Toward Growing Your{' '}
          </span>
          <span className="font-['Poppins'] text-4xl font-semibold text-blue-600">
            Brand
          </span>
          <span className="font-['Poppins'] text-4xl font-semibold text-zinc-800">
            {' '}
            with Expert Digital{' '}
          </span>
          <span className="font-['Poppins'] text-4xl font-semibold text-blue-600">
            Marketing
          </span>
        </div>

        <div className="absolute left-[805px] top-[3327px] w-[457px] justify-start font-['Poppins'] text-lg font-light text-zinc-800">
          Ready to see real results? Partner with us for tailored strategies
          that drive engagement, boost visibility, and achieve your business
          goals.
        </div>

        <div className='absolute left-[805px] top-[3422px] h-14 w-72 rounded-[5px] bg-blue-600' />
        <div className="absolute left-[830px] top-[3436px] justify-start text-center font-['Poppins'] text-lg font-semibold text-white">
          Book a Free Consultation
        </div>

        {/* Footer */}
        <div className='absolute left-[158px] top-[3689px] justify-start'>
          <span className="font-['Poppins'] text-4xl font-bold text-blue-600">
            Digital{' '}
          </span>
          <span className="font-['Poppins'] text-4xl font-bold text-zinc-800">
            Spark
          </span>
        </div>

        {/* Footer Links */}
        <div className="absolute left-[158px] top-[3846px] justify-start font-['Poppins'] text-3xl font-semibold text-blue-600">
          Quick Link
        </div>
        <div className="absolute left-[158px] top-[3956px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Home
        </div>
        <div className="absolute left-[158px] top-[4022px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          About
        </div>
        <div className="absolute left-[158px] top-[4088px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Services
        </div>
        <div className="absolute left-[158px] top-[4154px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Blog
        </div>
        <div className="absolute left-[158px] top-[4220px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Contact
        </div>

        <div className="absolute left-[323px] top-[3846px] justify-start font-['Poppins'] text-3xl font-semibold text-blue-600">
          Career
        </div>
        <div className="absolute left-[323px] top-[3956px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Join Our Team
        </div>
        <div className="absolute left-[323px] top-[4022px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Culture & Values
        </div>
        <div className="absolute left-[323px] top-[4088px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Internships
        </div>

        <div className="absolute left-[552px] top-[3846px] justify-start font-['Poppins'] text-3xl font-semibold text-blue-600">
          Resources
        </div>
        <div className="absolute left-[552px] top-[3956px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Case Studies
        </div>
        <div className="absolute left-[552px] top-[4022px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          eBooks & Guides
        </div>
        <div className="absolute left-[552px] top-[4088px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Webinars
        </div>

        <div className="absolute left-[781px] top-[3846px] justify-start font-['Poppins'] text-3xl font-semibold text-blue-600">
          Legal
        </div>
        <div className="absolute left-[781px] top-[3956px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Privacy Policy
        </div>
        <div className="absolute left-[781px] top-[4022px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Terms of Service
        </div>
        <div className="absolute left-[781px] top-[4088px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          Cookie Policy
        </div>

        <div className="absolute left-[1004px] top-[3846px] justify-start font-['Poppins'] text-3xl font-semibold text-blue-600">
          Contact Details
        </div>
        <div className='absolute left-[1004px] top-[3960px] h-7 w-6 bg-blue-600' />
        <div className="absolute left-[1046px] top-[3956px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          +(123) 456-7890
        </div>
        <div className='absolute left-[1004px] top-[4031px] h-4 w-6 bg-blue-600' />
        <div className="absolute left-[1046px] top-[4022px] justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          info@digitalspark.com
        </div>
        <div className='absolute left-[1004px] top-[4093px] h-9 w-6 bg-blue-600' />
        <div className="absolute left-[1046px] top-[4088px] w-72 justify-start font-['Poppins'] text-2xl font-medium text-zinc-800">
          123 Digital Street, Tech City, 56789
        </div>

        {/* Copyright */}
        <div className="absolute left-[478px] top-[4379px] justify-start text-center font-['Poppins'] text-2xl font-semibold text-zinc-800">
          © 2024 Digital Spark. All rights reserved.
        </div>
      </div>
    </main>
  );
}
