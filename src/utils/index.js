const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const readableTime = str => {
  let date = new Date(str);
  let hours = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let period = parseInt(hours) < 12 ? 'AM' : 'PM';

  hours = parseInt(hours) <= 12 ? parseInt(hours) : parseInt(hours) - 12;
  hours = parseInt(hours) < 10 ? `0${hours}` : hours;

  minutes = minutes > 10 ? minutes : `0${minutes}`;
  return `${hours}:${minutes} ${period}`;
};

const getDayName = i => {
  let date = new Date();
  var result = new Date(date);
  result.setDate(result.getDate() + i);
  return `${weekDays[result.getDay()]}`;
};

const getDayMonth = i => {
  let date = new Date();
  var result = new Date(date);
  result.setDate(result.getDate() + i);
  return `${result.getDate()} ${months[result.getMonth()]}`;
};

const getIcon = data => {
  let icon = Math.floor(data / 100);
  let result = data === 800 ? 'clear' : `icon${icon}`;
  return result;
};

const convertMeterperSecToKmPerHour = number => {
  // * 1 m/sec  = 3600/1000 = 18/5
  let num = (number * 18) / 5;
  let result = Math.round(num * 10) / 10;
  return result;
};

// const formationData = data => {
//   return data.list.map((item, i) =>
//     i === 0
//       ? {
//           day: getDayName(i),
//           date: getDayMonth(i),
//           city: data.city.name,
//           dayTemp: Math.round(item.temp.day),
//           nightTemp: Math.round(item.temp.night),
//           speed: convertMeterperSecToKmPerHour(item.speed),
//           sunRise: convertTimeStampToReadableTime(item.sunrise),
//           sunSet: convertTimeStampToReadableTime(item.sunset),
//           icon: getIcon(item.weather[0].id)
//         }
//       : {
//           day: getDayName(i),
//           dayTemp: Math.round(item.temp.day),
//           nightTemp: Math.round(item.temp.night),
//           icon: getIcon(item.weather[0].id)
//         }
//   );
// };

export const formateWeatherData = data => {
  // let obj = {};
  // obj.time = readableTime(data.time);
  // obj.city = data.city.name;

  // console.log(obj);

  return data.list.map((item, i) =>
    i === 0
      ? {
          day: getDayName(i),
          date: getDayMonth(i),
          city: data.city.name,
          time: readableTime(data.time),
          dayTemp: Math.round(item.temp.day),
          nightTemp: Math.round(item.temp.night),
          speed: convertMeterperSecToKmPerHour(item.speed),
          // sunRise: convertTimeStampToReadableTime(item.sunrise),
          // sunSet: convertTimeStampToReadableTime(item.sunset),
          icon: getIcon(item.weather[0].id)
        }
      : {
          day: getDayName(i),
          dayTemp: Math.round(item.temp.day),
          nightTemp: Math.round(item.temp.night),
          icon: getIcon(item.weather[0].id)
        }
  );
};

// const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// /* ------------------------convert from m/s to Km/h-------------------------- */
// export const convertMeterperSecToKmPerHour = number => {
//   // * 1 m/sec  = 3600/1000 = 18/5
//   let num = (number * 18) / 5;
//   let result = Math.round(num * 10) / 10;
//   return result;
// };

// /* ------------------convert timestamp to readable time---------------------- */
// export const convertTimeStampToReadableTime = data => {
//   let dateObj = new Date(data * 1000);
//   let hours = dateObj.getHours();
//   let minutes = dateObj.getMinutes();
//   let str = hours > 12 ? 'PM' : 'AM';
//   hours = hours <= 12 ? hours : hours - 12;
//   hours = hours > 10 ? hours : `0${hours}`;
//   minutes = minutes > 10 ? minutes : `0${minutes}`;
//   let time = `${hours}:${minutes} ${str}`;
//   return time;
// };

// export const getDayName = i => {
//   let date = new Date();
//   var result = new Date(date);
//   result.setDate(result.getDate() + i);
//   return `${weekDays[result.getDay()]}`;
// };

// export const getDayMonth = i => {
//   let date = new Date();
//   var result = new Date(date);
//   result.setDate(result.getDate() + i);
//   return `${result.getDate()} ${months[result.getMonth()]}`;
// };

// export const getIcon = data => {
//   let icon = Math.floor(data / 100);
//   let result = data === 800 ? 'clear' : `icon${icon}`;
//   return result;
// };
