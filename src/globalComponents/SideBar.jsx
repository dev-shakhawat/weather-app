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
    <div className={`${className} bg-gray-600 rounded-[10px] h-inherit  `}  >
        
        {/* logo */}
        <img src="/umbrella.png" alt="umbrella" className='w-[50%] mx-auto mt-10   ' />

        {/* routes lists */}
        <ul className='mt-10'>
            <li>
                <Link to={`/weather`} className={`${location.pathname === '/weather' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 px-5   font-semibold    `}>
                  <TiWeatherPartlySunny />
                  <span>Weather</span>
                </Link>
            </li>
            <li>
                <Link to={`/weather/cities`} className={`${location.pathname === '/weather/cities' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 px-5 font-semibold    `}>
                  <PiCityLight />
                  <span>Cities</span>
                </Link>
            </li>
            <li>
                <Link to={`/weather/map`} className={`${location.pathname === '/weather/map' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 px-5   font-semibold    `}>
                  <GrMapLocation />
                  <span>Map</span>
                </Link>
            </li>
            <li>
                <Link to={`/weather/setting`} className={`${location.pathname === '/weather/setting' ? 'text-white ' : 'text-[#9399a2] '} flex items-center gap-2 py-2 px-5 font-semibold    `}>
                  <IoSettingsOutline />
                  <span>Settings</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}
