'use client';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [loadComponents, setLoad] = useState("...loading");
  const [gifUrl, setGifUrl] = useState('');
  const [humanGifUrl, setHumanGifUrl] = useState('');

  useEffect(() => {
    const fetchGif = async () => {
      try {
        const response = await fetch('https://media0.giphy.com/media/HfnDSEIlqr2zbclDwk/giphy.webp');
        const humanResponse = await fetch("https://cdn.pixabay.com/animation/2022/11/10/13/22/13-22-56-246_512.gif");

        if (!response.ok || !humanResponse.ok) {
          console.log(`Error fetching GIF: ${response.status}, Human GIF status: ${humanResponse.status}`);
        } else {
          setGifUrl(response.url);
          setHumanGifUrl(humanResponse.url);
          setLoad('');
        }
      } catch (error) {
        console.log(`This GIF did not render properly. Please restart your device. ${error}`);
      }
    };

    fetchGif();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white text-5xl min-h-screen space-y-8 px-4">
 
      <div className="py-4 bg-opacity-20 bg-gray-900 text-center text-lg font-semibold rounded-lg px-6 max-w-lg">
        Welcome to <span className="text-blue-400">JUST Pay</span> – The Future of Payments
      </div>


      <div className="font-bold flex items-center space-x-3">
        <span>JUST Pay {loadComponents}</span>
         
          <img 
            className="h-16 w-16 rounded-md" 
            src={gifUrl} 
            alt="Animated payment process" 
            loading="lazy"
          />
         
      </div>


      <p className="text-lg text-gray-300 text-center max-w-md">
        The easiest way to make secure and instant payments.
      </p>


      <div className="flex space-x-6">
        <button 
          type="button" 
          className="px-6 py-2 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-indigo-400 focus:outline-none"
        >
          Start Here
        </button>
        <button 
          type="button" 
          className="px-6 py-2 text-lg font-semibold rounded-full bg-gradient-to-r from-red-500 to-pink-600 shadow-lg transition duration-300 transform hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-pink-400 focus:outline-none"
        >
          Read More
        </button>
      </div>

      <div className="bg-white h-1 w-full max-w-md opacity-50 rounded-full mt-20 mx-auto"></div>


      <div className="text-center flex flex-col items-center space-y-4 mt-12 text-3xl">
        <h1 className="text-xl font-semibold">Together, we grow stronger!</h1>
        <div className="flex justify-center space-x-6">
           
            <img 
              className="h-16 w-16 rounded-md shadow-lg max-w-[80px] md:max-w-[100px]" 
              src={humanGifUrl} 
              alt="Supporters cheering animation"
              loading="lazy"
            />
          
        </div>
      </div>
    </div>
  );
};

export default Page;
