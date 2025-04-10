import React, { useState, useEffect } from 'react';
import '../components/YourOrders.css';
import confetti from 'canvas-confetti';

const orderStatuses = [
  { id: 1, status: 'Order Placed', icon: '📝' },
  { id: 2, status: 'Pickup Scheduled', icon: '🛵' },
  { id: 3, status: 'Picked Up', icon: '✅' },
  { id: 4, status: 'In Laundry', icon: '🧺' },
  { id: 5, status: 'Washing', icon: '💧' },
  { id: 6, status: 'Drying', icon: '☀️' },
  { id: 7, status: 'Ironing', icon: '👕' },
  { id: 8, status: 'Folding', icon: '📦' },
  { id: 9, status: 'Quality Check', icon: '✨' },
  { id: 10, status: 'Out for Delivery', icon: '🛵' },
  { id: 11, status: 'Delivered', icon: '🎉' },
];

const YourOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    const storedOrders = localStorage.getItem('orders');
    if (storedOrders) {
      try {
        setOrders(JSON.parse(storedOrders));
      } catch (error) {
        console.error("Failed to parse orders from localStorage:", error);
        setOrders([]);
      }
    }
  }, []);

  useEffect(() => {
    if (selectedOrder) {
      const interval = setInterval(() => {
        setCurrentStatusIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= orderStatuses.length) {
            clearInterval(interval);
            return prevIndex;
          }
          return nextIndex;
        });
      }, 5000);

      if (currentStatusIndex === orderStatuses.length - 1) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }

      return () => clearInterval(interval);
    }
  }, [selectedOrder, currentStatusIndex]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    setCurrentStatusIndex(order.currentStatus - 1);
    setShowMap(false);
  };

  const handleTrackOrder = () => {
    setShowMap(true);
  };

  const isTrackable = (statusId) => {
    return [2, 3, 10].includes(statusId); // Pickup Scheduled, Picked Up, Out for Delivery
  };

  return (
    <div className="your-orders">
      <h1>Your Orders</h1>
      
      <div className="orders-container">
        <div className="orders-list">
          {orders.map((order) => (
            <div
              key={order.id}
              className={`order-card ${selectedOrder?.id === order.id ? 'selected' : ''}`}
              onClick={() => handleOrderClick(order)}
            >
              <h3>Order #{order.orderNumber}</h3>
              <p>Date: {order.date}</p>
              <p>Items: {order.items.join(', ')}</p>
              <p>Total: ₹{order.total}</p>
              <p>Status: {orderStatuses[order.currentStatus - 1].status}</p>
            </div>
          ))}
        </div>

        {!selectedOrder ? (
          <div className="order-details welcome-message">
            <h2>Welcome to Your Orders</h2>
            <p>Select an order from the list to view its details and track its progress.</p>
            <div className="empty-state-icon">📋</div>
          </div>
        ) : (
          <div className="order-details">
            <h2>Order Details</h2>
            {!showMap ? (
              <div className="timeline">
                {orderStatuses.map((status) => (
                  <div
                    key={status.id}
                    className={`timeline-item ${status.id <= orderStatuses[currentStatusIndex].id ? 'completed' : ''} ${status.id === orderStatuses[currentStatusIndex].id ? 'current' : ''}`}
                  >
                    <div className="timeline-icon">{status.icon}</div>
                    <div className="timeline-content">
                      <h4>{status.status}</h4>
                      {isTrackable(status.id) && status.id === orderStatuses[currentStatusIndex].id && (
                        <button
                          className="track-button"
                          onClick={handleTrackOrder}
                        >
                          Track Order Location
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="map-view">
                <button className="back-button" onClick={() => setShowMap(false)}>Back to Timeline</button>
                <div className="map-container">
                  <div className="map-placeholder">
                    <p>Order Location Tracking</p>
                    <p className="small-text">Map view would be integrated here</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default YourOrders;