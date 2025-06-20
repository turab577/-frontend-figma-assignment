import React from 'react';
import assets from '../../Assets/assets';

export default function Efficiency() {
  return (
    <div className="flex flex-col lg:flex-row  justify-center items-center lg:items-start gap-[15px] lg:gap-[120px] pt-[100px]  md:pl-0 ">
      {/* Image Section */}
      <div className="scale-[0.9] sm:scale-[1] origin-top">
        <div className="relative w-[212px] sm:w-[400px] h-[350px] sm:h-[500px]">
          <img
            src={assets.Background}
            alt="Background"
            className="absolute left-[-20px] sm:left-[-30px] top-[0px]"
          />
          <img
            src={assets.img1}
            alt="image1"
            className="absolute left-[8px] sm:left-[12px] top-[20px] sm:top-[35px]"
          />
          <img
            src={assets.Ellipse}
            alt="Back Gradient"
            className="absolute top-[50px] sm:top-[70px] left-[8px] sm:left-[10px] z-[-200]"
          />
          <img
            src={assets.img2}
            alt="image2"
            className="absolute left-[45px] sm:left-[169px] top-[180px] sm:top-[290px]"
          />
          <img
            src={assets.Background}
            alt="Background 2"
            className="absolute left-[181px] sm:left-[459px] top-[250px] sm:top-[461px] z-[-100]"
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col w-full sm:max-w-xl pt-[20px] sm:pt-[35px] relative pl-[24px] sm:pl-0">
        {/* Background3 Image */}
        <img
          src={assets.Background}
          alt="Background3"
          width={82}
          height={95}
          className="absolute right-[5%] top-[5px] sm:relative sm:left-[65%] sm:top-[10px] sm:pb-10"
        />

        {/* Ellipse2 Image */}
        <img
          src={assets.Ellipse2}
          alt="Ellipse 2"
          className="absolute right-[0px] top-[150px] sm:top-[30%]"
          width={175}
          height={168}
        />

        {/* Text Content */}
        <p className="text-[#86BE3F] font-[500] text-[26px] sm:text-[30px] leading-[84%]">
          S.I.R.E
        </p>
        <h2 className="font-[600] text-[21px] lg:text-[34px] leading-[1.3] text-[#363636] mt-2 pb-4 sm:pb-6">
          Smart Integrated Renewable Energy
        </h2>
        <div className="bg-[#86BE3F] h-[4px] w-[100px] sm:w-[119px]"></div>
        <p className="mt-4 text-[15px] sm:text-[16px] text-[#555] leading-[1.6]">
          S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione, conversione e gestione dell'energia solare, studiato specificatamente per installazioni all'interno di condomini.
        </p>
      </div>
    </div>
  );
}
