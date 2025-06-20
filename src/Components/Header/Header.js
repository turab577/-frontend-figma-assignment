import React from 'react'

export default function Header() {
  return (
    <div>
      <div className='pt-12 px-[8vw] hidden md:block  max-w-[2000px] mx-auto'>
        <ul className='flex justify-between lg:justify-around '>
            <li className='text-[#86BE3F] cursor-pointer font-regular text-[12px] lg:text-[18px] leading-[95%]'>Home</li>
            <li className='text-[#8A8888] font-regular text-[12px] lg:text-[18px] leading-[95%] hover:text-[#86BE3F] cursor-pointer'>Chi Siamo</li>
            <li className='text-[#8A8888] font-regular text-[12px] lg:text-[18px] leading-[95%] hover:text-[#86BE3F] cursor-pointer'>S.I.R.E</li>
            <li className='text-[#8A8888] font-regular text-[12px] lg:text-[18px] leading-[95%] hover:text-[#86BE3F] cursor-pointer'>Sire Features</li>
            <li className='text-[#8A8888] font-regular text-[12px] lg:text-[18px] leading-[95%] hover:text-[#86BE3F] cursor-pointer'>Why Sire?</li>
            <li className='text-[#8A8888] font-regular text-[12px] lg:text-[18px] leading-[95%] hover:text-[#86BE3F] cursor-pointer'>SIRE Product</li>
            <li className='text-[#8A8888] font-regular text-[12px] lg:text-[18px] leading-[95%] hover:text-[#86BE3F] cursor-pointer'>How it Works?</li>
        </ul>
      </div>
    </div>
  )
}
