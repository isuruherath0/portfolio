'use client';

import {useState} from 'react';


export default function ThemeToggle() {
    const [isDarkMode , setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }
    return(
     <button
     role ="switch"
     aria-checked= {isDarkMode}
     onClick={toggleTheme}
     className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
        isDarkMode ? 'bg-gray-800' : 'bg-gray-300'
      }`}
     >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
          isDarkMode ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
     </button>
    )
}