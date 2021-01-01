import actionTypes from '../actions_types';

const initialState = {
  curentLocation: {},
  mainWeather: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_CURENT_LOCATION:
      return { ...state, curentLocation: payload };
    case actionTypes.UPDATE_MAIN_WEATHER_DATA:
      return { ...state, mainWeather: payload.list, mainCity: payload.city.name };
    default:
      return state;
  }
};
