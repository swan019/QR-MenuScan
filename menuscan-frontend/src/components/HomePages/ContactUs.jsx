"use client";
import React from 'react';

const ContactUs = () => {
    return (
      <section className="bg-gray-100 rounded-md py-12 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Contact Us
        </h2>
        <div className="text-center text-lg text-gray-600 mb-6">
          <p>Have questions or need support? We're here to help!</p>
          <p>Reach out to us at <a href="mailto:swapnilingale2002gmail.com" className="text-blue-600 hover:underline">swapnilingale2002gmail@gmail.com</a></p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/swapnil-ingale019/" target="_blank" className="text-blue-600 hover:text-blue-700 text-xl">LinkedIn</a>
          <a href="https://x.com/iamswapnil_1" target="_blank" className="text-blue-600 hover:text-blue-700 text-xl">Twitter</a>
          <a href="#" className="text-blue-600 hover:text-blue-700 text-xl">Instagram</a>
        </div>
      </section>
    );
  };

  
export default ContactUs;