import React, { useState, useRef, useEffect, useContext } from 'react'
import { Link as RouterLink, useLocation } from "react-router-dom";
import gsap from 'gsap';
import Theme from '../Contexts/Theme.jsx';
import { IoMoonOutline } from 'react-icons/io5';
import { FiSun } from 'react-icons/fi';
import { RiMenuFill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { SupportBtn } from './SupportBtn.jsx';
import Magnet from './Animated/Magnet';

const navLinks = [
  {
    label: "Home",
    href: "/",
    aria: "Go to Home",
    isRouter: true,
  },
  {
    label: "About Us",
    href: "/aboutus",
    aria: "About Us",
    isRouter: true,
  },
  {
    label: "Contact Us",
    href: "/contactus",
    aria: "Contact Us",
    isRouter: true,
  },
  {
    label: "Track Your Parcel",
    href: "/track",
    aria: "Track Your Parcel",
    isRouter: true,
  },
];

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const loginRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useContext(Theme);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
      gsap.fromTo(loginRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.2, ease: "power2.out" }
      );
    }
  }, [isMenuOpen]);

  // Helper to render nav links with Magnet and animation
  const renderNavLink = (link, useMagnet = true) => {
    // Determine if the link is active
    let isActive = false;
    if (link.isRouter) {
      isActive = location.pathname === link.href;
    } else if (link.href.startsWith('#')) {
      isActive = location.hash === link.href;
    }

    const commonProps = {
      className: `cursor-pointer border-b-2 transition-all duration-300 relative group
        ${isActive ? 'border-blue-400' : 'border-transparent hover:border-blue-400'}`,
      "aria-label": link.aria,
    };
    const content = (
      <>
        {link.label}
        <span
          className={`absolute left-0 -bottom-0.5 h-0.5 bg-blue-400 transition-all duration-300
            ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
          style={{ transitionProperty: 'width' }}
        ></span>
      </>
    );
    if (link.isRouter) {
      return useMagnet ? (
        <Magnet padding={30} disabled={false} magnetStrength={15} key={link.label}>
          <RouterLink to={link.href} {...commonProps}>
            {content}
          </RouterLink>
        </Magnet>
      ) : (
        <RouterLink to={link.href} className="cursor-pointer" aria-label={link.aria} key={link.label}>
          {link.label}
        </RouterLink>
      );
    } else {
      return useMagnet ? (
        <Magnet padding={30} disabled={false} magnetStrength={15} key={link.label}>
          <a href={link.href} {...commonProps}>
            {content}
          </a>
        </Magnet>
      ) : (
        <a href={link.href} className="cursor-pointer" aria-label={link.aria} key={link.label}>
          {link.label}
        </a>
      );
    }
  };

  return (
    <nav className={`flex flex-wrap justify-between items-center p-5  
      ${isDarkMode ? 'bg-gray-900 backdrop-blur-lg text-white' : 'bg-[#F4F7FF]/30 backdrop-blur-lg text-black'} 
      transition-colors duration-300`}>
      <h1
        className="text-2xl uppercase cursor-none font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-blue-500 animate-gradient drop-shadow-[0_5px_15px_rgba(59,130,246,0.9)]"
      >
        1F5 Courier
      </h1>

      <div className="flex gap-10 justify-center items-start lg:items-center">
        {/* Hamburger Menu */}
        <div 
          className={`hamburger lg:hidden text-2xl z-50 cursor-pointer ${
            isDarkMode ? 'text-white' : 'text-black'
          }`} 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoMdClose /> : <RiMenuFill />}
        </div>

        <div ref={menuRef} className={`${
          isMenuOpen ? 'flex justify-center items-center lg:items-center' : 'hidden'
          } lg:flex flex-col lg:flex-row font-bold w-full lg:w-auto gap-5 text-lg
          absolute lg:static top-full left-0 right-0
          ${isDarkMode 
            ? 'bg-gray-900  lg:bg-transparent lg:backdrop-blur-none' 
            : 'bg-[#F4F7FF] lg:bg-transparent lg:backdrop-blur-none'
          }
          p-4 lg:p-0
          shadow-lg lg:shadow-none
          z-50
          transition-colors duration-300
        `}>
        <div className="flex flex-col justify-start lg:flex-row items-start lg:items-center gap-5">
          {navLinks.map(link => renderNavLink(link))}
          <Magnet padding={20} disabled={false} magnetStrength={15}>
            <SupportBtn />
          </Magnet>          
        </div>
        </div>

        <div className="theme cursor-pointer text-3xl" onClick={toggleTheme}>
          <Magnet padding={40} disabled={false} magnetStrength={11}>
            {isDarkMode ? <IoMoonOutline /> : <FiSun />}
          </Magnet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar2
