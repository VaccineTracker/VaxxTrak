import * as types from '../constants/constants';

export const loginUser = (user_id) => ({
  type: types.LOGIN_USER,
  payload: user_id,
});

export const logoutUser = () => ({
  type: types.LOGOUT_USER,
});

export const setProfile = (profile) => ({
  type: types.SET_PROFILE,
  payload: profile,
});

export const setNewLocation = (zipcode) => ({
  type: types.SET_NEW_LOCATION,
  payload: zipcode,
});

export const setDataGlobal = (global_data) => ({
  type: types.SET_DATA_GLOBAL,
  payload: global_data,
});

export const setDataCurrent = (location_data) => ({
  type: types.SET_DATA_CURR,
  payload: location_data,
});

export const setChartData = (data) => ({
  type: types.SET_CHART_CURR,
  payload: data,
});
