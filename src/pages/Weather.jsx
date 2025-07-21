import React, { useEffect, useState } from 'react'
import { fetchWeatherByCity } from '../utils/fetchWeather'
import { useDispatch, useSelector } from 'react-redux'
import CurrentWeather from '../globalComponents/CurrentWeather' 
import { fetchTodayForecast } from '../utils/fetchWeather'
import NotFound from '../globalComponents/NotFound'
import SevenDayForcast from '../globalComponents/SevenDayForcast'

export default function Weather() {

  const currentLocation = useSelector((state) => state.weather.city)
  const [ cityData , setcityData] =  useState(null)
  const [metData , setmetData] =  useState(null)
  const dispatch = useDispatch();
  const notfoundErr = useSelector((state) => state.weather.err)
  
  
  // console.log(cityData);
  

  useEffect(() => {
  async  function fetchcityData() {
      const cityData =  await fetchWeatherByCity(currentLocation)
      setcityData(cityData); 

      
      if(cityData?.cod !== "404"){
        const met = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${cityData?.coord.lat}&lon=${cityData?.coord.lon}`)
        const metinfo = await met.json();
        setmetData(metinfo);
      }

      

    }
    fetchcityData()
  }, [currentLocation])
 


 useEffect(()=>{
  if (cityData?.cod === "404") {
    dispatch({ type: 'weather/errorCode', payload: true });
    dispatch({type:'weather/city' , payload: 'rangpur'})
  
    setTimeout(() => {
      dispatch({ type: 'weather/errorCode', payload: false });
    }, 2000);
   
  }
  
  
  if(cityData?.coord){
    dispatch({type:'weather/latlonupdate' , payload: {
      lat: cityData?.coord.lat,
      lon: cityData?.coord.lon
    }})
  }

 },[cityData])


  return (
    <div className=' mt-3 '    >
       
       {notfoundErr && <NotFound sms="Location not found!" />}
      
      
      {/* about weather */}
      <div className="grid grid-cols-1  text-white gap-3 ">   
          {cityData?.cod !== "404" && 
          <CurrentWeather dt={cityData?.dt} weather={cityData?.weather[0].main} icon={cityData?.weather[0].icon} name={cityData?.name} country={cityData?.sys.country} temp={cityData?.main.temp} fellsLike={cityData?.main.feels_like} maxtemp={cityData?.main.temp_max} mintemp={cityData?.main.temp_min} pressure={cityData?.main.pressure} humidity={cityData?.main.humidity} sunrise={cityData?.sys.sunrise} sunset={cityData?.sys.sunset} updated={metData?.properties.meta.updated_at} lat={cityData?. coord.lat} lon={cityData?. coord.lon } windspeed={cityData?.wind.speed}   />
          }  
          
          {/* {cityData?.cod !== "404" && <SevenDayForcast/>} */}

      </div>
    </div>
  )
}
