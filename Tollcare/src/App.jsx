// src/App.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/HeroSection/Hero'; // adjust path if needed
import Navbar from './components/Header/Header'; // adjust path if needed
import WhyChooseUs from './components/WhyUs/WhyUs'; // adjust path if needed
import DownloadSection from './components/DownloadSection/Download';
import CustomerReviews from './components/ReviewSection/Review';
import FAQs from './components/FAQ/FAQ'; // adjust path if needed
import ContactForm from './components/Contact/Contact';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,      // Animation duration in ms
      once: true,          // Only animate once per element
      offset: 50,          // Offset from the bottom when trigger starts
    });
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <DownloadSection />
      <CustomerReviews />
      <FAQs />
      <ContactForm />
      {/* Add more sections below for scrollability */}
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-3xl font-bold" data-aos="fade-up">Scroll Section</h2>
      </section>
    </div>
  );
}

export default App;