import * as types from '../constants/constants';

const initial_state = {
  zipcode: null,
  state: null,
  admin: null,
  dist: null,
  moderna: null,
  pfizer: null,
};

export default function dataReducer(state = initial_state, action) {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case types.SET_NEW_LOCATION:
      return {
        ...state,
        zipcode: action.payload,
      };
    default:
      return state;
  }
}
