import Image from 'next/image'
import React, { useState } from 'react';
import Rectangle from '../../components/rectangle';
import Divider from '../../components/divider';
import pplogo2Image from '../../components/pplogo2.png';
import Dropdown from '../../components/dropdown';
import HoursBox from '../../components/hoursbox';
import ProductionBox from '../../components/productionbox';
import UnlockPrice from '../../components/unlockprice';
import 'bootstrap/dist/css/bootstrap.min.css';
import DragDrop from '../../components/dragdrop';
import ProductForm from '../../components/ProductForm';

export default function Home() {
  const [timeInvestment, setTimeInvestment] = useState('');
  const [hours, setHours] = useState('');
  const [productionCost, setProductionCost] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const handleTimeInvestmentChange = (e) => setTimeInvestment(e.target.value);
  const handleHoursChange = (e) => setHours(e.target.value);
  const handleProductionCostChange = (e) => setProductionCost(e.target.value);
  const handleOptionSelect = (option) => setSelectedOption(option);

  return (
    <div className="m-1">
      <style jsx global>
        {`
          body {
            background: white;
            font-family: 'Righteous', sans-serif;;
            color: white;
            font-weight: 900;
          }
        `}
      </style>

      <div className='pb-8'> 
        <div className='flex items-center'>
          <Image src={pplogo2Image} alt="Logo" width={125} height={125} layout="fixed" className="mr-4 border-0" />
          <h1 className='text-3xl ml-0.2 mt-0.2'>
          </h1>
        </div>
      </div>
      <h2 className="text-center" style={{ fontFamily: 'Righteous, sans-serif' }}>
        To unlock your product's perfect price, share details below!
      </h2>

      <div className="App">
        <DragDrop />
      </div>
      <div className="col d-flex justify-content-center">
        <div className="p-0">
          <br />
          <div className="m-2">Time Investment:&nbsp;</div>
          <div className="m-2"> 
            <HoursBox />
            <input
              type="text"
              value={timeInvestment}
              onChange={handleTimeInvestmentChange}
            />
          </div>
          <div className="m-2">Production Cost:&nbsp; </div>
          <div className="m-2"> 
            <ProductionBox /> 
            <input 
              type="text"
              value={productionCost}
              onChange={handleProductionCostChange}
            />
          </div>
          <div className="m-2"> 
            <Dropdown onOptionSelect={handleOptionSelect} /> 
          </div>
          <div className='m-2'>
            <UnlockPrice style={{ fontSize: '10px', border: '2px solid #000', padding: '10px' }} />
          </div>
        </div>
      </div>

      {/* Now you can use selectedOption variable here */}
      <div>{selectedOption}</div>
    </div>
  );
}
