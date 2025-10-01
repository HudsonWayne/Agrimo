'use client';

import React from 'react';

const cardData = [
  {
    icon: '🚜',
    title: 'Professional Farmers',
    text: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
  {
    icon: '🥬',
    title: 'Fresh Vegetables',
    text: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
  {
    icon: '🌾',
    title: 'Agriculture Products',
    text: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
  {
    icon: '✅',
    title: '100% Guaranteed',
    text: 'Nullam porta enim vel tellus commodo, eget laoreet odio ultrices.',
  },
];

const Cards = () => {
  return (
    <section className="w-full bg-[#f9f7f1] py-20 r">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 lg:px-20">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="relative bg-white rounded-3xl shadow-lg p-10 min-h-[300px] hover:scale-[1.03] transition-transform"
          >
            <div className="bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6">
              {card.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h3>
            <p className="text-base text-gray-600">{card.text}</p>
            <div className="absolute bottom-5 right-5 text-sm text-gray-400 hover:text-gray-600 cursor-pointer">
              ✕
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
