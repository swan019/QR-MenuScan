"use client";
import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col gap-4 md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">&copy; 2024 QR Menu. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-4 text-sm">
            <a href="underconstruction" target='_black'  className="hover:underline">Privacy Policy</a>
            <a href="underconstruction" target='_black' className="hover:underline">Terms of Service</a>
            <a href="underconstruction" target='_black' className="hover:underline">Support</a>
          </div>
          <div className="flex space-x-6 text-lg">
            <a href="https://www.linkedin.com/in/swapnil-ingale019/" target='_black' className="hover:text-blue-400">LinkedIn</a>
            <a href="https://x.com/iamswapnil_1" target='_black' className="hover:text-blue-400">Twitter</a>
            <a href="underconstruction" target='_black' className="hover:text-blue-400">Instagram</a>
          </div>
        </div>
      </footer>
    );
  };

  
export default Footer;