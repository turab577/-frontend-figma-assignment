import React from 'react'
import assets from '../../Assets/assets'

export default function Intelligence() {
  const Labels = [
    {
      ID: 0,
      img: assets.Vector1,
      title: 'Versatile',
      disc:
        "Installabile in qualsiasi balcone anche all'interno del condominio. Non richiede autorizzazioni ne opere murarie. Utile anche come schermatura solare"
    },
    {
      ID: 1,
      img: assets.Vector2,
      title: 'Indipendente e Green',
      disc:
        "dalle fonte non rinnovabili non è più un’utopia. S.i.r.e. fornisce l’accesso a fonti energetiche green anche a chi non ha un tetto di proprietà."
    },
    {
      ID: 2,
      img: assets.Vector3,
      title: 'Automatizzato',
      disc:
        "Totalmente automatico e retraibile, S.I.R.E regola la quantità di sole in casa in base alle necessità. Un perfetto connubio tra sole e ombra. I suoi sensori regolano l'esposizione in base alle condizioni atmosferiche."
    },
    {
      ID: 3,
      img: assets.Vector4,
      title: 'Connesso',
      disc:
        "Il sistema si connette ai dispositivi Alexa, Google, elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di produzione dell’energia e ricevi notifiche e suggerimenti per l’utilizzo ottimale dell’energia autoprodotta."
    },
    {
      ID: 4,
      img: assets.Vector3,
      title: 'Efficiente',
      disc:
        "Il sistema di accumulo permette di conservare l’energia generata in eccesso e renderla disponibile quando serve, per esempio di sera o in giornate nuvolose."
    },
    {
      ID: 5,
      img: assets.Vector6,
      title: 'Resistente',
      disc:
        "Il sistema è realizzato con un rivestimento protettivo, impermeabile, isolante e resistente a fenomeni atmosferici aggressivi, all’abrasione, urti e graffi."
    }
  ];

  return (
    <div className=" pt-[61px] lg:pt-[200px] relative container mx-auto">
      <div>
        <p className="font-[600] text-[20px] md:text-[36px] leading-[100%] sm:leading-[84%] text-[#363636] text-center">
          Connesso, Intelligente, Resistente
        </p>
        <div className="flex justify-center pt-6">
          <div className="w-[119px] h-[4px] bg-[#86BE3F]"></div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 px-0 xl:px-[200px] ">
        <img src={assets.Vector} alt="Vector" className='absolute top-[12%]'/>
  {Labels.map((item) => (
    <div
      key={item.ID}
      className="flex w-full sm:w-[48%] gap-4 items-start bg-white p-4 rounded-md shadow-sm"
    >
      {/* Icon Wrapper - Perfect Circle */}
      <div className="min-w-[70px] h-[70px] flex items-center justify-center border-2 border-[#86BE3F] rounded-full">
        <img
          src={item.img}
          alt={item.title}
          className="w-[32px] h-[35px]"
        />
      </div>

      {/* Text Content */}
      <div className="text-left">
        <h3 className="text-[#363636] text-[20px] font-[600]">
          {item.title}
        </h3>
        <p className="text-[#555] text-[14px] mt-2 pr-0 lg:pr-[30%]">{item.disc}</p>
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
