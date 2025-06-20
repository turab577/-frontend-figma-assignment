import React from 'react';
import assets from '../../Assets/assets';

export default function Landing() {
  return (
    <div className="pt-4 relative">
      {/* Background Image */}
      <img src={assets.Head} alt="Head" className="w-full h-auto" />

      {/* Overlay Container */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
        <h2 className="font-bold text-white text-[20px] sm:text-[40px] md:text-[50px] lg:text-[64px] leading-[1.1]">
          Il tuo accesso al sole
        </h2>
        <p className="text-white font-semibold text-[12px] sm:text-[20px] md:text-[22px] lg:text-[24px] pt-4">
          Sistemi fotovoltaici intelligenti ad uso residenziale, anche in assenza di tetto. <br className='hidden lg:block'/>
          La tua fonte d'energia, gratuita e sostenibile
        </p>
      </div>
    </div>
  );
}
