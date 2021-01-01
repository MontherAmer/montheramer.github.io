import actionTypes from '../actions_types';

/* ----------------------get user curent location---------------------------- */
export const getCurentLocation = () => async dispatch => {
  const fetchData = async () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  if (navigator.geolocation) {
    let result = await fetchData();
    if (result.coords) {
      return dispatch({
        type: actionTypes.UPDATE_LOCATION,
        payload: { latitude: result.coords.latitude, longitude: result.coords.longitude }
      });
    }
  }
};
