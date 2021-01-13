import { mainActionsTypes } from '../actions_types';

const initialState = {
  weathers: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case mainActionsTypes.ADD_NEW_WEATHER_ITEM:
      return { ...state, weathers: state.weathers.concat(payload) };
    case mainActionsTypes.REMOVE_WEATHER_ITEM:
      let newWeathers = state.weathers;
      newWeathers.splice(payload, 1);
      return { ...state, weathers: newWeathers };
    default:
      return state;
  }
};
