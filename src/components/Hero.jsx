import React, { useState } from 'react';
import './Hero.css';
import heroBanner from '../hero-banner.png';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="title-with-image">
          <img src={heroBanner} alt="Laundry Service" className="hero-banner-small" />
          <h1>Professional Laundry & Ironing</h1>
        </div>
        <p>Experience premium laundry care with free pickup and delivery. Save time and enjoy spotlessly clean clothes with Dhobell's expert service.</p>
        <button className="cta-button" onClick={handleOpenModal}>Book Now</button>
      </div>
      <div className="hero-right">
        <div className="feature-card">
          <div className="feature-icon">🏢</div>
          <h3>Premium Laundry Care</h3>
          <p>Expert cleaning with eco-friendly detergents and state-of-the-art equipment</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast Turnaround</h3>
          <p>24-hour standard service with express options available</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Free Pickup & Delivery</h3>
          <p>Convenient doorstep service at your preferred schedule</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✨</div>
          <h3>Quality Guarantee</h3>
          <p>100% satisfaction guaranteed with our premium service</p>
        </div>
      </div>
      <BookingModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
};

export default Hero;
