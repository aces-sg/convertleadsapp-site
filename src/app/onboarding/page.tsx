'use client';

import React from 'react';

import Header from '@/components/Header';

export default function OnboardingPage() {
  const [formData, setFormData] = React.useState({
    businessName: '',
    businessDescription: '',
    productsServices: '',
    companyBackground: '',
    email: '',
    phone: '',
  });

  const [uploadedImages, setUploadedImages] = React.useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setUploadedImages((prev) => [...prev, ...files]);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const message = `
NEW WEBSITE REQUEST

Business Name: ${formData.businessName}
Email: ${formData.email}
Phone: ${formData.phone}

Business Description:
${formData.businessDescription}

Products/Services:
${formData.productsServices}

Company Background:
${formData.companyBackground}

${uploadedImages.length > 0 ? `Images uploaded: ${uploadedImages.map((f) => f.name).join(', ')}` : 'No images uploaded'}
      `.trim();

      const response = await fetch(
        'https://r6b5s2t6ov3hvzomgv7xtirvty0ofruo.lambda-url.us-east-1.on.aws/notify',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: 'ivan@convertleadsapp.com',
            subject: `New Website Request from ${formData.businessName}`,
            message: message,
            from: 'noreply@convertleadsapp.com',
          }),
        }
      );

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message:
            'Thank you! Your information has been submitted. We will contact you within 24 hours.',
        });
        // Reset form
        setFormData({
          businessName: '',
          businessDescription: '',
          productsServices: '',
          companyBackground: '',
          email: '',
          phone: '',
        });
        setUploadedImages([]);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message:
          'Sorry, there was an error submitting your information. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='min-h-screen bg-white'>
      <Header />

      {/* Hero Section */}
      <section className='pt-32 pb-12 lg:pb-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white'>
        <div className='container mx-auto max-w-4xl text-center'>
          <div className='w-[60px] h-[4px] bg-[#ffc000] rounded-[2px] mx-auto mb-6'></div>
          <h1 className='font-black text-4xl lg:text-[64px] leading-tight text-black tracking-tight mb-4'>
            Claim Your Free Website
          </h1>
          <p className='text-[#5b5a78] text-lg lg:text-xl max-w-2xl mx-auto mb-2'>
            Tell us about your business and we'll create a professional,
            custom-coded website for you—completely free.
          </p>
          <p className='text-[#5b5a78] text-base lg:text-lg max-w-2xl mx-auto'>
            Takes only 5 minutes to complete.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className='pb-20 px-4 sm:px-6'>
        <div className='container mx-auto max-w-3xl'>
          <form onSubmit={handleSubmit} className='space-y-8'>
            {/* Business Name */}
            <div>
              <label
                htmlFor='businessName'
                className='block text-[#1c1c37] font-bold text-lg mb-3'
              >
                Business Name <span className='text-red-500'>*</span>
              </label>
              <input
                type='text'
                id='businessName'
                name='businessName'
                value={formData.businessName}
                onChange={handleInputChange}
                required
                placeholder='e.g., Acme Coffee Roasters'
                className='w-full px-6 py-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#ffc000] focus:outline-none transition-colors'
              />
            </div>

            {/* Contact Information */}
            <div className='grid md:grid-cols-2 gap-6'>
              <div>
                <label
                  htmlFor='email'
                  className='block text-[#1c1c37] font-bold text-lg mb-3'
                >
                  Email Address <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder='your@email.com'
                  className='w-full px-6 py-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#ffc000] focus:outline-none transition-colors'
                />
              </div>
              <div>
                <label
                  htmlFor='phone'
                  className='block text-[#1c1c37] font-bold text-lg mb-3'
                >
                  Phone Number
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder='+1 (555) 123-4567'
                  className='w-full px-6 py-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#ffc000] focus:outline-none transition-colors'
                />
              </div>
            </div>

            {/* Business Description */}
            <div>
              <label
                htmlFor='businessDescription'
                className='block text-[#1c1c37] font-bold text-lg mb-3'
              >
                Describe Your Business <span className='text-red-500'>*</span>
              </label>
              <p className='text-[#5b5a78] text-sm mb-3'>
                Tell us what your business does and what makes it unique.
              </p>
              <textarea
                id='businessDescription'
                name='businessDescription'
                value={formData.businessDescription}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder='e.g., We are a specialty coffee roaster focused on ethically-sourced beans from South America. We roast small batches and deliver fresh coffee directly to customers.'
                className='w-full px-6 py-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#ffc000] focus:outline-none transition-colors resize-y'
              />
            </div>

            {/* Products & Services */}
            <div>
              <label
                htmlFor='productsServices'
                className='block text-[#1c1c37] font-bold text-lg mb-3'
              >
                Key Products & Services{' '}
                <span className='text-red-500'>*</span>
              </label>
              <p className='text-[#5b5a78] text-sm mb-3'>
                List your main products or services that you want to highlight
                on your website.
              </p>
              <textarea
                id='productsServices'
                name='productsServices'
                value={formData.productsServices}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder='e.g.,
