import React from 'react';
import assets from '../../Assets/assets';

export default function Energy() {
    const uses = [
        {
            ID:0,
            img:assets.bulb,
            title:"Risparmio Energetico",
            descript:"Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza energetica anche grazie alla schermatura solare che consente una riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del condizionatore.",
        },
        {
            ID:1,
            img:assets.car,
            title:"Mobilità Elettrica",
            descript:"L'unica soluzione che rende l’utilizzo di un’auto elettrica veramente economico.  L’efficienza dei pannelli e le batterie di accumulo garantiscono fino a 29.000 chilometri annui a emissioni zero.",
        },
        {
            ID:0,
            img:assets.thunder,
            title:"Comunità Energetica",
            descript:"Dal concetto di condominio al concetto di comunità energetica: Si.Re. è il sistema che rende possibile realizzare una Comunità Energetica Rinnovabile senza acquisto di energia elettrica dalla rete.",
        },
    ]

    const Benefits = [
      {
        ID:0,
        img:assets.plate,
        title:' 110%',
        text:'Superbonus'
      },
      {
        ID:1,
        img:assets.battery,
        title:' 65%',
        text:'Detrazione DOMOTICA'
      },
      {
        ID:2,
        img:assets.paper,
        text:'Progettazione personalizzata'
      },
      {
        ID:3,
        img:assets.leaf,
        text:'consulenza fiscale sui bonus'
      }
    ]
  return (
    <div className='pt-20 container mx-auto'>
      <p className='font-[600] text-[38px] leading-[84%] text-center pb-6'>Perchè S.I.R.E</p>
      <div className='flex justify-center'>
        <div className='bg-[#86BE3F] w-[119px] h-[4px]'></div>
      </div>
      <div className="flex flex-wrap justify-around px-3 xl:px-[220px]">
  {uses.map((use) => {
    return (
      <div
        key={use.ID}
        className="bg-white shadow-xl flex flex-col items-center w-full sm:w-[30%] my-4 py-4 mx-2"
      >
        <img src={use.img} alt="alternate" />
        <p className="text-[#363636] font-[600] lg:text-[24px] leading-[50px]">
          {use.title}
        </p>
        <p className="font-regular text-[12px] lg:text-[16px] text-center px-3">
          {use.descript}
        </p>
      </div>
    );
  })}
</div>

    <div className="flex flex-wrap justify-center gap-3 bg-[#f9f9f9] mt-10 p-5">
      {Benefits.map((benefit)=>{
        return(
          <div key={benefit.ID} className='bg-white w-[134px] md:w-[255px] shadow-xl flex flex-col items-center p-6'>
            <img src={benefit.img} alt="benefits" />
            <p className='font-semibold text-[24px] leading-[24px] pt-3'>{benefit.title}</p>
            <p className='font-regular text-[12px] lg:text-[16px] pt-2 px-5 text-center '>{benefit.text}</p>
          </div>
        )
      })}
    </div>

    </div>
  )
}
