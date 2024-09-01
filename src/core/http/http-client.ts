import { useAuthStore } from '@/shared/stores/use-auth-store';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { z } from 'zod';

export const baseUrl = z
  .string()
  .min(1)
  .parse(import.meta.env.VITE_API_URL);

export const client = axios.create({
  withCredentials: true,
  withXSRFToken: true,
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status == 401) {
      await useAuthStore().logout();
    }

    return Promise.reject(error);
  },
);

export const getRequest = <T = any, R = AxiosResponse<T>, D = any>(
  url: URL,
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  return client.get(url.href, config);
};

export const deleteRequest = <T = any, R = AxiosResponse<T>, D = any>(
  url: URL,
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  return client.delete(url.href, config);
};

export const postRequest = <T = any, R = AxiosResponse<T>, D = any>(
  url: URL,
  data?: D,
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  return client.post(url.href, data, config);
};

export const putRequest = <T = any, R = AxiosResponse<T>, D = any>(
  url: URL,
  data?: D,
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  return client.put(url.href, data, config);
};

export const patchRequest = <T = any, R = AxiosResponse<T>, D = any>(
  url: URL,
  data?: D,
  config?: AxiosRequestConfig<D>,
): Promise<R> => {
  return client.patch(url.href, data, config);
};

export default client;
