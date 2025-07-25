import React from 'react';
import { Link } from "react-router-dom"; // Change from react-router

const Done = () => {
  return (
    <div className="done flex justify-center">
      <div className="flex flex-col items-center mt-10 backdrop-blur-lg rounded-xl">
        <img 
          className="h-[10rem] w-[10rem]" 
          src="/Cardimages/Animation.gif" 
          alt="" 
        />
        <p className="font-semibold uppercase">
          Your Form is Submitted successfully
        </p>
        <p className="text-zinc-500 font-semibold capitalize">
          We will reach to you as soon as possible
        </p>
        <Link 
          className="mt-4 text-lg rounded-lg p-2 font-semibold uppercase" 
          to="/"
          aria-label="Return to Homepage"
        >
          <i className="fa-solid fa-left-long mr-3 mt-2"></i>
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Done;