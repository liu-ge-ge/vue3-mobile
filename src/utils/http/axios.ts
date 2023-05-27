import axios from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig, AxiosError } from 'axios';
import type { Response } from './types';

import { Toast } from 'vant';
import router from '@/router';

axios.defaults.timeout = 1000 * 60;

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse<Response>) => {
    const { code, message } = response.data;
    let errMessage = '';
    switch (code) {
      case 0:
        break;
      case 1:
        errMessage = 'Token expired';
        router.push('/login');
        break;
      case 2:
        errMessage = 'No permission';
        break;
      default:
        errMessage = message;
        break;
    }
    if (errMessage) Toast.fail(errMessage);
    return response;
  },
  (error: AxiosError) => {
    Toast.fail('Network Error...');
    return Promise.reject(error);
  }
);

export default service;
