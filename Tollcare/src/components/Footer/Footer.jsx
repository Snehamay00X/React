import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-black/30">
      {/* Agent Call-to-Action */}
      <div className="bg-gradient-to-r from-gray-300 to-gray-100 text-center py-16 px-4">
        <h2 className="text-3xl font-bold mb-4">Grow Your FASTag Business with Toll Care</h2>
        <p className="text-gray-700 mb-6 max-w-xl mx-auto">
          Join 10,000+ agents already using our app to assign FASTags, recharge, manage KYV, and track stock in real-time. Start your journey with us today!
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
          <a
            href="#"
            className="bg-black text-white px-6 py-3 w-full sm:w-auto text-sm font-medium hover:bg-gray-800"
          >
            Download App
          </a>
          <a
            href="#"
            className="border border-black px-6 py-3 w-full sm:w-auto text-sm font-medium hover:bg-black hover:text-white"
          >
            Become an Agent
          </a>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="px-6 py-10 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-black text-white font-bold w-8 h-8 flex items-center justify-center rounded">
            TC
          </div>
          <span className="font-semibold text-lg">Toll Care</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-black">
          <a href="#">About Us</a>
          <a href="#">Become an Agent</a>
          <a href="#">Help Center</a>
          <a href="#">Agent Login</a>
          <a href="#">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-black text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-black/20 py-4 text-center text-sm text-gray-600">
        <p>
          © 2025 Toll Care. All rights reserved. &nbsp;
          <a href="#" className="underline">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#" className="underline">Terms of Service</a> &nbsp;|&nbsp;
          <a href="#" className="underline">Cookie Policy</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;