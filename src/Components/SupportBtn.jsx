import React, { useContext } from 'react'
import Theme from '../Contexts/Theme'

export const SupportBtn = () => {
 const [isDarkMode] = useContext(Theme) 
  
    return (

<>

<a
            href="https://buymeacoffee.com/ahadfsd28v"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex   items-center gap-2 px-2 py-2 rounded-lg transition-all duration-300 ${
              isDarkMode
                ? 'bg-[#2871CC] text-[#F4F7FF] hover:bg-[#214EB7]'
                : 'bg-[#3096E1] text-[#F4F7FF] hover:bg-[#214EB7]'
            } hover:transform hover:scale-105`}
          >
             ☕
            <span className="font-extrabold  text-[0.9rem] ">Support A Developer With Coffee</span>
          </a>

</>
  )
}
