'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as React from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 left-0 right-0 z-50 bg-white shadow-sm'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-[100px] py-4 lg:py-[17px]'>
        <div className='flex items-center justify-between'>
          {/* Text-only Logo */}
          <Link href='/' className='flex items-center'>
            <p className='font-bold leading-[normal] not-italic text-lg lg:text-[24px] text-[#1c1c37] tracking-[-1.2px]'>
              ConvertLeadsApp
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden lg:flex gap-[64px] items-center'>
            <Link
              href='/'
              className='font-bold leading-[normal] not-italic text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Home
            </Link>
            <Link
              href='/services'
              className='font-bold leading-[normal] not-italic text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Services
            </Link>
            <Link
              href='/pricing'
              className={`font-bold leading-[normal] not-italic text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors relative ${
                pathname === '/pricing'
                  ? 'after:absolute after:-bottom-[21px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[4px] after:bg-[#ffc71e] after:rounded-[2px]'
                  : ''
              }`}
            >
              Pricing
            </Link>
            <Link
              href='/faq'
              className='font-bold leading-[normal] not-italic text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              FAQ
            </Link>
            <Link
              href='/contact'
              className='font-bold leading-[normal] not-italic text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href='/onboarding'
            className='hidden lg:flex bg-[#ffc000] gap-[8px] h-[40px] items-center px-[16px] py-[8px] rounded-[32px] cursor-pointer hover:bg-[#ffcc33] transition-colors'
          >
            <p className='font-bold leading-[normal] not-italic text-[15px] text-white tracking-[-0.45px]'>
              Claim Free Website
            </p>
            <svg
              className='w-[24px] h-[24px] text-white'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z' />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='lg:hidden text-[#1c1c37] p-2'
            aria-label='Toggle menu'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className='lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4'>
            <div className='flex flex-col gap-4'>
              <Link
                href='/'
                className='font-bold text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/services'
                className='font-bold text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href='/pricing'
                className='font-bold text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href='/faq'
                className='font-bold text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href='/contact'
                className='font-bold text-[14px] text-[#1c1c37] tracking-[-0.42px] hover:text-[#ffc000] transition-colors'
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href='/onboarding'
                className='bg-[#ffc000] flex gap-[8px] items-center justify-center px-[16px] py-[8px] rounded-[32px] cursor-pointer hover:bg-[#ffcc33] transition-colors mt-2'
                onClick={() => setMobileMenuOpen(false)}
              >
                <p className='font-bold text-[15px] text-white tracking-[-0.45px]'>
                  Claim Free Website
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
