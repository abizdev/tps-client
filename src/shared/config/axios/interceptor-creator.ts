import { ACCESS_TOKEN } from '../../const/localstorage-keys';
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const setupInterceptors = (
  apiInstance: AxiosInstance,
  unprotectedApiInstance: AxiosInstance
) => {
  apiInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig<AxiosRequestConfig>) => {
      config.headers.Authorization = `Bearer ${localStorage.getItem(ACCESS_TOKEN) ?? ''}`;
      return config;
    },
    (error) => Promise.reject(error)
  );

  apiInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (
        (error.response.status === 401 || error.response.status === 403) &&
        !originalRequest._isRetry
      ) {
        originalRequest._isRetry = true;

        try {
          const response: AxiosResponse = await unprotectedApiInstance.post('/jwt/refresh');

          if (!response) {
            throw new Error('Could not refresh token');
          }

          localStorage.setItem(ACCESS_TOKEN, response.data.access_token);
          return apiInstance(originalRequest);
        } catch (_err) {
          localStorage.removeItem(ACCESS_TOKEN);
          window.location.href = '/';
        }
      }

      return Promise.reject(error);
    }
  );
};
