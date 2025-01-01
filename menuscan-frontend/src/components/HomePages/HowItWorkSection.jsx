"use client";
import React from 'react';

const HowItWorks = () => {
    const steps = [
      {
        title: "Add Your Menu",
        description: "Easily input your menu items, prices, and categories in just a few clicks.",
        icon: "📋",
      },
      {
        title: "Generate Your QR Code",
        description: "Receive a unique QR code that links directly to your digital menu.",
        icon: "🔗",
      },
      {
        title: "Serve Your Customers",
        description: "Place the QR code on tables for customers to scan and view your menu instantly.",
        icon: "🍽️",
      },
    ];
  
    return (
      <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          How It Works
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="text-6xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default HowItWorks;