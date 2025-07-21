import React from 'react'
import { Link, useLocation } from 'react-router'


// icons
import { TiWeatherPartlySunny } from "react-icons/ti";
import { PiCityLight } from "react-icons/pi";
import { GrMapLocation } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";

export default function SideBar({className}) {

    const location = useLocation();
  return (
    <div className={`${className} bg-gray-600 rounded-[5px] md:rounded-[10px] h-inherit   `}  >
        
        {/* logo */}
        <img src="/umbrella.png" alt="umbrella" className='md:w-[50%] w-[30px] mx-auto md:mt-10 pt-4 md:pt-0   ' />

        {/* routes lists */}
        <ul className='md:mt-10 mt-5 px-5 md:px-0 flex justify-between md:block '>
            <li>
                <Link to={`/weather`} className={`${location.pathname === '/weather' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 md:px-5   font-semibold    `}>
                  <TiWeatherPartlySunny className={`hidden md:inline-block `}/>
                  <span>Weather</span>
                </Link>
            </li>
            <li>
                <Link to={`/weather/cities`} className={`${location.pathname === '/weather/cities' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 md:px-5 font-semibold    `}>
                  <PiCityLight className={`hidden md:inline-block `}/>
                  <span>Cities</span>
                </Link>
            </li>
            <li>
                <Link to={`/weather/map`} className={`${location.pathname === '/weather/map' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 md:px-5   font-semibold    `}>
                  <GrMapLocation className={`hidden md:inline-block `}/>
                  <span>Map</span>
                </Link>
            </li>
            <li>
                <Link to={`/weather/setting`} className={`${location.pathname === '/weather/setting' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 md:px-5 font-semibold    `}>
                  <IoSettingsOutline className={`hidden md:inline-block `}/>
                  <span>Settings</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}
