import React, { useContext, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import Navbar from "./Components/Landing_page/Navbar";
import Banner from "./Components/Landing_page/Banner";
import Services from "./Components/Landing_page/Services";
import WhyChooseUs from "./Components/Landing_page/WhyChooseUs";
import FAQ from "./Components/Landing_page/FAQ";
import Footer from "./Components/Landing_page/Footer";
 
import ClickSpark from "./Components/Animated/ClickSpark";
import Lenis from 'lenis'
import Theme from "./Contexts/Theme";
 
 
const App = () => {
  const [isDarkMode] = useContext(Theme);
useEffect(() => {
// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});



},[])



  return (
    <>
      <Helmet>
        <title>1F5 Courier - Reliable Package Delivery Service</title>
        <meta name="description" content="1F5 Courier Service offers reliable, efficient, and safe package delivery services. Trust us for fast and secure shipping solutions tailored to your needs." />
        <meta name="keywords" content="courier service, package delivery, shipping, logistics, reliable courier, fast delivery, secure shipping, 1F5 Courier" />
        <meta property="og:title" content="1F5 Courier - Reliable Package Delivery Service" />
        <meta property="og:description" content="1F5 Courier Service offers reliable, efficient, and safe package delivery services. Trust us for fast and secure shipping solutions tailored to your needs." />
        <meta property="og:image" content="https://1f5.in/favioc/favicon.ico" />
        <meta property="og:url" content="https://1f5.in/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ClickSpark
  sparkColor= {`${isDarkMode ? '#fff' : '#000'}`}
  sparkSize={10}
  sparkRadius={15}
  sparkCount={8}
  duration={400}
>

<main 
        id="main"
        className={`${
          isDarkMode ? "bg-gray-900" : "bg-[#F4F7FF]"
        } min-h-screen transition-colors duration-300 touch-pan-y`}
      >
         
        <Navbar />
        <Banner />
        <Services />
        <WhyChooseUs />
        <FAQ />
        <Footer />
      </main>
 
  </ClickSpark>
     
    </>
  );
};

export default App;
