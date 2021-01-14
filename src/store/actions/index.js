import Axios from 'axios';
import { mainActionsTypes, utilsActionsTypes } from '../actions_types';
import { formateWeatherData } from '../../utils';
// import { getDayMonth, getDayName, convertMeterperSecToKmPerHour, convertTimeStampToReadableTime, getIcon } from '../../utils';

/* ----------------------get user curent location---------------------------- */
export const getDefaltLocation = async () => {
  // try {
  // } catch (err) {}
  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  if (navigator.geolocation) {
    let result = await fetchData();
    return result.coords ? { lat: result.coords.latitude, lon: result.coords.longitude } : { lat: 51.477928, lon: -0.001545 };
  } else {
    // * return greenwich lat and lon if any thing went wrong
    return { lat: 51.477928, lon: -0.001545 };
  }
};

export const getForecastData = ({ unit, lon, lat, name }) => async dispatch => {
  let weatherData = await Axios.get(
    `${process.env.REACT_APP_WEATHER_MAIN_URL}/daily?${!name ? 'lat=' + lat + '&lon=' + lon : ''}&cnt=7&units=${unit ? unit : 'metric'}`,
    {
      headers: {
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
      }
    }
  );

  let timeData = await Axios.get(`${process.env.REACT_APP_RAPIDAPI_TIME_URL}?location=${lat}, ${lon}`, {
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TIME_KEY
    }
  });
  let formatedData = await formateWeatherData({ ...weatherData.data, time: timeData.data.data.time_now });
  return dispatch({ type: mainActionsTypes.ADD_NEW_WEATHER_ITEM, payload: [formatedData] });
};

export const getExistingForecastData = ({ unit, coords }) => async dispatch => {
  console.log('unit,dataunit,data ', unit, coords);
  // let weatherData = await Axios.get(
  //   `${process.env.REACT_APP_WEATHER_MAIN_URL}/daily?${!name ? 'lat=' + lat + '&lon=' + lon : ''}&cnt=7&units=${unit ? unit : 'metric'}`,
  //   {
  //     headers: {
  //       'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
  //     }
  //   }
  // );
  // let timeData = await Axios.get(`${process.env.REACT_APP_RAPIDAPI_TIME_URL}?location=${lat}, ${lon}`, {
  //   headers: {
  //     'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TIME_KEY
  //   }
  // });
  // let formatedData = await formateWeatherData({ ...weatherData.data, time: timeData.data.data.time_now });
  // return dispatch({ type: mainActionsTypes.ADD_NEW_WEATHER_ITEM, payload: [formatedData] });
};

/* -------------------------remove weather column---------------------------- */
export const removeWeatherCol = index => dispatch => dispatch({ type: mainActionsTypes.REMOVE_WEATHER_ITEM, payload: index });

/* ---------------------------show and hide map------------------------------ */
export const showMap = () => dispatch => dispatch({ type: utilsActionsTypes.SHOW_MAP });

export const hideMap = () => dispatch => dispatch({ type: utilsActionsTypes.HIDE_MAP });

/* ----------------------------show and hide loader-------------------------- */
export const showLoader = () => dispatch => dispatch({ type: utilsActionsTypes.SHOW_LOADER });

export const hideLoader = () => dispatch => dispatch({ type: utilsActionsTypes.HIDE_LOADER });

/* ------------------------------update unit--------------------------------- */
export const updateUnit = unit => dispatch => dispatch({ type: utilsActionsTypes.UPDATE_UNIT, payload: unit });

export const updateOnlyOneLocation = () => dispatch => dispatch({ type: utilsActionsTypes.UPDATE_ONLY_ONE_LOCATION });

// // * default value of current location if the user does not allow locaion is Greenwich
// const defaultLocation = { type: mainActionsTypes.UPDATE_CURENT_LOCATION, payload: { latitude: 51.477928, longitude: -0.001545 } };

