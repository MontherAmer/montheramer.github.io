import actionTypes from '../actions_types';

const initialState = {
  // * default value of current location if the user does not allow locaion
  curentLocation: {
    latitude: 32.1095878,
    longitude: 35.0526145
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATE_LOCATION:
      console.log('HHHHHHHHHHHHHHHHHHHHHHH', payload);
      return { ...state, curentLocation: payload };
    default:
      return state;
  }
};
