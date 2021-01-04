import actionTypes from '../actions_types';

const initialState = {
  curentLocation: {},
  mainWeather: [],
  multiLocations: [],
  showLoader: false
};

export default (state = initialState, { type, payload }) => {
  let temp;
  switch (type) {
    case actionTypes.UPDATE_CURENT_LOCATION:
      return { ...state, curentLocation: payload };
    case actionTypes.UPDATE_MAIN_WEATHER_DATA:
      temp = state.multiLocations;
      temp[0] = payload;
      return { ...state, multiLocations: temp, mainWeather: payload };
    case actionTypes.ADD_LOCATION_TO_MULTI_ARRAY:
      return { ...state, multiLocations: state.multiLocations.concat([payload]) };
    case actionTypes.REMOVE_LOCATION_FROM_MULTI_ARRAY:
      temp = state.multiLocations;
      temp.splice(payload, 1);
      return { ...state, multiLocations: temp };
    case actionTypes.TOGGLE_LOADER:
      return { ...state, showLoader: !state.showLoader };
    default:
      return state;
  }
};
