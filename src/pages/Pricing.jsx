import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pricing() {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 mb-8">Choose the plan that fits your laundry needs</p>
        </div>

        {/* Subscription Plans */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Subscription Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Standard Plan */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Standard Plan</h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">1-day delivery</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Weekly (20 items)</span>
                    <span className="font-medium text-lg">₹400</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly (80 items)</span>
                    <span className="font-medium text-lg">₹1,500</span>
                  </li>
                  <li className="text-gray-600 pt-4">✓ Regular cleaning</li>
                  <li className="text-gray-600">✓ Free pickup & delivery</li>
                  <li className="text-gray-600">✓ Eco-friendly detergents</li>
                </ul>
              </div>
              <button onClick={handleBookNow} className="w-full py-3 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-auto">Book Now</button>
            </div>

            {/* Quick Laundry Premium Plan */}
            <div className="border-2 border-green-500 rounded-lg p-6 relative hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="absolute -top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-green-600">Premium Plan</h3>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">Same-day delivery</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Weekly (20 items)</span>
                    <span className="font-medium text-lg">₹600</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly (80 items)</span>
                    <span className="font-medium text-lg">₹2,200</span>
                  </li>
                  <li className="text-gray-600 pt-4">✓ Premium cleaning</li>
                  <li className="text-gray-600">✓ Priority same-day service</li>
                  <li className="text-gray-600">✓ Free pickup & delivery</li>
                  <li className="text-gray-600">✓ Eco-friendly detergents</li>
                  <li className="text-gray-600">✓ Stain treatment included</li>
                </ul>
              </div>
              <button onClick={handleBookNow} className="w-full py-3 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-auto">Book Now</button>
            </div>

            {/* Bulk Plan */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Family Plan</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Best Value</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Weekly (50 items)</span>
                    <span className="font-medium text-lg">₹1,000</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-600">Monthly (200 items)</span>
                    <span className="font-medium text-lg">₹3,500</span>
                  </li>
                  <li className="text-gray-600 pt-4">✓ Premium cleaning</li>
                  <li className="text-gray-600">✓ Flexible scheduling</li>
                  <li className="text-gray-600">✓ Free pickup & delivery</li>
                  <li className="text-gray-600">✓ Family-size loads</li>
                  <li className="text-gray-600">✓ 15% bulk discount</li>
                </ul>
              </div>
              <button onClick={handleBookNow} className="w-full py-3 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-auto">Book Now</button>
            </div>

            {/* Corporate Plan */}
            <div className="border rounded-lg p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Corporate Plan</h3>
                  <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">Custom Solution</span>
                </div>
                <p className="text-gray-600 mb-4">For hostels/PGs/offices</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">₹10,000</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">Up to 600 items</p>
                  <ul className="space-y-3 mt-4">
                    <li className="text-gray-600">✓ Dedicated account manager</li>
                    <li className="text-gray-600">✓ Custom pickup schedule</li>
                    <li className="text-gray-600">✓ Priority processing</li>
                    <li className="text-gray-600">✓ Bulk pricing benefits</li>
                    <li className="text-gray-600">✓ Monthly billing option</li>
                  </ul>
                </div>
              </div>
              <button onClick={handleBookNow} className="w-full py-3 px-6 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5 mt-auto">Contact Sales</button>
            </div>
          </div>
        </div>

        {/* Per-Item Pricing */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Per-Item Pricing</h2>
            <div className="text-sm text-gray-500">All prices in ₹</div>
          </div>
          <div className="overflow-x-auto ring-1 ring-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Garment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Washing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Ironing</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">T-shirt</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹15</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹5</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹20</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Shirt</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹20</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹8</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹28</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Trouser/Jeans</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹25</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹35</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Saree</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹50</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹20</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹70</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Dhoti</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹30</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹40</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Kurta/Pyjama</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹25</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹35</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Salwar Kameez</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹40</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹15</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹55</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Lehenga</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹60</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹25</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹85</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Skirt</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹30</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹40</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Blouse</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹20</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹8</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹28</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Shorts</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹20</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹8</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹28</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Leggings</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹25</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹35</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Bedsheet (Single)</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹30</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹40</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Bedsheet (Double)</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹50</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹20</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹70</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Towel</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹15</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹0</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹15</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Undergarments</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹0</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Socks</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹10</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹0</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹10</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">Delicate Fabrics</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹40</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹15</td>
                  <td className="px-6 py-4 whitespace-nowrap font-medium">₹55</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>



        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm">* All plans include eco-friendly detergents and free pickup & delivery</p>
          <p className="text-sm mt-2">* First-time customers get 20% off their first order</p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;