import axios, { isCancel, AxiosError } from 'axios';

import { API_URL, APPLICATION_ID } from '../config';

function authRequestInterceptor(config: axios.InternalAxiosRequestConfig) {
  config.headers.Accept = 'application/json';
  config.headers['Content-Type'] = 'application/json';
  config.params = {
    ...config.params,
    applicationId: APPLICATION_ID,
  };

  return config;
}

export const rakutenApiClient = axios.create({
  baseURL: API_URL,
});

rakutenApiClient.interceptors.request.use(authRequestInterceptor);
rakutenApiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);
