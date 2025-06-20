import React from 'react';
import assets from '../../Assets/assets';

export default function Contact() {
  return (
    <div id='contact' className='pt-[100px] px-4'>
      {/* Heading */}
      <p className='font-semibold text-[36px] leading-[84%] text-[#363636] text-center pb-6'>
        CONTATTACI
      </p>

      {/* Underline */}
      <div className='flex justify-center mb-10'>
        <div className='h-[4px] w-[119px] bg-[#86BE3F]' />
      </div>

      {/* Grid layout with 2:3 ratio */}
      <div className='grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto'>

        {/* Left box - Contact Info */}
        <div className='md:col-span-2 border border-[#E4E4E4] rounded-md p-6 space-y-6'>
          <div className='flex items-start gap-3'>
            <img src={assets.location} alt="Location" className='w-6 h-6 mt-1' />
            <p className='text-[#666666] text-[16px]'>
              Leo dui fermentum tristique <br className='hidden xl:block' />
              urna tellus eget amet aliquam. <br className='hidden xl:block' />
              Id vitae orci
            </p>
          </div>

          <div className='flex items-start gap-3'>
            <img src={assets.mail} alt="Mail" className='w-6 h-6 mt-1' />
            <div className='text-[#666666] text-[16px] space-y-1'>
              <p>email@email.com</p>
              <p>support@email.com</p>
            </div>
          </div>

          <div className='flex items-start gap-3'>
            <img src={assets.Phone} alt="Phone" className='w-6 h-6 mt-1' />
            <p className='text-[#666666] text-[16px]'>+29 98595 8998</p>
          </div>

          <hr className='border-t border-[#E4E4E4]' />

          <p className='text-[#666666] text-[15px]'>
            We will get back to you within 24 hours. Or Call us Now
          </p>
        </div>

        {/* Right box - Contact Form */}
        <div className='md:col-span-3 border border-[#E4E4E4] rounded-md p-6'>
          <form className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <input
              required
                type='text'
                placeholder='First Name'
                className='flex-1 border border-[#DCDCDC] rounded-md px-4 py-2 text-sm outline-none'
              />
              <input
              required
                type='text'
                placeholder='Last Name'
                className='flex-1 border border-[#DCDCDC] rounded-md px-4 py-2 text-sm outline-none'
              />
            </div>

            <input
            required
              type='email'
              placeholder='Email'
              className='w-full border border-[#DCDCDC] rounded-md px-4 py-2 text-sm outline-none'
            />

            <textarea
            required
              placeholder='Message'
              rows={5}
              className='w-full border border-[#DCDCDC] rounded-md px-4 py-2 text-sm outline-none resize-none'
            ></textarea>

            <div className='flex justify-end'>
              <button
                type='submit'
                className='bg-[#86BE3F] text-white px-6 py-2 rounded hover:bg-[#6BA32B] text-sm'
              >
                SEND
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}
