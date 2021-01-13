import { utilsActionsTypes } from '../actions_types';

const initialState = {
  unit: 'metric',
  isMapShown: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case utilsActionsTypes.SHOW_MAP:
      return { ...state, isMapShown: true };
    case utilsActionsTypes.HIDE_MAP:
      return { ...state, isMapShown: false };
    default:
      return state;
  }
};
