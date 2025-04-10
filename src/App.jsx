import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import ComingSoon from './components/ComingSoon';
import WebView from './components/WebView';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Home from './pages/Home';
import YourOrders from './pages/YourOrders';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/preview" element={<WebView url="http://localhost:5173" title="Preview" />} />
          <Route path="/your-orders" element={<YourOrders />} />
          <Route path="*" element={<Navigate to="/coming-soon" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
