import React from 'react';
import './ComingSoon.css';
import Header from './Header';

function ComingSoon() {
  return (
    <div className="coming-soon">
      <Header />
      <div className="washer-container">
        <div className="washing-machine">
          <div className="machine-body">
            <div className="lid">
              <div className="water"></div>
              <div className="clothes">
                <span>👕</span>
                <span>👖</span>
                <span>👚</span>
              </div>
            </div>
            <div className="control-panel">
              <div className="dial"></div>
              <div className="buttons">
                <div className="button">
                  <div className="led"></div>
                </div>
                <div className="button">
                  <div className="led"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>Coming Soon</h1>
      <p>We're working hard to bring you an amazing laundry experience.</p>
      <p>Stay tuned!</p>
    </div>
  );
}

export default ComingSoon;