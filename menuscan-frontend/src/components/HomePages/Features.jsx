"use client";
import React from 'react';
const Features = () => {
    const features = [
      {
        title: "Easy Menu Management",
        description: "Update your menu anytime, anywhere. Add, edit, or remove items with ease.",
        icon: "⚙️",
      },
      {
        title: "Customizable QR Codes",
        description: "Personalize your QR codes with your branding for a unique touch.",
        icon: "🎨",
      },
      {
        title: "Analytics for Menu Performance",
        description: "Gain insights into which items are popular and optimize your offerings.",
        icon: "📊",
      },
      {
        title: "Multi-Language Support",
        description: "Cater to diverse customers with menus available in multiple languages.",
        icon: "🌍",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-12 px-4 md:px-10 lg:px-20 rounded-md">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
          Features
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center max-w-xs">
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Features;