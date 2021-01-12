import actionTypes from '../actions_types';

const initialState = {
  weathers: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_NEW_WEATHER_ITEM:
      return { ...state, weathers: state.weathers.concat(payload) };
    default:
      return state;
  }
};
