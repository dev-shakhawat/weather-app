import React from 'react'
import { useSelector } from 'react-redux';
import { convertTime } from '../utils/time';

export default function TodayForcast({data}) {
 
    const currentLocation = useSelector((state) => state.weather.city)
    
  return ( 
    <div className=" flex-1 bg-gray-100/10  text-purple-50 rounded-md">
        <div className="flex justify-between items-center p-2 ">
          <div className="  relative top-0">
            <span className="  text-md font-semibold capitalize">
              {currentLocation}
            </span>
          </div>
          <span className="text-sm ">{convertTime(data?.dt)}</span>
        </div>

      <div className="flex items-center p-4">
        <div className="flex justify-center items-center  ">
           <img src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}.png`} alt="" className='w-[70px]' />
           <span>{data?.weather[0]?.main}</span>
        </div>
      </div>
      <div className="text-md pt-4 pb-4 px-4">
        <div className="flex justify-between items-center">
          <div className="space-y-2">
          <span className="flex   items-center"> 
               <span className=" ">Rain: { data?.rain ? `${data?.rain['3h']} mm` : 'NA'} - {data?.weather[0]?.description}</span> 
            </span>
            <span className="flex space-x-2 items-center">
              <svg
                height={20}
                width={20}
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M13,30a5.0057,5.0057,0,0,1-5-5h2a3,3,0,1,0,3-3H4V20h9a5,5,0,0,1,0,10Z" />
                <path d="M25 25a5.0057 5.0057 0 01-5-5h2a3 3 0 103-3H2V15H25a5 5 0 010 10zM21 12H6V10H21a3 3 0 10-3-3H16a5 5 0 115 5z" />
              </svg>{" "}
              <span>{data?.wind?.speed} m/s</span>
            </span>
            <span className="flex space-x-2 items-center">
              <svg
                height={20}
                width={20}
                viewBox="0 0 32 32"
                className="fill-current"
              >
                <path d="M16,24V22a3.2965,3.2965,0,0,0,3-3h2A5.2668,5.2668,0,0,1,16,24Z" />
                <path d="M16,28a9.0114,9.0114,0,0,1-9-9,9.9843,9.9843,0,0,1,1.4941-4.9554L15.1528,3.4367a1.04,1.04,0,0,1,1.6944,0l6.6289,10.5564A10.0633,10.0633,0,0,1,25,19,9.0114,9.0114,0,0,1,16,28ZM16,5.8483l-5.7817,9.2079A7.9771,7.9771,0,0,0,9,19a7,7,0,0,0,14,0,8.0615,8.0615,0,0,0-1.248-3.9953Z" />
              </svg>{" "}
              <span>{data?.main?.temp}°C</span>
            </span>


          </div> 
        </div>
      </div>
    </div> 
  )
}
