import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

/* eslint-disable @next/next/no-img-element */

export default function Footer() {
  return (
    <footer className='bg-[#f7f7f7] border border-[rgba(0,0,0,0.1)] border-solid mx-4 sm:mx-8 lg:mx-[87px] rounded-tl-[32px] rounded-tr-[32px] lg:rounded-tl-[64px] lg:rounded-tr-[64px] mt-12 lg:mt-20 pb-6 lg:pb-8'>
      <div className='px-6 sm:px-8 lg:px-[118px] py-8 lg:py-[85px]'>
        <div className='mb-8 lg:mb-12'>
          <p className='font-bold leading-[normal] not-italic text-[#1d1e40] text-lg lg:text-[24px] tracking-[-1.2px]'>
            ConvertLeadsApp
          </p>
        </div>
        <div className='grid grid-cols-2 lg:flex lg:justify-between gap-8 lg:gap-4'>
          <div className='flex flex-col gap-1.5 lg:gap-2'>
            <p className='font-bold leading-[1.6] text-[#ffc000] text-sm lg:text-[14px] tracking-[-0.42px]'>
              Home
            </p>
            <Link
              href='/'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Products
            </Link>
            <Link
              href='/services'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Services
            </Link>
            <Link
              href='/pricing'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Pricing
            </Link>
            <Link
              href='/faq'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              FAQ
            </Link>
            <Link
              href='/contact'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Contact Us
            </Link>
          </div>
          <div className='flex flex-col gap-1.5 lg:gap-2'>
            <p className='font-bold leading-[1.6] text-[#1c1c37] text-sm lg:text-[14px] tracking-[-0.42px]'>
              What we do
            </p>
            <Link
              href='/about'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              About Us
            </Link>
            <Link
              href='/privacy'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Terms of Use
            </Link>
          </div>
          <div className='col-span-2 lg:col-span-1 space-y-3'>
            <div>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] mb-1'>
                USA
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                131 Continental Dr Suite 305, Newark, DE 19713
              </p>
            </div>
            <div>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px] mb-1'>
                Singapore
              </p>
              <p className='font-normal leading-[1.6] text-[#5b5a78] text-sm lg:text-[14px] tracking-[-0.42px]'>
                159 Sin Ming Road, Singapore 575625
              </p>
            </div>
          </div>
          <div className='flex gap-3 lg:gap-4 col-span-2 lg:col-span-1 justify-center lg:justify-end items-center'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer hover:opacity-70 transition-opacity'
              aria-label='Facebook'
            >
              <FaFacebook className='size-[20px] lg:size-[24px] text-[#5b5a78]' />
            </a>
            <a
              href='https://x.com'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer hover:opacity-70 transition-opacity'
              aria-label='X (Twitter)'
            >
              <FaXTwitter className='size-[20px] lg:size-[24px] text-[#5b5a78]' />
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='cursor-pointer hover:opacity-70 transition-opacity'
              aria-label='Instagram'
            >
              <FaInstagram className='size-[20px] lg:size-[24px] text-[#5b5a78]' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
