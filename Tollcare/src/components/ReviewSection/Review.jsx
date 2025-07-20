// src/components/CustomerReviews.jsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const reviews = [
  {
    name: 'Aman Sharma',
    location: 'Karnataka',
    rating: 5,
    text: "As a Sales Manager, this app has been a lifesaver. I can issue new FASTags to my team, recharge them instantly, and even track inventory—everything I need in one place!"
  },
  {
    name: 'Rahul Gupta',
    location: 'New Delhi',
    rating: 4,
    text: "Managing FASTags for my sales team is so much easier now. The app lets me issue and recharge tags without a hassle. Only wish the inventory tracking could be more detailed."
  },
  {
    name: 'Rohit Singh',
    location: 'Bihar',
    rating: 5,
    text: "Managing a fleet is tough, but this app makes it so much simpler. I can issue FASTags for new vehicles, recharge them on the go, and keep tabs on our inventory in real time."
  },
  {
    name: 'Abhijit Bag',
    location: 'Jharkhand',
    rating: 4,
    text: "Great for keeping track of our FASTags and recharging them on the fly. Inventory tracking is useful, but sometimes the app needs a little time to sync up."
  },
  {
    name: 'Snehasis Das',
    location: 'Kolkata',
    rating: 5,
    text: "I oversee multiple sales reps and the ability to issue and recharge FASTags through the app has made managing our travel costs so much easier. Plus, I always know what’s in stock!"
  },
  {
    name: 'Shivam Sharma',
    location: 'Uttar Pradesh',
    rating: 5,
    text: "This app has transformed how I manage FASTags for my team. I can issue new tags, recharge them instantly, and monitor our inventory without any hassle. Makes managing logistics a breeze!"
  }
];

const CustomerReviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 bg-white" data-aos="fade-up">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-2">
        Customer Reviews
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Real Reviews from Real Customers
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => {
          const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
            review.name
          )}&background=FFD700&color=000000&rounded=true&size=64`;
          return (
            <div
              key={index}
              className="border p-6 rounded-md shadow-sm hover:shadow-md transition duration-300 bg-white"
            >
              <div className="flex mb-3 text-yellow-400 text-lg">
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p className="text-gray-700 mb-4 text-sm">"{review.text}"</p>
              <div className="flex items-center mt-4">
                <img
                  src={avatarUrl}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold text-sm text-gray-800">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;