import React from 'react';
import './PricingTable.css';

function PricingTable() {
  return (
    <table className="pricing-table">
      <thead>
        <tr>
          <th>GARMENT</th>
          <th>WASHING</th>
          <th>IRONING</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>T-shirt</td>
          <td>₹15</td>
          <td>₹5</td>
          <td>₹20</td>
        </tr>
        <tr>
          <td>Shirt</td>
          <td>₹20</td>
          <td>₹8</td>
          <td>₹28</td>
        </tr>
        <tr>
          <td>Trouser/Jeans</td>
          <td>₹25</td>
          <td>₹10</td>
          <td>₹35</td>
        </tr>
        <tr>
          <td>Saree</td>
          <td>₹50</td>
          <td>₹20</td>
          <td>₹70</td>
        </tr>
        <tr>
          <td>Dhoti</td>
          <td>₹30</td>
          <td>₹10</td>
          <td>₹40</td>
        </tr>
      </tbody>
    </table>
  );
}

export default PricingTable;