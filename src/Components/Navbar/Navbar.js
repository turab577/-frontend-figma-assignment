import React, { useEffect, useRef, useState } from 'react';
import assets from '../../Assets/assets';

export default function HeaderBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Disable/Enable scroll on body
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  // Close on click outside the menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Auto-close on screen resize above md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="w-full border-b border-[#F3EDED] bg-white pt-5 pb-3 px-4 relative z-[9999]">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* LOGO + Burger */}
        <div className="mb-4 md:mb-0 flex justify-between items-center w-full md:w-auto">
          <img src={assets.Logo} alt="Logo" className="w-[130px]" />

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-[#86BE3F]"></span>
              <span className="block w-6 h-0.5 bg-[#86BE3F]"></span>
              <span className="block w-6 h-0.5 bg-[#86BE3F]"></span>
            </div>
          </button>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={assets.Phone} alt="Phone" className="w-[18px]" />
            <span className="text-[#8A8888] text-[16px]">0203 519 4420</span>
          </div>

          <div className="flex items-center space-x-2">
            <img src={assets.Message} alt="Message" className="w-[18px]" />
            <span className="text-[#8A8888] text-[16px]">info@solarinnovatio.com</span>
          </div>

          <button className="bg-[#86BE3F] hover:bg-[#6BA32B] text-white py-2 px-4 rounded-md transition duration-200">
           <a href="#contact" >Contact Us</a> 
          </button>
        </div>
      </div>

      {/* MOBILE MENU + Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-30 transition-opacity duration-300" />
      )}

      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-[90vw] bg-white z-[10000] p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-500 hover:text-[#86BE3F] text-2xl font-bold"
          >
            &times;
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          {[
  { name: 'Home', href: '#home' },
  { name: 'Chi Siamo', href: '#chi-siamo' },
  { name: 'S.I.R.E', href: '#sire' },
  { name: 'Sire Features', href: '#sire-features' },
  { name: 'Why Sire?', href: '#why-sire' },
  { name: 'SIRE Product', href: '#sire-product' },
  { name: 'How it Works?', href: '#how-it-works' },
].map((item, index) => (
  <li
    key={index}
    className={`text-[18px] leading-[95%] cursor-pointer ${
      index === 0 ? 'text-[#86BE3F]' : 'text-[#8A8888] hover:text-[#86BE3F]'
    }`}
  >
    <a
      href={item.href}
      onClick={() => setMobileMenuOpen(false)}
      className="block w-full"
    >
      {item.name}
    </a>
  </li>
))}

        </ul>

        <div className="flex items-center space-x-2 mt-6">
          <img src={assets.Phone} alt="Phone" className="w-[18px]" />
          <span className="text-[#8A8888] text-[15px]">0203 519 4420</span>
        </div>

        <div className="flex items-center space-x-2 mt-2">
          <img src={assets.Message} alt="Message" className="w-[18px]" />
          <span className="text-[#8A8888] text-[15px]">info@solarinnovatio.com</span>
        </div>

        <button className="w-full bg-[#86BE3F] hover:bg-[#6BA32B] text-white py-2 px-4 rounded-md mt-4">
         <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</a> 
        </button>
      </nav>
    </header>
  );
}
