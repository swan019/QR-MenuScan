"use client";
import React from 'react';

const UnderConstruction = () => {
    return (
      <section className=" min-h-screen flex flex-col items-center justify-center px-4 md:px-10 lg:px-20">
        <img src="/construction-image.png" alt="Under Construction" className="w-64 h-64 mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">We're Working Hard!</h2>
        <p className="text-lg text-gray-600 text-center">
          Our team is busy building something amazing. Stay tuned for updates and exciting features coming your way soon.
        </p>
      </section>
    );
  };

export default UnderConstruction;