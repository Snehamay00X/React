import React from 'react';

const features = [
  {
    title: "Seamless toll payment experience",
    desc: "Enjoy a smooth and hassle-free toll payment process with automatic deductions via FASTag. Skip the long queues and save time, ensuring a quicker, more efficient journey for your clients every time.",
  },
  {
    title: "Realtime Transaction Updates",
    desc: "Get instant updates on transactions, tag status, and recharges. Stay on top of your client’s account activity without delays.",
  },
  {
    title: "24/7 Customer Support",
    desc: "Access 24/7 customer support for any questions or issues. We’re here to help you make your FASTag services smooth and hassle-free.",
  },
  {
    title: "User-Friendly Interface",
    desc: "With a clean, intuitive design, our app is easy to navigate. Even first-time users can manage FASTags effortlessly.",
  },
  {
    title: "Track Commission Earnings",
    desc: "Easily monitor your real-time commissions with transparent reports and detailed breakdowns. Stay on top of payouts and performance, ensuring smooth, error-free earnings management.",
  },
  {
    title: "Quick Registration and Activation",
    desc: "FASTags are activated within minutes, ensuring your clients are ready to use them right away. No lengthy delays!",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
        <p className="text-gray-700 mb-12 max-w-3xl mx-auto">
          Our app revolutionises onboarding experience with a hassle-free registration process that takes just 30 seconds,
          setting a new standard for user-friendly processes. TollCare offers an all-encompassing platform for customer
          onboarding, recharges, loans, credit card payments, insurance, and other easily accessible payment utilities—
          all seamlessly integrated for user convenience.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <div key={idx} className="text-left" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="text-3xl mb-4">🧊</div> {/* Replace with icon if needed */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;