// LoadingSpinner.js
import React from 'react';
import './spinner.css'; // Import the CSS for the spinner

const LoadingSpinner = () => {
  return (
    <div className="loading-modal">
    <div className="loading-modal-content">
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>
    </div>
  </div>
  );
};

export default LoadingSpinner;
