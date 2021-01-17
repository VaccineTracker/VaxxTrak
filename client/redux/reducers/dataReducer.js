import * as types from '../constants/constants';

const initial_state = {
  zipcode: null,
  state: null,
  admin: null,
  dist: null,
  moderna: null,
  pfizer: null,
};

export default dataReducer = (state = initial_state, action) => {
  switch (action.type) {
    case types.STATE_DATA:
      return {
        ...state,
        state: 'this is the location',
      };
    case types.SET_NEW_LOCATION:
      return {
        ...state,
        zipcode: '01852',
      };
    default:
      return state;
  }
};
