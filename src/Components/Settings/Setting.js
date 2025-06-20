import React from 'react';
import assets from '../../Assets/assets';
import StepCard from './Card';

export default function Setting() {
  const steps = [
    {
      icon: assets.inner1,
      title: 'Richiedi un Preventivo',
      description: 'Senza impegno un nostro Solar expert ti contatterà per verificare le tue esigenze di utilizzo',
      borderImage: assets.top1,
      downImage: assets.down1,
    },
    {
      icon: assets.inner2,
      title: 'Verifica la compatibilità',
      description: 'Verifica immediata della necessità tecniche di installazione',
      borderImage: assets.top2,
      downImage: assets.down2
    },
    {
      icon: assets.inner3,
      title: 'Installazione',
      description: 'Un installatore qualificato Solar Innovatio posizionerà il SIRE in massimo 2 ore',
      borderImage: assets.top3,
      downImage: assets.down3
    },
    {
      icon: assets.inner4,
      title: 'Enjoy your Sun Power',
      description: 'Connettiti alla APP e goditi la tua energia solare',
      borderImage: assets.top4,
      downImage: assets.down4,
      style:{width:'92%'}
    }
  ];

  return (
    <div className='pt-20'>
      {/* Heading */}
      <h3 className='font-medium text-[25px] sm:text-[36px] leading-[84%] text-[#363636] text-center'>
        Connettiti al sole anche tu
      </h3>

      {/* Green underline under heading */}
      <div className='flex justify-center  mt-3'>
        <div className='bg-[#86BE3F] w-[119px] h-[4px]' />
      </div>

      {/* Steps with top border images */}
      <div className="pt-12 flex justify-center md:gap-6 flex-wrap">
        {steps.map((step, index) => (
          <div key={index} className='relative mt-10'>
            {/* Top Border Image */}
            <img
              src={step.borderImage}
              alt="border-img"
              style={step.style}
              className='absolute top-[-130px] left-0 w-[100%] h-full  z-20'
            />

            {/* Step Card Content */}
            <StepCard
              icon={step.icon}
              title={step.title}
              description={step.description}
              className="bg-white shadow-xl relative"
            />
            <div className="relative">

            <img src={step.downImage} alt="down vector" className='absolute bottom-[80px] w-[92%] z-[50]'/>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center'>
      <button className='py-3 px-6 rounded-md bg-[#86BE3F] text-white hover:bg-[#6BA32B]'>Collegati al sole</button>
      </div>
    </div>
  );
}
