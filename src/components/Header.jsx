import React from 'react'
import { UilSun, UilMoon} from "@iconscout/react-unicons";

const Header = ({darkMode,setDarkMode}) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className="flex justify-start items-center p-5">


            <div onClick={()=> setDarkMode(!darkMode)}>
                { darkMode ? 
                (<UilSun className="text-2xl cursor-pointer"/>) 
                :(<UilMoon className="text-2xl cursor-pointer"/>)
                }

            </div>
        </nav>
    </header>
  )
}

export default Header