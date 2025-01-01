"use client";
import React from 'react';

const FAQs = () => {
  const questions = [
    {
      question: "How do I create my menu?",
      answer: "Simply log in, navigate to the menu section, and start adding your items!",
    },
    {
      question: "Can I update my menu after it's published?",
      answer: "Absolutely! You can make changes anytime, and they will reflect instantly.",
    },
    {
      question: "Is there a limit to the number of items I can add?",
      answer: "No, you can add as many items as you like!",
    },
  ];

  return (
    <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-10">
        FAQs
      </h2>
      <div className="space-y-6">
        {questions.map((item, index) => (
          <details key={index} className="border-b py-4">
            <summary className="text-lg font-semibold cursor-pointer text-gray-800 flex justify-between">
              {item.question}
              <span className="text-gray-500">+</span>
            </summary>
            <div className="text-gray-600 mx-2 mt-2">
              {index === 0 ? (
                <div className='flex flex-col'>
                  <p> <span className='font-normal mx-1'>1. </span> Click on "Add Store" to create an account.</p>
                  <p> <span className='font-normal mx-1'>2. </span> Fill in your details and authenticate.</p>
                  <p> <span className='font-normal mx-1'>3. </span> Verify your account with the OTP sent to your email.</p>
                  <p> <span className='font-normal mx-1'>4. </span> Once verified, access your dashboard and navigate to the menu section to add your items.</p>
                </div>
              ) : item.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};


export default FAQs;