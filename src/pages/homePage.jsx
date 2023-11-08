// import React, { useEffect } from 'react';

const HomePage = () => {
  

  return (
    <div >
      <div className="flex flex-col w-1/2 mt-20 ml-16">
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Experience The Fusion
        </h1>
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          of Technology and
        </h1>
        <h1 className="text-3xl font-bold text-white md:text-5xl">
          Culture
        </h1>

        <h3 className='mt-5 text-white'>Join us for an unforgettable celebration of innovation and creativity</h3>

        <div>
          <button className='h-10 px-3 mt-5 ml-2 text-gray-400 transition duration-300 ease-in-out border border-gray-500 rounded hover:border-blue-500 w-19 ml-60 mr-60 hover:bg-blue-500 hover:text-white'>
            Learn More
          </button>
        </div>
      </div>

      <div className='ml-50'></div>
    </div>
  );
};

export default HomePage;
