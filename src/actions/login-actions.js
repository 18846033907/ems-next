import { message } from 'antd';
import axiosServer from '@actions/axiosServer';
import { serverUrl } from '@constants/apiServer';
import { setCookie, deleteCookie } from '@utils/utils';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGIN_FAIL,
  LOGIN_PENDING,
} from './action-types';

export function loginSuccess(account) {
  setCookie('account', account);
  return { type: LOGIN_SUCCESS };
}

export function logoutSuccess() {
  deleteCookie('account');
  window.location.href = `${window.origin}/login`;
  return { type: LOGOUT_SUCCESS };
}

export function loginFailed(error) {
  return { type: LOGIN_FAIL, error };
}

export function loginPending() {
  return { type: LOGIN_PENDING };
}

export const getPersonalInfo = (account, history) => {
  axiosServer
    .get(`/exp/users/${account}`)
    .then((res) => {
      const { name } = res.data.data;
      setCookie('userName', name);
      history.push('/');
    })
    .catch((error) => {
      console.log(error);
    });
};

export function login({ account, password }, dispatch, router) {
  const url = `${serverUrl}/login?account=${account}&password=${password}`;
  axiosServer
    .post(url)
    .then((res) => {
      const { data } = res;
      if (data.code === 200) {
        dispatch(loginSuccess(account));
        getPersonalInfo(account, router);
      } else {
        message.error(data.message);
      }
    })
    .catch((error) => {
      dispatch(loginFailed(error));
    });
}

export function logout(dispatch) {
  axiosServer
    .post('/logout')
    .then((res) => {
      const { data } = res;
      if (data.code === 200) {
        dispatch(logoutSuccess());
      } else {
        message.error(data.message);
      }
    })
    .catch(() => {
      message.error('登出失败');
    });
}
