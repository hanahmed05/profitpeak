import React, { useState } from 'react';
import SimplePopup from './SimplePopup';

const UnlockPrice = () => {
  const [showPopup, setShowPopup] = useState(false);
  
  const buttonStyle = {
    position: 'absolute',
    top: '135%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div style={shouldDisplayDiv ? { display: 'inline-block' } : { display: 'none' }}>
      <div className="unlock-button btn btn-success" style={buttonStyle}>
        <button onClick={togglePopup}>
          Unlock Your Perfect Price!
        </button>
      </div>
    </div>
  );
};

export default UnlockPrice;