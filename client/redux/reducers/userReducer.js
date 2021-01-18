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
      console.log(action.payload);

      return {
        ...state,
        loggedIn: true,
        verified: true,
        user_id: action.payload,
      };
    case types.SET_PROFILE:
      return {
        ...state,
        username: action.payload.username,
        location: action.payload.location,
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
