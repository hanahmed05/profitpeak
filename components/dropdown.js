import React, { useState } from 'react';

function Dropdown({ onOptionSelect }) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onOptionSelect(selectedValue); // Notify the parent component about the selected option
  };

  return (
    <div className="row"> 
      <span className="col-6">Desired Profit Margin:</span> 
        <span className="Dropdown col-5">
          <div className="dropdown-header">
            <select value={selectedOption} onChange={handleChange}>
              <option value="" disabled hidden>Select an Option</option>
              <option value="15%">15%</option>
              <option value="20%">20%</option>
              <option value="25%">25%</option>
              <option value="30%">30%</option>
              <option value="35%">35%</option>
              <option value="40%">40%</option>
            </select>
          </div>
        </span>
    </div>
  );
}

export default Dropdown;
