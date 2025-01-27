"use client";

import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(() => {
        // Initialize darkMode based on localStorage value
        if (typeof window !== 'undefined') {
            return localStorage.getItem("theme") === "dark";
        }
        return true; // Default to dark if localStorage is not accessible
    });
    
    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if(theme === "dark"){
            setDarkMode(true)
        }
        else
        {
            setDarkMode(false)
        }
    }, []);

    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem("theme", "dark")
        }
        else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem("theme", "light")
        }
    }, [darkMode]);

  return (
    <div className="relative w-16 h-8 flex items-center dark:bg-white/40 bg-black/80 cursor-pointer rounded-full p-1" onClick={() => setDarkMode(!darkMode)}>
        <FaMoon className="text-white" size={18}/>
        <div className="absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300" style={!darkMode ? {left: "2px"} : {right: "2px"}}></div>
        <BsSunFill className="ml-auto text-yellow-500" size={18}/>
    </div>
  )
}

export default ThemeToggle