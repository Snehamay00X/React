import React from 'react';
import bgImage from '../../assets/Contact.jpg'; // Adjust path if needed

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left: Image - 60% width on md+ screens */}
      <div
        className="w-full md:w-3/5 h-64 md:h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Right: Contact Form - 40% width on md+ screens */}
      <div className="w-full md:w-2/5 bg-white p-8 md:p-16 relative">
        <button className="absolute top-4 right-4 text-xl font-bold">&times;</button>
        <h2 className="text-3xl font-bold mb-8">Contact us</h2>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full border border-black p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-black p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full border border-black p-2"
              required
            ></textarea>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="terms" className="border border-black" />
            <label htmlFor="terms">
              I accept the <a href="#" className="underline">Terms</a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 mt-4 hover:bg-gray-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;