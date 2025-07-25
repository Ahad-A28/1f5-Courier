import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';

const Loading2 = () => {
  return (
    <div className="  flex justify-center items-center bg-gray-100 rounded-lg">
      <div className="text-center">
        <DotLottieReact
          src="https://lottie.host/09ef341d-1048-41f2-98d4-7692f87616db/BdDJyNudOk.lottie"
          loop
          autoplay
        />
      
        
        <h1 className="text-lg font-semibold text-gray-600">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading2;
