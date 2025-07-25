import React from 'react';
import phoneImage from '../../assets/phone.jpg';
import qrCode from '../../assets/QR.png';
import GooglePlayButton from './GooglePlayButton.jsx'; // Adjust path if needed

const DownloadSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-[#582D91] to-[#B654A5] py-12 px-4">
      <div className="max-w-7xl mx-auto bg-[#f3f3f3] rounded-[50px] px-6 md:px-12 py-10 md:py-16 flex flex-col md:flex-row items-center md:items-start md:gap-x-12 relative">
        
        {/* Left: Phone Image */}
        <div className="w-full md:w-[45%] flex justify-center mb-10 md:mb-0">
          <img
            src={phoneImage}
            alt="Phone"
            className="max-w-[300px] md:max-w-[340px]"
          />
        </div>
        
        {/* Right: Text Block */}
        <div className="w-full md:w-[55%] ml-auto flex flex-col gap-6 pl-10 pr-2 text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold">DOWNLOAD</h1>

          <div className="flex items-center justify-start gap-2 text-[#131947]">
            <span className="bg-[#131947] text-white px-3 py-1 rounded-md font-bold text-lg md:text-xl">TC</span>
            <span className="text-xl md:text-2xl font-semibold">Toll Care</span>
          </div>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed md:max-w-lg">
            “Where convenience meets efficiency at fingertips. TollCare is crafted to deliver a smooth, effective and intuitive solution to India’s toll payment needs.”
          </p>

          {/* ✅ Google Play Button Component */}
          <div className="mt-2">
            <GooglePlayButton />
          </div>

          <div className="flex items-center justify-start text-yellow-400 text-2xl md:text-3xl">
            ★ ★ ★ ★ ★ <span className="text-gray-400 ml-1 text-lg">½</span>
          </div>

          <div className="flex justify-start gap-8 text-sm md:text-base text-gray-600">
            <div className="text-left">
              <div className="font-bold">100+</div>
              <div>Users</div>
            </div>
            <div className="text-left">
              <div className="font-bold">1000+</div>
              <div>Downloads</div>
            </div>
            <div className="text-left">
              <div className="font-bold">300+</div>
              <div>Verified Users</div>
            </div>
          </div>

          {/* QR Code */}
          <div className="absolute bottom-6 right-6 hidden md:block">
            <img
              src={qrCode}
              alt="QR Code"
              className="w-28 h-28 rounded-xl border border-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;