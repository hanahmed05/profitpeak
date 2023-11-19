
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import UploadTile from '../../components/uploadTile';
import Rectangle from '../../components/rectangle';
import Divider from '../../components/divider';
import ImageButton from '../../components/imageButton';
import Dropdown from '../../components/dropdown';
import Style from '../../components/style';

const uploadData = [
  {
    id: 1,
    name: 'Upload Pictures Here'
  }
];



export default function Home() {


/*{"result":{"message":{"role":"assistant","content":"The image shows a scenic 
natural landscape featuring a wooden boardwalk extending through a lush"},
"finish_details":{"type":"max_tokens"},"index":0}} 


<div>{JSON.stringify(data)}</div> 

const desiredData = data?.result?.message?.content;  
*/




return (
  <div>
    <div className='pb-8'>
       <img src="/path/to/your/logo.png" alt="Logo" className="mr-4" />
      <h1 className='text-3xl text-left'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Profit Peak </h1>
      <Divider />
    </div>
    <div>The image shows a scenic natural landscape featuring a wooden boardwalk extending through a lush</div>
    <div>
      Fetch data from an API in React
    </div>
    <functionWithButton />
    <div style={{ margin: '0', padding: '0' }}>
      <div>
        {uploadsData => (
          <UploadTile key={uploads.id} name={uploads.name} />
        )}
      </div>
      <div className="custom-text">
        Text with Times New Roman font
        <Dropdown />
      </div>
      <App />
    </div>
  </div>
)
}
