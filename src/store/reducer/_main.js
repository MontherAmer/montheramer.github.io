import { mainActionsTypes } from '../actions_types';

const initialState = {
  weathers: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case mainActionsTypes.ADD_NEW_WEATHER_ITEM:
      return { ...state, weathers: state.weathers.length ? state.weathers.concat(payload) : state.weathers.concat([payload]) };
    default:
      return state;
  }
};
