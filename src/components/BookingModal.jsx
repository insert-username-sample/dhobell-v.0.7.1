import React, { useState, useEffect, useRef } from 'react';
import './BookingModal.css';

function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [itemCount, setItemCount] = useState({});
  const [isDryCleaning, setIsDryCleaning] = useState(false);
  const [isExpress, setIsExpress] = useState(false);
  const [address, setAddress] = useState({
    street: '',
    city: '',
    pincode: '',
    landmark: ''
  });
  const [location, setLocation] = useState(null);
  const [loginMethod, setLoginMethod] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const mapRef = useRef(null);
  
  const services = [
    {
      id: 'laundry',
      name: 'Laundry',
      description: 'Professional washing with eco-friendly detergents (includes free ironing)',
      icon: '🧺'
    },
    {
      id: 'dry-cleaning',
      name: 'Dry Cleaning',
      description: 'Eco-friendly dry cleaning for delicate fabrics (includes free ironing)',
      icon: '🌿'
    },
    {
      id: 'ironing',
      name: 'Ironing Only',
      description: 'Expert steam iron pressing for wrinkle-free clothes',
      icon: '👔'
    },
    {
      id: 'express',
      name: 'Dhobell Express',
      description: '30-45 minute delivery service with priority handling',
      icon: '⚡'
    }
  ];

  const items = [
    { id: 'tshirt', name: 'T-Shirts', price: { laundry: 15, ironing: 5, 'laundry-ironing': 20, 'dry-cleaning': 25, 'dry-cleaning-iron': 30, 'express': 23 } },
    { id: 'shirt', name: 'Shirts', price: { laundry: 20, ironing: 8, 'laundry-ironing': 28, 'dry-cleaning': 30, 'dry-cleaning-iron': 38, 'express': 30 } },
    { id: 'jeans', name: 'Jeans/Trousers', price: { laundry: 25, ironing: 10, 'laundry-ironing': 35, 'dry-cleaning': 40, 'dry-cleaning-iron': 50, 'express': 38 } },
    { id: 'saree', name: 'Saree', price: { laundry: 50, ironing: 20, 'laundry-ironing': 70, 'dry-cleaning': 80, 'dry-cleaning-iron': 100, 'express': 75 } },
    { id: 'dhoti', name: 'Dhoti', price: { laundry: 30, ironing: 10, 'laundry-ironing': 40, 'dry-cleaning': 45, 'dry-cleaning-iron': 55, 'express': 45 } },
    { id: 'kurta', name: 'Kurta/Pyjama', price: { laundry: 25, ironing: 10, 'laundry-ironing': 35, 'dry-cleaning': 40, 'dry-cleaning-iron': 50, 'express': 38 } },
    { id: 'salwar', name: 'Salwar Kameez', price: { laundry: 40, ironing: 15, 'laundry-ironing': 55, 'dry-cleaning': 60, 'dry-cleaning-iron': 75, 'express': 60 } },
    { id: 'lehenga', name: 'Lehenga', price: { laundry: 60, ironing: 25, 'laundry-ironing': 85, 'dry-cleaning': 100, 'dry-cleaning-iron': 125, 'express': 90 } },
    { id: 'skirt', name: 'Skirt', price: { laundry: 30, ironing: 10, 'laundry-ironing': 40, 'dry-cleaning': 45, 'dry-cleaning-iron': 55, 'express': 45 } },
    { id: 'blouse', name: 'Blouse', price: { laundry: 20, ironing: 8, 'laundry-ironing': 28, 'dry-cleaning': 30, 'dry-cleaning-iron': 38, 'express': 30 } },
    { id: 'shorts', name: 'Shorts', price: { laundry: 20, ironing: 8, 'laundry-ironing': 28, 'dry-cleaning': 30, 'dry-cleaning-iron': 38, 'express': 30 } },
    { id: 'leggings', name: 'Leggings', price: { laundry: 25, ironing: 10, 'laundry-ironing': 35, 'dry-cleaning': 35, 'dry-cleaning-iron': 45, 'express': 38 } },
    { id: 'bedsheet-single', name: 'Bedsheet (Single)', price: { laundry: 30, ironing: 10, 'laundry-ironing': 40, 'dry-cleaning': 45, 'dry-cleaning-iron': 55, 'express': 45 } },
    { id: 'bedsheet-double', name: 'Bedsheet (Double)', price: { laundry: 50, ironing: 20, 'laundry-ironing': 70, 'dry-cleaning': 75, 'dry-cleaning-iron': 95, 'express': 75 } },
    { id: 'towel', name: 'Towel', price: { laundry: 15, ironing: 0, 'laundry-ironing': 15, 'dry-cleaning': 20, 'dry-cleaning-iron': 20, 'express': 23 } },
    { id: 'undergarments', name: 'Undergarments', price: { laundry: 10, ironing: 0, 'laundry-ironing': 10, 'dry-cleaning': 15, 'dry-cleaning-iron': 15, 'express': 15 } },
    { id: 'socks', name: 'Socks', price: { laundry: 10, ironing: 0, 'laundry-ironing': 10, 'dry-cleaning': 15, 'dry-cleaning-iron': 15, 'express': 15 } },
    { id: 'delicate', name: 'Delicate Fabrics', price: { laundry: 40, ironing: 15, 'laundry-ironing': 55, 'dry-cleaning': 60, 'dry-cleaning-iron': 75, 'express': 60 } }
  ];

  const calculateTotal = () => {
    let total = 0;
    Object.entries(itemCount).forEach(([itemId, count]) => {
      const item = items.find(i => i.id === itemId);
      if (item && selectedService) {
        total += item.price[selectedService.id] * count;
      }
    });
    
    // Apply bulk discount
    const totalItems = Object.values(itemCount).reduce((sum, count) => sum + count, 0);
    if (totalItems >= 10) {
      total = total * 0.9; // 10% discount
    }

    // Add express service charge if selected
    if (isExpress) {
      total = total * 1.5; // 50% extra for express service
    }
    
    return Math.round(total);
  };

  const handlePlaceOrder = () => {
    // Create new order object
    const newOrder = {
      id: Date.now(),
      orderNumber: `ORD${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      items: Object.entries(itemCount).map(([itemId, count]) => {
        const item = items.find(i => i.id === itemId);
        return `${count} ${item.name}`;
      }),
      total: calculateTotal(),
      currentStatus: 1,
      timeRemaining: 600
    };

    // Get existing orders from localStorage
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    // Add new order to the beginning of the array
    const updatedOrders = [newOrder, ...existingOrders];
    
    // Save to localStorage
    localStorage.setItem('orders', JSON.stringify(updatedOrders));

    // Close modal and redirect to orders page
    onClose();
    window.location.href = '/your-orders';
  }

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    
    // Set express service flag if express service is selected
    if (service.id === 'express') {
      setIsExpress(true);
    } else {
      setIsExpress(false);
    }
    
    // Set dry cleaning flag if any dry cleaning service is selected
    if (service.id === 'dry-cleaning' || service.id === 'dry-cleaning-iron') {
      setIsDryCleaning(true);
    } else {
      setIsDryCleaning(false);
    }
    
    setStep(2);
  };

  const handleItemCountChange = (itemId, count) => {
    setItemCount(prev => ({
      ...prev,
      [itemId]: Math.max(0, count)
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    // Handle order submission by calling the function that saves and redirects
    handlePlaceOrder();
    // Note: onClose() is called within handlePlaceOrder, so no need to call it here again.
  };

  const isAddressComplete = () => {
    return address.street && address.city && address.pincode;
  };

  // Initialize Google Maps when component mounts
  useEffect(() => {
    if (isOpen && step === 3 && mapRef.current) {
      // This would be replaced with actual Google Maps API integration
      console.log('Initializing Google Maps');
      // Simulating map initialization
      const mockMap = {
        setCenter: (coords) => console.log('Map centered at:', coords),
        setZoom: (level) => console.log('Zoom level set to:', level)
      };
      
      // In a real implementation, we would use:
      // const map = new google.maps.Map(mapRef.current, {
      //   center: { lat: 28.6139, lng: 77.2090 }, // Default to Delhi
      //   zoom: 12
      // });
      
      // Get user's current location if permitted
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            setLocation(userLocation);
            mockMap.setCenter(userLocation);
            // In real implementation: map.setCenter(userLocation);
            
            // Reverse geocode to get address
            console.log('Getting address from coordinates:', userLocation);
            // Simulating address lookup
            setTimeout(() => {
              setAddress({
                street: '123 Sample Street',
                city: 'New Delhi',
                pincode: '110001',
                landmark: ''
              });
            }, 1000);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      }
    }
  }, [isOpen, step]);

  // Handle user info changes
  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle social login
  const handleSocialLogin = (method) => {
    setLoginMethod(method);
    // In a real implementation, this would trigger OAuth flow
    console.log(`Logging in with ${method}`);
    
    // Simulate successful login
    setTimeout(() => {
      setUserInfo({
        name: 'Manas Khobrekar',
        email: 'manas.khobrekar@example.com',
        phone: '9876543210'
      });
      setStep(5); // Skip to review
    }, 1000);
  };

  // Check if user info is complete
  const isUserInfoComplete = () => {
    return userInfo.name && userInfo.email && userInfo.phone;
  };

  // Check if items are selected
  const hasItems = () => {
    return Object.values(itemCount).some(count => count > 0);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        {/* Progress indicator */}
        <div className="progress-steps">
          {[1, 2, 3, 4, 5].map((stepNumber) => (
            <div 
              key={stepNumber} 
              className={`progress-step ${stepNumber <= step ? 'active' : ''}`}
              onClick={() => stepNumber < step && setStep(stepNumber)}
            >
              {stepNumber}
            </div>
          ))}
        </div>
        {/* Removed the progress-line div */}
        
        {/* Step 1: Service Selection */}
        {step === 1 && (
          <div className="service-selection">
            <h2 className="text-2xl font-semibold mb-6">Select a Service</h2>
            <p className="step-description">Choose the service you need for your clothes</p>
            
            <div className="services-grid">
              {services.map(service => (
                <div
                  key={service.id}
                  className={`service-card ${selectedService?.id === service.id ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="service-icon">{service.icon}</div>
                  <div className="service-details">
                    <h3 className="text-lg font-medium">{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="item-selection">
            <h2 className="text-2xl font-semibold mb-6">Select Items</h2>
            <div className="items-list">
              {items.map(item => (
                <div key={item.id} className="item-row">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="text-sm text-gray-600 block">₹{item.price[selectedService.id]}/piece</span>
                  </div>
                  <div className="item-counter">
                    <button onClick={() => handleItemCountChange(item.id, (itemCount[item.id] || 0) - 1)}>-</button>
                    <span>{itemCount[item.id] || 0}</span>
                    <button onClick={() => handleItemCountChange(item.id, (itemCount[item.id] || 0) + 1)}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total-section">
              <p className="text-lg">Total Items: {Object.values(itemCount).reduce((sum, count) => sum + count, 0)}</p>
              <p className="text-xl font-semibold">Total Amount: ₹{calculateTotal()}</p>
              {Object.values(itemCount).reduce((sum, count) => sum + count, 0) >= 10 && (
                <p className="discount-note">10% bulk discount applied!</p>
              )}
            </div>
            <div className="modal-actions">
              <button className="secondary" onClick={() => setStep(1)}>Back</button>
              <button 
                className="primary" 
                onClick={() => setStep(3)} 
                disabled={Object.values(itemCount).every(count => count === 0)}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="location-section">
            <h2 className="text-2xl font-semibold mb-6">Delivery Location</h2>
            <p className="step-description">Select your location for pickup and delivery</p>
            
            <div className="map-container" ref={mapRef}>
              {/* Google Maps would be rendered here */}
              <div className="map-placeholder">
                <div className="map-overlay">
                  <p>Google Maps would appear here</p>
                  <p className="small-text">For demo purposes, we're showing a placeholder</p>
                </div>
              </div>
            </div>
            
            <div className="address-form">
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input
                  type="text"
                  name="street"
                  value={address.street}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Enter your street address"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    name="city"
                    value={address.city}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="City"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-1">PIN Code</label>
                  <input
                    type="text"
                    name="pincode"
                    value={address.pincode}
                    onChange={handleAddressChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                    placeholder="PIN Code"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-1">Landmark (Optional)</label>
                <input
                  type="text"
                  name="landmark"
                  value={address.landmark}
                  onChange={handleAddressChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                  placeholder="Nearby landmark"
                />
              </div>
            </div>
            
            <div className="modal-actions mt-6">
              <button className="secondary" onClick={() => setStep(2)}>Back</button>
              <button 
                className="primary" 
                onClick={() => setStep(4)}
                disabled={!isAddressComplete()}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="user-info-section">
            <h2 className="text-2xl font-semibold mb-6">Your Information</h2>
            <p className="text-gray-600 mb-8">Provide your contact details or sign in with a social account</p>
            
            <div className="social-login mb-8">
              <p className="text-center text-gray-700 font-medium mb-4">Quick sign in with:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
                <button 
                  className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => handleSocialLogin('Google')}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Google
                </button>
                <button 
                  className="flex items-center justify-center gap-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => handleSocialLogin('Apple')}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.86-3.08.38-1.08-.5-2.07-.48-3.2 0-1.42.61-2.16.44-3.04-.38C4.26 16.76 4.7 11.65 8.4 11.32c1.2-.12 2.07.39 2.83.77.6.3 1.08.54 1.77.54.65 0 1.11-.23 1.69-.52.81-.39 1.74-.91 3.03-.77 1.13.12 2.08.58 2.7 1.32-2.45 1.42-2.05 4.93.33 5.95-.35.82-.82 1.41-1.43 1.89l-.01.01-.26.27zM15.33 6.3c.75-.95 1.3-2.28 1.13-3.62-1.24.06-2.68.84-3.53 1.85-.77.92-1.39 2.26-1.2 3.57 1.35.05 2.74-.77 3.6-1.8z"/>
                  </svg>
                  Apple
                </button>
              </div>
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 text-gray-500 bg-white">Or continue with</span>
              </div>
            </div>
            
            <div className="max-w-md mx-auto space-y-6">
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleUserInfoChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleUserInfoChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleUserInfoChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>
            
            <div className="modal-actions mt-8">
              <button className="secondary" onClick={() => setStep(3)}>Back</button>
              <button 
                className="primary" 
                onClick={() => setStep(5)}
                disabled={!isUserInfoComplete()}
              >
                Review Order
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="review-section">
            <h2 className="text-2xl font-semibold mb-6">Review Your Order</h2>
            <p className="step-description">Please confirm your order details</p>
            
            <div className="order-summary">
              <div className="summary-group">
                <h3 className="summary-title">Service Details</h3>
                <div className="summary-content">
                  <div className="summary-item">
                    <span>Service Type</span>
                    <span>{selectedService.name}</span>
                  </div>
                  {isExpress && (
                    <div className="summary-item">
                      <span>Express Service</span>
                      <span>Yes (+50%)</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="summary-group">
                <h3 className="summary-title">Items</h3>
                <div className="summary-content">
                  {Object.entries(itemCount)
                    .filter(([_, count]) => count > 0)
                    .map(([itemId, count]) => {
                      const item = items.find(i => i.id === itemId);
                      return (
                        <div key={itemId} className="summary-item">
                          <span>{item.name} × {count}</span>
                          <span>₹{item.price[selectedService.id] * count}</span>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="summary-group">
                <h3 className="summary-title">Delivery Address</h3>
                <div className="summary-content">
                  <p>{address.street}</p>
                  <p>{address.city}, {address.pincode}</p>
                  {address.landmark && <p>Landmark: {address.landmark}</p>}
                </div>
              </div>

              <div className="summary-group">
                <h3 className="summary-title">Contact Details</h3>
                <div className="summary-content">
                  <p>{userInfo.name}</p>
                  <p>{userInfo.email}</p>
                  <p>{userInfo.phone}</p>
                </div>
              </div>

              <div className="summary-total">
                <span>Total Amount</span>
                <span>₹{calculateTotal()}</span>
              </div>
            </div>

            <div className="modal-actions">
              <button className="secondary" onClick={() => setStep(4)}>Back</button>
              <button className="primary" onClick={handleSubmit}>Place Order</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;