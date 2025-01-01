"use client";
import React from 'react';

const Benefits = () => {
    const benefits = [
      {
        title: "Reduce Wait Times",
        description: "No more waiting for menus—customers can browse instantly.",
        icon: "⏱️",
      },
      {
        title: "Enhance Customer Experience",
        description: "Provide a modern, tech-savvy dining experience that customers will love.",
        icon: "🌟",
      },
      {
        title: "Easy Updates",
        description: "Make real-time changes to your menu without the hassle of printing new cards.",
        icon: "🛠️",
      },
    ];
  
    return (
      <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Benefits for Hotel Owners
        </h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Elevate your restaurant's efficiency and customer satisfaction with our digital menu solution.
        </p>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="text-6xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <blockquote className="italic text-gray-700">
            "This app has transformed how we serve our customers!" - [Hotel Owner Name]
          </blockquote>
        </div>
      </section>
    );
  };

  export default Benefits;