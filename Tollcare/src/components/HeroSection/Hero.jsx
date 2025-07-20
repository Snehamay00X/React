import React from 'react';
import CarsImage from '../../assets/Cars.png'; // adjust the path

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${CarsImage})` }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}

      {/* Text Content */}
      <div
        className="relative z-10 max-w-2xl px-6 md:px-16 text-left text-white"
        data-aos="fade-up"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          “<span className="text-green-500">FAS</span><span className="text-orange-500">Tag</span> at Your<br />
          Fingertips: Assign,<br />
          Recharge, Relax.”
        </h1>
        <p className="text-md sm:text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
          Fast. Reliable. Built for You.
        </p>
        <div
          className="flex gap-4 flex-wrap"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button className="bg-black cursor-pointer px-6 py-2 rounded-full  font-medium shadow hover:bg-gray-900  transition duration-300 hover:scale-105">
            JOIN US
          </button>
          <button className="border cursor-pointer rounded-full border-white text-white px-6 py-2 hover:bg-white hover:text-black transition duration-300 hover:scale-105">
            + More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;