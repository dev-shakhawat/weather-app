




// fetch weather by city
export const fetchWeatherByCity = async (city) => {
    
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_API_KEY}&units=metric`);
        const data = await response.json();  
        return data; 
    } catch (error) {
        console.error('Error fetching weather:', error);
    }

}