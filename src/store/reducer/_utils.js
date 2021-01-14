import { utilsActionsTypes } from '../actions_types';

const initialState = {
  unit: 'metric',
  isMapShown: false,
  isLoading: false,
  onlyOneLocation: true
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case utilsActionsTypes.SHOW_MAP:
      return { ...state, isMapShown: true };
    case utilsActionsTypes.HIDE_MAP:
      return { ...state, isMapShown: false };
    case utilsActionsTypes.SHOW_LOADER:
      return { ...state, isLoading: true };
    case utilsActionsTypes.HIDE_LOADER:
      return { ...state, isLoading: false };
    case utilsActionsTypes.UPDATE_UNIT:
      return { ...state, unit: payload };
    case utilsActionsTypes.UPDATE_ONLY_ONE_LOCATION:
      console.log('heisadkfj ');
      return { ...state, onlyOneLocation: !state.onlyOneLocation };
    default:
      return state;
  }
};
