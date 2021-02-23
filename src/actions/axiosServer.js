/* eslint-disable prefer-destructuring */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { serverUrl } from '@constants/apiServer';

const instance = axios.create({
  baseURL: `${serverUrl}`,
  withCredentials: true,
});

// 请求前拦截
instance.interceptors.request.use(
  (config) => {
    if (config.url.includes('?')) {
      const arr = config.url.split('?');
      let url = `${arr[0]}?`;
      const brr = arr[1].split('&');
      const params = {};
      brr.map((item) => {
        const temp = item.split('=');
        params[temp[0]] = temp[1];
        return params;
      });
      Object.keys(params).map((key) => {
        url += `${key}=${encodeURIComponent(params[key])}&`;
        return url;
      });

      url = url.substring(0, url.length - 1);
      config.url = url;
    }
    return config;
  },
  (err) => {
    console.log('请求超时');
    return Promise.reject(err);
  },
);

// 返回后拦截
instance.interceptors.response.use(
  (res) => {
    if (res.data.code === 400) {
      window.location.href = `${window.origin}/login`;
    }
    return res;
  },
  (err) => Promise.reject(err),
);
export default instance;
