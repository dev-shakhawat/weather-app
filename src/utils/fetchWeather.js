

// fetch weather by city
 const fetchWeatherByCity = async (city) => {
  console.log(city);
  
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        const data = await response.json();  
        return data; 
    } catch (error) {
        console.log('Error fetching weather:', error);
    }

}




const fetchTodayForecast = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      const data = await response.json();
  
      // today date in ms
      const today = new Date().toISOString().split("T")[0];
  
      // today forcast
      const todayForecast = data.list.filter((item) =>
        item.dt_txt.startsWith(today)
      );
  
      return todayForecast;
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };
  


  const fetchSevenDayForcast = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&cnt=7&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };



  export {fetchWeatherByCity , fetchTodayForecast , fetchSevenDayForcast }