/* ----------------------get user curent location---------------------------- */
// export const getCurentLocation = () => async dispatch => {
//   try {
//     const fetchData = async () => {
//       return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//       });
//     };
//     if (navigator.geolocation) {
//       let result = await fetchData();
//       // await getTimeAPI(result.coords);
//       return result.coords
//         ? dispatch({
//             type: mainActionsTypes.UPDATE_CURENT_LOCATION,
//             payload: { latitude: result.coords.latitude, longitude: result.coords.longitude }
//           })
//         : dispatch(defaultLocation);
//     } else {
//       return dispatch(defaultLocation);
//     }
//   } catch (err) {
//     return dispatch(defaultLocation);
//   }
// };

// /* ---------------------------get the curent time---------------------------- */
// export const getTimeAPI = ({ latitude, longitude }) => async dispatch => {
//   try {
// let { data } = await Axios.get(`${process.env.REACT_APP_RAPIDAPI_TIME_URL}?location=${latitude}, ${longitude}`, {
//   headers: {
//     'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_TIME_KEY
//   }
// });
//     let timeZone = data.data.timezone_name;
//     let timeNow = data.data.time_now;
//     // return dispatch({ type });
//   } catch (err) {
//     console.log('++++++++++++++++ ', err);
//   }
// };

// * default value of current location if the user does not allow locaion is Greenwich
// const defaultLocation = { type: mainActionsTypes.UPDATE_CURENT_LOCATION, payload: { latitude: 51.477928, longitude: -0.001545 } };

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

// /* ----------------------get user curent location---------------------------- */
// export const getCurentLocation = () => async dispatch => {
//   try {
//     const fetchData = async () => {
//       return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//       });
//     };
//     if (navigator.geolocation) {
//       let result = await fetchData();
//       return result.coords
//         ? dispatch({
//             type: mainActionsTypes.UPDATE_CURENT_LOCATION,
//             payload: { latitude: result.coords.latitude, longitude: result.coords.longitude }
//           })
//         : dispatch(defaultLocation);
//     } else {
//       return dispatch(defaultLocation);
//     }
//   } catch (err) {
//     return dispatch(defaultLocation);
//   }
// };

/* ----------------------------get foercast weather-------------------------- */
// export const getDailyForecast = ({ latitude, longitude }) => async dispatch => {
//   try {
//     dispatch({ type: mainActionsTypes.TOGGLE_LOADER });
// let { data } = await Axios.get(`${process.env.REACT_APP_WEATHER_MAIN_URL}/daily?lat=${latitude}&lon=${longitude}&cnt=7&units=metric`, {
//   headers: {
//     'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
//   }
// });

// //     if (data) {
// //       let list = formationData(data);
// //       dispatch({ type: mainActionsTypes.UPDATE_MAIN_WEATHER_DATA, payload: list });
// //       dispatch({ type: mainActionsTypes.TOGGLE_LOADER });
// //     }
// //   } catch (err) {
// //     dispatch({ type: mainActionsTypes.TOGGLE_LOADER });
// //   }
// // };

// // export const getMultiForecast = ({ latitude, longitude }) => async dispatch => {
// //   try {
// //     dispatch({ type: mainActionsTypes.TOGGLE_LOADER });
// //     let { data } = await Axios.get(`${process.env.REACT_APP_WEATHER_MAIN_URL}/daily?lat=${latitude}&lon=${longitude}&cnt=7&units=metric`, {
// //       headers: {
// //         'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
// //       }
// //     });
// //     if (data) {
// //       let list = formationData(data);
// //       dispatch({ type: mainActionsTypes.ADD_LOCATION_TO_MULTI_ARRAY, payload: list });
// //       dispatch({ type: mainActionsTypes.TOGGLE_LOADER });
// //     }
// //   } catch (err) {
// //     dispatch({ type: mainActionsTypes.TOGGLE_LOADER });
// //   }
// // };

// // export const removeItemMultiForecast = index => dispatch => {
// //   dispatch({ type: mainActionsTypes.REMOVE_LOCATION_FROM_MULTI_ARRAY, payload: index });
// // };

// // export const toggleLoader = () => dispatch => dispatch({ type: mainActionsTypes.TOGGLE_LOADER });
