import actionTypes from '../actions_types';

const initialState = {
  curentLocation: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_LOCATION:
      return { ...state, curentLocation: payload };
    default:
      return state;
  }
};
