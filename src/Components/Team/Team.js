import React from 'react';
import assets from '../../Assets/assets';

export default function Team() {
  const Persons = [
    {
      id: 0,
      Image: assets.Person1,
      name: 'Cristian Testoni',
      description:
        'Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e progettista in aziende meccaniche. Ho avviato come imprenditore svariate iniziative in ambito Automotive e mobilità elettrica.',
    },
    {
      id: 1,
      Image: assets.Person2,
      name: 'Francesco Gavioli',
      description:
        'Nel corso degli anni ho maturato una profonda conoscenza nella progettazione e realizzazione di impianti elettrici e di energia rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda all’avanguardia nell’installazione di impianti fotovoltaici.',
    },
    {
      id: 2,
      Image: assets.Person3,
      name: 'Massimo Fabi',
      description:
        'Laurato in Economia e Commercio mi sono occupato per anni di Business Development sia in multinazionali che PMI italiane in differenti settori.',
    },
  ];

  return (
    <div>
      {/* Top Text */}
      <div className="pt-16 text-center pb-20 relative">
        <p className="font-[600] text-[36px] pb-6 border-b-[4px] border-b-[#86BE3F] inline-block">
          CHI SIAMO
        </p>
        <p className="font-regular text-[12px] md:text-[17px] leading-[155%] px-4 md:px-[100px] xl:px-[280px] text-center pt-6">
          Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e realizzazione di sistemi fotovoltaici intelligenti. Solar Innovatio unisce alla decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di energia rinnovabile.
        </p>
        <img
          src={assets.Gradient}
          alt="Background"
          className="absolute top-[30%] left-[10%]"
        />
      </div>

      {/* Team Section */}
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-5 px-4 md:px-10 xl:px-20 pb-16 relative">
        {Persons.map((person) => (
          <div key={person.id} className="text-center relative w-full sm:w-[350px] xl:w-auto">
            {/* Person Image */}
            <img
              src={person.Image}
              alt={person.name}
              className="mx-auto mb-4 z-[100]"
            />

            {/* Person Card */}
            <div
              className="
                bg-[#f8f8f8]
                px-4 xl:px-10
                text-center
                xl:pt-[100px] xl:h-[350px] mt-[-50px] xl:mt-[-110px] relative z-[-100] xl:w-[350px]
                xl:pt-6 pt-10 pb-10
              "
            >
              <h3 className="font-bold text-[18px] xl:text-[20px]">{person.name}</h3>
              <p className="text-[13px] xl:text-[14px] leading-[22px]">
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Quote Section */}
      <div className="flex flex-col xl:flex-row justify-center items-center relative px-4 sm:px-8 xl:px-0">
        <img
          src={assets.Commas}
          alt="Start Quote"
          className="absolute left-0 sm:left-[1%]  xl:left-[13%] top-[-10px] sm:top-[10px]"
        />
        <p className="text-center font-[500] italic text-[18px] sm:text-[22px] xl:text-[27px] leading-[1.6]">
          Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una componente
          <br className="hidden lg:block" /> di una soluzione ingegneristica più completa che comprende
          <br className="hidden lg:block" /> sensoristiche avanzate e l'integrazione con i sistemi domotici di casa.
        </p>
        <img
          src={assets.Inverted}
          alt="End Quote"
          className="absolute right-0 sm:right-[1%] xl:right-[13%] top-[-10px] sm:top-[10px]"
        />
      </div>
      <div className='flex justify-center'>
      <div className='bg-[#86BE3F] w-[14px] h-[1px] mt-8 mr-2'></div>
      <p className='text-[#86BE3F] text-[18px7 font-[500] leading-[91%] text-center pt-6'>Cristian Testoni</p>
      <div className='bg-[#86BE3F] w-[14px] h-[1px] mt-8 ml-2'></div>
      </div>
    </div>
  );
}
