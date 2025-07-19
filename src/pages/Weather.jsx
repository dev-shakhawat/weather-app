import React, { useEffect, useState } from 'react'
import { fetchWeatherByCity } from '../utils/fetchWeather'
import { useSelector } from 'react-redux'
import CurrentWeather from '../globalComponents/CurrentWeather'

export default function Weather() {

  const currentLocation = useSelector((state) => state.weather.city)
  const [ data , setData] =  useState(null)
 
  console.log(data);
  
  

  useEffect(() => {
  async  function fetchData() {
      const data =  await fetchWeatherByCity(currentLocation)
      setData(data); 
    }
    fetchData()
  }, [currentLocation])



  useEffect(() => {

    async function data(){
    const response = await  fetch('api.openweathermap.org/data/2.5/forecast?q=Dhaka&appid=61bab1416c883e5e337675abda0076fc')
    const data = await response.json();
    console.log(response);
    
    }

    data()

 
  }, [ ])


  return (
    <div className=' mt-3 '    >
      
      {/* about weather */}
      <div className="flex  text-white">
        <div className="flex-1">  
          <CurrentWeather weather={data?.weather[0].main} icon={data?.weather[0].icon} name={data?.name} country={data?.sys.country} temp={data?.main.temp} fellsLike={data?.main.feels_like} maxtemp={data?.main.temp_max} mintemp={data?.main.temp_min} pressure={data?.main.pressure} humidity={data?.main.humidity} sunrise={data?.sys.sunrise} sunset={data?.sys.sunset}  />
          
        </div>  
        <div className="flex-1"></div>


      </div>
    </div>
  )
}
