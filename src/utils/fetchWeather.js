

// fetch weather by city
 const fetchWeatherByCity = async (city) => {
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        const data = await response.json();  
        return data; 
    } catch (error) {
        console.error('Error fetching weather:', error);
    }

}




const fetchTodayForecast = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://pro.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
      );
      const data = await response.json();
  
      // আজকের তারিখ বের করি
      const today = new Date().toISOString().split("T")[0];
  
      // আজকের ফোরকাস্ট ফিল্টার করি
      const todayForecast = data.list.filter((item) =>
        item.dt_txt.startsWith(today)
      );
  
      return todayForecast;
    } catch (error) {
      console.error("Error fetching forecast:", error);
    }
  };
  



  export {fetchWeatherByCity , fetchTodayForecast}