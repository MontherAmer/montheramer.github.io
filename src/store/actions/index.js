import Axios from 'axios';
import actionTypes from '../actions_types';

// * default value of current location if the user does not allow locaion is Greenwich
const defaultLocation = { type: actionTypes.UPDATE_CURENT_LOCATION, payload: { latitude: 51.477928, longitude: -0.001545 } };

/* ----------------------get user curent location---------------------------- */
export const getCurentLocation = () => async dispatch => {
  try {
    const fetchData = async () => {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    };
    if (navigator.geolocation) {
      let result = await fetchData();
      return result.coords
        ? dispatch({
            type: actionTypes.UPDATE_CURENT_LOCATION,
            payload: { latitude: result.coords.latitude, longitude: result.coords.longitude }
          })
        : dispatch(defaultLocation);
    } else {
      return dispatch(defaultLocation);
    }
  } catch (err) {
    return dispatch(defaultLocation);
  }
};

/* ----------------------------get foercast weather-------------------------- */
export const getDailyForecast = ({ latitude, longitude }) => async dispatch => {
  let { data } = await Axios.get(`${process.env.REACT_APP_WEATHER_MAIN_URL}/daily?lat=${latitude}&lon=${longitude}&cnt=7&units=metric`, {
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
    }
  });

  if (data) dispatch({ type: actionTypes.UPDATE_MAIN_WEATHER_DATA, payload: data });
};
