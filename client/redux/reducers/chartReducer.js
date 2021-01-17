import * as types from '../constants/constants';

const initial_state = {
  datasets: [
    {
      data: [],
      backgroundColor: [],
      label: '',
    },
  ],
  labels: [],
};

export default chartReducer = (state = initial_state, action) => {
  switch (action.type) {
    case types.CHART_DATA:
      return true;
    default:
      return state;
  }
};
