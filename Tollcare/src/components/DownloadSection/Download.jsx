import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import phoneImage from '../../assets/phone.jpg';  // Replace with your asset path
import logo from '../../assets/logo.png';        // Toll Care logo
import qrCode from '../../assets/QR.png';    // QR code

const DownloadSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full bg-gradient-to-r from-indigo-900 to-purple-500 py-12 px-4">
      <div
        className="relative max-w-7xl mx-auto bg-gray-100 rounded-3xl shadow-lg px-6 py-10 md:flex items-center justify-between gap-10 overflow-hidden"
        data-aos="fade-up"
      >
        {/* Left: Phone Image */}
        <div className="flex justify-center md:w-1/2 mb-6 md:mb-0">
          <img
            src={phoneImage}
            alt="Phone"
            className="w-[250px] md:w-[280px] lg:w-[300px] object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="text-center md:text-left md:w-1/2 space-y-4">
          <h2 className="text-4xl font-extrabold text-gray-900">DOWNLOAD</h2>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src={logo} alt="Toll Care Logo" className="h-6" />
            <span className="text-xl font-semibold text-gray-800"></span>
          </div>

          <p className="text-gray-700 text-sm">
            “Where convenience meets efficiency at fingertips. TollCare is crafted
            to deliver a smooth, effective and intuitive solution to India's toll
            payment needs.”
          </p>

          <a
            href="#"
            className="inline-block mt-2 bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            <i className="fab fa-google-play mr-2"></i> Get it on Google Play
          </a>

          {/* Rating */}
          <div className="flex justify-center md:justify-start items-center gap-2 pt-3">
            <div className="flex text-yellow-400 text-xl">★ ★ ★ ★ ☆</div>
            <span className="text-gray-600 text-sm">4.5</span>
          </div>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-6 pt-3 text-sm text-gray-700">
            <div>
              <div className="font-bold">100+</div>
              <div>Users</div>
            </div>
            <div>
              <div className="font-bold">1000+</div>
              <div>Downloads</div>
            </div>
            <div>
              <div className="font-bold">300+</div>
              <div>Verified Users</div>
            </div>
          </div>
        </div>

        {/* QR Code at bottom right */}
        <div className="absolute bottom-6 right-6">
          <img
            src={qrCode}
            alt="QR Code"
            className="w-28 h-28 md:w-32 md:h-32 rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;