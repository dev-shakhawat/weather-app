import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchSevenDayForcast } from '../utils/fetchWeather';
import { useSelector } from 'react-redux';

export default function SevenDayForcast() {

    const latlon = useSelector((state) => state.weather.latlon)
    const city = useSelector((state) => state.weather.city)
    const [days , setDays] = useState(null)


    console.log(days);
    

    useEffect(() => {
      async function sevendaydata () {
        const dailydata =  await fetchSevenDayForcast(latlon.lat , latlon.lon)
        setDays(dailydata);
      }
      if(latlon.lat && latlon.lon){
        sevendaydata();
      }
    }, [latlon.lat, latlon.lon])
    

    console.log(days);
    


  return (
    <div className='p-6 bg-gray-900 text-white relative min-w-0 break-words rounded-lg overflow-hidden shadow-sm   w-full   dark:bg-gray-600 '>
        
        <h5 className="mb-0 font-medium text-xl">Seven days forcast of <span className='capitalize'>{city}</span></h5>
    </div>
  )
}
