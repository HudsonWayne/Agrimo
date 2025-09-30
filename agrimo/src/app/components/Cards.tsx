'use client';

import React from 'react';
import styles from './Cards.module.css';

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
    <div className={styles.cardsContainer}>
      {cardData.map((card, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.cardIcon}>{card.icon}</div>
          <h3 className={styles.cardTitle}>{card.title}</h3>
          <p className={styles.cardText}>{card.text}</p>
          <div className={styles.cardClose}>✕</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
