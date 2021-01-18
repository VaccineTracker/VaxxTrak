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
  charts: [proto],
};

export default function chartReducer(state = initial_state, action) {
  switch (action.type) {
    case types.SET_CHART:
      const { labels, data, backgroundColor, label } = action.payload;
      const chart = {
        datasets: [
          {
            data,
            backgroundColor,
            label,
          },
        ],
        labels,
      };
      return {
        ...state,
        charts: [chart],
      };
    default:
      return state;
  }
}
