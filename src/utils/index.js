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
  let time = `${hours < 10}?0${hours}:${hours}:${minutes < 10}?0${minutes}:${minutes} ${hours >= 12 ? 'PM' : 'AM'}`;
  return time;
};
