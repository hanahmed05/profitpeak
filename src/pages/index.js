import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import UploadTile from '../../components/UploadTile';
/*
export default function Home() {
  const[Data, setData] = useState('')

  useEffect(() => {
    const fetchData = async () => {
        const response = await fetch('/../api/gpt4')
          .then(response=>response.json())
          .then(data=>console.log(data));

        const data = await response.json();
        setData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <div>{JSON.stringify(data)}</div>
        Fetch data from an API in React
      </div>
    </div>
  );
}
*/

export default function Home() {
  const [data, setData] = useState('');

  /*
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/gpt4');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  */

/*{"result":{"message":{"role":"assistant","content":"The image shows a scenic 
natural landscape featuring a wooden boardwalk extending through a lush"},
"finish_details":{"type":"max_tokens"},"index":0}} 


<div>{JSON.stringify(data)}</div> 

const desiredData = data?.result?.message?.content;
      
      
*/




  return (
    <div>
      <div>The image shows a scenic natural landscape
        featuring a wooden boardwalk extending through a lush</div>
      <UploadTile />
      <div>
        Fetch data from an API in React
      </div>
    </div>
  );
}