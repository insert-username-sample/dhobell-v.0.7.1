import React from 'react';

function About() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Dhobell</h1>
          <p className="text-xl text-gray-600">Making premium laundry care accessible to everyone</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-600 mb-6">
            Founded with a vision to revolutionize the laundry industry, Dhobell combines professional expertise with modern convenience. We understand the value of your time and the importance of well-maintained clothing in your professional and personal life.
          </p>
          <p className="text-gray-600">
            Our journey began with a simple idea: to provide busy professionals and families with a reliable, high-quality laundry service that saves time without compromising on quality. Today, we're proud to serve thousands of satisfied customers with our premium laundry and dry cleaning services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional laundry care services that make life easier for our customers while maintaining the highest standards of quality, convenience, and environmental responsibility.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <ul className="space-y-3 text-gray-600">
              <li>✓ Quality Excellence</li>
              <li>✓ Customer Convenience</li>
              <li>✓ Environmental Responsibility</li>
              <li>✓ Reliability & Trust</li>
              <li>✓ Innovation in Service</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Dhobell?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">Professional cleaning staff trained in handling all types of fabrics and stains.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Convenience</h3>
              <p className="text-gray-600">Free pickup and delivery at your preferred time and location.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">Using environmentally safe cleaning products and energy-efficient processes.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Visit Us</h2>
          <p className="text-gray-600 mb-2">123 Cleaning Street, City, State 12345</p>
          <p className="text-gray-600 mb-2">Email: contact@dhobell.com</p>
          <p className="text-gray-600">Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  );
}

export default About;