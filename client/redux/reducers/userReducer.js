import * as types from '../constants/constants';

const initial_state = {
  verified: null,
  username: null,
  user_id: null,
  location: null,
};

export default userReducer = (state = initial_state, action) => {
  switch (action.type) {
    case types.ACTIVE_USER:
      return true;
    case types.INACTIVE_USER:
      return true;
    default:
      return state;
  }
};
