import React from "react";
import vc from "../assets/images/vc1.mp4";

const Bgvdo = () => {
  return (  
    <div className="relative flex item-center justify-center h-screen">
      <div className="relative z-30 text-white text-2xl">
        hari
      </div>
      <div className="overlay">
        <video
          className="absolute z-10 min-w-full min-h-full max-w-none w-auto"
          src={vc}
          autoPlay
          loop
          muted
        />
      </div>
      
    </div>
  );
};

export default Bgvdo;
