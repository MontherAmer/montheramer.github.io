import actionTypes from '../actions_types';

// * default value of current location if the user does not allow locaion is Greenwich
const defaultLocation = { type: actionTypes.UPDATE_LOCATION, payload: { latitude: 51.477928, longitude: -0.001545 } };

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
            type: actionTypes.UPDATE_LOCATION,
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
