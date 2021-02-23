import axiosServer from '@actions/axiosServer';
import {
  GET_USER_MENULIST_SUCCESS,
  GET_USER_MENULIST_PENDING,
  GET_USER_MENULIST_FAILED,
} from './action-types';

export const getUserMenulistSuccess = (res) => ({
  type: GET_USER_MENULIST_SUCCESS,
  payload: res,
});

export const getUserMenulistPending = () => ({
  type: GET_USER_MENULIST_PENDING,
});

export const getUserMenulistFailed = (error) => ({
  type: GET_USER_MENULIST_FAILED,
  error,
});

export const getUserMenulist = (dispatch) => {
  dispatch(getUserMenulistPending());
  axiosServer
    .get('/users/menus')
    .then((res) => {
      dispatch(getUserMenulistSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getUserMenulistFailed(error));
    });
};
