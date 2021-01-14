import { mainActionsTypes, utilsActionsTypes } from '../actions_types';
import { updateUnitHelper } from '../../utils';
const initialState = {
  weathers: [],
  coords: []
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case mainActionsTypes.ADD_NEW_WEATHER_ITEM:
      return { ...state, weathers: state.weathers.concat(payload), coords: state.coords.concat(payload[0][0].coord) };
    case mainActionsTypes.REMOVE_WEATHER_ITEM:
      let newWeathers = state.weathers;
      newWeathers.splice(payload, 1);
      let newCoords = state.coords;
      newCoords.splice(payload, 1);
      return { ...state, weathers: newWeathers, coords: newCoords };
    case utilsActionsTypes.UPDATE_UNIT:
      let newArray = updateUnitHelper(state.weathers, payload);
      return { ...state, weathers: newArray };
    default:
      return state;
  }
};
