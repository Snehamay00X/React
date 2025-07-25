import React from 'react';
import bgImage from '../../assets/Contact.jpg'; // Adjust path if needed

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Info section */}
      <div
        className="w-full md:w-3/5 h-64 md:h-full bg-cover bg-center text-white relative flex items-center justify-center p-8"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Empowering FASTag Agents Across India
          </h2>
          <p className="mb-8 text-sm md:text-base leading-relaxed">
            Our app is built exclusively for FASTag agents — to help you assign tags,
            recharge balances, process KYV, and manage your stock efficiently. 
            Take control of your FASTag operations from a single, powerful dashboard.
          </p>

          <div className="grid grid-cols-2 gap-y-8 gap-x-10">
            <div>
              <h3 className="text-3xl font-bold">15K+</h3>
              <p className="text-sm">Tags Assigned</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">1M+</h3>
              <p className="text-sm">Recharges Processed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">100%</h3>
              <p className="text-sm">KYV Accuracy</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-sm">Support for Agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Contact Form */}
      <div className="w-full md:w-2/5 bg-white p-8 md:p-16 relative">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Our Team</h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border border-black p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full border border-black p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              rows="5"
              placeholder="Let us know how we can help you get started..."
              className="w-full border border-black p-2"
              required
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="border border-black" />
            <label htmlFor="terms">
              I accept the <a href="#" className="underline">Terms & Conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 mt-4 hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;