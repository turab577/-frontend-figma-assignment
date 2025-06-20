import React from 'react';
import assets from '../../Assets/assets';

export default function Footer() {
  return (
    <footer className="bg-[#4d4d4d] text-white mt-20">
      {/* Newsletter Section */}
      <div
        className="bg-[#86BE3F] text-white px-6 py-6 md:py-10"
        style={{ backgroundImage: `url(${assets.upper})` }}
      >
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="font-semibold text-lg md:text-xl">Subscribe for Newsletter</h3>
            <p className="text-sm mt-3">
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id <br /> vitae orci maecenas tortor odio
            </p>
          </div>
          <form className="flex bg-white rounded-full overflow-hidden w-full md:w-[360px]">
            <input
              type="email"
              placeholder="Inserisci la tua email"
              className="px-4 py-2 w-full text-[#333] outline-none"
            />
            <button
              type="submit"
              className="bg-[#86BE3F] px-2 h-[34px] w-[34px] flex items-center rounded-full ml-[-41px] mt-[2px] justify-center"
            >
              <img src={assets.Send} alt="Send" className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="relative text-[#ccc] py-10 overflow-hidden pl-[24px] sm:pl-0">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-repeat z-0 opacity-[0.05]"
          style={{ backgroundImage: `url(${assets.footerBg})` }}
        ></div>

        {/* Main Footer Content */}
        <div className="relative max-w-[1200px] mx-auto px-1 z-10">
          <div className="flex flex-wrap justify-between gap-3">
            {/* Column 1: Logo + Description */}
            <div className="max-w-[270px] flex flex-col gap-4">
              <img src={assets.logo2} alt="Logo" className="w-28" />
              <p className="text-sm">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.
              </p>
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <img key={i} src={assets.frey} alt={`Frey ${i}`} className="w-[70px]" />
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-4 min-w-[170px]">
              <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {['Home', 'Chi Siamo', 'S.I.R.E', 'SIRE Features', 'Why SIRE?', 'SIRE Product', 'How it Works?'].map((item, i) => (
                  <li key={i} className="hover:text-[#86be3f] cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>

            {/* Column 3: Useful Links */}
            <div className="flex flex-col gap-4 min-w-[170px]">
              <h4 className="font-semibold mb-2 text-white">Useful Links</h4>
              <ul className="space-y-2 text-sm">
                {['Help Center', 'Privacy Policy', 'Terms & Condition', 'FAQ'].map((item, i) => (
                  <li key={i} className="hover:text-[#86be3f] cursor-pointer">{item}</li>
                ))}
              </ul>
              <h4 className="font-semibold mt-4 mb-2 text-white">Documents</h4>
              <p className="text-sm underline hover:text-[#86be3f] cursor-pointer">Linked Here</p>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <h4 className="font-semibold mb-2 text-white">Contact Us</h4>
              <div className="space-y-4 text-sm">
                <div className="flex gap-2 items-start">
                  <img src={assets.location} alt="Location" className="w-5 h-5 mt-1" />
                  <p>Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci</p>
                </div>
                <div className="flex gap-2 items-start">
                  <img src={assets.mail} alt="Email" className="w-5 h-5 mt-1" />
                  <div>
                    <p>email@email.com</p>
                    <p>support@email.com</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <img src={assets.Phone} alt="Phone" className="w-5 h-5 mt-1" />
                  <p>+29 98595 8998</p>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="bg-white h-[2px] w-full mt-10"></div>

          {/* Bottom Footer Row */}
          <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>All Rights Reserved</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <img src={assets.facebook} alt="Facebook" className="w-5 h-5" />
              <img src={assets.instagram} alt="Instagram" className="w-5 h-5" />
              <img src={assets.twitter} alt="Twitter" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
