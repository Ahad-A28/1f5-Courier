import React, { useContext, useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import Theme from '../../Contexts/Theme';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import GlareHover from '../Animated/GlareHover';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // GSAP timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#WhyChooseUs",
          start: "top 75%", // Adjust trigger points
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      // Heading animation
      tl.from(".left h1", {
        opacity: 0,
        scale: 0,
        duration: 1,
      });

      // Cards animation
      tl.from("#WhyChooseUs .card > div", {
        y: 100,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2, // Stagger child animations
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);
  
  const [isDarkMode] = useContext(Theme);
  
  return (
    <div
      id="WhyChooseUs"
      className={`${
        isDarkMode ? 'bg-gray-900' : 'bg-[#F4F7FF]'
      } p-10 flex flex-col justify-center items-center touch-pan-y`}
    >
      <div className="left px-4 sm:px-6 md:px-8 lg:px-10">
        <h1 className="text-3xl p-5  sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-[#3361C0] via-[#5798DD] to-[#5494DB] text-transparent bg-clip-text">
          Why choose us for your service
        </h1>
      </div>

      <div className="card flex flex-wrap justify-center items-center gap-10 mt-10 px-4 sm:px-6 md:px-8 lg:px-10">
        
      <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.8}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={1200}
    playOnce={false}
  >
       <div className="child cursor-pointer   border-1  border-blue-400   flex flex-col justify-center items-center gap-4 border-2 rounded-lg shadow-lg  bg-white p-6 sm:p-8 w-full sm:w-[18rem] md:w-[20rem]">
        <div className="w-full flex justify-center">
          <DotLottieReact
            src="https://lottie.host/e89ec9f1-d089-4f7c-8bab-5e1f5ca0b9ee/J1ot9jnffs.lottie"
            loop
            autoplay
            style={{ width: "18rem", height: "11rem", objectFit: "contain" }}
            className="object-contain w-full h-[11rem] max-w-[18rem]"
          />
        </div>
          <h1 className="text-3xl font-black">24 X 7 Support</h1>
          <p>Seamless Help, Anytime, Anywhere.</p>
        </div>
  </GlareHover>
   
  <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.8}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={1200}
    playOnce={false}
  >
        <div className="child cursor-pointer   border-1  border-blue-400  flex flex-col justify-center items-center gap-4 border-2 rounded-lg shadow-lg bg-white p-6 sm:p-8 w-full sm:w-[18rem] md:w-[20rem]">
        <video
          src="/WhyToChoose-Page-images/Order-Tracking.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-contain h-[11rem]"
        ></video>
          <h1 className="text-3xl font-black text-center">Live Order Tracking</h1>
          <p>Stay Informed, Stay in Control.</p>
        </div>
        </GlareHover>
        <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.8}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={1200}
    playOnce={false}
  >
        <div className="child cursor-pointer   border-1  border-blue-400  flex flex-col justify-center items-center gap-4 border-2 rounded-lg shadow-lg bg-white p-6 sm:p-8 w-full sm:w-[18rem] md:w-[20rem]">
        <DotLottieReact
      src="https://lottie.host/49282150-61ee-4964-b5bd-ca637a19f047/Kz3hDUDBMs.lottie"
      loop
      autoplay
        style={{ width: "18rem", height: "11rem", objectFit: "contain" }}
            className="object-cover w-full h-[11rem] max-w-[18rem]"
    />
          <h1 className="text-3xl font-black">Cost Save</h1>
          <p>Maximizing Value, Minimizing Costs.</p>
        </div>
        </GlareHover>   
        <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.8}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={1200}
    playOnce={false}
  >
        <div className="child cursor-pointer   border-1  border-blue-400  flex flex-col justify-center items-center gap-4 border-2 rounded-lg shadow-lg bg-white p-6 sm:p-8 w-full sm:w-[18rem] md:w-[20rem]">
        <video
          src="/WhyToChoose-Page-images/dron-delivery.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-contain"
        ></video>
          <h1 className="text-3xl font-black">Drone Delivery</h1>
          <p>Revolutionizing Delivery with Technology.</p>
        </div>
  </GlareHover>
        <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.8}
    glareAngle={-30}
    glareSize={300}
    transitionDuration={1200}
    playOnce={false}
  >
        <div className="child cursor-pointer   border-1  border-blue-400  flex flex-col justify-center items-center gap-4 border-2 rounded-lg shadow-lg bg-white p-6 sm:p-8 w-full sm:w-[18rem] md:w-[20rem] overflow-hidden">
        <DotLottieReact
      src="https://lottie.host/154a9911-57d5-4c29-b1d9-1f32c33d04b3/RjXFrI7n4l.lottie"
      loop
      autoplay
              style={{ width: "20rem", height: "17rem", objectFit: "contain" }}
            className="object-contain  h-[17rem] w-[20rem]"
    />
          <h1 className="text-3xl font-black">Fast Delivery</h1>
          <p>Lightning-fast, reliable delivery.</p>
        </div>
        </GlareHover>
      </div>
    </div>
  );
};

export default WhyChooseUs;
