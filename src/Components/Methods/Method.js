import React from "react";
import assets from "../../Assets/assets";

export default function Method() {
  return (
    <div>
      <div className="py-16">
        <p className="font-semibold text-[36px] leading-[84%] text-center pb-6">
          Scegli il tuo SIRE
        </p>
        <div className="flex justify-center">
          <div className="bg-[#81BD48] h-[4px] w-[119px] "></div>
        </div>
        <div className="flex"></div>
      </div>
      <div className="flex flex-wrap gap-10 md:gap-4 justify-center">
        {/* First Card */}
        <div className="px-[12px]  xs:px-0">
          <img src={assets.transfer} alt="Transfer of electricity" />
          <div className="shadow-xl bg-white px-6 pb-3">
            <p className="text-[#86BE3F] font-semibold text-[24px] leading-[88%] py-6">
              S.I.R.E Direct
            </p>

            <div className="flex flex-col gap-6  pb-6">
              <div className="flex gap-3">
                <img src={assets.pointer} alt="Indicating" />
                <p className="font-regular text-[16px] leading-[68%] text-[#666666]">
                  Sistema Plugin
                </p>
              </div>
              <div className="flex gap-3">
                <img
                  src={assets.pointer}
                  alt="Indicating"
                  className="h-[12px] w-[9px] mt-1"
                />
                <p className="font-regular text-[16px] leading-[125%] text-[#666666] ">
                  Struttura meccanizzata in poliuera e sensoristica{" "}
                  <br className="hidden lg:block" /> intelligente
                </p>
              </div>
              <div className="flex gap-3">
                <img src={assets.pointer} alt="Indicating" className="h-[12px] w-[9px] mt-1" />
                <p className="font-regular text-[16px] leading-[125%] lg:leading-[82%] text-[#666666]">
                  Pannelli alta efficienza da 1KW
                </p>
              </div>
              <div className="flex gap-3">
                <img src={assets.pointer} alt="Indicating" className="h-[12px] w-[9px] lg:h-auto lg:w-auto mt-1 lg:mt-0" />
                <p className="font-regular text-[16px] leading-[125%] md:leading-[68%] text-[#666666]">
                  Inverter e conne ssione aII'impianto domestico
                </p>
              </div>
              <div className="flex gap-3">
                <img src={assets.pointer} alt="Indicating" />
                <p className="font-regular text-[16px] leading-[77%] text-[#666666]">
                  App di controllo e gesti one
                </p>
              </div>
            </div>
            <p className="font-medium text-[16px] leading-[84%] pt-3 pb-6">
              CONSIGLIATO PER:
            </p>
            <div className="flex gap-10">
              <div>
                <div className="p-3 bg-[#F5F5F5] rounded-full">
                  <img src={assets.devices} alt="Devices" />
                </div>
                <p className="text-[#666666] font-regular text-[16px] leading-[109%] pt-1">
                  Devices
                </p>
              </div>
              <div>
                <div className="p-3 bg-[#F5F5F5] rounded-full">
                  <img src={assets.families} alt="Families" />
                </div>
                <p className="text-[#666666] font-regular text-[16px] leading-[109%] pt-1">
                  Families
                </p>
              </div>
            </div>
            <p className="font-medium text-[16px] leading-[175%] text-[#363636] py-3">Scopri le caratteristiche tecniche</p>
            <ul className="flex flex-col gap-3 list-disc marker:text-[#86BE3F] pl-5">
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">Te mpo di ricarica medio in estate</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">TBD Tempo di scarica a 16A.</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">TBD Autonomia dalla rete elettrica.</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">TBD Autonomia in casa di blackout.</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[161%] md:leading-[82%]">
    2gg Immissione di CO2 da 1.022 kg a SOO kg annui
  </li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">Te mpo di ricarica medio in estate.</li>
</ul>

          </div>
        </div>
        {/* Second Card */}

        <div className="px-[12px] md:px-0">
          <img src={assets.use} alt="Transfer of electricity" />
          <div className="shadow-xl bg-white px-6 pb-3">
            <p className="text-[#86BE3F] font-semibold text-[24px] leading-[88%] py-6">
              S.I.R.E Direct
            </p>

            <div className="flex flex-col gap-6  pb-6">
              <div className="flex gap-3">
                <img src={assets.pointer} alt="Indicating" className="h-[12px] w-[9px] mt-1" />
                <p className="font-regular text-[16px] leading-[125%] text-[#666666]">
                  Struttura meccanizzata in poliuera e sensoristica{" "}
                  <br className="hidden lg:block" /> intelligente
                </p>
              </div>
              <div className="flex gap-3">
                <img
                  src={assets.pointer}
                  alt="Indicating"
                  className="h-[12px] w-[9px] mt-1"
                />
                <p className="font-regular text-[16px] leading-[120%] lg:leading-[68%] text-[#666666] ">
                  Pannelli alta efficienza da 1KW
                </p>
              </div>
              <div className="flex gap-3">
                <img src={assets.pointer} alt="Indicating"  className="h-[12px] w-[9px] mt-1 lg:h-auto lg:w-auto lg;mt-0"/>
                <p className="font-regular text-[16px] leading-[125%] md:leading-[82%] text-[#666666]">
                  Inverter e conne ssione aII'impianto domestico
                </p>
              </div>
              <div className="flex gap-3">
                <img src={assets.pointer} alt="Indicating" />
                <p className="font-regular text-[16px] leading-[69%] text-[#666666]">
                  App di controllo e gesti one
                </p>
              </div>
              
            </div>
            <p className="font-medium text-[16px] leading-[84%] pt-[43px] pb-6">
              CONSIGLIATO PER:
            </p>
            <div className="flex gap-10">
              <div>
                <div className="p-3 bg-[#F5F5F5] rounded-full">
                  <img src={assets.devices} alt="Devices" />
                </div>
                <p className="text-[#666666] font-regular text-[16px] leading-[109%] pt-1">
                  Devices
                </p>
              </div>
              <div>
                <div className="p-3 bg-[#F5F5F5] rounded-full">
                  <img src={assets.families} alt="Families" />
                </div>
                <p className="text-[#666666] font-regular text-[16px] leading-[109%] pt-1">
                  Families
                </p>
              </div>
            </div>
            <p className="font-medium text-[16px] leading-[175%] text-[#363636] py-3">Scopri le caratteristiche tecniche</p>
            <ul className="flex flex-col gap-3 list-disc marker:text-[#86BE3F] pl-5">
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">Siste ma 2 kW con accumuIo.</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">Tempo di ricarica medio in estate is 5 ore e 30 minuti</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">Te mpo di scarica a 16A is 8 ore.</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">Autonomia dalla rete eIettrica 62Po.</li>
  <li className="text-[#666666] font-regular text-[16px] leading-[121%] md:leading-[82%]">
    2gg Immissione di CO2 da 1.022 kg a SOO kg annui
  </li>
  <li className="text-[#666666] font-regular text-[16px] leading-[120%] lg:leading-[82%]">Te mpo di ricarica medio in estate.</li>
</ul>

          </div>
        </div>
      </div>

      
    </div>
  );
}
