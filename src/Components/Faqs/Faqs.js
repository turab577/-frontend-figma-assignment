import React from 'react'
import FAQSection from './sect'
import assets from '../../Assets/assets'
export default function Faqs() {
  return (
    <div className='pt-6 sm:pt-20'>
      <div>
        <div className="relative">
            <img src={assets.Background} alt="Background" className='absolute right-[20%]' />
            </div>
        <h3 className='font-semibold text-[32px] leading-[50px] text-center pb-3'>Frequently Asked Questions</h3>
        <div className='flex justify-center'>
            <div className='bg-[#86BE3F] w-[140px] h-[4px]'></div>
        </div>
      </div>
      <FAQSection />
      <div className='flex justify-center'>
        <button className='bg-[#86BE3F] hover:bg-[#6BA32B] text-white py-3 px-6 rounded-md'>Collegati al sole</button>
      </div>
      <img src={assets.Background} alt="Background" className='absolute left-[21%]'/>
    </div>
  )
}
