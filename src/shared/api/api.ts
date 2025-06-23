import { env } from '../config/env';
import { createAxiosInstance, setupInterceptors } from '../config/axios';

const server_api_base = env.serverApi || '';

export const unprotected_server_api = createAxiosInstance(server_api_base);
export const server_api = createAxiosInstance(server_api_base);

setupInterceptors(server_api, unprotected_server_api);
