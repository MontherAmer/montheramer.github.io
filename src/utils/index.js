const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
/* ------------------------convert from m/s to Km/h-------------------------- */
export const convertMeterperSecToKmPerHour = number => {
  // * 1 m/sec  = 3600/1000 = 18/5
  let num = (number * 18) / 5;
  let result = Math.round(num * 10) / 10;
  return result;
};

/* ------------------convert timestamp to readable time---------------------- */
export const convertTimeStampToReadableTime = data => {
  let dateObj = new Date(data * 1000);
  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  let str = hours > 12 ? 'PM' : 'AM';
  hours = hours <= 12 ? hours : hours - 12;
  hours = hours > 10 ? hours : `0${hours}`;
  minutes = minutes > 10 ? minutes : `0${minutes}`;
  let time = `${hours}:${minutes} ${str}`;
  return time;
};

export const getDayName = i => {
  let date = new Date();
  var result = new Date(date);
  result.setDate(result.getDate() + i);
  return `${weekDays[result.getDay()]}`;
};

export const getDayMonth = i => {
  let date = new Date();
  var result = new Date(date);
  result.setDate(result.getDate() + i);
  return `${result.getDate()} ${months[result.getMonth()]}`;
};

export const getIcon = data => {
  let icon = Math.floor(data / 100);
  let result = data === 800 ? 'clear' : `icon${icon}`;
  return result;
};
