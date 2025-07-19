import React, { useEffect } from 'react'
import convertTime from '../utils/timeConvert'

export default function CurrentWeather({weather ,icon ,name , country , temp , fellsLike , maxtemp , mintemp , pressure , humidity , sunrise , sunset}) {

 



  return (
      <div className="bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm mb-4 w-full   dark:bg-gray-600 ">
        <div className="px-6 py-6 relative">
          <div className="flex mb-4 justify-between items-center">
            <div>
              <h5 className="mb-0 font-medium text-xl">{name} , {country}</h5>
              <h6 className="mb-0">April 04 2021</h6>
              <div className="flex items-center ">
                <p>{weather}</p>
                <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt="img" className='' />
              </div>
            </div>
            <div className="text-right">
              <h3 className="font-bold text-4xl mb-0">
                <span>{Math.round(temp)}°</span>
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
          </div>
        </div>
        <div className="divider table mx-2 text-center bg-transparent whitespace-nowrap">
          <span className="inline-block px-3">
            <small>Forecast</small>
          </span>
        </div>
        <div className="px-6 py-6 relative">
          <div
            className="text-center justify-between items-center flex"
            style={{ flexFlow: "initial" }}
          >
            <div className="text-center mb-0 flex items-center justify-center flex-col">
              <span className="block my-1">Sun</span>
              <img
                src="https://i.imgur.com/ffgW9JQ.png"
                className="block w-8 h-8"
              />
              <span className="block my-1">38.3°</span>
            </div>
            <div className="text-center mb-0 flex items-center justify-center flex-col">
              <span className="block my-1">Mon</span>
              <img
                src="https://i.imgur.com/BQbzoKt.png"
                className="block w-8 h-8"
              />
              <span className="block my-1">39.9°</span>
            </div>
            <div className="text-center mb-0 flex items-center justify-center flex-col">
              <span className="block my-1">Mon</span>
              <img
                src="https://i.imgur.com/BQbzoKt.png"
                className="block w-8 h-8"
              />
              <span className="block my-1">40.1°</span>
            </div>
            <div className="text-center mb-0 flex items-center justify-center flex-col">
              <span className="block my-1">Mon</span>
              <img
                src="https://i.imgur.com/ffgW9JQ.png"
                className="block w-8 h-8"
              />
              <span className="block my-1">41.5°</span>
            </div>
            <div className="text-center mb-0 flex items-center justify-center flex-col">
              <span className="block my-1">Mon</span>
              <img
                src="https://i.imgur.com/ffgW9JQ.png"
                className="block w-8 h-8"
              />
              <span className="block my-1">40.1°</span>
            </div>
            <div className="text-center mb-0 flex items-center justify-center flex-col">
              <span className="block my-1">Mon</span>
              <img
                src="https://i.imgur.com/BQbzoKt.png"
                className="block w-8 h-8"
              />
              <span className="block my-1">38°</span>
            </div>
          </div>
        </div>
      </div> 

  )
}
