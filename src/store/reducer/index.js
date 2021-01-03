import actionTypes from '../actions_types';

const initialState = {
  curentLocation: {},
  mainWeather: [],
  showLoader: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_CURENT_LOCATION:
      return { ...state, curentLocation: payload };
    case actionTypes.UPDATE_MAIN_WEATHER_DATA:
      return { ...state, mainWeather: payload };
    case actionTypes.TOGGLE_LOADER:
      return { ...state, showLoader: !state.showLoader };
    default:
      return state;
  }
};
