// src/components/FAQs.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "Who can use this app?",
    answer:
      "This app is designed for authorized agents who manage toll tags and related services.",
  },
  {
    question: "How do I recharge my wallet?",
    answer:
      "Go to the Recharge section in the app, select the amount, choose your payment method, and follow the prompts to complete the transaction.",
  },
  {
    question: "I recharged but the balance isn’t showing. What should I do?",
    answer:
      "Please wait a few minutes. If it still doesn't reflect, check your transaction history or contact support via the Help section.",
  },
  {
    question: "Can I see how many tags I've issued?",
    answer:
      "Yes, go to the Reports section. You’ll find data on the number and types of tags issued.",
  },
  {
    question: "How do I complete KYC for a customer?",
    answer:
      "Use the KYC section, upload the necessary documents, and submit. Ensure all details are correct to avoid rejection.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12" data-aos="fade-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          FAQs
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We’ve compiled answers to the questions we hear most. If you don’t find what you’re looking for,
          head to the <span className="font-semibold">Contact Us</span> section.
        </p>

        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>
                <span className="text-gray-600">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-2 text-sm text-gray-700">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 text-center" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            We're here to help! If you have any questions or need more information, don’t hesitate to reach out to us.
          </p>
          <button className="border border-black px-6 py-2 rounded hover:bg-black cursor-pointer hover:text-white transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;