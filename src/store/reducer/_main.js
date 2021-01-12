import actionTypes from '../actions_types';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_CURENT_LOCATION:
      console.log('payload ', payload);
      return { ...state, curentLocation: payload };
    default:
      return state;
  }
};
