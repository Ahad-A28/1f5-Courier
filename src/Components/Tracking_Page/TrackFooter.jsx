import React, { useContext } from 'react'
import Theme from '../../Contexts/Theme.jsx'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SupportBtn } from '../SupportBtn.jsx'
import Magnet from '../Animated/Magnet.jsx'

const TrackFooter = () => {
  const [isDarkMode] = useContext(Theme)
  return (
    <>
      <div className={`  border-t pt-5 w-full z-10 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#111827] border-gray-700 text-gray-200' 
          : 'bg-[#F4F7FF] border-gray-300 text-gray-800'
      }`}>
        <div className="container mx-auto px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center">
          {/* Developer Info */}
          <div className="flex flex-col justify-center items-center">
            <h1 className={`font-medium ${
              isDarkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Made By Ahad A28
            </h1>
            <div className="links flex justify-center items-center gap-4 mt-2">
              <a
                href="https://github.com/Ahad-A28"
                target="_blank"
                aria-label="Visit our GitHub profile"
                className={`text-3xl hover:translate-y-[-0.5rem] transition-all duration-200 ${
                  isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-800 hover:text-gray-600"
                }`}
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ahada28/"
                target="_blank"
                className="text-3xl text-[#2b62bf] hover:translate-y-[-0.5rem] transition-all duration-200 hover:text-[#1d4ed8]"
                aria-label="Visit our LinkedIn profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/ahad.a28/"
                target="_blank"
                aria-label="Visit our Instagram profile"
                className={`w-12 hover:translate-y-[-0.5rem] transition-all duration-200 ${
                  isDarkMode ? "text-gray-300 hover:text-gray-100" : "text-gray-800 hover:text-gray-600"
                }`}
              >
                <img src="/Instragram logo.png" alt="Instagram logo" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col  md:flex-row   items-center space-y-4 md:space-y-0 md:space-x-4 mt-6 md:mt-0">
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              Copyright © 2025 1F5 Courier | All rights reserved
            </p>

           <Magnet padding={20} disabled={false} magnetStrength={20}>
            <SupportBtn />
            </Magnet> 
          </div>
      
          
        </div>
      </div>
    </>
  )
}

export default TrackFooter