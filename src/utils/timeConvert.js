function convertTime(timeInSeconds) {
  let date = new Date(timeInSeconds * 1000); // এখানে সময় সেকেন্ডে আসে, তাই 1000 দিয়ে গুণ করা হয়েছে
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // hour 0 হলে 12 হবে
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

export default convertTime;