• Subscription coffee delivery (weekly, bi-weekly, monthly)
• Single-origin coffee beans
• Coffee brewing equipment
• Virtual coffee tasting sessions'
                className='w-full px-6 py-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#ffc000] focus:outline-none transition-colors resize-y'
              />
            </div>

            {/* Company Background */}
            <div>
              <label
                htmlFor='companyBackground'
                className='block text-[#1c1c37] font-bold text-lg mb-3'
              >
                Company Background <span className='text-red-500'>*</span>
              </label>
              <p className='text-[#5b5a78] text-sm mb-3'>
                Share your company's story, mission, or founding journey.
              </p>
              <textarea
                id='companyBackground'
                name='companyBackground'
                value={formData.companyBackground}
                onChange={handleInputChange}
                required
                rows={5}
                placeholder='e.g., Founded in 2018 by two coffee enthusiasts who traveled through Colombia. We started roasting in our garage and now serve over 500 customers nationwide.'
                className='w-full px-6 py-4 text-base border-2 border-gray-200 rounded-lg focus:border-[#ffc000] focus:outline-none transition-colors resize-y'
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className='block text-[#1c1c37] font-bold text-lg mb-3'>
                Upload Images (Optional)
              </label>
              <p className='text-[#5b5a78] text-sm mb-4'>
                Add photos of your products, team, or workspace. These will
                help us create a more personalized website for you.
              </p>

              {/* Upload Button */}
              <div className='border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#ffc000] transition-colors'>
                <input
                  type='file'
                  id='imageUpload'
                  accept='image/*'
                  multiple
                  onChange={handleImageUpload}
                  className='hidden'
                />
                <label
                  htmlFor='imageUpload'
                  className='cursor-pointer flex flex-col items-center gap-3'
                >
                  <svg
                    className='w-12 h-12 text-gray-400'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M12 4v16m8-8H4'
                    />
                  </svg>
                  <span className='text-[#1c1c37] font-medium'>
                    Click to upload images
                  </span>
                  <span className='text-[#5b5a78] text-sm'>
                    PNG, JPG, GIF up to 10MB each
                  </span>
                </label>
              </div>

              {/* Uploaded Images Preview */}
              {uploadedImages.length > 0 && (
                <div className='mt-6'>
                  <p className='text-[#1c1c37] font-medium mb-3'>
                    Uploaded Images ({uploadedImages.length})
                  </p>
                  <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                    {uploadedImages.map((file, index) => (
                      <div
                        key={index}
                        className='relative group rounded-lg overflow-hidden bg-gray-100 aspect-square'
                      >
                        <img
                          src={URL.createObjectURL(file)}
                          alt={`Upload ${index + 1}`}
                          className='w-full h-full object-cover'
                        />
                        <button
                          type='button'
                          onClick={() => removeImage(index)}
                          className='absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity'
                        >
                          <svg
                            className='w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M6 18L18 6M6 6l12 12'
                            />
                          </svg>
                        </button>
                        <p className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-2 truncate'>
                          {file.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`p-4 rounded-[16px] ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                <p className='text-center font-medium'>{submitStatus.message}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className='pt-6'>
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-[#ffc000] text-white font-bold text-lg px-8 py-5 rounded-full hover:bg-[#ffcc33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3'
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className='animate-spin h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit My Information
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z' />
                    </svg>
                  </>
                )}
              </button>
              <p className='text-center text-[#5b5a78] text-sm mt-4'>
                By submitting, you agree to our Terms of Service and Privacy
                Policy
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Benefits Section */}
      <section className='py-16 px-4 sm:px-6 bg-gray-50'>
        <div className='container mx-auto max-w-5xl'>
          <h2 className='font-bold text-3xl lg:text-4xl text-center text-[#1c1c37] mb-12'>
            What Happens Next?
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <div className='w-16 h-16 bg-[#ffc000] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white font-bold text-2xl'>1</span>
              </div>
              <h3 className='font-bold text-xl text-[#1c1c37] mb-2'>
                We Review Your Info
              </h3>
              <p className='text-[#5b5a78]'>
                Our team reviews your business details within 24 hours.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-[#ffc000] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white font-bold text-2xl'>2</span>
              </div>
              <h3 className='font-bold text-xl text-[#1c1c37] mb-2'>
                Design & Development
              </h3>
              <p className='text-[#5b5a78]'>
                We create a custom website tailored to your business needs.
              </p>
            </div>
            <div className='text-center'>
              <div className='w-16 h-16 bg-[#ffc000] rounded-full flex items-center justify-center mx-auto mb-4'>
                <span className='text-white font-bold text-2xl'>3</span>
              </div>
              <h3 className='font-bold text-xl text-[#1c1c37] mb-2'>
                Launch Your Site
              </h3>
              <p className='text-[#5b5a78]'>
                Your website goes live and starts attracting customers!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
