import React, { useContext, useEffect } from 'react';
 
import { Link as RouterLink } from "react-router-dom"; // Update import
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Theme from '../../Contexts/Theme';
import ClickSpark from '../Animated/ClickSpark';
import GlareHover from '../Animated/GlareHover';
import Magnet from '../Animated/Magnet';

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  useEffect(() => {
    const tl1 = gsap.timeline();
    
    // Animate title and button
    tl1.from(".title h1", {
       scale: 0.5,
      opacity: 0,
      filter: "blur(10px)",
      duration: 1,
      stagger: 0.3,
    });
 
    tl1.from(".title p", {
      y: 500,
      opacity: 0,
      duration: 0.8,
    });
    tl1.from(".button .Tracking", {
      y: 100,
      opacity: 0,
      stagger: 0.4,
      duration: 0.3,
    })
 
    tl1.from(".button .Expoler-Services", {
      y: 100,
      opacity: 0,
      stagger: 0.5,
      duration: 0.3,
    })
    tl1.from(".scroll ", {
      scale: 0,
      opacity:0
          });
    

    // Animate OurPartners section with ScrollTrigger
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#OurPartners",
        start: "top center", // Animation starts when top of #OurPartners hits center of viewport
        toggleActions: "play none none reverse", // Play on enter, reverse on leave
      },
   
    
    });

    tl2.from(".ourParteners h1", {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power2.out",
    })
    
    tl2.from(".marque", {
      y: 100,
      opacity: 0,
      stagger: 0.5,
      duration: 0.5,
    });
  }, []);
  const [isDarkMode] = useContext(Theme)
  return (
     <div
      className={`banner  flex flex-col  mt-[5rem] items-center min-h-screen ${
        isDarkMode ? 'bg-gray-900' : 'bg-[#F4F7FF]'
      } transition-colors duration-300`}>
      <div className="title overflow-y-hidden touch-pan-y w-full max-w-[100vw] md:max-w-[100vw] lg:max-w-[60vw] mx-auto text-center px-4">
   
        <h1
          className='text-[3rem] sm:text-[2rem] md:text-[4rem] font-bold lg:text-[6rem] bg-gradient-to-r from-sky-400 to-blue-800 bg-clip-text text-transparent'

        >
         Courier /
          Cargo Solution
        </h1>
        <p
          className={`mb-10 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          } text-xl sm:text-xl md:text-2xl mt-4 mx-auto max-w-[90%]`}
        >
          We are a global delivery company specializing in sustainable and eco-friendly solutions for your cargo needs.
        </p>
      </div>
      <div className="button flex flex-col gap-3 sm:flex-row sm:gap-5 md:gap-7 mt-1 mx-auto items-center justify-center w-full max-w-[95vw]">
        <div className="w-full sm:w-auto flex justify-center">
          <Magnet padding={25} disabled={false} magnetStrength={10}>
            <RouterLink
              className='Tracking w-full sm:w-auto block text-lg sm:text-xl p-3 font-bold rounded-lg uppercase cursor-pointer bg-[#14B3FF] text-white shadow-xl hover:scale-105 hover:shadow-2xl text-center'
              to="/track"
            >
              Start Tracking Your Parcel
            </RouterLink>
          </Magnet>
        </div>
        <div className="w-full sm:w-auto flex justify-center">
          <Magnet padding={35} disabled={false} magnetStrength={10}>
            <a
              href="#Services"
              className="Expoler-Services w-full sm:w-auto block font-medium text-lg sm:text-xl p-3 rounded-lg uppercase bg-white text-black shadow-xl hover:scale-105 hover:shadow-2xl text-center"
            >
              Explore Our Services
            </a>
          </Magnet>
        </div>
      </div>

           

      <div className="scroll flex flex-col gap-4 justify-between items-center px-4 mt-10 mx-auto max-w-[90%]">
      <img className="w-[5rem]" src="/mouse.gif" alt="Mouse Indicator" />
      <p className={`${isDarkMode ? 'text-white' : 'text-black'}  text-lg`}>Scroll Down</p>
 
          </div>

      

      <div
        id="OurPartners"
        className="ourParteners touch-pan-y p-6 sm:p-10 mt-20 max-w-[900px] mx-auto overflow-hidden"
      >
        <h1
          className={` text-center p-5 text-3xl sm:text-4xl md:text-5xl font-bold mt-4 bg-gradient-to-r from-sky-300 to-blue-800 bg-clip-text text-transparent`}
        >
          Our Trusted Logistics Partners
        </h1>

        <div className="marqueContainer  touch-pan-y flex flex-wrap justify-center items-center gap-6 mt-10">
          <div className="marque">
            <img
              className="w-[40vw] sm:w-[30vw] md:w-[20vw] h-auto"
              src="/Our Partner Images/DHL.wine.svg"
              alt="DHL"
            />
          </div>
          <div className="marque " >
            <img
              className="w-[40vw] sm:w-[30vw] md:w-[20vw] h-auto"
              src="/Our Partner Images/FedEx-Logo.wine.svg"
              alt="FedEx"
            />
          </div>
          <div className="marque">
            <img
              className="w-[40vw] sm:w-[30vw] md:w-[20vw] h-auto"
              src="/Our Partner Images/the-professional-couriers-seeklogo.svg"
              alt="Professional Couriers"
            />
          </div>
          <div className="marque">
            <img
              className="w-[40vw] sm:w-[30vw] md:w-[20vw] h-auto"
              src="/Our Partner Images/United_Parcel_Service-Logo.wine.svg"
              alt="UPS"
            />
          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Banner;
