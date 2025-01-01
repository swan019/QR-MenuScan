"use client";
import React from 'react';
const Testimonials = () => {
    const testimonials = [
      { hotel: "Grand Hotel", location: "Pune", owner: "John Doe", message: "This solution is a game-changer for our business!" },
      { hotel: "Seaside Inn", location: "California", owner: "Jane Smith", message: "Our customers love the convenience and speed!" },
      { hotel: "Mountain Retreat", location: "Colorado", owner: "Bob Johnson", message: "Managing menus has never been easier!" },
      { hotel: "Mountain Retreat", location: "Colorado", owner: "Bob Johnson", message: "Managing menus has never been easier!" },
      { hotel: "Mountain Retreat", location: "Colorado", owner: "Bob Johnson", message: "Managing menus has never been easier!" },
    ];
  
    return (
      <section className="bg-gray-100 rounded-md py-12 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
           Testimonials
        </h2>
        <div className="overflow-x-scroll no-scrollbar flex space-x-4">
          {testimonials.map((item, index) => (
            <div key={index} className="min-w-[300px] p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{item.hotel}</h3>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p className="italic mt-4">"{item.message}"</p>
              <p className="mt-2 text-sm font-semibold">- {item.owner}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  
  export default Testimonials;