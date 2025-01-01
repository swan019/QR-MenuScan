"use client";
import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-200 min-h-screen  rounded-sm flex flex-col items-center justify-center px-4 md:px-10 lg:px-20">
      <div className="text-center max-w-7xl mx-auto px-2   sm:px-2 lg:px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
          Transform Your Dining Experience with Instant  QR Menus Scan!
        </h1>
        <p className="text-lg max-w-screen-lg mx-auto md:text-xl font-light text-gray-600 my-6">
        Say goodbye to traditional menus and embrace a revolutionary dining experience that puts the power in your customers' hands! With just a simple scan, they can effortlessly explore your entire menu, discovering tantalizing dishes and delightful beverages at their fingertips. 
        </p>
        <div className='mt-10'>
        <a 
          href="/addStore" 
          className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold shadow-lg transition duration-300">
          Get Started Today!
        </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
