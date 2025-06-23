import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export const createAxiosInstance = (
  baseURL: string,
  otherConfigs?: AxiosRequestConfig
): AxiosInstance => {

  const config = {
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
    ...otherConfigs
  };

  return axios.create({
    ...config,
    baseURL
  });
};
