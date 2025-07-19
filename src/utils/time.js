function formatUTCToBangladeshTime(utcString) {
  const date = new Date(utcString);

  const options = {
    weekday: 'long',   
    year: 'numeric',     
    month: 'long',     
    day: 'numeric',     
    hour: 'numeric',     
    minute: '2-digit',   
    second: '2-digit',    
    hour12: true,         
    timeZone: 'Asia/Dhaka'  
  };

  return date.toLocaleString('en-US', options);
}
 




  function convertTime(timeInSeconds) {
    let date = new Date(timeInSeconds * 1000);  
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;  
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }




  function openWeatherDtConverter(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
  
    const options = {
      timeZone: 'Asia/Dhaka',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour12: true,   
    };
  
    return date.toLocaleString('en-US', options);
  }
   
  
  
  export { formatUTCToBangladeshTime , convertTime , openWeatherDtConverter };