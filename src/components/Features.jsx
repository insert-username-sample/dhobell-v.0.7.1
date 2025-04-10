import React from 'react';
import './Features.css';

function Features() {
  return (
    <section className="features">
      <div className="feature-card">
        <div className="feature-icon">
          <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3>Premium Laundry Care</h3>
        <p>Expert cleaning with eco-friendly detergents and state-of-the-art equipment</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">
          <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3>Fast Turnaround</h3>
        <p>24-hour standard service with express options available</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">
          <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3>Free Pickup & Delivery</h3>
        <p>Convenient doorstep service at your preferred schedule</p>
      </div>
      <div className="feature-card">
        <div className="feature-icon">
          <svg className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3>Quality Guarantee</h3>
        <p>100% satisfaction guaranteed with our premium service</p>
      </div>
    </section>
  );
}

export default Features;
