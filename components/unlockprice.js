import React, { useState } from 'react';
import SimplePopup from './SimplePopup';

const UnlockPrice = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const buttonStyle = {
    position: 'center',
    top: '115%',
    left: '40%',
    transform: 'translate(30%, 10%)',
    fontsize: '16px',
    padding: '8px',
    fontWeight: 'bold',
    paddingTop: '15px',
    backgroundColor: 'white', // Set background color to white
    color: 'teal', // Set text color to black or any color you prefer
    border: '2px solid teal',
    boxShadow: isHovered ? '0 0 5px 2px white' : 'none', // Add boxShadow when clicked
    transition: 'box-shadow 0.3s ease-in-out' // Add a
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <div className="unlock-button btn btn-success" style={buttonStyle}>
        <button onClick={togglePopup}>
          <h5>Unlock Your Perfect Price!</h5>
        </button>
      </div>

      {showPopup && <SimplePopup />}
    </>
  );
};

export default UnlockPrice;
