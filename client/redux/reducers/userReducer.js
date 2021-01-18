import * as types from '../constants/constants';

const initial_state = {
  verified: null,
  loggedIn: false,
  username: null,
  user_id: null,
  location: null,
};

const userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        loggedIn: true,
        user_id: action.payload,
      };
    case types.LOGOUT_USER:
      return {
        ...initial_state,
      };
    default:
      return state;
  }
};

export default userReducer;
