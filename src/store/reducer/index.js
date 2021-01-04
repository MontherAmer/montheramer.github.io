import actionTypes from '../actions_types';

const initialState = {
  curentLocation: {},
  mainWeather: [],
  multiLocations: [],
  showLoader: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_CURENT_LOCATION:
      return { ...state, curentLocation: payload };
    case actionTypes.UPDATE_MAIN_WEATHER_DATA:
      let temp = state.multiLocations;
      temp[0] = payload;
      return { ...state, multiLocations: temp, mainWeather: payload };
    case actionTypes.TOGGLE_LOADER:
      return { ...state, showLoader: !state.showLoader };
    default:
      return state;
  }
};
