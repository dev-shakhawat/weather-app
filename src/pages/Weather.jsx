import React, { useEffect, useState } from 'react'
import { fetchWeatherByCity } from '../utils/fetchWeather'
import { useSelector } from 'react-redux'
import CurrentWeather from '../globalComponents/CurrentWeather' 
import { fetchTodayForecast } from '../utils/fetchWeather'

export default function Weather() {

  const currentLocation = useSelector((state) => state.weather.city)
  const [ cityData , setcityData] =  useState(null)
  const [metData , setmetData] =  useState(null)
  
  
  console.log(cityData);
  

  useEffect(() => {
  async  function fetchcityData() {
      const cityData =  await fetchWeatherByCity(currentLocation)
      setcityData(cityData); 



      const met = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${cityData?.coord.lat}&lon=${cityData?.coord.lon}`)
      const metinfo = await met.json();
      setmetData(metinfo);
      

    }
    fetchcityData()
  }, [currentLocation])
 
 


  return (
    <div className=' mt-3 '    >
      
      {/* about weather */}
      <div className="grid grid-cols-2  text-white">
        <div className=" ">  
          <CurrentWeather dt={cityData?.dt} weather={cityData?.weather[0].main} icon={cityData?.weather[0].icon} name={cityData?.name} country={cityData?.sys.country} temp={cityData?.main.temp} fellsLike={cityData?.main.feels_like} maxtemp={cityData?.main.temp_max} mintemp={cityData?.main.temp_min} pressure={cityData?.main.pressure} humidity={cityData?.main.humidity} sunrise={cityData?.sys.sunrise} sunset={cityData?.sys.sunset} updated={metData?.properties.meta.updated_at} lat={cityData?. coord.lat} lon={cityData?. coord.lon } windspeed={cityData?.wind.speed}   />
          
        </div>  
        <div className=" "></div>


      </div>
    </div>
  )
}
