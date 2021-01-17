import * as types from '../constants/constants';

export const activeUser = (user_id) => ({
  type: types.ACTIVE_USER,
  payload: user_id,
});

export const inactiveUser = () => ({
  type: types.INACTIVE_USER,
});

export const useStateData = () => ({
  type: types.STATE_DATA,
});

export const useChartData = () => ({
  type: types.CHART_DATA,
});

export const useNewLocation = (zipcode) => ({
  type: types.SET_NEW_LOCATION,
  payload: zipcode,
});
