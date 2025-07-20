import React, { useState } from 'react';
import logo from '../../assets/logo.png'; // adjust path if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'Download', href: '#download' },
  ];

  return (
    <nav className="bg-white shadow border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Toll Care Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-semibold tracking-tight text-gray-800">
          </span>
        </div>

        {/* Right Section: Nav Links + Button */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative group transition"
              >
                <span className="group-hover:text-black transition">{item.label}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button className="bg-black cursor-pointer text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-gray-900 transition transform hover:scale-105">
            JOIN US
          </button>
        </div>

        {/* Hamburger (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col space-y-1 focus:outline-none"
          >
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white shadow-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-base font-medium text-gray-700 hover:text-black transition"
            >
              {item.label}
            </a>
          ))}
          <button className="w-full bg-black text-white py-2 rounded-full font-medium hover:bg-gray-900 transition">
            Join Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;