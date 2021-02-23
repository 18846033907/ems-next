import axiosServer from '@actions/axiosServer';
import {
  GET_EXPLORE_PROGRESS_SUCCESS,
  GET_EXPLORE_PROGRESS_PENDING,
  GET_EXPLORE_PROGRESS_FAILED,
  GET_MACHINE_DISPLAY_SUCCESS,
  GET_MACHINE_DISPLAY_PENDING,
  GET_MACHINE_DISPLAY_FAILED,
} from './action-types';

export const getExploreProgressSuccess = (res) => ({
  type: GET_EXPLORE_PROGRESS_SUCCESS,
  payload: res,
});

export const getExploreProgressFailed = (error) => ({
  type: GET_EXPLORE_PROGRESS_FAILED,
  error,
});

export const getExploreProgressPending = () => ({
  type: GET_EXPLORE_PROGRESS_PENDING,
});

export const getExploreProgress = (userId, dispatch) => {
  dispatch(getExploreProgressPending());
  axiosServer
    .get(`/exp/users/progress?userId=${userId}`)
    .then((res) => {
      dispatch(getExploreProgressSuccess(res.data));
    })
    .catch((error) => {
      dispatch(getExploreProgressFailed(error));
    });
};

export const getMachineDiplaySuccess = (res) => ({
  type: GET_MACHINE_DISPLAY_SUCCESS,
  payload: res,
});

export const getMachineDiplayFailed = (error) => ({
  type: GET_MACHINE_DISPLAY_FAILED,
  error,
});

export const getMachineDiplayPending = () => ({
  type: GET_MACHINE_DISPLAY_PENDING,
});

export const getMachineDiplay = (dispatch) => {
  dispatch(getMachineDiplayPending());
  axiosServer
    .get('/machines/diplay')
    .then((res) => {
      dispatch(getMachineDiplaySuccess(res.data));
    })
    .catch((error) => {
      dispatch(getMachineDiplayFailed(error));
    });
};
