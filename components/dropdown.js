 import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="Dropdown">
        <div className = "dropdown-header">
      <h1>Desired Profit Margin:</h1> 
      <select value={selectedOption} onChange={handleChange}>
        <option value="" disabled hidden>Select an Option</option>
        <option value="15%">15%</option>
        <option value="20%">20%</option>
        <option value="25%">25%</option>
        <option value="30%">30%</option>
        <option value="35%">35%</option>
        <option value="40%">40%</option>
      </select>
      <p>Selected Option: {selectedOption || 'None'}</p>
      </div>
    </div>
  );
}

export default Dropdown;
