import React, { useEffect, useState } from 'react'  
import { convertTime, formatUTCToBangladeshTime } from '../utils/time'
import LiveClock from './LiveClock'
import { fetchTodayForecast } from '../utils/fetchWeather'
import TodayForcast from './TodayForcast'

export default function CurrentWeather({   lat , lon , updated ,weather ,icon ,name , country , temp , fellsLike , maxtemp , mintemp , pressure , humidity , sunrise , sunset , windspeed}) {

  const [dailforcast , setDailforcast] =  useState(null)

  useEffect(() => {
    async  function fetchcityData() {

      if(!lat || !lon  )return

      const dailydata =  await fetchTodayForecast(lat , lon)
      setDailforcast(dailydata); 
    }
    fetchcityData()
  }, [lat , lon])
 
  

 
  


  return (
      <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full   dark:bg-gray-600 ">
        <div className="px-6 py-6 relative">
          <div className="flex mb-4 justify-between items-center">
            <div>
              <h5 className="mb-0 font-medium text-xl">{name} , {country}</h5>
              <h6 className="mb-0">Updated: {formatUTCToBangladeshTime(updated)}</h6>
              <h6 className="mb-0 flex gap-1 ">Now: <LiveClock/></h6>
              
              <div className="flex items-center ">
                <p>{weather}</p>
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="img" className='' />
              </div>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-4xl mb-0">
                <span>{Math.round(temp)}°C</span> <br />
                <span className='mt-1'>{(Math.round(temp) * 9/5) + 32}°F</span>
              </h3>
            </div>
          </div>
          <div className="block sm:grid grid-cols-2  gap-x-5 gap-y-1 ">
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Temp</span>
                <small className="px-2 inline-block">{temp}&nbsp;°</small>
              </div> 
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Feels like</span>
                <small className="px-2 inline-block">{fellsLike}&nbsp;°</small>
              </div> 
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Temp min</span>
                <small className="px-2 inline-block">{mintemp}&nbsp;°</small>
              </div> 
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Temp max</span>
                <small className="px-2 inline-block">{maxtemp}&nbsp;°</small>
              </div> 
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Sun rise</span>
                <small className="px-2 inline-block">{convertTime(sunrise)}</small>
              </div> 
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Sunset</span>
                <small className="px-2 inline-block">{convertTime(sunset)}</small>
              </div> 
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Humidity</span>
                <small className="px-2 inline-block">{humidity}%</small>
              </div> 
              <div className="flex mb-2 justify-between items-center bg-gray-100/10 p-1 rounded-[5px]">
                <span>Wind</span>
                <small className="px-2 inline-block">{windspeed} km/h</small>
              </div> 
          </div>
        </div>
        <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap">
          <span className="inline-block px-3">
            <p>Today Forecast</p>
          </span>
        </div>
        <div className="p-5 relative">
          <div
            className=" gap-3 items-center flex"
             
          > 

           {dailforcast &&  dailforcast.length > 0 && dailforcast.map((item , index) => (
             <TodayForcast key={index} data={item} />
           ))
           }


          </div>
        </div>
      </div> 

  )
}
