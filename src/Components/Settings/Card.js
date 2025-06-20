import React from 'react';

export default function StepCard({ icon, title, description }) {
  return (
    <div className="relative w-[250px] min-h-[280px] bg-white  ml-[-10px] px-4 pb-6 text-center z-10">
      <img src={icon} alt={title} className="w-[40px] h-[40px] mx-auto " />
      <h3 className="text-[16px] font-semibold text-[#363636] mb-2">{title}</h3>
      <p className="text-[13px] text-[#6B6B6B] px-5 leading-snug">{description}</p>
    </div>
  );
}
