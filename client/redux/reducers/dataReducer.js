import * as types from '../constants/constants';
import colors from '../../assets/colors';

const emptyChart = {
  datasets: [
    {
      data: [],
      backgroundColor: [],
      label: '',
    },
  ],
  labels: [],
};

const initialState = {
  globalData: {
    locations: [],
    dosesPer100k: [],
  },
  currentLocation: {
    zipcode: null,
    location: null,
    admin: null,
    dist: null,
    moderna: null,
    pfizer: null,
  },
  charts: {
    globalChart: {},
    locationCharts: [],
  },
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_NEW_LOCATION:
      return {
        ...state,
        currentLocation: {
          ...state.currentLocation,
          zipcode: action.payload,
        },
      };

    case types.SET_DATA_CURR:
      const { location, admin, dist, moderna, pfizer } = action.payload;

      const adminChart = {
        datasets: [
          {
            data: [admin, dist - admin],
            backgroundColor: ['pink', 'coral'],
            label: `Allocation Data from ${location}`,
          },
        ],
        labels: ['Administered Doses', 'Remaining Doses From Allocation'],
      };

      const providerChart = {
        datasets: [
          {
            data: [moderna, pfizer],
            backgroundColor: ['gold', 'teal'],
            label: `Distribution Data from Pharma Providers`,
          },
        ],
        labels: ['Distributed by Moderna', 'Distributed by Pfizer'],
      };

      return {
        ...state,
        currentLocation: { ...state.currentLocation, ...action.payload },
        charts: {
          locationCharts: [adminChart, providerChart],
        },
      };

    case types.SET_DATA_GLOBAL:
      const filteredItems = action.payload.filter(
        (el) => el.adminPer100K && el
      );

      const globalData = {
        locations: filteredItems.map((x) => x.location),
        dosesPer100k: filteredItems.map((x) => x.adminPer100K),
      };

      const globalChart = {
        datasets: [
          {
            data: globalData.dosesPer100k,
            backgroundColor: colors.slice(0, globalData.locations.length),
            label: 'Total Administered Doses for All U.S. Territories',
          },
        ],
        labels: globalData.locations,
      };

      return {
        ...state,
        globalData,
        charts: { ...state.charts, globalChart },
      };

    // case types.SET_CHART_CURR:
    //   const chart = {
    //     datasets: [
    //       {
    //         data,
    //         backgroundColor,
    //         label,
    //       },
    //     ],
    //     labels,
    //   };

    //   return {
    //     ...state,
    //     charts: [chart],
    //   };

    default:
      return state;
  }
}
