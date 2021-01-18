import * as types from '../constants/constants';

const proto = {
  datasets: [
    {
      data: [],
      backgroundColor: [],
      label: '',
    },
  ],
  labels: [],
};

const initial_state = {
  charts: [],
};

const chartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case types.SET_CHART:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default chartReducer;
